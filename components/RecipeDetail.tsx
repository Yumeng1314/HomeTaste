
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

  const getIngredientStatus = (recipeIng: { name: string; amount: number }) => {
    const invItem = inventory.find(i => i.name === recipeIng.name);
    if (!invItem) return { status: 'missing', current: 0 };
    if (invItem.amount < recipeIng.amount) return { status: 'low', current: invItem.amount };
    return { status: 'ok', current: invItem.amount };
  };

  const getQuickDates = () => {
    return [0, 1, 2, 3].map(i => {
      const d = new Date();
      d.setDate(d.getDate() + i);
      return {
        iso: d.toISOString().split('T')[0],
        label: i === 0 ? '今天' : i === 1 ? '明天' : i === 2 ? '后天' : `${d.getMonth() + 1}/${d.getDate()}`
      };
    });
  };

  return (
    <div className="min-h-screen bg-white animate-in fade-in duration-300">
      <div className="relative">
        <div className="flex overflow-x-auto snap-x no-scrollbar h-96 lg:h-[32rem] bg-gray-100">
          {(recipe.images?.length > 0 ? recipe.images : ['https://picsum.photos/seed/food/800/600']).map((img, idx) => (
            <img key={idx} src={img} className="snap-center flex-shrink-0 w-full h-full object-cover" alt="" />
          ))}
        </div>
        <button onClick={onBack} className="absolute top-6 left-6 w-12 h-12 bg-black/40 backdrop-blur-md rounded-full text-white flex items-center justify-center z-10">✕</button>
        {onEdit && <button onClick={onEdit} className="absolute top-6 right-6 w-12 h-12 bg-black/40 backdrop-blur-md rounded-full text-white flex items-center justify-center z-10">✎</button>}
      </div>

      <div className="px-6 py-10 -mt-12 bg-white rounded-t-[3.5rem] relative min-h-screen shadow-2xl">
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-4xl font-black text-gray-800 tracking-tight">{recipe.title}</h1>
          <div className="flex gap-1">
            {(recipe.tags || []).map(t => (
              <span key={t} className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black rounded-lg uppercase">{t}</span>
            ))}
          </div>
        </div>
        <p className="text-gray-500 leading-relaxed italic border-l-4 border-emerald-500/20 pl-4 mb-12">{recipe.description || '这道菜还缺个故事...'}</p>

        <div className="grid grid-cols-2 gap-8 mb-16 py-8 border-y border-gray-50">
          <div className="text-center">
            <span className="block text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">总耗时</span>
            <span className="text-2xl font-black text-gray-800">{(recipe.prepTime || 0) + (recipe.cookTime || 0)} <span className="text-xs">MINS</span></span>
          </div>
          <div className="text-center">
            <span className="block text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">食材种类</span>
            <span className="text-2xl font-black text-gray-800">{recipe.ingredients?.length || 0} <span className="text-xs">ITEMS</span></span>
          </div>
        </div>

        <div className="space-y-16 pb-60">
          <section>
            <h3 className="text-xl font-black mb-8 flex items-center gap-3"><span className="w-2 h-7 bg-emerald-500 rounded-full"></span>食材清单</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recipe.ingredients.map((ing, idx) => {
                const check = getIngredientStatus(ing);
                return (
                  <div key={idx} className="bg-gray-50 p-5 rounded-3xl border border-gray-100">
                    <div className="flex justify-between font-black mb-2 text-gray-800">
                      <span>{ing.name}</span>
                      <span className="text-emerald-600">{ing.amount}{ing.unit}</span>
                    </div>
                    <div className={`text-[10px] px-3 py-2 rounded-xl font-black flex justify-between ${check.status === 'ok' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      <span>全家库存: {check.current}{ing.unit}</span>
                      <span>{check.status === 'ok' ? '充足 ✓' : '缺少 ✕'}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <h3 className="text-xl font-black mb-8 flex items-center gap-3"><span className="w-2 h-7 bg-emerald-500 rounded-full"></span>制作步骤</h3>
            <div className="space-y-10">
              {recipe.steps.map((step, idx) => (
                <div key={idx} className="flex gap-6">
                  <span className="w-10 h-10 rounded-2xl bg-gray-900 text-white flex items-center justify-center font-black italic shadow-lg shrink-0">{idx+1}</span>
                  <p className="text-gray-700 font-medium pt-2 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {recipe.source?.url && (
            <section className="pt-10 border-t border-gray-50">
              <h3 className="text-xl font-black mb-6 flex items-center gap-3"><span className="w-2 h-7 bg-amber-400 rounded-full"></span>灵感出处</h3>
              <a href={recipe.source.url} target="_blank" className="flex items-center gap-4 p-6 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:bg-emerald-50 transition-all group">
                <span className="text-3xl">🔗</span>
                <div className="min-w-0">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">点击查看原文</p>
                  <p className="text-sm font-bold text-gray-700 truncate group-hover:text-emerald-600">{recipe.source.url}</p>
                </div>
              </a>
            </section>
          )}
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/80 backdrop-blur-2xl border-t border-gray-100 z-50 max-w-4xl mx-auto">
          {showDatePicker ? (
            <div className="flex gap-2 animate-in slide-in-from-bottom duration-300">
              {getQuickDates().map(d => (
                <button key={d.iso} onClick={() => { onPlan(recipe.id, d.iso); setShowDatePicker(false); }} className={`flex-1 py-4 rounded-3xl text-[10px] font-black uppercase border transition-all ${plans[d.iso]?.includes(recipe.id) ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-gray-50 text-gray-400 border-gray-100'}`}>{d.label}</button>
              ))}
              <button onClick={() => setShowDatePicker(false)} className="px-4 py-4 text-[10px] font-black text-gray-400">取消</button>
            </div>
          ) : (
            <button onClick={() => setShowDatePicker(true)} className="w-full py-5 bg-gray-900 text-white rounded-[2.5rem] font-black text-sm shadow-xl active:scale-95 transition-all">📅 安排家庭烹饪计划</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
