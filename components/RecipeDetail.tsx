
import React, { useState } from 'react';
import { Recipe, Ingredient, DailyPlan } from '../types';

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

  if (!recipe) return null;

  const checkIngredientStatus = (recipeIng: { name: string; amount: number; unit: string }) => {
    const invItem = inventory.find(i => i.name === recipeIng.name);
    if (!invItem) return { status: 'missing', text: '完全缺失', color: 'text-red-500', bgColor: 'bg-red-50', diff: recipeIng.amount };
    if (invItem.amount < recipeIng.amount) return { status: 'low', text: `缺 ${Math.round((recipeIng.amount - invItem.amount) * 10) / 10}${recipeIng.unit}`, color: 'text-amber-600', bgColor: 'bg-amber-50', diff: recipeIng.amount - invItem.amount };
    return { status: 'ok', text: '库存充足', color: 'text-emerald-600', bgColor: 'bg-emerald-50', diff: 0 };
  };

  const getQuickDates = () => {
    return [0, 1, 2].map(i => {
      const d = new Date();
      d.setDate(d.getDate() + i);
      return { iso: d.toISOString().split('T')[0], label: i === 0 ? '今天' : i === 1 ? '明天' : '后天' };
    });
  };

  return (
    <div className="min-h-screen bg-white animate-in fade-in duration-300 relative">
      <div className="relative h-80 lg:h-[28rem]">
        <img src={recipe.images?.[0] || 'https://picsum.photos/seed/food/800/600'} className="w-full h-full object-cover" alt={recipe.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <button onClick={onBack} className="absolute top-6 left-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full text-white flex items-center justify-center hover:bg-white/40 transition-all z-10">✕</button>
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <div className="flex gap-2 mb-3">{recipe.tags.map(tag => (<span key={tag} className="px-2 py-1 bg-emerald-500/80 backdrop-blur-sm rounded-md text-[10px] font-bold uppercase tracking-wider">{tag}</span>))}</div>
          <h1 className="text-4xl font-black tracking-tight">{recipe.title}</h1>
        </div>
      </div>

      <div className="px-6 py-10 max-w-3xl mx-auto space-y-12 pb-64"> {/* 增加 pb-64 确保彻底解决遮挡 */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-5 rounded-3xl flex items-center gap-4">
            <span className="text-3xl">⏱️</span>
            <div><p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">准备时间</p><p className="text-lg font-black text-gray-800">{recipe.prepTime} 分钟</p></div>
          </div>
          <div className="bg-gray-50 p-5 rounded-3xl flex items-center gap-4">
            <span className="text-3xl">🔥</span>
            <div><p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">烹饪时间</p><p className="text-lg font-black text-gray-800">{recipe.cookTime} 分钟</p></div>
          </div>
        </div>

        <p className="text-gray-500 leading-relaxed italic border-l-4 border-emerald-500/20 pl-6 text-lg">{recipe.description}</p>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-black text-gray-800 flex items-center gap-3"><span className="w-2 h-8 bg-emerald-500 rounded-full"></span>所需食材</h3>
            <span className="text-[10px] font-black text-gray-400 uppercase bg-gray-100 px-3 py-1 rounded-full">已自动关联家庭库存</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recipe.ingredients.map((ing, idx) => {
              const status = checkIngredientStatus(ing);
              return (
                <div key={idx} className={`p-5 rounded-[2rem] border transition-all ${status.status === 'ok' ? 'bg-white border-gray-100' : 'bg-white border-dashed border-gray-200 shadow-sm'}`}>
                  <div className="flex justify-between items-center mb-3"><span className="font-black text-gray-800">{ing.name}</span><span className="text-emerald-600 font-black">{ing.amount}{ing.unit}</span></div>
                  <div className={`flex items-center justify-between px-4 py-2 rounded-2xl ${status.bgColor}`}><span className={`text-[10px] font-black uppercase tracking-wider ${status.color}`}>{status.text}</span></div>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-black text-gray-800 flex items-center gap-3 mb-8"><span className="w-2 h-8 bg-amber-400 rounded-full"></span>烹饪步骤</h3>
          <div className="space-y-10">
            {recipe.steps.map((step, idx) => (
              <div key={idx} className="flex gap-6 group">
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-gray-900 text-white flex items-center justify-center font-black italic shadow-xl group-hover:scale-110 transition-transform">{idx + 1}</div>
                  {idx < recipe.steps.length - 1 && <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gray-100"></div>}
                </div>
                <div className="pt-2"><p className="text-gray-700 text-lg font-medium leading-relaxed group-hover:text-black transition-colors">{step}</p></div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 核心修改：使用 bottom-[72px] 避开底部主导航栏，提高 z-index */}
      <div className="fixed bottom-[72px] left-0 right-0 p-4 pb-2 bg-gradient-to-t from-white via-white/90 to-transparent z-[90]">
        <div className="max-w-xl mx-auto flex gap-4">
          {showDatePicker ? (
            <div className="flex gap-2 w-full animate-in slide-in-from-bottom duration-300">
              {getQuickDates().map(d => (
                <button key={d.iso} onClick={() => { onPlan(recipe.id, d.iso); setShowDatePicker(false); }} className="flex-1 py-4 bg-emerald-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg active:scale-95 transition-all">{d.label}</button>
              ))}
              <button onClick={() => setShowDatePicker(false)} className="w-12 h-12 flex items-center justify-center text-gray-400 bg-gray-100 rounded-2xl">✕</button>
            </div>
          ) : (
            <>
              <button onClick={() => setShowDatePicker(true)} className="flex-[2] py-4 bg-gray-900 text-white rounded-[1.8rem] font-black text-sm shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-2"><span>📅</span> 安排计划</button>
              {onEdit && <button onClick={onEdit} className="flex-1 py-4 bg-emerald-50 text-emerald-600 rounded-[1.8rem] font-black text-sm border border-emerald-100 active:scale-95 transition-all">编辑</button>}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
