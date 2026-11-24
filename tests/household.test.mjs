import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  applyOperation, convertAmount, exportBackup, fromLegacy, importBackup, ingredientName,
  missingRecords, parseShoppingInput, planKey, records, shoppingId, shortages,
} from '../household.ts';

const day = '2026-11-19';
const ingredient = (id, name, amount, unit = 'g') => ({
  id, name, amount, unit, category: '肉类', storageZone: '冷藏', updatedAt: Number(id),
});
const recipe = (id, name) => ({
  id, title: name, description: '', category: '肉菜小炒', prepTime: 0, cookTime: 20,
  ingredients: [{ name: '排骨', amount: 500, unit: 'g' }],
  images: [], steps: [], tags: [], rating: 4, reviewCount: 1,
});

test('aliases and compatible lots are aggregated and units are not mixed', () => {
  const stock = [ingredient('1', '排骨', 0.2, 'kg'), ingredient('2', ' 排骨 ', 1, '斤'), ingredient('3', '排骨', 2, '包')];
  assert.equal(convertAmount(1, '包', 'g'), undefined);
  assert.equal(ingredientName(' 番茄 '), '西红柿');
  assert.deepEqual(shortages([
    { name: '排骨', amount: 400, unit: '克' },
    { name: '排骨', amount: 0.4, unit: 'kg' },
  ], stock)[0], { name: '排骨', amount: 800, unit: '克', available: 700, missing: 100 });
});

test('two completed meals make independent history and retries do not deduct again', () => {
  const initial = fromLegacy({
    ht_inventory: [ingredient('1', '排骨', 0.2, 'kg'), ingredient('2', '排骨', 1000)],
    ht_recipes: [recipe('r1', 'A'), recipe('r2', 'B')],
    ht_plans: { [day]: ['r1', 'r2', 'r1'] },
  });
  const plans = records(initial, 'plans');
  assert.equal(plans.length, 2);
  const operations = plans.map((plan, i) => ({
    id: `op-${i}`, kind: 'finish', plan, uses: recipe('r1', 'A').ingredients, at: i + 3,
    rating: 2, appetizing: 3,
  }));
  const result = [...operations, ...operations].reduce(applyOperation, initial);
  assert.deepEqual(records(result, 'inventory').map(row => row.amount), [0, 200]);
  assert.deepEqual(records(result, 'history').map(row => row.recipeTitles[0]), ['A', 'B']);
  assert.deepEqual(records(result, 'recipes').map(row => [row.rating, row.reviewCount]), [[3, 2], [3, 2]]);
});

test('item edits preserve ratings and removes use the expected plan instance', () => {
  const initial = fromLegacy({ ht_recipes: [recipe('r1', 'Old')], ht_plans: { [day]: ['r1'] } });
  const edit = { id: 'edit', kind: 'change', change: { collection: 'recipes', key: 'r1', mode: 'edit', patch: { title: 'New' } } };
  const next = applyOperation(initial, edit);
  assert.equal(records(next, 'recipes')[0].reviewCount, 1);
  assert.equal(records(next, 'recipes')[0].title, 'New');
  const replaced = { id: planKey(day, 'r1'), date: day, recipeId: 'r1', instanceId: 'replacement' };
  const oldPlan = records(initial, 'plans')[0];
  const remove = { id: 'remove', kind: 'remove-plan', plan: oldPlan };
  const readd = { id: 'add', kind: 'change', change: { collection: 'plans', mode: 'add', key: replaced.id, value: replaced } };
  const after = [remove, readd, { ...remove, id: 'stale-remove' }].reduce(applyOperation, next);
  assert.deepEqual(records(after, 'plans'), [replaced]);
});

test('missing purchase amounts deduplicate and a checked item stocks only once', () => {
  const base = fromLegacy({ ht_inventory: [ingredient('1', '排骨', 0.1, 'kg')] });
  const key = shoppingId('排骨', '克');
  assert.equal(key, shoppingId('排骨', 'kg'));
  const value = { id: key, name: '排骨', quantity: 300, unit: 'g', amount: '300g', checked: false, addedAt: 1, cycle: 'trip' };
  const gap = { id: 'gap1', kind: 'gap', item: value };
  const more = { id: 'gap2', kind: 'gap', item: { ...value, quantity: 1, unit: '斤' } };
  const check = { id: 'check', kind: 'check', key, cycle: 'trip', checked: true };
  const stock = { id: 'stock', kind: 'stock', key, cycle: 'trip', ingredient: ingredient('2', '排骨', 0.5, 'kg') };
  const result = [gap, more, check, stock, { ...stock, id: 'other-device' }].reduce(applyOperation, base);
  assert.deepEqual(records(result, 'shopping').map(row => [row.amount, row.stockedAt]), [['500g', 2]]);
  assert.deepEqual(records(result, 'inventory').map(row => row.amount), [0.6]);
  assert.deepEqual(parseShoppingInput('2斤排骨'), { name: '排骨', amount: '2斤', quantity: 2, unit: '斤' });
  assert.equal(parseShoppingInput('排骨 500克').quantity, 500);
});

test('offline increments apply exactly once and preserve subsequent updates', () => {
  const base = fromLegacy({ ht_inventory: [ingredient('1', '排骨', 4, '包')] });
  const first = { id: 'first', kind: 'quantity', key: '1', delta: -1, at: 5 };
  const second = { id: 'second', kind: 'quantity', key: '1', delta: 2, at: 6 };
  assert.equal(records([first, second, first].reduce(applyOperation, base), 'inventory')[0].amount, 5);
});

test('backup import supports old JSON and does not overwrite current matching records', () => {
  const legacy = { version: '1.0', ht_recipes: JSON.stringify([recipe('r1', 'Backup'), recipe('r2', 'Missing')]) };
  const original = fromLegacy({ ht_recipes: [recipe('r1', 'Current')] });
  const incoming = importBackup(legacy);
  const recovered = missingRecords(original, incoming).reduce(applyOperation, original);
  assert.deepEqual(records(recovered, 'recipes').map(row => row.title), ['Current', 'Missing']);
  const file = JSON.parse(JSON.stringify(exportBackup(recovered)));
  assert.deepEqual(records(importBackup(file), 'recipes').map(row => row.title), ['Current', 'Missing']);
  assert.throws(() => importBackup({ version: '2.0', recipes: [{ id: 'invalid/path' }] }));
});
