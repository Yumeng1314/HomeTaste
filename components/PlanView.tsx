import { useState } from 'react';
import type { HistoryEntry, Ingredient, PlanEntry, Recipe } from '../types';
import { formatAmount, localDate, shortages } from '../household';
import { RECIPE_PLACEHOLDER } from '../constants';

interface PlannedUse {
  name: string;
  amount: number;
  unit: string;
}

interface PlanViewProps {
  plans: PlanEntry[];
  recipes: Recipe[];
  inventory: Ingredient[];
  history: HistoryEntry[];
  onRemoveFromPlan: (plan: PlanEntry) => Promise<boolean>;
  onAddItemsToShopping: (items: ReturnType<typeof shortages>) => Promise<boolean>;
  onComplete: (plan: PlanEntry, uses: PlannedUse[], rating: number, appetizing: number) => Promise<boolean>;
}

const button = 'min-h-11 rounded-xl px-3 text-sm font-bold';

export default function PlanView({ plans, recipes, inventory, history, onRemoveFromPlan, onAddItemsToShopping, onComplete }: PlanViewProps) {
  const [activeTab, setActiveTab] = useState<'plan' | 'history'>('plan');
  const [selectedDate, setSelectedDate] = useState(() => localDate());
  const [pivot, setPivot] = useState(() => new Date());
  const currentPlans = plans.filter(plan => plan.date === selectedDate);
  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(pivot);
    date.setDate(date.getDate() + i - 3);
    return date;
  });
  const recipesById = new Map(recipes.map(recipe => [recipe.id, recipe]));
  const gaps = shortages(currentPlans.flatMap(plan =>
    (recipesById.get(plan.recipeId)?.ingredients ?? []).filter(item => !item.toTaste)), inventory).filter(gap => gap.missing > 0);
  const [completion, setCompletion] = useState<{ plan: PlanEntry; recipe: Recipe } | null>(null);
  const [busy, setBusy] = useState(false);

  async function addGaps() {
    setBusy(true);
    try {
      await onAddItemsToShopping(gaps);
    } finally {
      setBusy(false);
    }
  }

  function navigateWeek(amount: number) {
    const date = new Date(pivot);
    date.setDate(date.getDate() + amount * 7);
    setPivot(date);
    setSelectedDate(localDate(date));
  }

  return (
    <div className="mx-auto max-w-4xl space-y-5 p-5 pb-32 lg:p-10">
      <header className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-2xl font-black text-gray-900">烹饪计划</h2>
        <div className="flex gap-1 rounded-xl bg-gray-100 p-1">
          <button aria-pressed={activeTab === 'plan'} className={`${button} ${activeTab === 'plan' ? 'bg-white' : 'text-gray-600'}`} onClick={() => setActiveTab('plan')}>计划</button>
          <button aria-pressed={activeTab === 'history'} className={`${button} ${activeTab === 'history' ? 'bg-white' : 'text-gray-600'}`} onClick={() => setActiveTab('history')}>历史</button>
        </div>
      </header>
      {activeTab === 'plan' ? (
        <>
          <div className="space-y-2">
            <div className="flex justify-between">
              <button className={`${button} text-gray-700`} onClick={() => navigateWeek(-1)}>上周</button>
              <button className={`${button} bg-emerald-50 text-emerald-900`} onClick={() => {
                const now = new Date();
                setPivot(now);
                setSelectedDate(localDate(now));
              }}>回到今天</button>
              <button className={`${button} text-gray-700`} onClick={() => navigateWeek(1)}>下周</button>
            </div>
            <div className="grid grid-cols-7 gap-1 rounded-xl bg-white p-1">
              {days.map(date => {
                const day = localDate(date);
                return <button key={day} aria-pressed={selectedDate === day} onClick={() => setSelectedDate(day)}
                  className={`min-h-14 rounded-xl text-xs ${selectedDate === day ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-700'}`}>
                  <span className="block">{date.toLocaleDateString('zh-CN', { weekday: 'short' })}</span>
                  <span className="font-bold">{date.getDate()}</span>
                  {plans.some(plan => plan.date === day) && <span aria-label="有计划" className="mx-auto block h-1 w-1 rounded-full bg-emerald-500" />}
                </button>;
              })}
            </div>
          </div>
          <section className="space-y-3">
            <h3 className="text-lg font-bold">{selectedDate} 菜单</h3>
            {currentPlans.length === 0 && <p className="rounded-xl bg-gray-50 p-5 text-sm text-gray-600">暂无安排。可以从菜谱详情添加。</p>}
            {currentPlans.map(plan => {
              const recipe = recipesById.get(plan.recipeId);
              return <article key={plan.id} className="flex items-center gap-2 rounded-2xl border border-gray-100 bg-white p-3">
                <img src={recipe?.images[0] || RECIPE_PLACEHOLDER} className="h-12 w-12 shrink-0 rounded-lg object-cover" alt="" />
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-gray-900">{recipe?.title ?? '菜谱已移除'}</h4>
                  {recipe && <p className="text-xs text-gray-600">{recipe.prepTime + recipe.cookTime} 分钟</p>}
                </div>
                {recipe && <button className={`${button} bg-emerald-50 text-emerald-900`} onClick={() => setCompletion({ plan, recipe })}>做完了</button>}
                <button className={`${button} text-gray-600`} onClick={() => onRemoveFromPlan(plan)} aria-label={`移除${recipe?.title ?? '这道菜'}`}>移除</button>
              </article>;
            })}
          </section>
          {gaps.length > 0 && (
            <section className="space-y-3 rounded-2xl border border-gray-100 bg-white p-4">
              <header className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-bold">缺少食材</h3>
                <button disabled={busy} className={`${button} bg-emerald-50 text-emerald-900`} onClick={addGaps}>一键加入清单</button>
              </header>
              <ul className="space-y-2">
                {gaps.map(gap => <li key={`${gap.name}-${gap.unit}`} className="flex justify-between gap-3 text-sm">
                  <span>{gap.name}</span><span className="font-bold text-red-700">缺 {formatAmount(gap.missing, gap.unit)}</span>
                </li>)}
              </ul>
            </section>
          )}
        </>
      ) : (
        <section className="space-y-3">
          {!history.length && <p className="text-sm text-gray-600">暂无历史记录。</p>}
          {history.map(record => <article key={record.id} className="space-y-2 rounded-2xl border border-gray-100 bg-white p-4">
            <h3 className="text-sm font-bold text-indigo-700">{record.date}</h3>
            <p className="text-sm text-gray-800">{record.recipeTitles?.join('、')}</p>
          </article>)}
        </section>
      )}
      {completion && <CompletePlan recipe={completion.recipe} onCancel={() => setCompletion(null)} onSubmit={async (uses, rating, appetizing) => {
        const ok = await onComplete(completion.plan, uses, rating, appetizing);
        if (ok) setCompletion(null);
      }} />}
    </div>
  );
}

