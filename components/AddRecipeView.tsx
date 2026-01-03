
import React, { useState, useRef, useEffect } from 'react';
import { Recipe, RecipeIngredient, RecipeCategory } from '../types';
import { RECIPE_CATEGORIES } from '../constants';

interface AddRecipeViewProps {
  onSave: (recipe: Recipe) => Promise<boolean>;
  onCancel: () => void;
  initialRecipe?: Recipe;
}

interface CropState {
  scale: number;
  x: number;
  y: number;
}

const AddRecipeView: React.FC<AddRecipeViewProps> = ({ onSave, onCancel, initialRecipe }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [title, setTitle] = useState(initialRecipe?.title || '');
  const [desc, setDesc] = useState(initialRecipe?.description || '');
  const [category, setCategory] = useState<RecipeCategory>(initialRecipe?.category || '素菜小炒');
  const [images, setImages] = useState<string[]>(initialRecipe?.images || []);
  const [ingredients, setIngredients] = useState<RecipeIngredient[]>(() => 
    initialRecipe?.ingredients && initialRecipe.ingredients.length > 0 
      ? initialRecipe.ingredients 
      : [{ name: '', amount: 0, unit: 'g' }]
  );
  const [steps, setSteps] = useState<string[]>(() => 
    initialRecipe?.steps && initialRecipe.steps.length > 0 
      ? initialRecipe.steps 
      : ['']
  );
  const [link, setLink] = useState(initialRecipe?.source?.url || '');

  // 图片编辑状态
  const [editingImgIdx, setEditingImgIdx] = useState<number | null>(null);
  const [crop, setCrop] = useState<CropState>({ scale: 1, x: 0, y: 0 });
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const lastCrop = useRef({ x: 0, y: 0 });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach((file: File) => {
        const reader = new FileReader();
        reader.onloadend = () => setImages(prev => [...prev, reader.result as string]);
        reader.readAsDataURL(file);
      });
    }
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    dragStart.current = { x: e.clientX, y: e.clientY };
    lastCrop.current = { x: crop.x, y: crop.y };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    setCrop(prev => ({
      ...prev,
      x: lastCrop.current.x + dx,
      y: lastCrop.current.y + dy
    }));
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDragging.current = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const handleSave = async () => {
    if (!title || images.length === 0) return alert('请填写标题并上传图片');
    setIsSaving(true);
    // 这里保存的是原图 + 裁剪参数（实际应用通常会裁剪成新图，这里简化为保存参数或仅保存原图）
    // 为了简化演示，我们假设用户接受现在的视图作为封面，实际开发可能需要 canvas 裁剪
    const success = await onSave({
      id: initialRecipe?.id || '',
      title,
      description: desc,
      category,
      images,
      prepTime: 15,
      cookTime: 20, 
      ingredients: ingredients.filter(i => i.name),
      steps: steps.filter(s => s),
      tags: ['家常'],
      source: link ? { type: 'link', url: link } : undefined
    } as Recipe);
    if (!success) setIsSaving(false);
  };

  return (
    <div className="bg-[#fcfdfe] min-h-screen pb-32 pt-16 animate-in slide-in-from-bottom duration-300">
      {/* 图片编辑 Modal */}
      {editingImgIdx !== null && (
        <div className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-6 select-none">
          <div className="w-full max-w-sm aspect-square bg-gray-900 overflow-hidden relative rounded-2xl border border-white/10 shadow-2xl touch-none">
            <img 
              src={images[editingImgIdx]} 
              className="w-full h-full object-cover origin-center cursor-move"
              style={{ transform: `scale(${crop.scale}) translate(${crop.x}px, ${crop.y}px)`, touchAction: 'none' }}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              draggable={false}
            />
            {/* 网格参考线 */}
            <div className="absolute inset-0 pointer-events-none border border-white/20">
               <div className="absolute top-1/3 left-0 right-0 h-px bg-white/20"></div>
               <div className="absolute top-2/3 left-0 right-0 h-px bg-white/20"></div>
               <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white/20"></div>
               <div className="absolute left-2/3 top-0 bottom-0 w-px bg-white/20"></div>
            </div>
          </div>
          <div className="mt-8 w-full max-w-sm space-y-6">
             <div className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl">
               <span className="text-white text-xs font-bold w-8">缩放</span>
               <input 
                 type="range" min="1" max="3" step="0.1" 
                 value={crop.scale} 
                 onChange={e => setCrop({...crop, scale: parseFloat(e.target.value)})}
                 className="flex-1 accent-emerald-500 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer" 
               />
               <span className="text-white text-xs font-mono w-8 text-right">{crop.scale.toFixed(1)}x</span>
             </div>
             <div className="flex gap-4">
                <button onClick={() => setCrop({scale: 1, x: 0, y: 0})} className="flex-1 py-3 bg-gray-800 text-white rounded-xl text-xs font-bold hover:bg-gray-700 transition-colors">重置</button>
                <button onClick={() => { setEditingImgIdx(null); }} className="flex-1 py-3 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-500 transition-colors">确认裁剪</button>
             </div>
             <p className="text-center text-gray-400 text-[10px] font-bold tracking-widest uppercase">拖拽图片移动 • 滑动滑块缩放</p>
          </div>
        </div>
      )}

      <header className="fixed top-0 left-0 right-0 lg:left-64 z-[100] bg-white/90 backdrop-blur-xl border-b border-gray-100 px-6 h-16 flex justify-between items-center">
        <button onClick={onCancel} className="text-gray-400 font-bold text-sm hover:text-gray-900 transition-colors">取消</button>
        <h2 className="text-sm font-black text-gray-900">记录美味</h2>
        <button onClick={handleSave} disabled={isSaving} className="px-5 py-2 bg-gray-900 text-white rounded-lg text-xs font-bold hover:bg-emerald-600 transition-colors">
          {isSaving ? '...' : '发布'}
        </button>
      </header>

      <div className="max-w-2xl mx-auto px-5 space-y-8 mt-4">
        <section>
           <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
              <label className="shrink-0 w-24 h-24 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center cursor-pointer active:scale-95 transition-all hover:bg-gray-100 hover:border-emerald-200">
                 <span className="text-xl text-gray-400">＋</span>
                 <span className="text-[10px] font-bold text-gray-400 mt-1">添加</span>
                 <input type="file" className="hidden" accept="image/*" multiple onChange={handleImageUpload} />
              </label>
              {images.map((img, idx) => (
                <div key={idx} onClick={() => { setEditingImgIdx(idx); setCrop({scale: 1, x: 0, y: 0}); }} className="shrink-0 w-24 h-24 bg-gray-100 rounded-xl relative overflow-hidden group border border-gray-100 cursor-pointer shadow-sm">
                  <img src={img} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-[10px] font-bold transition-opacity backdrop-blur-[2px]">点击裁剪</div>
                  {idx === 0 && <span className="absolute bottom-1 left-1 px-1.5 py-0.5 bg-emerald-500 text-white text-[8px] font-bold rounded">封面</span>}
                  <button onClick={(e) => { e.stopPropagation(); setImages(images.filter((_, i) => i !== idx)); }} className="absolute top-1 right-1 w-5 h-5 bg-black/50 text-white rounded-full flex items-center justify-center text-[10px] hover:bg-red-500 transition-colors">✕</button>
                </div>
              ))}
           </div>
        </section>

        <section className="space-y-4">
          <input 
            type="text" 
            placeholder="给这道菜起个名字" 
            className="w-full text-2xl font-black outline-none placeholder:text-gray-300 bg-transparent border-b border-gray-100 pb-2 focus:border-emerald-500 transition-colors" 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
          />
          <textarea 
            placeholder="写下你的烹饪心得..." 
            className="w-full bg-gray-50/50 p-4 rounded-xl h-24 outline-none resize-none text-sm font-medium leading-relaxed focus:bg-white focus:ring-1 ring-emerald-500 transition-all" 
            value={desc} 
            onChange={e => setDesc(e.target.value)} 
          />
          <div className="flex flex-wrap gap-2">
            {RECIPE_CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setCategory(cat)} className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all border ${category === cat ? 'bg-emerald-600 text-white border-emerald-600 shadow-md' : 'bg-white text-gray-500 border-gray-100 hover:border-emerald-200'}`}>
                {cat}
              </button>
            ))}
          </div>
        </section>

        <section className="space-y-3">
           <div className="flex justify-between items-center">
             <h3 className="font-black text-sm text-gray-900">食材清单</h3>
             <span className="text-[10px] font-bold text-gray-400">{ingredients.length} 项</span>
           </div>
           <div className="space-y-2">
              {ingredients.map((ing, i) => (
                <div key={i} className="flex gap-2 items-center">
                   <input type="text" placeholder="食材名 (如: 牛肉)" className="flex-[3] bg-gray-50 px-3 py-3 rounded-xl text-sm font-bold outline-none focus:bg-white focus:ring-1 ring-emerald-500 transition-all" value={ing.name} onChange={e => { const n = [...ingredients]; n[i].name = e.target.value; setIngredients(n); }} />
                   <input type="number" placeholder="数量" className="flex-[1] bg-gray-50 px-2 py-3 rounded-xl text-sm font-bold text-center outline-none focus:bg-white focus:ring-1 ring-emerald-500 transition-all" value={ing.amount || ''} onChange={e => { const n = [...ingredients]; n[i].amount = Number(e.target.value); setIngredients(n); }} />
                   <input type="text" placeholder="单位" className="flex-[1] bg-gray-50 px-2 py-3 rounded-xl text-sm font-bold text-center outline-none focus:bg-white focus:ring-1 ring-emerald-500 transition-all" value={ing.unit} onChange={e => { const n = [...ingredients]; n[i].unit = e.target.value; setIngredients(n); }} />
                   <button onClick={() => setIngredients(ingredients.filter((_, idx) => idx !== i))} className="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-red-500 transition-colors">✕</button>
                </div>
              ))}
              <button onClick={() => setIngredients([...ingredients, { name: '', amount: 0, unit: 'g' }])} className="w-full py-3 bg-emerald-50 text-emerald-600 rounded-xl text-xs font-black hover:bg-emerald-100 transition-colors">+ 添加一行</button>
           </div>
        </section>

        <section className="space-y-3">
           <div className="flex justify-between items-center">
             <h3 className="font-black text-sm text-gray-900">制作步骤</h3>
             <span className="text-[10px] font-bold text-gray-400">{steps.length} 步</span>
           </div>
           <div className="space-y-3">
              {steps.map((s, i) => (
                <div key={i} className="flex gap-3 items-start group">
                   <span className="w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-1 shadow-sm">{i+1}</span>
                   <textarea placeholder="描述步骤..." className="flex-1 bg-gray-50 p-3 rounded-xl text-sm outline-none resize-none font-medium min-h-[80px] focus:bg-white focus:ring-1 ring-emerald-500 transition-all" value={s} onChange={e => { const n = [...steps]; n[i] = e.target.value; setSteps(n); }} />
                   <button onClick={() => setSteps(steps.filter((_, idx) => idx !== i))} className="text-gray-300 hover:text-red-500 pt-2 opacity-50 group-hover:opacity-100 transition-opacity">✕</button>
                </div>
              ))}
              <button onClick={() => setSteps([...steps, ''])} className="w-full py-3 bg-gray-50 text-gray-400 rounded-xl text-xs font-black hover:bg-gray-100 transition-colors">+ 添加步骤</button>
           </div>
        </section>

        <section className="pb-8">
          <input 
            type="text" 
            placeholder="粘贴灵感来源链接 (可选)..." 
            className="w-full bg-gray-50 px-4 py-3 rounded-xl text-xs outline-none focus:bg-white focus:ring-1 ring-emerald-500 transition-all text-gray-600" 
            value={link} 
            onChange={e => setLink(e.target.value)} 
          />
        </section>
      </div>
    </div>
  );
};

export default AddRecipeView;
