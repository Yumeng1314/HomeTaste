
import React, { useState, useMemo } from 'react';
import { Recipe, Ingredient, MenuHistory, DailyPlan } from '../types';

interface PlanViewProps {
  plans: DailyPlan;
  recipes: Recipe[];
  inventory: Ingredient[];
  onRemoveFromPlan: (id: string, date: string) => void;
  onArchive: (date: string) => void;
  history: MenuHistory[];
}

const PlanView: React.FC<PlanViewProps> = ({ plans, recipes, inventory, onRemoveFromPlan, onArchive, history }) => {
  const [activeTab, setActiveTab] = useState<'plan' | 'history'>('plan');
  const [baseDate, setBaseDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);

  // 生成日历条：基于 baseDate 的 10 天范围，可左右滚动
  const calendarStrip = useMemo(() => {
    const result = [];
    // 显示以 baseDate 为中心的 11 天
    for (let i = -5; i <= 5; i++) {
      const d = new Date(baseDate);
      d.setDate(baseDate.getDate() + i);
      const iso = d.toISOString().split('T')[0];
      const weekday = d.toLocaleDateString('zh-CN', { weekday: 'short' });
      const day = d.getDate();
      const hasPlan = plans[iso] && plans[iso].length > 0;
      result.push({ iso, weekday, day, hasPlan });
    }
    return result;
  }, [baseDate, plans]);

  // 当前选中日期的标题格式化 (例如：2024年10月)
  const headerDateLabel = useMemo(() => {
    const date = new Date(selectedDate);
    return `${date.getFullYear()}年 ${date.getMonth() + 1}月`;
  }, [selectedDate]);

  const currentDayRecipeIds = plans[selectedDate] || [];
  const plannedRecipes = recipes.filter(r => currentDayRecipeIds.includes(r.id));

  // 聚合所需食材缺口
  const shoppingList = useMemo(() => {
    const needed: Record<string, { amount: number; unit: string }> = {};
    plannedRecipes.forEach(recipe => {
      (recipe.ingredients || []).forEach(ing => {
        const key = ing.name;
        if (needed[key]) {
          needed[key].amount += (ing.amount || 0);
        } else {
          needed[key] = { amount: ing.amount || 0, unit: ing.unit || 'g' };
        }
      });
    });

    return Object.entries(needed).map(([name, req]) => {
      const inv = inventory.find(i => i.name === name);
      const has = inv ? inv.amount : 0;
      const diff = req.amount - has;
      return { name, required: req.amount, has, unit: req.unit, isShort: diff > 0 };
    });
  }, [plannedRecipes, inventory]);

  const navigateCalendar = (days: number) => {
    const next = new Date(baseDate);
    next.setDate(baseDate.getDate() + days);
    setBaseDate(next);
  };

  const isToday = selectedDate === new Date().toISOString().split('T')[0];

  return (
    <div className="p-6 lg:p-10 pb-60 space-y-8 animate-in fade-in duration-300 max-w-4xl mx-auto">
      {/* 顶部标题与 Tab 切换 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase tracking-widest">{headerDateLabel}</span>
          </div>
          <h2 className="text-3xl font-black text-gray-800 tracking-tight">烹饪规划中心</h2>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Smart Planning & Shopping List</p>
        </div>
        <div className="flex bg-gray-100 p-1 rounded-2xl w-fit shadow-inner">
          <button onClick={() => setActiveTab('plan')} className={`px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === 'plan' ? 'bg-white text-gray-900 shadow-md' : 'text-gray-400'}`}>今日/未来计划</button>
          <button onClick={() => setActiveTab('history')} className={`px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === 'history' ? 'bg-white text-gray-900 shadow-md' : 'text-gray-400'}`}>归档历史</button>
        </div>
      </div>

      {activeTab === 'plan' ? (
        <div className="space-y-10">
          {/* 动态日历导航条 */}
          <div className="space-y-4">
            <div className="flex justify-between items-center px-2">
               <button onClick={() => navigateCalendar(-7)} className="text-[10px] font-black text-gray-400 hover:text-emerald-600 transition-colors">← 前一周</button>
               <button onClick={() => { setBaseDate(new Date()); setSelectedDate(new Date().toISOString().split('T')[0]); }} className="text-[9px] font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">回到今天</button>
               <button onClick={() => navigateCalendar(7)} className="text-[10px] font-black text-gray-400 hover:text-emerald-600 transition-colors">后一周 →</button>
            </div>
            <div className="bg-white p-4 rounded-[2.5rem] shadow-sm border border-gray-100 flex gap-3 overflow-x-auto no-scrollbar snap-x">
              {calendarStrip.map(item => (
                <button
                  key={item.iso}
                  onClick={() => setSelectedDate(item.iso)}
                  className={`snap-center flex-shrink-0 w-16 h-20 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all ${
                    selectedDate === item.iso 
                    ? 'bg-gray-900 text-white shadow-lg scale-105 z-10' 
                    : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-[9px] font-black uppercase tracking-widest">{item.weekday}</span>
                  <span className="text-lg font-black">{item.day}</span>
                  {item.hasPlan && (
                    <span className={`w-1.5 h-1.5 rounded-full ${selectedDate === item.iso ? 'bg-emerald-400' : 'bg-emerald-500'}`}></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* 菜单部分 */}
          <section className="animate-in slide-in-from-bottom duration-500">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-black text-gray-800 flex items-center gap-3">
                <span className="w-2 h-7 bg-amber-400 rounded-full shadow-sm shadow-amber-200"></span>
                {selectedDate} 的菜单
              </h3>
              {plannedRecipes.length > 0 && isToday && (
                <button 
                  onClick={() => onArchive(selectedDate)} 
                  className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-[10px] font-black uppercase shadow-lg shadow-emerald-100 active:scale-95 transition-all"
                >
                  标记全部完成
                </button>
              )}
            </div>

            {plannedRecipes.length === 0 ? (
              <div className="bg-white py-20 rounded-[3rem] border-2 border-dashed border-gray-100 text-center space-y-4">
                <span className="text-5xl block grayscale opacity-30">🍳</span>
                <div className="space-y-1">
                  <p className="text-sm font-black text-gray-400">这一天还没想好要做什么...</p>
                  <p className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">No plans for this date yet</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {plannedRecipes.map(r => (
                  <div key={r.id} className="bg-white p-5 rounded-[2.5rem] shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-md transition-shadow group">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <img src={r.images?.[0] || 'https://picsum.photos/seed/food/200/200'} className="w-full h-full rounded-2xl object-cover shadow-inner" alt="" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-black text-gray-800 truncate text-base">{r.title}</h4>
                      <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mt-1">{(r.prepTime || 0) + (r.cookTime || 0)} MINS COOKING</p>
                    </div>
                    <button 
                      onClick={() => onRemoveFromPlan(r.id, selectedDate)} 
                      className="w-10 h-10 rounded-full bg-gray-50 text-gray-300 flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-all"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* 采购清单 / 食材缺口 */}
          {plannedRecipes.length > 0 && (
            <section className="animate-in slide-in-from-bottom duration-700 delay-200">
              <h3 className="text-xl font-black text-gray-800 flex items-center gap-3 mb-6">
                <span className="w-2 h-7 bg-blue-400 rounded-full shadow-sm shadow-blue-200"></span>
                食材缺口报告
              </h3>
              <div className="bg-white rounded-[3rem] overflow-hidden border border-gray-100 shadow-sm divide-y divide-gray-50">
                {shoppingList.map(item => (
                  <div key={item.name} className="p-6 flex justify-between items-center group hover:bg-gray-50/50 transition-colors">
                    <div>
                      <span className="font-black text-gray-800 text-base">{item.name}</span>
                      <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-tight">
                        全家需求: <span className="text-gray-600">{item.required}{item.unit}</span> / 现存: <span className="text-gray-600">{item.has}{item.unit}</span>
                      </p>
                    </div>
                    {item.isShort ? (
                      <div className="flex flex-col items-end">
                        <div className="bg-red-50 text-red-500 text-[10px] font-black px-4 py-2 rounded-2xl border border-red-100">
                          缺 {Math.round((item.required - item.has) * 10) / 10}{item.unit}
                        </div>
                        <span className="text-[8px] font-black text-red-300 uppercase mt-1 tracking-widest">TO BUY</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-end">
                        <div className="bg-emerald-50 text-emerald-600 text-[10px] font-black px-4 py-2 rounded-2xl border border-emerald-100">
                          库存充足
                        </div>
                        <span className="text-[8px] font-black text-emerald-300 uppercase mt-1 tracking-widest">READY</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      ) : (
        <div className="space-y-6 animate-in fade-in duration-500">
          <div className="flex justify-between items-end mb-4">
             <h3 className="text-xl font-black text-gray-800">所有烹饪历史</h3>
             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total: {history.length} Records</span>
          </div>
          {history.length === 0 ? (
            <div className="bg-white p-20 rounded-[3rem] border-2 border-dashed border-gray-100 text-center text-gray-400 text-sm font-bold">
              还没有存入过任何历史，去标记一个完成试试吧！
            </div>
          ) : (
            <div className="space-y-4">
              {history.slice().reverse().map((record, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center">
                    <p className="text-[11px] font-black text-purple-600 uppercase tracking-[0.2em]">{record.date}</p>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {record.recipeTitles.map((title, i) => (
                      <span key={i} className="text-xs font-black text-gray-700 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
                        {title}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PlanView;
