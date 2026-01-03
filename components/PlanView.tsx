import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Recipe, Ingredient, MenuHistory, DailyPlan, ShoppingItem } from '../types';

// 改为本地 ISO 日期格式 (YYYY-MM-DD)
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
    for (let i = -10; i <= 10; i++) {
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
    <div className="p-6 lg:p-10 pb-[30rem] space-y-10 animate-in fade-in duration-300 max-w-4xl mx-auto">
      {deductingRecipe && (
        <div className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-[2.5rem] p-8 shadow-2xl animate-in zoom-in-95 duration-200">
            <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-2xl">🍳</span> 复盘: {deductingRecipe.title}
            </h3>
            
            <div className="space-y-6">
              <section className="space-y-3">
                <label className="text-[10px] font-black text-emerald-600 uppercase tracking-widest ml-1">食材实际消耗</label>
                <div className="space-y-2 max-h-40 overflow-y-auto no-scrollbar pr-1">
                  {deductingRecipe.ingredients.map(ing => (
                    <div key={ing.name} className="flex items-center justify-between p-3.5 bg-gray-50/50 rounded-xl border border-gray-100">
                      <span className="font-bold text-gray-700 text-sm truncate mr-2">{ing.name}</span>
                      <div className="flex items-center gap-3">
                        <button onClick={() => setAdjustedAmounts(p => ({ ...p, [ing.name]: Math.max(0, p[ing.name] - 0.5) }))} className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-gray-400 shadow-sm transition-all active:scale-90">-</button>
                        <span className="w-12 text-center font-black text-sm text-emerald-600">{adjustedAmounts[ing.name]}</span>
                        <button onClick={() => setAdjustedAmounts(p => ({ ...p, [ing.name]: p[ing.name] + 0.5 }))} className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-gray-400 shadow-sm transition-all active:scale-90">+</button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <div className="space-y-4">
                <div className="p-4 bg-amber-50/50 rounded-2xl border border-amber-100/50">
                  <div className="flex justify-between items-center mb-2 px-1">
                    <label className="text-[10px] font-black text-amber-600 uppercase tracking-widest">美味评分</label>
                    <span className="text-xs font-black text-amber-500">{todayRating}.0</span>
                  </div>
                  <div className="flex gap-4 justify-center">
                    {[1,2,3,4,5].map(s => (
                      <button key={s} onClick={() => setTodayRating(s)} className={`text-xl transition-all ${todayRating >= s ? 'grayscale-0 scale-125' : 'grayscale opacity-20'}`}>
                        ⭐
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-orange-50/50 rounded-2xl border border-orange-100/50">
                  <div className="flex justify-between items-center mb-2 px-1">
                    <label className="text-[10px] font-black text-orange-600 uppercase tracking-widest">下饭程度</label>
                    <span className="text-xs font-black text-orange-500">{todayAppetizingRating}.0</span>
                  </div>
                  <div className="flex gap-4 justify-center">
                    {[1,2,3,4,5].map(s => (
                      <button key={s} onClick={() => setTodayAppetizingRating(s)} className={`text-xl transition-all ${todayAppetizingRating >= s ? 'grayscale-0 scale-125' : 'grayscale opacity-20'}`}>
                        🍚
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-8">
              <button onClick={() => setDeductingRecipe(null)} className="py-4 bg-gray-50 text-gray-400 rounded-xl font-black text-[10px] uppercase tracking-widest">取消</button>
              <button onClick={() => {
                onDeductInventory(Object.entries(adjustedAmounts).map(([name, amount]) => ({ name, amount })));
                onRecipeFeedback(deductingRecipe.id, todayRating, todayAppetizingRating);
                onRemoveFromPlan(deductingRecipe.id, selectedDate);
                if (currentDayRecipes.length === 1) onArchive(selectedDate);
                setDeductingRecipe(null);
              }} className="py-4 bg-gray-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-gray-200 active:scale-95 transition-all">保存复盘</button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1.5 bg-emerald-50 text-emerald-600 text-xs font-black rounded-xl uppercase tracking-widest border border-emerald-100 shadow-sm">
              {selectedDate.split('-')[0]} 年 {selectedDate.split('-')[1]} 月
            </span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 tracking-tighter">烹饪计划</h2>
        </div>
        <div className="flex bg-gray-100 p-2 rounded-[1.5rem] w-fit shadow-inner">
          <button onClick={() => setActiveTab('plan')} className={`px-8 py-3 rounded-2xl text-xs font-black uppercase transition-all ${activeTab === 'plan' ? 'bg-white text-gray-900 shadow-md' : 'text-gray-400'}`}>当前计划</button>
          <button onClick={() => setActiveTab('history')} className={`px-8 py-3 rounded-2xl text-xs font-black uppercase transition-all ${activeTab === 'history' ? 'bg-white text-gray-900 shadow-md' : 'text-gray-400'}`}>历史足迹</button>
        </div>
      </div>

      {activeTab === 'plan' ? (
        <div className="space-y-12">
          <div className="space-y-4">
            <div className="flex justify-between items-center px-4">
               <button onClick={() => {
                 const next = new Date(viewPivotDate);
                 next.setDate(viewPivotDate.getDate() - 7);
                 setViewPivotDate(next);
               }} className="text-[10px] font-black text-gray-300 hover:text-emerald-600 transition-colors uppercase tracking-[0.2em]">← PREV</button>
               
               <button onClick={() => { setViewPivotDate(new Date()); setSelectedDate(todayStr); }} className="px-5 py-2 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-emerald-600 hover:text-white transition-all shadow-sm active:scale-95">
                 今天
               </button>

               <button onClick={() => {
                 const next = new Date(viewPivotDate);
                 next.setDate(viewPivotDate.getDate() + 7);
                 setViewPivotDate(next);
               }} className="text-[10px] font-black text-gray-300 hover:text-emerald-600 transition-colors uppercase tracking-[0.2em]">NEXT →</button>
            </div>

            {/* 缩小日历条的容器和按钮尺寸 */}
            <div ref={scrollRef} className="bg-white p-4 rounded-[2rem] shadow-sm border border-gray-100 flex gap-3 overflow-x-auto no-scrollbar snap-x">
              {calendarStrip.map(item => (
                <button
                  key={item.iso}
                  data-selected={selectedDate === item.iso}
                  onClick={() => handleSelectDate(item.iso)}
                  className={`snap-center flex-shrink-0 w-14 h-18 rounded-2xl flex flex-col items-center justify-center gap-0.5 transition-all ${
                    selectedDate === item.iso 
                    ? 'bg-gray-900 text-white shadow-xl scale-110 z-10' 
                    : item.isToday 
                      ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' 
                      : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-[9px] font-black uppercase tracking-tighter opacity-60">{item.weekday}</span>
                  <span className="text-lg font-black">{item.day}</span>
                  <div className="h-1 flex items-center">
                    {item.hasPlan && <span className={`w-1.5 h-1.5 rounded-full block ${selectedDate === item.iso ? 'bg-emerald-400' : 'bg-emerald-500'}`}></span>}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <section>
            <h3 className="text-3xl font-black text-gray-800 mb-8 flex items-center gap-4">
              <span className="w-3 h-10 bg-amber-400 rounded-full"></span>
              {selectedDate} <span className="text-gray-200 font-bold text-xl ml-2 uppercase italic">Menu</span>
            </h3>

            {currentDayRecipes.length === 0 ? (
              <div className="bg-white py-32 rounded-[3.5rem] border-2 border-dashed border-gray-100 text-center space-y-6">
                <span className="text-6xl block grayscale opacity-20">🥣</span>
                <p className="text-sm font-black text-gray-300 uppercase tracking-[0.3em]">暂无任何烹饪安排</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {currentDayRecipes.map(r => (
                  <div key={r.id} className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-xl transition-all">
                    <img src={r.images?.[0]} className="w-20 h-20 rounded-2xl object-cover shrink-0 shadow-sm" alt="" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-black text-gray-800 text-lg truncate">{r.title}</h4>
                      <p className="text-xs font-bold text-gray-400 uppercase mt-1 tracking-widest">{r.prepTime + r.cookTime} MINS</p>
                    </div>
                    <div className="flex gap-3">
                       <button onClick={() => {
                         const init: any = {}; r.ingredients.forEach(i => init[i.name] = i.amount);
                         setAdjustedAmounts(init); setDeductingRecipe(r);
                       }} className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all shadow-sm">✓</button>
                       <button onClick={() => onRemoveFromPlan(r.id, selectedDate)} className="w-12 h-12 rounded-2xl bg-gray-50 text-gray-300 flex items-center justify-center hover:text-red-500 transition-all">✕</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {currentDayRecipes.length > 0 && (
            <section className="animate-in slide-in-from-bottom duration-700">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-3xl font-black text-gray-800 flex items-center gap-4">
                  <span className="w-3 h-10 bg-blue-500 rounded-full"></span>
                  食材盘点
                </h3>
                {shoppingListGaps.some(g => g.isShort) && (
                  <button onClick={() => {
                    const gaps = shoppingListGaps.filter(g => g.isShort).map(g => ({ name: g.name, amount: `${Math.round((g.required - g.has) * 10) / 10}${g.unit}` }));
                    onAddItemsToShopping(gaps);
                    alert(`已补齐 ${gaps.length} 项食材到清单`);
                  }} className="px-8 py-3 bg-gray-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl active:scale-95 transition-all">补齐食材</button>
                )}
              </div>
              <div className="bg-white rounded-[3.5rem] overflow-hidden border border-gray-100 shadow-sm divide-y divide-gray-50">
                {shoppingListGaps.map(item => (
                  <div key={item.name} className="p-7 flex justify-between items-center hover:bg-gray-50/50 transition-colors">
                    <div>
                      <span className="font-black text-gray-800 text-lg">{item.name}</span>
                      <p className="text-xs text-gray-400 font-bold uppercase mt-1 tracking-tight">需求: {item.required}{item.unit} / 存库: {item.has}{item.unit}</p>
                    </div>
                    {item.isShort ? (
                      <span className="bg-red-50 text-red-500 text-xs font-black px-5 py-2.5 rounded-2xl border border-red-100 shadow-sm animate-pulse">缺 {Math.round((item.required - item.has) * 10) / 10}{item.unit}</span>
                    ) : (
                      <span className="bg-emerald-50 text-emerald-600 text-[11px] font-black px-5 py-2.5 rounded-2xl border border-emerald-100 uppercase tracking-widest">库存充足</span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
          <div className="h-40"></div>
        </div>
      ) : (
        <div className="space-y-8">
          {history.length === 0 ? (
            <div className="bg-white py-32 rounded-[3.5rem] text-center text-gray-300 font-black uppercase tracking-widest text-base border-2 border-dashed border-gray-100">历史足迹待开启</div>
          ) : (
            history.slice().reverse().map((record, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[3.5rem] border border-gray-100 shadow-sm space-y-6">
                <p className="text-xs font-black text-purple-600 uppercase tracking-[0.3em]">{record.date}</p>
                <div className="flex flex-wrap gap-3">
                  {record.recipeTitles.map((title, i) => (
                    <span key={i} className="text-sm font-black text-gray-700 bg-gray-50 px-5 py-3 rounded-2xl border border-gray-100 shadow-sm">{title}</span>
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