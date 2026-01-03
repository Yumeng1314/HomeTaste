
import React, { useState } from 'react';
import { Recipe, Ingredient, DailyPlan } from '../types';

const getLocalDateString = (date: Date = new Date()) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const getQuickDates = () => {
  const result = [];
  const now = new Date();
  for (let i = 0; i < 7; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    const iso = getLocalDateString(d);
    const weekday = d.toLocaleDateString('zh-CN', { weekday: 'short' });
    const day = d.getDate();
    let label = i === 0 ? '今天' : i === 1 ? '明天' : '';
    result.push({ iso, weekday, day, label });
  }
  return result;
};

interface RecipeDetailProps {
  recipe: Recipe;
  inventory: Ingredient[];
  plans: DailyPlan;
  onBack: () => void;
  onEdit?: () => void;
  onPlan: (id: string, date: string) => void;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe, inventory, plans, onBack, onEdit, onPlan }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);

  const checkIngredientStatus = (recipeIng: { name: string; amount: number; unit: string }) => {
    const invItem = inventory.find(i => recipeIng.name.includes(i.name) || i.name.includes(recipeIng.name));
    if (!invItem) return { text: '缺货', color: 'text-red-500', bgColor: 'bg-red-50' };
    if (invItem.amount < recipeIng.amount) return { text: '存量少', color: 'text-amber-600', bgColor: 'bg-amber-50' };
    return { text: '充足', color: 'text-emerald-600', bgColor: 'bg-emerald-50' };
  };

  return (
    <div className="min-h-screen bg-white animate-in slide-in-from-bottom duration-500 relative pb-[20rem]">
      {/* 导出海报弹窗 */}
      {showExportModal && (
        <div className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 overflow-y-auto" onClick={() => setShowExportModal(false)}>
          <div className="bg-white w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-300 my-auto" onClick={e => e.stopPropagation()}>
            <div className="p-8 space-y-8 max-h-[85vh] overflow-y-auto no-scrollbar pb-24">
              <div className="space-y-4">
                <div className="rounded-[2rem] overflow-hidden shadow-xl aspect-[16/9]">
                  <img src={recipe.images?.[0]} className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-black text-gray-900 tracking-tighter mb-1">{recipe.title}</h2>
                  <div className="flex justify-center gap-4">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">耗时 {recipe.prepTime + recipe.cookTime} min</span>
                    <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">{recipe.category}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-[10px] font-black text-gray-900 uppercase tracking-[0.2em] border-l-4 border-emerald-500 pl-3">所需食材</h4>
                <div className="grid grid-cols-2 gap-3">
                  {recipe.ingredients.map((ing, i) => (
                    <div key={i} className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-xl">
                      <span className="text-[11px] font-bold text-gray-700">{ing.name}</span>
                      <span className="text-[9px] text-emerald-600 font-black">{ing.amount}{ing.unit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-[10px] font-black text-gray-900 uppercase tracking-[0.2em] border-l-4 border-gray-900 pl-3">制作步骤</h4>
                <div className="space-y-3">
                   {recipe.steps.map((step, i) => (
                     <div key={i} className="flex gap-3 p-4 bg-gray-50/50 rounded-2xl">
                        <span className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center font-black text-[10px] shrink-0">{i+1}</span>
                        <p className="text-[11px] font-bold text-gray-600 leading-relaxed">{step}</p>
                     </div>
                   ))}
                </div>
              </div>
            </div>
            <button onClick={() => setShowExportModal(false)} className="absolute bottom-0 left-0 right-0 py-6 bg-gray-900 text-white font-black uppercase tracking-[0.3em] text-[11px] hover:bg-black transition-colors rounded-t-[2rem]">长按保存菜谱海报</button>
          </div>
        </div>
      )}

      <div className="relative h-[24rem] lg:h-[30rem]">
        <img src={recipe.images?.[0]} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
          <button onClick={onBack} className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl text-white flex items-center justify-center shadow-xl text-lg hover:bg-white/40 transition-all">✕</button>
          <div className="flex gap-2">
             <div className="flex gap-1.5 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 items-center">
                <span className="text-amber-400 text-xs">★</span>
                <span className="text-white font-black text-xs">{recipe.rating?.toFixed(1) || '5.0'}</span>
             </div>
             <div className="flex gap-1.5 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 items-center">
                <span className="text-orange-400 text-xs">🍚</span>
                <span className="text-white font-black text-xs">{recipe.appetizingRating?.toFixed(1) || '5.0'}</span>
             </div>
             <button onClick={() => setShowExportModal(true)} className="w-12 h-12 bg-emerald-500 rounded-2xl text-white flex items-center justify-center shadow-lg border border-emerald-400 text-lg hover:scale-105 active:scale-95 transition-all">✨</button>
             {onEdit && <button onClick={onEdit} className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl text-white flex items-center justify-center border border-white/10 shadow-lg text-lg hover:bg-white/40">✎</button>}
          </div>
        </div>
        <div className="absolute bottom-10 left-8 right-8">
          <span className="px-3 py-1 bg-emerald-500 rounded-lg text-[10px] font-black text-white uppercase mb-3 inline-block tracking-widest">{recipe.category}</span>
          <h1 className="text-3xl font-black text-white tracking-tighter truncate leading-tight">{recipe.title}</h1>
        </div>
      </div>

      <div className="px-6 py-10 max-w-4xl mx-auto space-y-12">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-6 rounded-[2rem] text-center border border-gray-100 shadow-sm relative overflow-hidden group">
            <p className="text-[10px] font-black text-gray-400 uppercase mb-1 tracking-widest">准备阶段</p>
            <p className="text-xl font-black text-gray-900">{recipe.prepTime} <span className="text-xs opacity-30">min</span></p>
          </div>
          <div className="bg-gray-50 p-6 rounded-[2rem] text-center border border-gray-100 shadow-sm relative overflow-hidden group">
            <p className="text-[10px] font-black text-gray-400 uppercase mb-1 tracking-widest">烹饪耗时</p>
            <p className="text-xl font-black text-gray-900">{recipe.cookTime} <span className="text-xs opacity-30">min</span></p>
          </div>
        </div>

        <section>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-black flex items-center gap-3 italic">所需食材</h3>
            <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-widest">{recipe.ingredients.length} 项</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {recipe.ingredients.map((ing, i) => {
              const res = checkIngredientStatus(ing);
              return (
                <div key={i} className="p-5 rounded-2xl border border-gray-100 flex justify-between items-center bg-white shadow-sm hover:border-emerald-200 transition-all duration-300">
                  <span className="font-black text-gray-800 text-base">{ing.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black text-gray-300">{ing.amount}{ing.unit}</span>
                    <span className={`text-[9px] font-black px-3 py-1 rounded-lg ${res.bgColor} ${res.color}`}>{res.text}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-black mb-8 flex items-center gap-3 italic">制作流程</h3>
          <div className="space-y-8">
            {recipe.steps.map((s, i) => (
              <div key={i} className="flex gap-5 group">
                <div className="w-10 h-10 bg-gray-900 text-white rounded-xl flex items-center justify-center font-black text-base shrink-0 shadow-lg">{i + 1}</div>
                <div className="pt-1.5">
                  <p className="text-gray-700 leading-relaxed font-black text-base">{s}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="fixed bottom-24 left-0 right-0 p-6 z-[90]">
        <div className="max-w-xl mx-auto bg-white/95 backdrop-blur-3xl p-3 rounded-3xl shadow-2xl border border-gray-100 ring-4 ring-black/5">
          {showDatePicker ? (
            <div className="space-y-4 py-2">
              <div className="flex justify-between items-center px-6">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">选择日期</p>
                <button onClick={() => setShowDatePicker(false)} className="w-8 h-8 bg-gray-50 text-gray-300 rounded-full flex items-center justify-center hover:text-red-500">✕</button>
              </div>
              <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1 px-4">
                {getQuickDates().map(d => (
                  <button key={d.iso} onClick={() => { onPlan(recipe.id, d.iso); setShowDatePicker(false); }} className="shrink-0 w-16 h-22 bg-gray-50 hover:bg-emerald-600 hover:text-white rounded-2xl flex flex-col items-center justify-center transition-all">
                    <span className="text-[8px] font-black uppercase opacity-40 mb-1">{d.label || d.weekday}</span>
                    <span className="text-xl font-black">{d.day}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <button onClick={() => setShowDatePicker(true)} className="w-full h-16 bg-gray-900 text-white rounded-2xl font-black text-sm shadow-xl flex items-center justify-center gap-3 uppercase tracking-[0.2em] active:scale-95 transition-all">
              <span className="text-xl">🍳</span> 开启烹饪计划
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
