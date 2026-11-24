import type { HistoryEntry, Ingredient, PlanEntry, Recipe, ShoppingItem } from './types';

export interface HouseholdRecords {
  inventory: Ingredient;
  recipes: Recipe;
  plans: PlanEntry;
  shopping: ShoppingItem;
  history: HistoryEntry;
}

export type Collection = keyof HouseholdRecords;

export const COLLECTIONS = ['inventory', 'recipes', 'plans', 'shopping', 'history'] as const;

type Row<T> = { value?: T; applied?: Record<string, true> };
export type Household = { version: 1 } & {
  [K in Collection]?: Record<string, Row<HouseholdRecords[K]>>;
};

type Change<K extends Collection> =
  | { collection: K; key: string; mode: 'add'; value: HouseholdRecords[K] }
  | { collection: K; key: string; mode: 'edit'; patch: Partial<HouseholdRecords[K]>; remove?: string[] }
  | { collection: K; key: string; mode: 'delete' };

type RowChange = { [K in Collection]: Change<K> }[Collection];

interface Usage {
  name: string;
  amount: number;
  unit: string;
}

interface Activity {
  actorName: string;
  action: string;
  targetType: string;
  targetName: string;
}

type Action =
  | { kind: 'change'; change: RowChange }
  | { kind: 'quantity'; key: string; delta: number; at: number }
  | { kind: 'gap'; item: ShoppingItem }
  | { kind: 'check'; key: string; cycle?: string; checked: boolean }
  | { kind: 'remove-plan'; plan: PlanEntry }
  | { kind: 'edit-shopping'; item: ShoppingItem; cycle?: string }
  | { kind: 'remove-shopping'; key: string; cycle?: string; checked: boolean }
  | { kind: 'finish'; plan: PlanEntry; uses: Usage[]; rating: number; appetizing: number; at: number }
  | { kind: 'stock'; key: string; cycle?: string; ingredient: Ingredient };

export type Operation = Action & { id: string; activity?: Activity };

export const newId = () => crypto.randomUUID();
export const EMPTY_HOUSEHOLD: Household = { version: 1 };

export function localDate(date = new Date()) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, '0'),
    String(date.getDate()).padStart(2, '0'),
  ].join('-');
}

export const planKey = (date: string, recipeId: string) => `${date}_${recipeId}`;

const normalizedName = (name: string) => name.normalize('NFKC').trim().replace(/\s+/g, '').toLowerCase();

const ingredientAliases: Record<string, string> = {
  番茄: '西红柿',
  红富士苹果: '苹果',
  巨峰葡萄: '葡萄',
  马铃薯: '土豆',
};

export function ingredientName(name: string) {
  const normalized = normalizedName(name);
  return ingredientAliases[normalized] || normalized;
}

const units: Record<string, { base: string; factor: number }> = {
  g: { base: 'g', factor: 1 },
  克: { base: 'g', factor: 1 },
  kg: { base: 'g', factor: 1000 },
  千克: { base: 'g', factor: 1000 },
  公斤: { base: 'g', factor: 1000 },
  斤: { base: 'g', factor: 500 },
  两: { base: 'g', factor: 50 },
  ml: { base: 'mL', factor: 1 },
  毫升: { base: 'mL', factor: 1 },
  l: { base: 'mL', factor: 1000 },
  升: { base: 'mL', factor: 1000 },
};

function unitSpec(unit: string) {
  const normalized = unit.normalize('NFKC').trim().toLowerCase();
  return units[normalized] || { base: normalized, factor: 1 };
}

export const roundAmount = (value: number) => Math.round(value * 1e6) / 1e6;
export const formatAmount = (amount: number, unit: string) => `${roundAmount(amount)}${unit}`;

export function convertAmount(amount: number, from: string, to: string): number | undefined {
  const first = unitSpec(from);
  const second = unitSpec(to);
  return first.base === second.base ? amount * first.factor / second.factor : undefined;
}

