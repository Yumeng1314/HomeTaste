import { useEffect, useState } from 'react';
import type { Ingredient, PlanEntry, Recipe } from '../types';
import { convertAmount, formatAmount, localDate, shoppingId, shortages } from '../household';
import { RECIPE_PLACEHOLDER } from '../constants';
import RecipeExport from './RecipeExport';

interface RecipeDetailProps {
  recipe: Recipe;
  inventory: Ingredient[];
  plans: PlanEntry[];
  onBack: () => void;
  onEdit: () => void;
  onPlan: (id: string, date: string) => Promise<boolean>;
}

function sourceLink(url?: string) {
  if (!url) return;
  try {
    if (['https:', 'http:'].includes(new URL(url).protocol)) return url;
  } catch { /* Legacy sources may be invalid URLs. */ }
}

const button = 'min-h-11 rounded-full px-4 text-sm font-bold';

export default function RecipeDetail({ recipe, inventory, plans, onBack, onEdit, onPlan }: RecipeDetailProps) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [busy, setBusy] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const source = sourceLink(recipe.source?.url);
  const recipeGaps = new Map(shortages(recipe.ingredients.filter(item => !item.toTaste), inventory)
    .map(gap => [shoppingId(gap.name, gap.unit), gap]));

  useEffect(() => { window.scrollTo(0, 0); }, [recipe.id]);

  return (
    <div className="min-h-screen bg-white pb-32">
      {showExport && <RecipeExport recipe={recipe} onClose={() => setShowExport(false)} />}
      <header className="relative bg-gray-100">
        <div className="flex h-[35vh] min-h-44 snap-x snap-mandatory overflow-x-auto no-scrollbar"
          onScroll={event => setImageIndex(Math.round(event.currentTarget.scrollLeft / event.currentTarget.offsetWidth))}>
          {(recipe.images.length ? recipe.images : [RECIPE_PLACEHOLDER]).map((image, i) => <img src={image} alt={i ? '' : recipe.title} key={i}
            className={`h-full w-full shrink-0 snap-center ${recipe.images.length ? 'object-cover' : 'object-contain'}`} />)}
        </div>
        <div className="absolute inset-x-4 top-[max(0.75rem,env(safe-area-inset-top))] flex justify-between gap-2">
          <button onClick={onBack} className={`${button} bg-gray-900/85 text-white`}>返回</button>
          <div className="flex gap-2">
            <button onClick={() => setShowExport(true)} className={`${button} bg-gray-900/85 text-white`}>分享</button>
            <button onClick={onEdit} className={`${button} bg-gray-900/85 text-white`}>编辑</button>
          </div>
        </div>
        {recipe.images.length > 1 && <p className="absolute bottom-3 left-4 rounded-full bg-gray-900/85 px-2 py-1 text-xs text-white">{imageIndex + 1} / {recipe.images.length}</p>}
      </header>

      <div className="mx-auto max-w-4xl space-y-6 px-5 py-6">
        <header className="space-y-2">
          <p className="text-sm font-bold text-emerald-800">{recipe.category}</p>
          <h1 className="break-words text-2xl font-black text-gray-900">{recipe.title}</h1>
          {recipe.description && <p className="whitespace-pre-wrap break-words text-sm leading-relaxed text-gray-700">{recipe.description}</p>}
          <p className="text-sm text-gray-700">准备 {recipe.prepTime} 分钟 · 烹饪 {recipe.cookTime} 分钟</p>
          {recipe.rating !== undefined && <p className="text-sm text-gray-700">美味 {recipe.rating.toFixed(1)}{recipe.appetizingRating !== undefined ? ` · 下饭 ${recipe.appetizingRating.toFixed(1)}` : ''}</p>}
          {source && <a href={source} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-sm font-bold text-emerald-800 underline">打开菜谱来源</a>}
        </header>
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">所需食材</h2>
          {!recipe.ingredients.length && <p className="text-sm text-gray-600">还没记录食材。</p>}
          {recipe.ingredients.map((item, i) => {
            const gap = item.toTaste ? null : recipeGaps.get(shoppingId(item.name, item.unit));
            const missing = gap && convertAmount(gap.missing, gap.unit, item.unit);
            return <div key={i} className="flex flex-wrap items-baseline justify-between gap-2 rounded-xl bg-gray-50 p-3 text-sm">
              <span className="font-bold text-gray-900">{item.name}</span>
              <span className="flex gap-3">
                <span>{item.toTaste ? '适量' : formatAmount(item.amount, item.unit)}</span>
                {gap && <span className={missing ? 'font-bold text-red-700' : 'text-emerald-800'}>
                  {missing ? `缺 ${formatAmount(missing, item.unit)}` : '库存充足'}
                </span>}
              </span>
            </div>;
          })}
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900">制作步骤</h2>
          {!recipe.steps.length && <p className="text-sm text-gray-600">还没记录步骤。</p>}
          <ol className="list-decimal space-y-3 pl-5 text-sm leading-relaxed text-gray-800">
            {recipe.steps.map((step, i) => <li key={i} className="whitespace-pre-wrap break-words pl-1">{step}</li>)}
          </ol>
        </section>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-[90] border-t border-gray-100 bg-white/95 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
        <div className="mx-auto max-w-xl">
          {showDatePicker ? <section className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="font-bold">选择烹饪日期</h2><button onClick={() => setShowDatePicker(false)} className={`${button} text-gray-600`}>取消</button>
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {Array.from({ length: 7 }, (_, i) => {
                const date = new Date();
                date.setDate(date.getDate() + i);
                const day = localDate(date);
                const planned = plans.some(plan => plan.recipeId === recipe.id && plan.date === day);
                return <button key={day} disabled={busy || planned} onClick={async () => {
                  setBusy(true);
                  try { if (await onPlan(recipe.id, day)) setShowDatePicker(false); } finally { setBusy(false); }
                }} className="min-h-12 min-w-14 rounded-xl bg-gray-100 px-2 text-xs font-bold disabled:text-gray-500">
                  <span className="block">{i === 0 ? '今天' : i === 1 ? '明天' : date.toLocaleDateString('zh-CN', { weekday: 'short' })}</span>
                  <span>{planned ? '已加入' : date.getDate()}</span>
                </button>;
              })}
            </div>
          </section> : <button onClick={() => setShowDatePicker(true)} className="min-h-12 w-full rounded-xl bg-emerald-900 text-sm font-bold text-white">加入计划</button>}
        </div>
      </div>
    </div>
  );
}