function CompletePlan({ recipe, onCancel, onSubmit }: {
  recipe: Recipe;
  onCancel: () => void;
  onSubmit: (uses: PlannedUse[], rating: number, appetizing: number) => Promise<void>;
}) {
  const items = recipe.ingredients.filter(item => !item.toTaste);
  const [amounts, setAmounts] = useState(() => items.map(item => String(item.amount)));
  const [rating, setRating] = useState('5');
  const [appetizing, setAppetizing] = useState('5');
  const [busy, setBusy] = useState(false);
  const field = 'min-h-11 rounded-xl border border-gray-200 bg-gray-50 px-2 py-1 text-base';
  return (
    <div className="fixed inset-0 z-[200] grid place-items-center overflow-auto bg-black/60 p-4">
      <form role="dialog" aria-modal="true" aria-labelledby="complete-plan-title" className="my-auto w-full max-w-md space-y-4 rounded-2xl bg-white p-5"
        onSubmit={async event => {
          event.preventDefault();
          setBusy(true);
          try {
            await onSubmit(items.map((item, i) => ({ ...item, amount: Number(amounts[i]) || 0 })), Number(rating), Number(appetizing));
          } finally {
            setBusy(false);
          }
        }}>
        <h3 id="complete-plan-title" className="text-lg font-bold">完成{recipe.title}</h3>
        <p className="text-sm text-gray-600">确认实际用量。库存不足时，最多扣到 0。</p>
        <div className="max-h-[32vh] space-y-2 overflow-y-auto">
          {items.map((item, i) => (
            <label key={i} className="flex items-center gap-2 text-sm">
              <span className="min-w-0 flex-1 break-words font-bold">{item.name}</span>
              <input className={`${field} w-24`} type="number" min="0" step="any" inputMode="decimal"
                value={amounts[i]} onChange={event => setAmounts(previous => previous.map((amount, index) => i === index ? event.target.value : amount))} />
              <span>{item.unit}</span>
            </label>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <label className="text-sm font-bold">美味评分<select className={`${field} mt-1 w-full`} value={rating} onChange={event => setRating(event.target.value)}>
            {[1, 2, 3, 4, 5].map(score => <option key={score}>{score}</option>)}
          </select></label>
          <label className="text-sm font-bold">下饭评分<select className={`${field} mt-1 w-full`} value={appetizing} onChange={event => setAppetizing(event.target.value)}>
            {[1, 2, 3, 4, 5].map(score => <option key={score}>{score}</option>)}
          </select></label>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button className={`${button} bg-gray-100`} onClick={onCancel} type="button">取消</button>
          <button className={`${button} bg-emerald-800 text-white`} disabled={busy}>确认完成</button>
        </div>
      </form>
    </div>
  );
}