export function shortages(uses: Usage[], inventory: Ingredient[]) {
  const needs = new Map<string, Usage>();
  for (const use of uses) {
    if (!(use.amount > 0)) continue;
    const key = JSON.stringify([ingredientName(use.name), unitSpec(use.unit).base]);
    const existing = needs.get(key);
    if (existing) {
      existing.amount += convertAmount(use.amount, use.unit, existing.unit) ?? 0;
    } else {
      needs.set(key, { ...use });
    }
  }
  return Array.from(needs.values(), need => {
    const name = ingredientName(need.name);
    const compatible = inventory.filter(item => ingredientName(item.name) === name);
    const available = compatible.reduce((total, item) => {
      return total + (convertAmount(Math.max(0, item.amount), item.unit, need.unit) ?? 0);
    }, 0);
    return { ...need, available, missing: roundAmount(Math.max(0, need.amount - available)) };
  });
}

export function shoppingId(name: string, unit: string) {
  const identity = JSON.stringify([ingredientName(name), unitSpec(unit).base]);
  return 'gap-' + identity.replace(/[%.$#\[\]\/\u0000-\u001F\u007F]/g, char =>
    '%' + char.charCodeAt(0).toString(16).padStart(2, '0'));
}

export function parseShoppingInput(input: string) {
  const text = input.normalize('NFKC').trim();
  const qty = '(\\d+(?:\\.\\d+)?|[零〇一二两三四五六七八九十百千]+)';
  const unit = '(公斤|千克|毫升|kg|ml|[个只把条包袋瓶盒斤两克升gL颗串杯份])';
  const prefix = text.match(new RegExp(`^${qty}\\s*${unit}\\s*(.+)$`, 'i'));
  const suffix = text.match(new RegExp(`^(.+?)\\s*${qty}\\s*${unit}$`, 'i'));
  const parts = prefix ? [prefix[3], prefix[1], prefix[2]] : suffix ? [suffix[1], suffix[2], suffix[3]] : null;
  if (!parts) return { name: text, amount: '适量' };
  const [name, rawQuantity, measure] = parts;
  const quantity = chineseQuantity(rawQuantity);
  return quantity > 0
    ? { name: name.trim(), amount: formatAmount(quantity, measure), quantity, unit: measure }
    : { name: text, amount: '适量' };
}

function chineseQuantity(text: string) {
  if (/^\d/.test(text)) return Number(text);
  const digits = '零一二三四五六七八九';
  let total = 0;
  let current = 0;
  for (const char of text) {
    const factor = { 十: 10, 百: 100, 千: 1000 }[char];
    if (factor) {
      total += (current || 1) * factor;
      current = 0;
    } else {
      current = char === '两' ? 2 : char === '〇' ? 0 : digits.indexOf(char);
    }
  }
  return total + current;
}

export function records<K extends Collection>(household: Household, collection: K): HouseholdRecords[K][] {
  return Object.values(household[collection] ?? {})
    .flatMap((row: Row<HouseholdRecords[K]>) => row.value ? [row.value] : []);
}

function rowAt(household: Household, collection: Collection, key: string): Row<HouseholdRecords[Collection]> | undefined {
  return household[collection]?.[key];
}

function withRow(household: Household, collection: Collection, key: string, row: Row<HouseholdRecords[Collection]>) {
  return { ...household, [collection]: { ...household[collection], [key]: row } };
}

export function operationRow(operation: Operation): { collection: Collection; key: string } | undefined {
  switch (operation.kind) {
    case 'change': return operation.change;
    case 'quantity': return { collection: 'inventory', key: operation.key };
    case 'gap':
    case 'edit-shopping': return { collection: 'shopping', key: operation.item.id };
    case 'check':
    case 'remove-shopping': return { collection: 'shopping', key: operation.key };
    case 'remove-plan': return { collection: 'plans', key: operation.plan.id };
  }
}

export function applyRowOperation(row: Row<HouseholdRecords[Collection]> | null | undefined, operation: Operation) {
  if (row?.applied?.[operation.id]) return row;
  const before = row?.value;
  let value = before;
  switch (operation.kind) {
    case 'change': {
      const { change } = operation;
      if (change.mode === 'add') {
        // Plans are keyed by date and recipe and can be added again after completion.
        if (!before && (!row || change.collection === 'plans' || change.collection === 'shopping')) value = change.value;
      } else if (change.mode === 'edit' && before) {
        value = { ...before, ...change.patch } as typeof before;
        for (const field of change.remove ?? []) delete value[field];
      } else if (change.mode === 'delete') {
        value = undefined;
      }
      break;
    }
    case 'quantity': {
      const item = before as Ingredient | undefined;
      if (item) value = { ...item, amount: roundAmount(Math.max(0, item.amount + operation.delta)), updatedAt: operation.at };
      break;
    }
    case 'gap': {
      const item = before as ShoppingItem | undefined;
      const incoming = operation.item;
      if (!item || item.checked) {
        value = incoming;
      } else {
        const converted = convertAmount(incoming.quantity ?? 0, incoming.unit ?? '', item.unit ?? '');
        if (converted !== undefined && converted > (item.quantity ?? 0)) {
          value = { ...item, quantity: converted, amount: formatAmount(converted, item.unit ?? '') };
        }
      }
      break;
    }
    case 'remove-plan': {
      if ((before as PlanEntry | undefined)?.instanceId === operation.plan.instanceId) value = undefined;
      break;
    }
    case 'edit-shopping': {
      const item = before as ShoppingItem | undefined;
      if (item && !item.checked && (item.cycle ?? '') === (operation.cycle ?? '')) {
        const { amount, quantity, unit } = operation.item;
        const edited = { ...item, amount };
        if (quantity !== undefined && unit !== undefined) {
          edited.quantity = quantity;
          edited.unit = unit;
        } else {
          delete edited.quantity;
          delete edited.unit;
        }
        value = edited;
      }
      break;
    }
    case 'remove-shopping': {
      const item = before as ShoppingItem | undefined;
      if (item?.checked === operation.checked && (item.cycle ?? '') === (operation.cycle ?? '')) value = undefined;
      break;
    }
    case 'check': {
      const item = before as ShoppingItem | undefined;
      if (item && !item.stockedAt && (item.cycle ?? '') === (operation.cycle ?? '')) {
        value = { ...item, checked: operation.checked };
      }
      break;
    }
  }
  return { ...(value ? { value } : {}), applied: { ...row?.applied, [operation.id]: true as const } };
}

function useInventory(household: Household, uses: Usage[], at: number) {
  let next = household;
  for (const use of uses) {
    let remaining = use.amount;
    if (!(remaining > 0)) continue;
    const candidates = records(next, 'inventory')
      .filter(item => ingredientName(item.name) === ingredientName(use.name))
      .sort((a, b) => a.updatedAt - b.updatedAt || a.id.localeCompare(b.id));
    for (const item of candidates) {
      const available = convertAmount(item.amount, item.unit, use.unit);
      if (!(available > 0)) continue;
      const consumed = Math.min(available, remaining);
      const amount = roundAmount(Math.max(0, item.amount - (convertAmount(consumed, use.unit, item.unit) ?? 0)));
      next = withRow(next, 'inventory', item.id, { ...rowAt(next, 'inventory', item.id), value: { ...item, amount, updatedAt: at } });
      remaining = roundAmount(remaining - consumed);
      if (remaining <= 0) break;
    }
  }
  return next;
}

export function applyOperation(household: Household, operation: Operation): Household {
  const target = operationRow(operation);
  if (target) {
    const previous = rowAt(household, target.collection, target.key);
    const row = applyRowOperation(previous, operation);
    return row === previous ? household : withRow(household, target.collection, target.key, row);
  }

  if (operation.kind === 'finish') {
    const { plan, at } = operation;
    const current = household.plans?.[plan.id];
    if (current?.value?.instanceId !== plan.instanceId || household.history?.[plan.instanceId]) return household;
    const recipe = household.recipes?.[plan.recipeId];
    if (!recipe?.value) return household;
    const result = useInventory(household, operation.uses, at);
    const previous = recipe.value;
    const reviewCount = (previous.reviewCount || 0) + 1;
    const appetizingCount = (previous.appetizingCount || 0) + 1;
    const updated = {
      ...previous,
      reviewCount,
      appetizingCount,
      rating: ((previous.rating ?? 5) * (reviewCount - 1) + operation.rating) / reviewCount,
      appetizingRating: ((previous.appetizingRating ?? 5) * (appetizingCount - 1) + operation.appetizing) / appetizingCount,
    };
    const history = { id: plan.instanceId, date: plan.date, recipeTitles: [previous.title], completedAt: at };
    return withRow(
      withRow(withRow(result, 'plans', plan.id, { applied: current.applied ?? {} }), 'recipes', previous.id, { ...recipe, value: updated }),
      'history', history.id, { value: history },
    );
  }

  if (operation.kind === 'stock') {
    const row = household.shopping?.[operation.key];
    const item = row?.value;
    if (!item?.checked || item.stockedAt || (item.cycle ?? '') !== (operation.cycle ?? '')) return household;
    const incoming = operation.ingredient;
    const existing = records(household, 'inventory').find(candidate =>
      ingredientName(candidate.name) === ingredientName(incoming.name)
      && candidate.storageZone === incoming.storageZone
      && convertAmount(incoming.amount, incoming.unit, candidate.unit) !== undefined
    );
    const value = existing ? {
      ...existing,
      amount: roundAmount(existing.amount + (convertAmount(incoming.amount, incoming.unit, existing.unit) ?? 0)),
      updatedAt: incoming.updatedAt,
    } : incoming;
    return withRow(
      withRow(household, 'inventory', value.id, { ...rowAt(household, 'inventory', value.id), value }),
      'shopping', operation.key, { ...row, value: { ...item, stockedAt: incoming.updatedAt } },
    );
  }

  return household;
}

function rows<T extends { id: string }>(values: T[]) {
  return Object.fromEntries(values.map(value => [value.id, { value }]));
}

function values<T>(value: unknown): T[] {
  return value && typeof value === 'object' ? Object.values(value).filter(Boolean) as T[] : [];
}

export function normalizeRecipe(recipe: Recipe): Recipe {
  return {
    ...recipe,
    images: values(recipe.images),
    ingredients: values(recipe.ingredients),
    steps: values(recipe.steps),
    tags: values(recipe.tags),
  };
}

export function fromLegacy(data: Record<string, unknown>): Household {
  const plans = Object.entries(data.ht_plans ?? {}).flatMap(([date, ids]) => {
    return values<string>(ids).map(recipeId => {
      const id = planKey(date, recipeId);
      return { id, date, recipeId, instanceId: `legacy-${id}` };
    });
  });
  const history = values<{ date: string; recipeTitles: string[] }>(data.ht_history).map((entry, i) => ({
    ...entry,
    recipeTitles: values<string>(entry.recipeTitles),
    id: `legacy-history-${i}`,
    completedAt: Date.parse(entry.date) || 0,
  }));
  return {
    version: 1,
    recipes: rows(values<Recipe>(data.ht_recipes).map(normalizeRecipe)),
    inventory: rows(values<Ingredient>(data.ht_inventory)),
    shopping: rows(values<ShoppingItem>(data.ht_shopping).map(item => {
      const details = parseShoppingInput(`${item.name} ${item.amount}`);
      return { ...item, ...(details.quantity ? { quantity: details.quantity, unit: details.unit } : {}) };
    })),
    plans: rows(plans),
    history: rows(history),
  };
}

export function readLegacyDevice(): Household {
  const data = {};
  for (const key of ['ht_recipes', 'ht_inventory', 'ht_shopping', 'ht_plans', 'ht_history']) {
    try {
      data[key] = JSON.parse(localStorage.getItem(key) || 'null');
    } catch {
      // One damaged collection does not hide the others.
    }
  }
  return fromLegacy(data);
}

export function snapshotOf(household: Household): Household {
  return {
    version: 1,
    inventory: rows(records(household, 'inventory')),
    recipes: rows(records(household, 'recipes').map(normalizeRecipe)),
    plans: rows(records(household, 'plans')),
    shopping: rows(records(household, 'shopping')),
    history: rows(records(household, 'history')),
  };
}

export function exportBackup(household: Household) {
  return {
    version: '2.0',
    backup_date: new Date().toISOString(),
    inventory: records(household, 'inventory'),
    recipes: records(household, 'recipes').map(normalizeRecipe),
    plans: records(household, 'plans'),
    shopping: records(household, 'shopping'),
    history: records(household, 'history'),
  };
}

const isText = (value: unknown): value is string => typeof value === 'string';
const isAmount = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value) && value >= 0;
const isKey = (value: unknown): value is string => isText(value) && value.length > 0 && value.length <= 768 && !/[.#$\[\]\/\u0000-\u001F\u007F]/.test(value);
const isDate = (value: unknown): value is string => isText(value) && /^\d{4}-\d{2}-\d{2}$/.test(value);
const textList = (value: unknown) => Array.isArray(value) && value.every(isText);
const optionalAmount = (value: unknown) => value === undefined || isAmount(value);
const optionalText = (value: unknown) => value === undefined || isText(value);

function firebaseValue(value: unknown, depth = 0): boolean {
  if (depth > 25) return false;
  if (value && typeof value === 'object') {
    return Object.entries(value).every(([key, child]) => isKey(key) && firebaseValue(child, depth + 1));
  }
  return value === null || isText(value) || typeof value === 'boolean' || (typeof value === 'number' && Number.isFinite(value));
}

export function importBackup(input: unknown): Household {
  if (!input || typeof input !== 'object' || !('version' in input)) throw new Error('备份格式无效。');
  if (input.version === '1.0' && 'ht_recipes' in input) {
    const raw = {};
    for (const key of ['ht_recipes', 'ht_inventory', 'ht_plans', 'ht_shopping', 'ht_history']) {
      if (typeof input[key] === 'string') raw[key] = JSON.parse(input[key]);
    }
    return importBackup(exportBackup(fromLegacy(raw)));
  }
  if (input.version !== '2.0') throw new Error('无法识别这个备份版本。');
  const backup = input as unknown as ReturnType<typeof exportBackup>;
  const valid = COLLECTIONS.every(collection => Array.isArray(backup[collection])
    && backup[collection].every(value => value && isKey(value.id)));
  if (!valid || !COLLECTIONS.every(collection => firebaseValue(backup[collection]))
    || !backup.inventory.every(item => isText(item.name) && isAmount(item.amount) && isText(item.unit)
      && isText(item.category) && ['常温', '冷藏', '冷冻'].includes(item.storageZone) && isAmount(item.updatedAt))
    || !backup.recipes.every(recipe => isText(recipe.title) && isText(recipe.description) && isText(recipe.category)
      && isAmount(recipe.prepTime) && isAmount(recipe.cookTime)
      && [recipe.rating, recipe.appetizingRating, recipe.reviewCount, recipe.appetizingCount].every(optionalAmount) && textList(recipe.images) && textList(recipe.steps) && textList(recipe.tags)
      && Array.isArray(recipe.ingredients) && recipe.ingredients.every(item => item && isText(item.name) && isAmount(item.amount) && isText(item.unit))
      && (!recipe.source || (recipe.source.type === 'link' && isText(recipe.source.url))))
    || !backup.plans.every(plan => isDate(plan.date) && isKey(plan.recipeId) && isKey(plan.instanceId) && plan.id === planKey(plan.date, plan.recipeId))
    || !backup.shopping.every(item => isText(item.name) && isText(item.amount) && typeof item.checked === 'boolean' && isAmount(item.addedAt)
      && optionalAmount(item.quantity) && optionalAmount(item.stockedAt) && optionalText(item.unit) && optionalText(item.cycle))
    || !backup.history.every(item => isDate(item.date) && textList(item.recipeTitles) && isAmount(item.completedAt))) {
    throw new Error('备份包含无效的菜谱、食材或计划记录。');
  }
  return {
    version: 1,
    inventory: rows(backup.inventory),
    recipes: rows(backup.recipes),
    plans: rows(backup.plans),
    shopping: rows(backup.shopping),
    history: rows(backup.history),
  };
}

export function missingRecords(current: Household, incoming: Household): Operation[] {
  return COLLECTIONS.flatMap(collection =>
    records(incoming, collection).filter(value => !rowAt(current, collection, value.id)).map(value => ({
      id: newId(), kind: 'change', change: { collection, key: value.id, mode: 'add', value } as RowChange,
    })),
  );
}
