
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Recipe, Ingredient, MenuHistory, DailyPlan, ShoppingItem } from '../types';

/**
 * 美东时间工具函数
 */
const getETDate = (date: Date = new Date()) => {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date);
};

const getETNowObject = () => {
  const etString = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
  }).format(new Date());
  return new Date(etString);
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
  
  const etTodayStr = useMemo(() => getETDate(), []);
  const [selectedDate, setSelectedDate] = useState<string>(etTodayStr);
  const [viewPivotDate, setViewPivotDate] = useState<Date>(getETNowObject());
  const scrollRef = useRef<HTMLDivElement>(null);

  const [deductingRecipe, setDeductingRecipe] = useState<Recipe | null>(null);
  const [adjustedAmounts, setAdjustedAmounts] = useState<Record<string, number>>({});
  const [todayRating, setTodayRating] = useState(5);
  const [todayAppetizingRating, setTodayAppetizingRating] = useState(5);

  const calendarStrip = useMemo(() => {
    const strip = [];
    // 扩展范围以确保滚动平滑，前后各 10 天
    for (let i = -10; i <= 10; i++) {
      const d = new Date(viewPivotDate);
      d.setDate(viewPivotDate.getDate() + i);
      const iso = getETDate(d);
      const weekday = d.toLocaleDateString('zh-CN', { weekday: 'short' });
      const day = d.getDate();
      const hasPlan = plans[iso] && plans[iso].length > 0;
      const isToday = iso === etTodayStr;
      strip.push({ iso, weekday, day, hasPlan, isToday });
    }
    return strip;
  }, [viewPivotDate, plans, etTodayStr]);

  // 自动滚动到选中日期
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
    // 更新 pivot 让日历条中心跟随点击
    const dateObj = new Date(y, m - 1, d);
    setViewPivotDate(dateObj);
  };

  const handleGoToToday = () => {
    const now = getETNowObject();
    setViewPivotDate(now);
    setSelectedDate(etTodayStr);
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
    <div className="p-6 lg:p-10 pb-60 space-y-8 animate-in fade-in duration-300 max-w-4xl mx-auto">
      {/* 烹饪复盘弹窗 */}
      {deductingRecipe && (
        <div className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-[3.5rem] p-8 shadow-2xl animate-in zoom-in-95">
            <h3 className="text-2xl font-black text-gray-800 mb-6">烹饪复盘: {deductingRecipe.title}</h3>
            <div className="space-y-8">
              <section className="space-y-4">
                <label className="text-[10px] font-black text-emerald-600 uppercase tracking-widest ml-1">食材消耗</label>
                <div className="space-y-2">
                  {deductingRecipe.ingredients.map(ing => (
                    <div key={ing.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <span className="font-black text-gray-800 text-sm">{ing.name}</span>
                      <div className="flex items-center gap-3">
                        <button onClick={() => setAdjustedAmounts(p => ({ ...p, [ing.name]: Math.max(0, p[ing.name] - 1) }))} className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-gray-400 shadow-sm">-</button>
                        <input type="number" className="w-12 bg-transparent text-center font-black text-emerald-600 outline-none" value={adjustedAmounts[ing.name]} onChange={e => setAdjustedAmounts(p => ({ ...p, [ing.name]: Number(e.target.value) }))} />
                        <button onClick={() => setAdjustedAmounts(p => ({ ...p, [ing.name]: p[ing.name] + 1 }))} className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-gray-400 shadow-sm">+</button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-amber-500 uppercase tracking-widest">口味评分</label>
                  <div className="flex gap-1 justify-center bg-amber-50 rounded-2xl p-4">
                    {[1,2,3,4,5].map(s => <button key={s} onClick={() => setTodayRating(s)} className={`text-xl transition-transform ${todayRating >= s ? 'grayscale-0 scale-110' : 'grayscale opacity-20'}`}>⭐</button>)}
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-orange-500 uppercase tracking-widest">下饭分</label>
                  <div className="flex gap-1 justify-center bg-orange-50 rounded-2xl p-4">
                    {[1,2,3,4,5].map(s => <button key={s} onClick={() => setTodayAppetizingRating(s)} className={`text-xl transition-transform ${todayAppetizingRating >= s ? 'grayscale-0 scale-110' : 'grayscale opacity-20'}`}>🍚</button>)}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-10">
              <button onClick={() => setDeductingRecipe(null)} className="py-4 bg-gray-50 text-gray-400 rounded-2xl font-black text-[10px] uppercase tracking-widest">返回</button>
              <button onClick={() => {
                onDeductInventory(Object.entries(adjustedAmounts).map(([name, amount]) => ({ name, amount })));
                onRecipeFeedback(deductingRecipe.id, todayRating, todayAppetizingRating);
                onRemoveFromPlan(deductingRecipe.id, selectedDate);
                if (currentDayRecipes.length === 1) onArchive(selectedDate);
                setDeductingRecipe(null);
              }} className="py-4 bg-gray-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl">完成烹饪</button>
            </div>
          </div>
        </div>
      )}

      {/* 标题 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 text-[9px] font-black rounded-lg uppercase tracking-[0.2em]">
              {selectedDate.split('-')[0]} / {selectedDate.split('-')[1]}
            </span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 tracking-tighter">烹饪计划 <span className="text-gray-200 font-medium text-2xl ml-1">(ET)</span></h2>
        </div>
        <div className="flex bg-gray-100 p-1.5 rounded-2xl w-fit shadow-inner">
          <button onClick={() => setActiveTab('plan')} className={`px-6 py-2.5 rounded-xl text-[11px] font-black uppercase transition-all ${activeTab === 'plan' ? 'bg-white text-gray-900 shadow-md' : 'text-gray-400'}`}>当前计划</button>
          <button onClick={() => setActiveTab('history')} className={`px-6 py-2.5 rounded-xl text-[11px] font-black uppercase transition-all ${activeTab === 'history' ? 'bg-white text-gray-900 shadow-md' : 'text-gray-400'}`}>历史</button>
        </div>
      </div>

      {activeTab === 'plan' ? (
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="flex justify-between items-center px-2">
               <button onClick={() => {
                 const next = new Date(viewPivotDate);
                 next.setDate(viewPivotDate.getDate() - 7);
                 setViewPivotDate(next);
               }} className="text-[10px] font-black text-gray-300 hover:text-emerald-600 transition-colors uppercase tracking-widest">← PREV</button>
               
               <button onClick={handleGoToToday} className="px-5 py-2 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-emerald-600 hover:text-white transition-all shadow-sm active:scale-95">
                 回到今天
               </button>

               <button onClick={() => {
                 const next = new Date(viewPivotDate);
                 next.setDate(viewPivotDate.getDate() + 7);
                 setViewPivotDate(next);
               }} className="text-[10px] font-black text-gray-300 hover:text-emerald-600 transition-colors uppercase tracking-widest">NEXT →</button>
            </div>

            <div ref={scrollRef} className="bg-white p-5 rounded-[3rem] shadow-sm border border-gray-100 flex gap-3 overflow-x-auto no-scrollbar snap-x relative">
              {calendarStrip.map(item => (
                <button
                  key={item.iso}
                  data-selected={selectedDate === item.iso}
                  onClick={() => handleSelectDate(item.iso)}
                  className={`snap-center flex-shrink-0 w-16 h-24 rounded-[2rem] flex flex-col items-center justify-center gap-2 transition-all ${
                    selectedDate === item.iso 
                    ? 'bg-gray-900 text-white shadow-xl scale-110 z-10' 
                    : item.isToday 
                      ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' 
                      : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-[9px] font-black uppercase tracking-tighter">{item.weekday}</span>
                  <span className="text-xl font-black">{item.day}</span>
                  <div className="h-1.5">
                    {item.hasPlan && <span className={`w-1.5 h-1.5 rounded-full block ${selectedDate === item.iso ? 'bg-emerald-400' : 'bg-emerald-500'}`}></span>}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <section className="animate-in slide-in-from-bottom duration-500">
            <h3 className="text-2xl font-black text-gray-800 mb-6 flex items-center gap-3">
              <span className="w-2.5 h-8 bg-amber-400 rounded-full"></span>
              {selectedDate} <span className="text-gray-300 text-lg ml-1 font-bold">菜单</span>
            </h3>

            {currentDayRecipes.length === 0 ? (
              <div className="bg-white py-24 rounded-[3.5rem] border-2 border-dashed border-gray-100 text-center space-y-4">
                <span className="text-5xl block grayscale opacity-20">🥣</span>
                <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">暂无烹饪计划</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentDayRecipes.map(r => (
                  <div key={r.id} className="bg-white p-5 rounded-[2.5rem] shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-md transition-shadow">
                    <img src={r.images?.[0]} className="w-16 h-16 rounded-2xl object-cover shrink-0" alt="" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-black text-gray-800 text-base truncate">{r.title}</h4>
                      <p className="text-[9px] font-bold text-gray-400 uppercase mt-0.5 tracking-widest">{r.prepTime + r.cookTime} MINS</p>
                    </div>
                    <div className="flex gap-2">
                       <button onClick={() => {
                         const init: any = {}; r.ingredients.forEach(i => init[i.name] = i.amount);
                         setAdjustedAmounts(init); setDeductingRecipe(r);
                       }} className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all shadow-sm">✓</button>
                       <button onClick={() => onRemoveFromPlan(r.id, selectedDate)} className="w-10 h-10 rounded-full bg-gray-50 text-gray-300 flex items-center justify-center hover:text-red-500 transition-all">✕</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {currentDayRecipes.length > 0 && (
            <section className="animate-in slide-in-from-bottom duration-700 delay-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-black text-gray-800 flex items-center gap-3">
                  <span className="w-2.5 h-8 bg-blue-500 rounded-full"></span>
                  食材盘点
                </h3>
                {shoppingListGaps.some(g => g.isShort) && (
                  <button onClick={() => {
                    const gaps = shoppingListGaps.filter(g => g.isShort).map(g => ({ name: g.name, amount: `${Math.round((g.required - g.has) * 10) / 10}${g.unit}` }));
                    onAddItemsToShopping(gaps);
                    alert(`已补齐 ${gaps.length} 项食材到清单`);
                  }} className="px-6 py-2.5 bg-gray-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl active:scale-95 transition-all">一键补全</button>
                )}
              </div>
              <div className="bg-white rounded-[3rem] overflow-hidden border border-gray-100 shadow-sm divide-y divide-gray-50">
                {shoppingListGaps.map(item => (
                  <div key={item.name} className="p-6 flex justify-between items-center">
                    <div>
                      <span className="font-black text-gray-800 text-base">{item.name}</span>
                      <p className="text-[9px] text-gray-400 font-bold uppercase mt-1 tracking-tight">需求: {item.required}{item.unit} / 当前: {item.has}{item.unit}</p>
                    </div>
                    {item.isShort ? (
                      <span className="bg-red-50 text-red-500 text-[10px] font-black px-4 py-2 rounded-2xl border border-red-100">缺 {Math.round((item.required - item.has) * 10) / 10}{item.unit}</span>
                    ) : (
                      <span className="bg-emerald-50 text-emerald-600 text-[10px] font-black px-4 py-2 rounded-2xl border border-emerald-100 uppercase tracking-widest">就绪</span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          {history.length === 0 ? (
            <div className="bg-white p-24 rounded-[3.5rem] text-center text-gray-300 font-black uppercase tracking-widest text-sm border-2 border-dashed border-gray-100">历史记录为空</div>
          ) : (
            history.slice().reverse().map((record, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm space-y-4">
                <p className="text-[11px] font-black text-purple-600 uppercase tracking-widest">{record.date}</p>
                <div className="flex flex-wrap gap-2">
                  {record.recipeTitles.map((title, i) => (
                    <span key={i} className="text-xs font-black text-gray-700 bg-gray-50 px-4 py-2 rounded-2xl border border-gray-100">{title}</span>
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
