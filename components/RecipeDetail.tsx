
import React, { useState, useMemo } from 'react';
import { Recipe, Ingredient, DailyPlan } from '../types';

// 美东时间工具
const getETDateString = (date: Date = new Date()) => {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date);
};

const getQuickDates = () => {
  const result = [];
  const now = new Date();
  for (let i = 0; i < 7; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    const iso = getETDateString(d);
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
  const [showExport, setShowExport] = useState(false);
  const [exportMode, setExportMode] = useState<'poster' | 'text'>('poster');
  const [scaleFactor, setScaleFactor] = useState(1.0);
  const [isScaled, setIsScaled] = useState(false);

  const checkIngredientStatus = (recipeIng: { name: string; amount: number; unit: string }) => {
    const invItem = inventory.find(i => recipeIng.name.includes(i.name) || i.name.includes(recipeIng.name));
    const neededAmount = isScaled ? Math.round(recipeIng.amount * scaleFactor * 10) / 10 : recipeIng.amount;
    if (!invItem) return { status: 'missing', text: '完全缺少', color: 'text-red-500', bgColor: 'bg-red-50' };
    if (invItem.amount < neededAmount) return { status: 'low', text: '存量不足', color: 'text-amber-600', bgColor: 'bg-amber-50' };
    return { status: 'ok', text: '库存充足', color: 'text-emerald-600', bgColor: 'bg-emerald-50' };
  };

  const generateTextContent = () => {
    const ingText = recipe.ingredients.map(i => `- ${i.name}: ${i.amount}${i.unit}`).join('\n');
    const stepText = recipe.steps.map((s, i) => `${i + 1}. ${s}`).join('\n');
    return `【${recipe.title}】\n口味：⭐${recipe.rating || '暂无'} | 下饭：🍚${recipe.appetizingRating || '暂无'}\n\n[食材]\n${ingText}\n\n[步骤]\n${stepText}\n\n来自 家味同享 (HomeTaste)`;
  };

  return (
    <div className="min-h-screen bg-white animate-in slide-in-from-right duration-300 relative">
      {/* 导出弹窗 */}
      {showExport && (
        <div className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-[3.5rem] overflow-hidden shadow-2xl animate-in zoom-in-95">
            <div className="p-8 border-b flex justify-between items-center">
              <h3 className="font-black text-gray-800">分享食谱分享美好</h3>
              <div className="flex gap-4">
                <button onClick={() => setExportMode('poster')} className={`text-[10px] font-black uppercase tracking-widest ${exportMode === 'poster' ? 'text-emerald-600 underline underline-offset-4' : 'text-gray-300'}`}>海报</button>
                <button onClick={() => setExportMode('text')} className={`text-[10px] font-black uppercase tracking-widest ${exportMode === 'text' ? 'text-emerald-600 underline underline-offset-4' : 'text-gray-300'}`}>文字</button>
              </div>
            </div>
            <div className="p-8 bg-gray-50 max-h-[60vh] overflow-y-auto no-scrollbar">
              {exportMode === 'poster' ? (
                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm space-y-6 max-w-sm mx-auto">
                  <img src={recipe.images?.[0]} className="w-full aspect-square object-cover rounded-[2rem]" />
                  <div className="space-y-2">
                    <h4 className="text-2xl font-black text-gray-900 tracking-tight">{recipe.title}</h4>
                    <div className="flex gap-4">
                      {recipe.rating && <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">⭐ 口味 {recipe.rating}</span>}
                      {recipe.appetizingRating && <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest">🍚 下饭 {recipe.appetizingRating}</span>}
                    </div>
                  </div>
                  <div className="h-px bg-gray-100"></div>
                  <p className="text-[10px] text-gray-400 font-medium leading-relaxed italic line-clamp-4">“{recipe.description}”</p>
                  <div className="pt-4 flex justify-between items-center">
                     <p className="text-[8px] font-black text-gray-300 uppercase tracking-[0.2em]">HOMETASTE · SYNC</p>
                     <span className="text-xl">🥘</span>
                  </div>
                </div>
              ) : (
                <pre className="text-xs font-mono text-gray-700 whitespace-pre-wrap p-6 bg-white rounded-3xl border border-gray-100 leading-relaxed select-all">{generateTextContent()}</pre>
              )}
            </div>
            <div className="p-8 bg-white border-t space-y-3">
              <button onClick={() => { navigator.clipboard.writeText(generateTextContent()); alert('已复制到剪贴板'); }} className="w-full h-14 bg-gray-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl">一键复制分享文字</button>
              <button onClick={() => setShowExport(false)} className="w-full text-[10px] font-black text-gray-300 uppercase tracking-widest">取消返回</button>
            </div>
          </div>
        </div>
      )}

      {/* 顶部海报 */}
      <div className="relative h-80 lg:h-[35rem]">
        <img src={recipe.images?.[0]} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        <div className="absolute top-6 left-6 flex gap-3">
          <button onClick={onBack} className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full text-white flex items-center justify-center hover:bg-white/40 transition-colors shadow-xl">✕</button>
          <button onClick={() => setShowExport(true)} className="px-6 h-10 bg-white/20 backdrop-blur-md rounded-full text-white text-[9px] font-black uppercase tracking-[0.2em] shadow-xl border border-white/10">分享导出</button>
        </div>
        <div className="absolute bottom-10 left-8 right-8 flex items-end justify-between gap-6">
          <div className="flex-1 min-w-0">
            <span className="px-3 py-1 bg-emerald-500/80 backdrop-blur-sm rounded text-[9px] font-black text-white uppercase mb-3 inline-block tracking-widest">{recipe.category}</span>
            <h1 className="text-4xl font-black text-white tracking-tighter drop-shadow-lg truncate">{recipe.title}</h1>
          </div>
          {/* 并排评分勋章（带评语） */}
          <div className="flex gap-2 shrink-0">
             {recipe.rating && (
               <div className="flex flex-col items-center gap-0.5 bg-black/40 backdrop-blur-xl px-3 py-2 rounded-2xl border border-white/10 shadow-2xl">
                 <span className="text-sm font-black text-amber-400">⭐ {recipe.rating}</span>
                 <span className="text-[8px] font-black text-white/40 uppercase tracking-tighter">美味分</span>
               </div>
             )}
             {recipe.appetizingRating && (
               <div className="flex flex-col items-center gap-0.5 bg-black/40 backdrop-blur-xl px-3 py-2 rounded-2xl border border-white/10 shadow-2xl">
                 <span className="text-sm font-black text-orange-400">🍚 {recipe.appetizingRating}</span>
                 <span className="text-[8px] font-black text-white/40 uppercase tracking-tighter">下饭度</span>
               </div>
             )}
          </div>
        </div>
      </div>

      <div className="px-6 py-12 max-w-4xl mx-auto space-y-16 pb-64">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-50/50 p-8 rounded-[2.5rem] text-center border border-gray-100 shadow-sm">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">准备阶段</p>
            <p className="text-2xl font-black text-gray-800">{recipe.prepTime} 分钟</p>
          </div>
          <div className="bg-gray-50/50 p-8 rounded-[2.5rem] text-center border border-gray-100 shadow-sm">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">烹饪时长</p>
            <p className="text-2xl font-black text-gray-800">{recipe.cookTime} 分钟</p>
          </div>
        </div>

        <section>
          <h3 className="text-2xl font-black mb-8 flex items-center gap-3 tracking-tight"><span className="w-2 h-8 bg-emerald-500 rounded-full"></span>所需食材</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recipe.ingredients.map((ing, i) => {
              const res = checkIngredientStatus(ing);
              const amt = isScaled ? Math.round(ing.amount * scaleFactor * 10) / 10 : ing.amount;
              return (
                <div key={i} className="p-6 rounded-[2rem] border flex justify-between items-center bg-white shadow-sm hover:border-emerald-200 transition-colors">
                  <span className="font-black text-gray-800 text-lg">{ing.name}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-black text-gray-400">{amt} {ing.unit}</span>
                    <span className={`text-[9px] font-black uppercase px-3 py-1 rounded-xl shadow-sm ${res.bgColor} ${res.color}`}>{res.text}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-black mb-12 flex items-center gap-3 tracking-tight"><span className="w-2 h-8 bg-amber-400 rounded-full"></span>烹饪步骤</h3>
          <div className="space-y-12">
            {recipe.steps.map((s, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="relative shrink-0">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center font-black text-lg italic shadow-xl group-hover:bg-emerald-600 transition-all duration-300">
                    {i + 1}
                  </div>
                  {i < recipe.steps.length - 1 && <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gray-100 rounded-full"></div>}
                </div>
                <div className="pt-2">
                  <p className="text-gray-700 text-lg font-medium leading-relaxed tracking-tight">{s}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="fixed bottom-24 left-0 right-0 p-6 z-[90] pointer-events-none">
        <div className="max-w-xl mx-auto bg-white/95 backdrop-blur-3xl p-4 rounded-[3.5rem] shadow-2xl border border-gray-100 flex flex-col gap-4 pointer-events-auto transition-all">
          {showDatePicker ? (
            <div className="space-y-5 py-4">
              <div className="flex justify-between items-center px-6">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">选择计划日期 (美东时间)</p>
                <button onClick={() => setShowDatePicker(false)} className="text-gray-300 hover:text-gray-900 transition-colors">✕</button>
              </div>
              <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 px-4 snap-x">
                {getQuickDates().map(d => (
                  <button key={d.iso} onClick={() => { onPlan(recipe.id, d.iso); setShowDatePicker(false); }} className="snap-center shrink-0 w-16 h-24 bg-gray-50 hover:bg-emerald-600 hover:text-white rounded-[2rem] flex flex-col items-center justify-center gap-2 transition-all border border-transparent hover:border-emerald-500 shadow-sm">
                    <span className="text-[10px] font-black uppercase opacity-60 tracking-tighter">{d.label || d.weekday}</span>
                    <span className="text-xl font-black">{d.day}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <button onClick={() => setShowDatePicker(true)} className="w-full h-16 bg-gray-900 text-white rounded-[2rem] font-black text-sm shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3">
              <span className="text-2xl">🗓️</span> 放入家庭烹饪计划
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
