
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

  // 核心逻辑：计算食材状态
  const checkIngredientStatus = (recipeIng: { name: string; amount: number; unit: string }) => {
    // 模糊匹配：比如“五个鸡蛋”匹配“鸡蛋”
    const invItem = inventory.find(i => recipeIng.name.includes(i.name) || i.name.includes(recipeIng.name));
    
    if (!invItem) return { status: 'missing', text: '完全缺少', color: 'text-red-500', bgColor: 'bg-red-50', diff: recipeIng.amount };
    
    if (invItem.amount < recipeIng.amount) {
      const short = Math.round((recipeIng.amount - invItem.amount) * 10) / 10;
      return { status: 'low', text: `缺少 ${short}${recipeIng.unit}`, color: 'text-amber-600', bgColor: 'bg-amber-50', diff: short };
    }
    
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
      {/* 顶部海报 */}
      <div className="relative h-80 lg:h-[30rem]">
        <img src={recipe.images?.[0] || 'https://picsum.photos/seed/food/800/600'} className="w-full h-full object-cover" alt={recipe.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <button onClick={onBack} className="absolute top-6 left-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full text-white flex items-center justify-center hover:bg-white/40 z-10">✕</button>
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <div className="flex gap-2 mb-3">
            {recipe.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-emerald-500/80 backdrop-blur-md rounded-lg text-[10px] font-black uppercase tracking-wider">{tag}</span>
            ))}
          </div>
          <h1 className="text-4xl font-black tracking-tighter">{recipe.title}</h1>
        </div>
      </div>

      <div className="px-6 py-12 max-w-3xl mx-auto space-y-16 pb-64">
        {/* 时间摘要 */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-[2rem] flex items-center gap-5 border border-gray-100">
            <span className="text-4xl">🔪</span>
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">准备</p>
              <p className="text-xl font-black text-gray-800">{recipe.prepTime} 分钟</p>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-[2rem] flex items-center gap-5 border border-gray-100">
            <span className="text-4xl">🍳</span>
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">烹饪</p>
              <p className="text-xl font-black text-gray-800">{recipe.cookTime} 分钟</p>
            </div>
          </div>
        </div>

        {/* 简介 */}
        <div className="relative">
          <span className="absolute -top-6 -left-2 text-6xl text-emerald-100 font-serif leading-none">“</span>
          <p className="text-gray-600 leading-relaxed italic text-lg px-6 relative z-10">{recipe.description}</p>
        </div>

        {/* 食材对比清单 */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-gray-800 flex items-center gap-3">
              <span className="w-2 h-8 bg-emerald-500 rounded-full"></span>
              食材核对
            </h3>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">已自动对比实时库存</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recipe.ingredients.map((ing, idx) => {
              const status = checkIngredientStatus(ing);
              return (
                <div key={idx} className={`p-6 rounded-[2.5rem] border transition-all ${status.status === 'ok' ? 'bg-emerald-50/30 border-emerald-100/50' : 'bg-white border-dashed border-gray-200'}`}>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-black text-gray-800 text-lg">{ing.name}</span>
                    <span className="text-gray-900 font-black text-base">{ing.amount}{ing.unit}</span>
                  </div>
                  <div className={`px-4 py-2.5 rounded-2xl flex items-center justify-center gap-2 ${status.bgColor}`}>
                    <span className={`text-[10px] font-black uppercase tracking-widest ${status.color}`}>{status.text}</span>
                    {status.status !== 'ok' && <span className="text-sm">🛒</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 步骤 */}
        <section>
          <h3 className="text-2xl font-black text-gray-800 flex items-center gap-3 mb-10">
            <span className="w-2 h-8 bg-amber-400 rounded-full"></span>
            烹饪步骤
          </h3>
          <div className="space-y-12">
            {recipe.steps.map((step, idx) => (
              <div key={idx} className="flex gap-8 group">
                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-gray-900 text-white flex items-center justify-center font-black text-xl italic shadow-2xl group-hover:scale-110 transition-transform">
                    {idx + 1}
                  </div>
                  {idx < recipe.steps.length - 1 && <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gray-100"></div>}
                </div>
                <div className="pt-3">
                  <p className="text-gray-700 text-lg font-medium leading-relaxed group-hover:text-black transition-colors">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 底部悬浮操作 */}
      <div className="fixed bottom-[88px] left-0 right-0 p-4 z-[90]">
        <div className="max-w-xl mx-auto bg-white/80 backdrop-blur-2xl p-4 rounded-[2.5rem] border border-gray-100 shadow-2xl flex gap-3">
          {showDatePicker ? (
            <div className="flex gap-2 w-full animate-in slide-in-from-bottom">
              {getQuickDates().map(d => (
                <button key={d.iso} onClick={() => { onPlan(recipe.id, d.iso); setShowDatePicker(false); }} className="flex-1 py-5 bg-emerald-600 text-white rounded-[1.8rem] font-black text-[10px] uppercase tracking-[0.2em] shadow-lg active:scale-95 transition-all">{d.label}</button>
              ))}
              <button onClick={() => setShowDatePicker(false)} className="px-5 bg-gray-100 text-gray-400 rounded-[1.8rem]">✕</button>
            </div>
          ) : (
            <>
              <button onClick={() => setShowDatePicker(true)} className="flex-[2] py-5 bg-gray-900 text-white rounded-[1.8rem] font-black text-sm shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3">
                <span className="text-xl">📅</span> 安排全家晚餐
              </button>
              {onEdit && (
                <button onClick={onEdit} className="flex-1 py-5 bg-gray-50 text-gray-400 rounded-[1.8rem] font-black text-sm border border-gray-100 active:scale-95 transition-all">
                  编辑
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
