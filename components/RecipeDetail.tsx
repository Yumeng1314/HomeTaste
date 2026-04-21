
import React, { useState, useMemo, useEffect, useRef } from 'react';
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

const getAppetizingLabel = (rating: number) => {
  if (rating >= 4.5) return '绝绝子，必须配三碗米饭！';
  if (rating >= 3.5) return '挺下饭的，味道扎实。';
  if (rating >= 2.5) return '中规中矩，还可以。';
  return '口味清淡，不怎么费米饭。';
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
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isExporting, setIsExporting] = useState(false);
  const [exportHint, setExportHint] = useState('');
  const exportCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [recipe.id]);

  const checkIngredientStatus = (recipeIng: { name: string; amount: number; unit: string }) => {
    const invItem = inventory.find(i => recipeIng.name.includes(i.name) || i.name.includes(recipeIng.name));
    if (!invItem) return { text: '缺货', color: 'text-red-500' };
    if (invItem.amount < recipeIng.amount) return { text: '不足', color: 'text-amber-500' };
    return { text: '充足', color: 'text-emerald-500' };
  };

  const handleSaveExport = async () => {
    if (!exportCardRef.current || isExporting) return;

    setIsExporting(true);
    setExportHint('');
    try {
      const { default: html2canvas } = await import('html2canvas');
      const canvas = await html2canvas(exportCardRef.current, {
        backgroundColor: '#fffcf5',
        scale: Math.min(window.devicePixelRatio || 2, 3),
        useCORS: true,
      });

      const dataUrl = canvas.toDataURL('image/png');
      const blob = await new Promise<Blob | null>((resolve) => {
        canvas.toBlob(resolve, 'image/png');
      });

      if (!blob && !dataUrl) {
        throw new Error('图片生成失败');
      }

      const safeTitle = recipe.title.replace(/[\\/:*?"<>|]/g, '-');
      const file = blob ? new File([blob], `${safeTitle || 'HomeTaste-recipe'}.png`, { type: 'image/png' }) : null;

      if (file && navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: recipe.title,
          text: `${recipe.title} 菜谱导出`,
        });
        setExportHint('已打开系统分享，请直接存到相册。');
      } else {
        const fallbackUrl = blob ? URL.createObjectURL(blob) : dataUrl;
        const link = document.createElement('a');
        link.href = fallbackUrl;
        link.download = `${safeTitle || 'HomeTaste-recipe'}.png`;
        link.target = '_blank';
        link.rel = 'noopener';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        if (blob) {
          setTimeout(() => URL.revokeObjectURL(fallbackUrl), 1000);
        }

        setExportHint('如果没有自动保存，请长按打开的图片再保存到相册。');
      }
    } catch (error) {
      console.error('导出菜谱失败', error);
      const message = error instanceof Error ? error.message : '保存失败';
      setExportHint(message.includes('tainted') || message.includes('cross-origin')
        ? '这道菜的图片来源不允许导出，换一张本地上传的图片会更稳。'
        : `保存失败：${message}`);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white animate-in slide-in-from-bottom duration-500 relative pb-32">
      {/* 全能食谱导出卡片 */}
      {showExportModal && (
        <div className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6 overflow-y-auto" onClick={() => setShowExportModal(false)}>
          <div ref={exportCardRef} className="bg-[#fffcf5] w-full max-w-md rounded-none shadow-2xl p-8 space-y-6 relative border-[12px] border-double border-emerald-950/10 my-10" onClick={e => e.stopPropagation()}>
            {/* 装饰角标 */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-emerald-900/20"></div>
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-emerald-900/20"></div>
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-emerald-900/20"></div>
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-emerald-900/20"></div>

            <button
              onClick={() => setShowExportModal(false)}
              className="absolute top-6 left-6 h-9 px-4 rounded-full border border-emerald-900/10 bg-white/80 text-[11px] font-bold text-emerald-900 shadow-sm"
            >
              返回
            </button>

            <div className="text-center space-y-2 pt-2">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-800/60 block mb-2">{recipe.category}</span>
              <h2 className="text-3xl font-black italic text-emerald-950 font-serif leading-tight">{recipe.title}</h2>
              {recipe.description && <p className="text-xs text-gray-500 font-serif italic px-4">"{recipe.description}"</p>}
            </div>

            <div className="flex justify-center gap-6 py-2 border-t border-b border-emerald-900/10">
               <div className="text-center">
                 <p className="text-[9px] font-black uppercase text-gray-400 tracking-widest">PREP</p>
                 <p className="text-sm font-bold text-emerald-900">{recipe.prepTime} min</p>
               </div>
               <div className="text-center">
                 <p className="text-[9px] font-black uppercase text-gray-400 tracking-widest">COOK</p>
                 <p className="text-sm font-bold text-emerald-900">{recipe.cookTime} min</p>
               </div>
               <div className="text-center">
                 <p className="text-[9px] font-black uppercase text-gray-400 tracking-widest">RATING</p>
                 <p className="text-sm font-bold text-emerald-900">{recipe.rating?.toFixed(1) || 5.0} ★</p>
               </div>
            </div>

            <div className="aspect-video w-full overflow-hidden bg-gray-100 grayscale-[0.2] contrast-125">
               <img src={recipe.images[0]} className="w-full h-full object-cover" alt={recipe.title} />
            </div>

            <div className="space-y-4">
               <h4 className="text-center text-xs font-black uppercase tracking-[0.3em] text-emerald-900 border-b border-emerald-900/10 pb-2">Ingredients</h4>
               <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
                 {recipe.ingredients.map((ing, i) => (
                   <div key={i} className="flex justify-between items-baseline border-b border-emerald-900/5 pb-1">
                     <span className="font-bold text-emerald-950">{ing.name}</span>
                     <span className="text-emerald-800/60 font-medium">{ing.amount}{ing.unit}</span>
                   </div>
                 ))}
               </div>
            </div>

            <div className="space-y-4 pb-4">
               <h4 className="text-center text-xs font-black uppercase tracking-[0.3em] text-emerald-900 border-b border-emerald-900/10 pb-2">Method</h4>
               <div className="space-y-3">
                 {recipe.steps.map((step, i) => (
                   <div key={i} className="flex gap-3 text-xs leading-relaxed text-emerald-950/80">
                     <span className="font-black text-emerald-700">{i+1}.</span>
                     <span>{step}</span>
                   </div>
                 ))}
               </div>
            </div>

            <div className="text-center border-t-2 border-emerald-900/5 pt-4">
               <p className="text-[8px] font-black uppercase tracking-[0.5em] text-emerald-900/40">HomeTaste • Artisan Kitchen</p>
            </div>
          </div>
          <button
            onClick={handleSaveExport}
            disabled={isExporting}
            className="fixed bottom-6 left-6 right-6 py-4 bg-emerald-900 text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-2xl z-50 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isExporting ? '正在生成图片…' : '保存至相册'}
          </button>
          {exportHint && (
            <p className="fixed bottom-24 left-6 right-6 text-center text-[11px] leading-5 text-white/85 z-50">
              {exportHint}
            </p>
          )}
        </div>
      )}

      {/* 头部图片区域 */}
      <div className="relative h-[35vh] overflow-hidden bg-gray-100">
        <div className="w-full h-full flex overflow-x-auto snap-x snap-mandatory no-scrollbar" onScroll={(e) => {
          setActiveImageIdx(Math.round(e.currentTarget.scrollLeft / e.currentTarget.offsetWidth));
        }}>
           {recipe.images?.map((img, i) => (
             <img key={i} src={img} className="w-full h-full object-cover shrink-0 snap-center" alt="" />
           ))}
        </div>
        
        {/* 操作按钮：右上角 */}
        <div className="absolute top-4 right-4 flex gap-2 z-40">
           <button onClick={() => setShowExportModal(true)} className="h-9 px-4 bg-black/40 backdrop-blur-md rounded-full text-white flex items-center justify-center text-xs font-bold gap-1 shadow-lg active:scale-95 transition-all border border-white/10">
             <span>✨ 导出</span>
           </button>
           {onEdit && (
             <button onClick={onEdit} className="h-9 px-4 bg-black/40 backdrop-blur-md rounded-full text-white flex items-center justify-center text-xs font-bold gap-1 shadow-lg active:scale-95 transition-all border border-white/10">
               <span>✎ 编辑</span>
             </button>
           )}
        </div>

        {/* 评分标签 */}
        <div className="absolute bottom-4 right-4 flex gap-2 z-40">
           <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg flex items-center gap-1 border border-white/10 shadow-lg">
              <span className="text-amber-400 text-xs">★</span>
              <span className="text-xs font-bold text-white">{recipe.rating?.toFixed(1) || '5.0'}</span>
           </div>
        </div>

        <div className="absolute top-4 left-4 z-30">
          <button onClick={onBack} className="w-9 h-9 bg-black/30 backdrop-blur-md rounded-full text-white flex items-center justify-center text-lg active:scale-90 transition-all">✕</button>
        </div>

        {recipe.images.length > 1 && (
          <div className="absolute bottom-4 left-4 flex gap-1 z-20">
            {recipe.images.map((_, i) => (
              <div key={i} className={`h-1 rounded-full transition-all duration-300 ${activeImageIdx === i ? 'w-4 bg-white' : 'w-1.5 bg-white/40'}`}></div>
            ))}
          </div>
        )}
      </div>

      <div className="px-5 py-6 max-w-4xl mx-auto space-y-8">
        <header>
           <div className="flex items-center gap-2 mb-2">
             <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded uppercase">{recipe.category}</span>
           </div>
           <h1 className="text-2xl font-black text-gray-900 tracking-tight">{recipe.title}</h1>
           {recipe.description && <p className="text-gray-500 text-sm mt-2 leading-relaxed">{recipe.description}</p>}
           
           <div className="flex gap-6 mt-4 text-xs font-bold text-gray-500">
              <div className="flex items-center gap-1">
                 <span className="text-emerald-600">🕒</span>
                 <span>准备 {recipe.prepTime}分钟</span>
              </div>
              <div className="flex items-center gap-1">
                 <span className="text-orange-500">🔥</span>
                 <span>烹饪 {recipe.cookTime}分钟</span>
              </div>
           </div>
        </header>

        {recipe.appetizingRating && (
          <div className="p-4 bg-orange-50 rounded-xl border border-orange-100/50">
             <p className="text-[10px] font-bold text-orange-400 uppercase tracking-widest mb-1">下饭指数</p>
             <p className="text-sm font-bold text-orange-800 italic">“ {getAppetizingLabel(recipe.appetizingRating)} ”</p>
          </div>
        )}

        {recipe.source?.url && (
           <a href={recipe.source.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-emerald-600 transition-colors bg-gray-50 p-3 rounded-lg">
              <span>🔗 灵感来源</span>
              <span className="text-[10px] opacity-50 truncate flex-1 text-right">{recipe.source.url}</span>
           </a>
        )}

        <section>
          <div className="flex items-baseline justify-between mb-4 pb-2 border-b border-gray-100">
             <h3 className="text-lg font-black text-gray-900">所需食材</h3>
             <span className="text-xs font-bold text-gray-300">{recipe.ingredients.length} 项</span>
          </div>
          <div className="space-y-1">
            {recipe.ingredients.map((ing, i) => {
              const res = checkIngredientStatus(ing);
              return (
                <div key={i} className="flex justify-between items-center py-2 px-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="font-bold text-gray-800 text-sm">{ing.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-600 font-mono">{ing.amount}{ing.unit}</span>
                    <div className={`w-1.5 h-1.5 rounded-full ${res.color.replace('text', 'bg')}`} title={res.text}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-black mb-4 text-gray-900 pb-2 border-b border-gray-100">制作步骤</h3>
          <div className="space-y-6">
            {recipe.steps.map((s, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-emerald-600 font-black text-lg font-serif italic">{i + 1}.</span>
                <p className="text-gray-800 leading-relaxed font-medium text-sm pt-1">{s}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="fixed bottom-6 left-0 right-0 px-6 z-[90]">
        <div className="max-w-2xl mx-auto">
          {showDatePicker ? (
            <div className="bg-white p-4 rounded-2xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.2)] border border-gray-100 space-y-3 animate-in slide-in-from-bottom">
              <div className="flex justify-between items-center px-2">
                <p className="text-xs font-bold text-gray-400">选择烹饪日期</p>
                <button onClick={() => setShowDatePicker(false)} className="text-gray-400 p-2">✕</button>
              </div>
              <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
                {getQuickDates().map(d => (
                  <button key={d.iso} onClick={() => { onPlan(recipe.id, d.iso); setShowDatePicker(false); }} className="shrink-0 w-14 h-16 bg-gray-50 hover:bg-emerald-600 hover:text-white rounded-xl flex flex-col items-center justify-center transition-all">
                    <span className="text-[10px] font-bold opacity-60 mb-0.5">{d.label || d.weekday}</span>
                    <span className="text-lg font-black">{d.day}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <button onClick={() => setShowDatePicker(true)} className="w-full h-12 bg-emerald-900 text-white rounded-xl font-black text-sm shadow-xl flex items-center justify-center gap-2 uppercase tracking-wider active:scale-95 transition-all">
              🍳 加入计划
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
