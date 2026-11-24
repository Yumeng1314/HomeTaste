import { useState } from 'react';
import type { Ingredient, ShoppingItem } from '../types';
import { formatAmount, ingredientName, newId, parseShoppingInput } from '../household';
import IngredientForm, { EMPTY_INGREDIENT, type IngredientFields } from './IngredientForm';

interface ShoppingViewProps {
  list: ShoppingItem[];
  inventory: Ingredient[];
  onSaveItem: (item: ShoppingItem, previous?: ShoppingItem) => Promise<boolean>;
  onToggle: (item: ShoppingItem) => Promise<boolean>;
  onRemove: (items: ShoppingItem[]) => Promise<boolean>;
  onStock: (item: ShoppingItem, ingredient: IngredientFields) => Promise<boolean>;
}

export default function ShoppingView({ list, inventory, onSaveItem, onToggle, onRemove, onStock }: ShoppingViewProps) {
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [editing, setEditing] = useState<ShoppingItem | null>(null);
  const [purchase, setPurchase] = useState<ShoppingItem | null>(null);
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const [notice, setNotice] = useState('');

  async function add(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = parseShoppingInput(input);
    if (!value.name) return;
    setBusy(true);
    try {
      const existing = list.find(item => !item.checked && ingredientName(item.name) === ingredientName(value.name));
      if (existing) {
        setNotice(`「${existing.name}」已在清单中，可以直接调整数量。`);
        startEdit(existing);
        return;
      }
      if (await onSaveItem({ ...value, id: newId(), cycle: newId(), addedAt: Date.now(), checked: false })) {
        setInput('');
        setNotice('');
      }
    } finally {
      setBusy(false);
    }
  }

  function startEdit(item: ShoppingItem) {
    setEditing(item);
    setQuantity(item.quantity === undefined ? '' : String(item.quantity));
    setUnit(item.unit ?? '');
  }

  async function saveAmount(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = Number(quantity);
    const measure = unit.trim();
    if (quantity.trim() && (!(value > 0) || !Number.isFinite(value) || !measure)) {
      setNotice('请输入有效数量和单位，也可以留空记为适量。');
      return;
    }
    setBusy(true);
    try {
      if (await onSaveItem({
        ...editing,
        amount: quantity.trim() ? formatAmount(value, measure) : '适量',
        quantity: quantity.trim() ? value : undefined,
        unit: quantity.trim() ? measure : undefined,
      }, editing)) {
        setEditing(null);
        setInput('');
        setNotice('');
      }
    } finally {
      setBusy(false);
    }
  }

  const allChecked = list.filter(item => item.checked);
  const matchedStock = purchase && inventory.find(item => ingredientName(item.name) === ingredientName(purchase.name));
  const control = 'min-h-11 rounded-xl px-3 text-sm font-bold';

  return (
    <div className="mx-auto max-w-4xl space-y-5 p-5 pb-32 lg:p-10">
      <header className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-2xl font-black text-gray-900">采购清单</h2>
        {allChecked.length > 0 && <button className={`${control} bg-gray-100 text-gray-700`} onClick={() => {
          if (window.confirm('清除所有已购买项？尚未入库的食材可先点「入库」。')) void onRemove(allChecked);
        }}>清除已买</button>}
      </header>
      <form onSubmit={add} className="flex gap-2">
        <input aria-label="添加采购项" placeholder="例如：2斤排骨" className="min-w-0 flex-1 rounded-xl border border-gray-200 px-3 py-2 text-base"
          value={input} maxLength={130} onChange={event => setInput(event.target.value)} />
        <button disabled={busy} className={`${control} bg-amber-600 text-white`}>添加</button>
      </form>
      {notice && <p className="text-sm text-amber-900" role="status">{notice}</p>}
      {list.length === 0 && <p className="py-10 text-center text-sm text-gray-500">清单空空如也</p>}
      <ul className="space-y-3">
        {list.map(item => (
          <li key={item.id} className="flex flex-wrap items-center gap-2 rounded-2xl border border-gray-100 bg-white p-3">
            <label className="flex min-h-11 min-w-0 flex-1 cursor-pointer items-center gap-3">
              <input type="checkbox" className="h-5 w-5 shrink-0 accent-amber-600" checked={item.checked} disabled={Boolean(item.stockedAt)}
                onChange={() => onToggle(item)} />
              <span className={`min-w-0 break-words font-bold ${item.checked ? 'text-gray-500' : 'text-gray-900'}`}>{item.name}</span>
            </label>
            <span className="text-sm text-amber-900">{item.amount}</span>
            {item.stockedAt ? <span className="rounded-lg bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-900">已入库</span>
              : item.checked ? <button className={`${control} bg-emerald-50 text-emerald-900`} onClick={() => setPurchase(item)}>入库</button>
                : <button className={`${control} bg-gray-100 text-gray-700`} aria-label={`修改${item.name}数量`} onClick={() => startEdit(item)}>改数量</button>}
            <button className={`${control} text-gray-600`} aria-label={`删除采购项${item.name}`} onClick={() => onRemove([item])}>删除</button>
          </li>
        ))}
      </ul>
      {editing && (
        <div className="fixed inset-0 z-[200] grid place-items-center overflow-auto bg-black/60 p-4">
          <form role="dialog" aria-modal="true" aria-labelledby="purchase-edit-title" onSubmit={saveAmount} className="w-full max-w-sm space-y-4 rounded-2xl bg-white p-5">
            <h3 id="purchase-edit-title" className="text-lg font-bold">修改{editing.name}数量</h3>
            <div className="grid grid-cols-2 gap-3">
              <label className="min-w-0 text-sm font-bold">数量<input value={quantity} onChange={event => setQuantity(event.target.value)}
                className="mt-1 w-full rounded-xl border border-gray-200 p-2" type="number" step="any" inputMode="decimal" placeholder="适量" /></label>
              <label className="min-w-0 text-sm font-bold">单位<input value={unit} onChange={event => setUnit(event.target.value)}
                className="mt-1 w-full rounded-xl border border-gray-200 p-2" maxLength={20} /></label>
            </div>
            {notice && <p role="status" className="text-sm text-amber-900">{notice}</p>}
            <div className="grid grid-cols-2 gap-3">
              <button type="button" className={`${control} bg-gray-100`} onClick={() => { setEditing(null); setNotice(''); }}>取消</button>
              <button disabled={busy} className={`${control} bg-amber-600 text-white`}>保存</button>
            </div>
          </form>
        </div>
      )}
      {purchase && (
        <IngredientForm title={`将${purchase.name}加入库存`} initial={{
          ...EMPTY_INGREDIENT, name: purchase.name, amount: purchase.quantity ?? 0, unit: purchase.unit ?? matchedStock?.unit ?? '',
          category: matchedStock?.category ?? '其他', storageZone: matchedStock?.storageZone ?? '冷藏',
        }} onCancel={() => setPurchase(null)} onSubmit={async value => {
          if (!(value.amount > 0)) return false;
          const ok = await onStock(purchase, value);
          if (ok) setPurchase(null);
          return ok;
        }} />
      )}
    </div>
  );
}
