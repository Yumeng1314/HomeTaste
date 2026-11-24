import { useState } from 'react';
import type { Ingredient } from '../types';

export type IngredientFields = Omit<Ingredient, 'id' | 'updatedAt'>;

export const INGREDIENT_CATEGORIES: Ingredient['category'][] = [
  '蔬菜', '水果', '肉类', '海鲜', '蛋奶', '豆制品', '粮油', '干货', '调料', '饮品', '主食', '其他',
];
export const STORAGE_ZONES: Ingredient['storageZone'][] = ['常温', '冷藏', '冷冻'];
export const EMPTY_INGREDIENT: IngredientFields = { name: '', amount: 1, unit: '份', category: '蔬菜', storageZone: '冷藏' };

interface IngredientFormProps {
  title: string;
  initial?: IngredientFields;
  onCancel: () => void;
  onSubmit: (item: IngredientFields) => Promise<boolean>;
  onRemove?: () => Promise<boolean>;
}

export default function IngredientForm({ title, initial = EMPTY_INGREDIENT, onCancel, onSubmit, onRemove }: IngredientFormProps) {
  const { name, amount, unit, category, storageZone } = initial;
  const [form, setForm] = useState({ name, amount: String(amount), unit, category, storageZone });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const field = 'min-h-11 w-full min-w-0 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-base';

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const amount = Number(form.amount);
    if (!form.name.trim() || !form.unit.trim() || !form.amount.trim() || !Number.isFinite(amount) || amount < 0) {
      setError('请输入食材名称、有效数量和单位。');
      return;
    }
    setSaving(true);
    try {
      const saved = await onSubmit({ ...form, name: form.name.trim(), unit: form.unit.trim(), amount });
      if (!saved) setError('未能保存，请检查数据后重试。');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[200] grid place-items-center overflow-auto bg-black/60 p-4">
      <form onSubmit={submit} role="dialog" aria-modal="true" aria-labelledby="ingredient-dialog-title" className="my-auto w-full max-w-md space-y-4 rounded-2xl bg-white p-5 shadow-xl">
        <h3 id="ingredient-dialog-title" className="text-xl font-bold">{title}</h3>
        <label className="block space-y-1 text-sm font-bold">
          <span>食材名称</span>
          <input className={field} maxLength={100} value={form.name} onChange={event => setForm({ ...form, name: event.target.value })} />
        </label>
        <div className="grid grid-cols-2 gap-3">
          <label className="min-w-0 space-y-1 text-sm font-bold">
            <span>数量</span>
            <input className={field} type="number" step="any" min="0" inputMode="decimal" value={form.amount} onChange={event => setForm({ ...form, amount: event.target.value })} />
          </label>
          <label className="min-w-0 space-y-1 text-sm font-bold">
            <span>单位</span>
            <input className={field} maxLength={20} value={form.unit} onChange={event => setForm({ ...form, unit: event.target.value })} />
          </label>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <label className="min-w-0 space-y-1 text-sm font-bold">
            <span>存放区域</span>
            <select className={field} value={form.storageZone} onChange={event => setForm({ ...form, storageZone: event.target.value as Ingredient['storageZone'] })}>
              {STORAGE_ZONES.map(zone => <option key={zone}>{zone}</option>)}
            </select>
          </label>
          <label className="min-w-0 space-y-1 text-sm font-bold">
            <span>分类</span>
            <select className={field} value={form.category} onChange={event => setForm({ ...form, category: event.target.value as Ingredient['category'] })}>
              {INGREDIENT_CATEGORIES.map(category => <option key={category}>{category}</option>)}
            </select>
          </label>
        </div>
        {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <button type="button" onClick={onCancel} className="min-h-11 rounded-xl bg-gray-100 font-bold">取消</button>
          <button disabled={saving} className="min-h-11 rounded-xl bg-emerald-700 font-bold text-white disabled:opacity-50">{saving ? '正在保存…' : '保存'}</button>
        </div>
        {onRemove && <button type="button" disabled={saving} onClick={async () => {
          if (window.confirm(`删除「${name}」？`)) {
            setSaving(true);
            try {
              if (!(await onRemove())) setError('未能删除，请重试。');
            } finally {
              setSaving(false);
            }
          }
        }} className="min-h-11 w-full rounded-xl text-sm font-bold text-red-700">删除这条库存</button>}
      </form>
    </div>
  );
}
