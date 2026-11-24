import { useRef, useState } from 'react';
import type { Ingredient } from '../types';
import { formatAmount, ingredientName } from '../household';
import IngredientForm, { EMPTY_INGREDIENT, INGREDIENT_CATEGORIES, STORAGE_ZONES, type IngredientFields } from './IngredientForm';

interface InventoryViewProps {
  inventory: Ingredient[];
  onAdd: (item: IngredientFields) => Promise<boolean>;
  onUpdate: (initial: Ingredient, item: IngredientFields) => Promise<boolean>;
  onAdjust: (item: Ingredient, delta: number) => Promise<boolean>;
  onDelete: (item: Ingredient) => Promise<boolean>;
  onAIScan: (base64: string) => Promise<Partial<Ingredient>[]>;
  isScanning: boolean;
}

export default function InventoryView({ inventory, onAdd, onUpdate, onAdjust, onDelete, onAIScan, isScanning }: InventoryViewProps) {
  const [activeZone, setActiveZone] = useState('全部');
  const [search, setSearch] = useState('');
  const [editing, setEditing] = useState<Ingredient | 'new' | null>(null);
  const [suggestions, setSuggestions] = useState<IngredientFields[]>([]);
  const [message, setMessage] = useState('');
  const scanInput = useRef<HTMLInputElement>(null);
  const filtered = inventory.filter(item =>
    (activeZone === '全部' || item.storageZone === activeZone)
    && (item.name.includes(search.trim()) || ingredientName(item.name).includes(ingredientName(search))),
  );

  async function scan(file: File) {
    setMessage('');
    const reader = new FileReader();
    reader.onload = async () => {
      const found = await onAIScan(String(reader.result));
      setSuggestions(found.filter(item => item.name?.trim()).map(item => ({
        name: item.name.trim().slice(0, 100),
        amount: Number.isFinite(item.amount) && item.amount >= 0 ? item.amount : 1,
        unit: typeof item.unit === 'string' && item.unit.trim() ? item.unit.trim().slice(0, 20) : '份',
        category: INGREDIENT_CATEGORIES.includes(item.category) ? item.category : '其他',
        storageZone: STORAGE_ZONES.includes(item.storageZone) ? item.storageZone : '常温',
      })));
      if (!found.length) setMessage('这张图片没有识别到食材，可以手动录入。');
    };
    reader.onerror = () => setMessage('无法读取图片，请换一张照片。');
    reader.readAsDataURL(file);
  }

  return (
    <div className="mx-auto max-w-4xl space-y-5 p-5 pb-32 lg:p-10">
      <header>
        <h2 className="text-2xl font-black text-gray-900">食材储备</h2>
      </header>
      <div className="flex flex-wrap gap-2" aria-label="存放区域">
        {['全部', ...STORAGE_ZONES].map(zone => <button key={zone} aria-pressed={activeZone === zone} onClick={() => setActiveZone(zone)}
          className={`min-h-11 rounded-xl px-3 text-sm font-bold ${activeZone === zone ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700'}`}>{zone}</button>)}
      </div>
      <div className="flex gap-2">
        <input aria-label="搜索库存" placeholder="搜索食材" value={search} onChange={event => setSearch(event.target.value)}
          className="min-w-0 flex-1 rounded-xl border border-gray-200 px-3 py-2" />
        <button onClick={() => scanInput.current?.click()} disabled={isScanning} className="min-h-11 rounded-xl bg-emerald-100 px-3 text-sm font-bold text-emerald-900">
          {isScanning ? '识别中…' : '识图'}
        </button>
        <button onClick={() => setEditing('new')} className="min-h-11 rounded-xl bg-emerald-800 px-3 text-sm font-bold text-white">添食材</button>
        <input ref={scanInput} type="file" accept="image/*" hidden onChange={event => {
          const file = event.target.files?.[0];
          event.target.value = '';
          if (file) void scan(file);
        }} />
      </div>
      {message && <p role="status" className="text-sm text-gray-600">{message}</p>}
      {suggestions.length > 0 && (
        <section className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
          <h3 className="font-bold text-emerald-900">请核对识别结果</h3>
          {suggestions.map((item, index) => <button key={index} onClick={() => setEditing({ ...item, id: `scan-${index}`, updatedAt: 0 })}
            className="mt-2 min-h-11 rounded-xl bg-white px-3 text-sm font-bold">{item.name} · {formatAmount(item.amount, item.unit)}</button>)}
          <button onClick={() => setSuggestions([])} className="ml-2 min-h-11 px-2 text-sm underline">忽略剩余结果</button>
        </section>
      )}
      {!filtered.length && <p className="py-10 text-center text-sm text-gray-500">{search ? '没有匹配的食材' : '这个区域还没有库存'}</p>}
      <div className="grid gap-3 md:grid-cols-2">
        {filtered.map(item => (
          <div key={item.id} className="flex items-center gap-2 rounded-2xl border border-gray-100 bg-white p-3">
            <button onClick={() => setEditing(item)} aria-label={`编辑${item.name}`} className="min-h-11 min-w-0 flex-1 text-left">
              <span className="block truncate font-bold text-gray-900">{item.name}</span>
              <span className="block text-xs text-gray-600">{item.storageZone} · {item.category} · 编辑</span>
            </button>
            <button aria-label={`减少${item.name}库存`} onClick={() => onAdjust(item, -1)} className="h-11 w-11 rounded-xl bg-gray-100 font-bold">−</button>
            <span className="min-w-12 text-center text-sm font-bold text-emerald-800">{formatAmount(item.amount, item.unit)}</span>
            <button aria-label={`增加${item.name}库存`} onClick={() => onAdjust(item, 1)} className="h-11 w-11 rounded-xl bg-emerald-50 font-bold">＋</button>
          </div>
        ))}
      </div>
      {editing && (() => {
        const original = editing === 'new' ? undefined : editing;
        const isScan = original?.id.startsWith('scan-');
        return <IngredientForm title={isScan ? '确认识别结果' : original ? '编辑食材' : '录入食材'}
          initial={original ?? EMPTY_INGREDIENT} onCancel={() => setEditing(null)}
          onSubmit={async item => {
            const ok = original && !isScan ? await onUpdate(original, item) : await onAdd(item);
            if (ok) {
              if (isScan) setSuggestions(previous => previous.filter((_, index) => `scan-${index}` !== original.id));
              setEditing(null);
            }
            return ok;
          }}
          onRemove={original && !isScan ? async () => {
            const ok = await onDelete(original);
            if (ok) setEditing(null);
            return ok;
          } : undefined}
        />;
      })()}
    </div>
  );
}
