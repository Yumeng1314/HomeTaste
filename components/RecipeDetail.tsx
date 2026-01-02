
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

  // 核心逻辑：精准对比食材库存
  const checkIngredientStatus = (recipeIng: { name: string; amount: number; unit: string }) => {
    const invItem = inventory.find(i => 
      recipeIng.name.includes(i.name) || i.name.includes(recipeIng.name)
    );
    
    if (!invItem) return { status: 'missing', text: '完全缺少', color: 'text-red-500', bgColor: 'bg-red-50' };
    
    if (invItem.amount < recipeIng.amount) {
      const short = Math.round((recipeIng.amount - invItem.amount) * 10) / 10;
      return { status: 'low', text: `缺少 ${short} ${recipeIng.unit}`, color: 'text-amber-600', bgColor: 'bg-amber-50' };
    }
    
    return { status: 'ok', text: '库存充足', color: 'text-emerald-600', bgColor: 'bg-emerald-50' };
  };

  const getQuickDates = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      dates.push({
        iso: d.toISOString().split('T')[0],
        weekday: d.toLocaleDateString('zh-CN', { weekday: 'short' }),
        day: d.getDate(),
        label: i === 0 ? '今天' : i === 1 ? '明天' : i === 2 ? '后天' : null
      });
    }
    return dates;
  };

  return (
    <div className="min-h-screen bg-white animate-in slide-in-from-right duration-300 relative">
      {/* 顶部海报 */}
      <div className="relative h-80 lg:h-[35rem]">
        <img src={recipe.images?.[0] || 'https://picsum.photos/seed/food/800/600'} className="w-full h-full object-cover" alt={recipe.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <button onClick={onBack} className="absolute top-6 left-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full text-white flex items-center justify-center hover:bg-white/40 z-10 text-xl">✕</button>
        <div className="absolute bottom-10 left-8 right-8 text-white">
          <div className="flex flex-wrap gap-2 mb-4">
            {recipe.tags.map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-emerald-500/80 backdrop-blur-md rounded-xl text-[10px] font-black uppercase tracking-wider">{tag}</span>
            ))}
          </div>
          <h1 className="text-4xl font-black tracking-tighter leading-tight">{recipe.title}</h1>
        </div>
      </div>

      <div className="px-6 py-12 max-w-4xl mx-auto space-y-20 pb-64">
        {/* 时间与简介摘要 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="flex gap-4">
            <div className="flex-1 bg-gray-50 p-6 rounded-[2.5rem] border border-gray-100 flex flex-col items-center justify-center text-center">
              <span className="text-3xl mb-2">🔪</span>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">准备时间</p>
              <p className="text-xl font-black text-gray-800">{recipe.prepTime} 分钟</p>
            </div>
            <div className="flex-1 bg-gray-50 p-6 rounded-[2.5rem] border border-gray-100 flex flex-col items-center justify-center text-center">
              <span className="text-3xl mb-2">🔥</span>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">烹饪时间</p>
              <p className="text-xl font-black text-gray-800">{recipe.cookTime} 分钟</p>
            </div>
          </div>
          <div className="relative pt-4">
            <span className="absolute -top-6 -left-2 text-7xl text-emerald-100/50 font-serif leading-none italic">“</span>
            <p className="text-gray-600 leading-relaxed italic text-lg px-6 relative z-10">{recipe.description}</p>
          </div>
        </div>

        {/* 来源链接 */}
        {recipe.source?.url && (
          <div className="bg-blue-50/50 p-6 rounded-[2.5rem] border border-blue-100 flex items-center justify-between group">
            <div className="flex items-center gap-4 min-w-0">
              <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">🔗</span>
              <div className="min-w-0">
                <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">菜谱详情参考</p>
                <p className="text-xs font-bold text-blue-700 truncate">{recipe.source.url}</p>
              </div>
            </div>
            <a href={recipe.source.url} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95 shrink-0">访问网页</a>
          </div>
        )}

        {/* 食材核对区域 */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-gray-800 flex items-center gap-3">
              <span className="w-2 h-8 bg-emerald-500 rounded-full"></span>
              所需食材对比
            </h3>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest bg-gray-50 px-3 py-1.5 rounded-full">同步自全家冰箱</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recipe.ingredients.map((ing, idx) => {
              const res = checkIngredientStatus(ing);
              return (
                <div key={idx} className={`p-6 rounded-[2.5rem] border transition-all ${res.status === 'ok' ? 'bg-emerald-50/20 border-emerald-100' : 'bg-white border-dashed border-gray-200'}`}>
                  <div className="flex justify-between items-center mb-5">
                    <span className="font-black text-gray-800 text-lg">{ing.name}</span>
                    <span className="text-gray-900 font-black bg-gray-100 px-3 py-1 rounded-xl text-sm">{ing.amount} {ing.unit}</span>
                  </div>
                  <div className={`px-4 py-3 rounded-2xl flex items-center justify-center gap-2 ${res.bgColor}`}>
                    <span className={`text-[10px] font-black uppercase tracking-widest ${res.color}`}>{res.text}</span>
                    {res.status !== 'ok' && <span className="text-base animate-bounce">🛒</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 烹饪步骤区域 */}
        <section>
          <h3 className="text-2xl font-black text-gray-800 flex items-center gap-3 mb-12">
            <span className="w-2 h-8 bg-amber-400 rounded-full"></span>
            详细烹饪步骤
          </h3>
          <div className="space-y-16">
            {recipe.steps.map((step, idx) => (
              <div key={idx} className="flex gap-10 group">
                <div className="relative shrink-0">
                  <div className="w-16 h-16 rounded-[2rem] bg-gray-900 text-white flex items-center justify-center font-black text-2xl italic shadow-2xl group-hover:scale-110 group-hover:bg-emerald-600 transition-all">
                    {idx + 1}
                  </div>
                  {idx < recipe.steps.length - 1 && <div className="absolute top-20 left-1/2 -translate-x-1/2 w-0.5 h-20 bg-gray-100"></div>}
                </div>
                <div className="pt-4 flex-1">
                  <p className="text-gray-700 text-xl font-medium leading-relaxed group-hover:text-black transition-colors">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 底部悬浮控制台 */}
      <div className="fixed bottom-24 left-0 right-0 p-6 z-[90]">
        <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-2xl p-4 rounded-[3.5rem] border border-gray-100 shadow-2xl flex flex-col gap-4 overflow-hidden transition-all duration-300">
          {showDatePicker ? (
            <div className="space-y-4 animate-in slide-in-from-bottom-4">
              <div className="flex justify-between items-center px-4 pt-2">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">选择安排日期 (未来一周)</p>
                <button onClick={() => setShowDatePicker(false)} className="text-gray-300 hover:text-gray-900">✕</button>
              </div>
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 px-2 snap-x">
                {getQuickDates().map(d => (
                  <button 
                    key={d.iso} 
                    onClick={() => { onPlan(recipe.id, d.iso); setShowDatePicker(false); }} 
                    className="snap-center shrink-0 w-16 h-20 bg-gray-50 hover:bg-emerald-600 hover:text-white rounded-2xl flex flex-col items-center justify-center gap-1 transition-all group"
                  >
                    <span className="text-[9px] font-black uppercase tracking-tighter opacity-60 group-hover:opacity-100">{d.label || d.weekday}</span>
                    <span className="text-xl font-black">{d.day}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex gap-3">
              <button onClick={() => setShowDatePicker(true)} className="flex-[3] h-16 bg-gray-900 text-white rounded-[2rem] font-black text-sm shadow-2xl hover:bg-emerald-600 active:scale-95 transition-all flex items-center justify-center gap-4">
                <span className="text-2xl">🗓️</span> 安排今日或未来大餐
              </button>
              {onEdit && (
                <button onClick={onEdit} className="flex-1 h-16 bg-gray-50 text-gray-400 rounded-[2rem] font-black text-sm border border-gray-100 hover:bg-white hover:text-gray-900 transition-all active:scale-95">
                  编辑
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
