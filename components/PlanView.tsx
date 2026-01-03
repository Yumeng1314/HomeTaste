
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Recipe, Ingredient, MenuHistory, DailyPlan, ShoppingItem } from '../types';

const getLocalDateString = (date: Date = new Date()) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

interface PlanViewProps {
  plans: DailyPlan;
  recipes: Recipe[];
  inventory: Ingredient[];
  onRemoveFromPlan: (id: string, date: string) => void;
  onArchive: (date: string, recipesDeduction?: Record<string, number>) => void;
  onAddItemsToShopping: (items: Partial<ShoppingItem>[]) => void;
  onDeductInventory: (deductions: { name: string, amount: number }[]) => void;
  onRecipeFeedback: (recipeId: string, rating: number, appetizingRating: number) => void;
  history: MenuHistory[];
}

const PlanView: React.FC<PlanViewProps> = ({ plans, recipes, inventory, onRemoveFromPlan, onArchive, onAddItemsToShopping, onDeductInventory, onRecipeFeedback, history }) => {
  const [activeTab, setActiveTab] = useState<'plan' | 'history'>('plan');
  
  const todayStr = useMemo(() => getLocalDateString(), []);
  const [selectedDate, setSelectedDate] = useState<string>(todayStr);
  const [viewPivotDate, setViewPivotDate] = useState<Date>(new Date());
  const scrollRef = useRef<HTMLDivElement>(null);

  const [deductingRecipe, setDeductingRecipe] = useState<Recipe | null>(null);
  const [adjustedAmounts, setAdjustedAmounts] = useState<Record<string, number>>({});
  const [todayRating, setTodayRating] = useState(5);
  const [todayAppetizingRating, setTodayAppetizingRating] = useState(5);

  const calendarStrip = useMemo(() => {
    const strip = [];
    for (let i = -3; i <= 3; i++) {
      const d = new Date(viewPivotDate);
      d.setDate(viewPivotDate.getDate() + i);
      const iso = getLocalDateString(d);
      const weekday = d.toLocaleDateString('zh-CN', { weekday: 'short' });
      const day = d.getDate();
      const hasPlan = plans[iso] && plans[iso].length > 0;
      const isToday = iso === todayStr;
      strip.push({ iso, weekday, day, hasPlan, isToday });
    }
    return strip;
  }, [viewPivotDate, plans, todayStr]);

  useEffect(() => {
    if (scrollRef.current) {
      const activeBtn = scrollRef.current.querySelector('[data-selected="true"]');
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [selectedDate, viewPivotDate]);

  const handleSelectDate = (iso: string) => {
    setSelectedDate(iso);
    const [y, m, d] = iso.split('-').map(Number);
    const dateObj = new Date(y, m - 1, d);
    setViewPivotDate(dateObj);
  };

  const currentDayRecipes = useMemo(() => {
    const ids = plans[selectedDate] || [];
    return recipes.filter(r => ids.includes(r.id));
  }, [plans, selectedDate, recipes]);

  const shoppingListGaps = useMemo(() => {
    const needed: Record<string, { amount: number; unit: string }> = {};
    currentDayRecipes.forEach(recipe => {
      (recipe.ingredients || []).forEach(ing => {
        needed[ing.name] = { 
          amount: (needed[ing.name]?.amount || 0) + ing.amount, 
          unit: ing.unit 
        };
      });
    });
    return Object.entries(needed).map(([name, req]) => {
      const inv = inventory.find(i => i.name === name);
      const has = inv ? inv.amount : 0;
      return { name, required: req.amount, has, unit: req.unit, isShort: req.amount > has };
    });
  }, [currentDayRecipes, inventory]);

  return (
    <div className="p-5 lg:p-10 pb-[35rem] space-y-8 animate-in fade-in duration-500 max-w-4xl mx-auto">
      {/* 复盘 Modal */}
      {deductingRecipe && (
        <div className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-2xl flex items-center justify-center p-6">
          <div className="bg-white w-full max-w-lg rounded-3xl p-8 shadow-2xl animate-in zoom-in-95 duration-300">
            <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
              <span>复盘: {deductingRecipe.title}</span>
            </h3>
            
            <div className="space-y-6">
              <section className="space-y-4">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">确认食材消耗</label>
                <div className="space-y-2 max-h-48 overflow-y-auto no-scrollbar">
                  {deductingRecipe.ingredients.map(ing => (
                    <div key={ing.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                      <span className="font-bold text-gray-700 text-sm truncate mr-4">{ing.name}</span>
                      <div className="flex items-center gap-3">
                        <button onClick={() => setAdjustedAmounts(p => ({ ...p, [ing.name]: Math.max(0, p[ing.name] - 0.5) }))} className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-lg font-bold text-gray-400 shadow-sm border border-gray-100">-</button>
                        <span className="w-10 text-center font-black text-sm text-emerald-600">{adjustedAmounts[ing.name]}</span>
                        <button onClick={() => setAdjustedAmounts(p => ({ ...p, [ing.name]: p[ing.name] + 0.5 }))} className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-lg font-bold text-gray-400 shadow-sm border border-gray-100">+</button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-[10px] font-black text-amber-600 uppercase">美味</label>
                    <span className="text-sm font-black text-amber-500">{todayRating}.0</span>
                  </div>
                  <div className="flex justify-between">
                    {[1,2,3,4,5].map(s => (
                      <button key={s} onClick={() => setTodayRating(s)} className={`text-xl transition-all ${todayRating >= s ? 'grayscale-0 scale-110' : 'grayscale opacity-20'}`}>⭐</button>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-[10px] font-black text-orange-600 uppercase">下饭</label>
                    <span className="text-sm font-black text-orange-500">{todayAppetizingRating}.0</span>
                  </div>
                  <div className="flex justify-between">
                    {[1,2,3,4,5].map(s => (
                      <button key={s} onClick={() => setTodayAppetizingRating(s)} className={`text-xl transition-all ${todayAppetizingRating >= s ? 'grayscale-0 scale-110' : 'grayscale opacity-20'}`}>🍚</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <button onClick={() => setDeductingRecipe(null)} className="py-4 bg-gray-100 text-gray-500 rounded-xl font-bold text-xs">取消</button>
              <button onClick={() => {
                onDeductInventory(Object.entries(adjustedAmounts).map(([name, amount]) => ({ name, amount })));
                onRecipeFeedback(deductingRecipe.id, todayRating, todayAppetizingRating);
                onRemoveFromPlan(deductingRecipe.id, selectedDate);
                if (currentDayRecipes.length === 1) onArchive(selectedDate);
                setDeductingRecipe(null);
              }} className="py-4 bg-gray-900 text-white rounded-xl font-bold text-xs shadow-lg">完成复盘</button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black text-gray-900 italic">烹饪计划</h2>
        <div className="flex bg-gray-100 p-1 rounded-xl">
          <button onClick={() => setActiveTab('plan')} className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === 'plan' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-400'}`}>当前</button>
          <button onClick={() => setActiveTab('history')} className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === 'history' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-400'}`}>历史</button>
        </div>
      </div>

      {activeTab === 'plan' ? (
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center px-2">
               <button onClick={() => { setViewPivotDate(new Date()); setSelectedDate(todayStr); }} className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg">回到今天</button>
               <div className="flex gap-4 text-[10px] font-bold text-gray-400">
                  <button onClick={() => { const n = new Date(viewPivotDate); n.setDate(n.getDate()-7); setViewPivotDate(n); }}>← 上周</button>
                  <button onClick={() => { const n = new Date(viewPivotDate); n.setDate(n.getDate()+7); setViewPivotDate(n); }}>下周 →</button>
               </div>
            </div>

            <div ref={scrollRef} className="bg-white p-2 rounded-2xl border border-gray-100 flex justify-between overflow-x-auto no-scrollbar snap-x">
              {calendarStrip.map(item => (
                <button
                  key={item.iso}
                  data-selected={selectedDate === item.iso}
                  onClick={() => handleSelectDate(item.iso)}
                  className={`snap-center flex-shrink-0 w-12 h-16 rounded-xl flex flex-col items-center justify-center gap-1 transition-all ${
                    selectedDate === item.iso 
                    ? 'bg-gray-900 text-white shadow-lg scale-105' 
                    : item.isToday 
                      ? 'bg-emerald-50 text-emerald-700' 
                      : 'text-gray-400 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-[9px] font-bold uppercase">{item.weekday}</span>
                  <span className="text-lg font-black">{item.day}</span>
                  {item.hasPlan && <div className={`w-1 h-1 rounded-full ${selectedDate === item.iso ? 'bg-emerald-400' : 'bg-emerald-500'}`}></div>}
                </button>
              ))}
            </div>
          </div>

          <section>
            <div className="flex items-baseline gap-3 mb-4">
              <h3 className="text-lg font-black text-gray-900">{selectedDate} 菜单</h3>
            </div>

            {currentDayRecipes.length === 0 ? (
              <div className="bg-white py-12 rounded-2xl border-2 border-dashed border-gray-100 text-center">
                <p className="text-xs font-bold text-gray-400">暂无安排</p>
              </div>
            ) : (
              <div className="space-y-3">
                {currentDayRecipes.map(r => (
                  <div key={r.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-50 flex items-center gap-4">
                    <img src={r.images?.[0]} className="w-16 h-16 rounded-xl object-cover" alt="" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 text-base truncate">{r.title}</h4>
                      <p className="text-[10px] font-bold text-gray-400 mt-1">{r.prepTime + r.cookTime} 分钟</p>
                    </div>
                    <div className="flex gap-2">
                       <button onClick={() => {
                         const init: any = {}; r.ingredients.forEach(i => init[i.name] = i.amount);
                         setAdjustedAmounts(init); setDeductingRecipe(r);
                       }} className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg hover:bg-emerald-600 hover:text-white transition-all">✓</button>
                       <button onClick={() => onRemoveFromPlan(r.id, selectedDate)} className="w-10 h-10 rounded-xl bg-gray-50 text-gray-400 flex items-center justify-center text-lg hover:bg-red-50 hover:text-red-500 transition-all">✕</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {currentDayRecipes.length > 0 && shoppingListGaps.some(g => g.isShort) && (
            <section className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-black text-gray-900">缺少食材</h3>
                <button onClick={() => {
                    const gaps = shoppingListGaps.filter(g => g.isShort).map(g => ({ name: g.name, amount: `${Math.round((g.required - g.has) * 10) / 10}${g.unit}` }));
                    onAddItemsToShopping(gaps);
                    alert(`已添加 ${gaps.length} 项到清单`);
                  }} className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg">一键加入清单</button>
              </div>
              <div className="space-y-2">
                {shoppingListGaps.filter(g => g.isShort).map(item => (
                  <div key={item.name} className="flex justify-between items-center text-sm">
                    <span className="font-bold text-gray-700">{item.name}</span>
                    <span className="text-red-500 font-bold text-xs">缺 {Math.round((item.required - item.has) * 10) / 10}{item.unit}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {history.length === 0 ? (
            <div className="text-center py-20 text-gray-300 text-xs font-bold">暂无历史记录</div>
          ) : (
            history.slice().reverse().map((record, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-xs font-black text-indigo-500 mb-3">{record.date}</p>
                <div className="flex flex-wrap gap-2">
                  {record.recipeTitles.map((title, i) => (
                    <span key={i} className="text-xs font-bold text-gray-700 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{title}</span>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default PlanView;
