
import React, { useState, useRef } from 'react';
import { Recipe, RecipeIngredient, RecipeCategory } from '../types';
import { RECIPE_CATEGORIES } from '../constants';
import { compressImage } from '../services/images';

interface AddRecipeViewProps {
  onSave: (recipe: Recipe) => Promise<boolean>;
  onCancel: () => void;
  initialRecipe?: Recipe;
  draftKey: string;
}

interface CropState {
  scale: number;
  x: number;
  y: number;
}

interface Draft {
  title: string;
  desc: string;
  category: RecipeCategory;
  images: string[];
  ingredients: RecipeIngredient[];
  steps: string[];
  link: string;
  prepTime: string;
  cookTime: string;
}

const AddRecipeView: React.FC<AddRecipeViewProps> = ({ onSave, onCancel, initialRecipe, draftKey }) => {
  const [draft] = useState<Partial<Draft>>(() => {
    try {
      return JSON.parse(localStorage.getItem(draftKey) || '{}') ?? {};
    } catch {
      return {};
    }
  });
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState(draft.title !== undefined ? '已载入本机草稿' : '');
  const [title, setTitle] = useState(draft.title ?? initialRecipe?.title ?? '');
  const [desc, setDesc] = useState(draft.desc ?? initialRecipe?.description ?? '');
  const [category, setCategory] = useState<RecipeCategory>(draft.category ?? initialRecipe?.category ?? '素菜小炒');
  const [images, setImages] = useState(draft.images ?? initialRecipe?.images ?? []);
  const [ingredients, setIngredients] = useState<RecipeIngredient[]>(() =>
    draft.ingredients ?? (initialRecipe?.ingredients.length ? initialRecipe.ingredients.map(item => ({ ...item })) : [{ name: '', amount: 0, unit: 'g' }]),
  );
  const [steps, setSteps] = useState(draft.steps ?? (initialRecipe?.steps.length ? initialRecipe.steps : ['']));
  const [link, setLink] = useState(draft.link ?? initialRecipe?.source?.url ?? '');
  const [prepTime, setPrepTime] = useState(draft.prepTime ?? String(initialRecipe?.prepTime ?? 15));
  const [cookTime, setCookTime] = useState(draft.cookTime ?? String(initialRecipe?.cookTime ?? 20));

  function saveDraft() {
    try {
      const value: Draft = { title, desc, category, images, ingredients, steps, link, prepTime, cookTime };
      localStorage.setItem(draftKey, JSON.stringify(value));
      setMessage('草稿已保存在这台设备，下次打开可继续。');
    } catch {
      setMessage('本机空间不足，草稿未能保存。可以减少图片后重试。');
    }
  }

  function updateIngredient(index: number, patch: Partial<RecipeIngredient>) {
    setIngredients(previous => previous.map((item, i) => i === index ? { ...item, ...patch } : item));
  }

  // 图片编辑状态
  const [editingImgIdx, setEditingImgIdx] = useState<number | null>(null);
  const [crop, setCrop] = useState<CropState>({ scale: 1, x: 0, y: 0 });
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const lastCrop = useRef({ x: 0, y: 0 });
  const cropContainerRef = useRef<HTMLDivElement>(null);
  
  // Pinch-to-zoom refs
  const pointers = useRef<Map<number, { x: number; y: number }>>(new Map());
  const prevDist = useRef<number | null>(null);

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);
    event.target.value = '';
    if (!files.length) return;
    const remaining = Math.max(0, 5 - images.length);
    if (!remaining) {
      setMessage('每道菜谱最多新增 5 张图片。');
      return;
    }
    setIsUploading(true);
    try {
      const results = await Promise.allSettled(files.slice(0, remaining).map(file => compressImage(file)));
      const valid = results.flatMap(result => result.status === 'fulfilled' ? [result.value] : []);
      setImages(previous => [...previous, ...valid]);
      if (valid.length < results.length) setMessage('部分图片无法读取，可以试试 JPG 或 PNG。');
      else if (files.length > remaining) setMessage('只添加了剩余位置可容纳的图片。');
      else setMessage('');
    } finally {
      setIsUploading(false);
    }
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointers.current.size === 1) {
      isDragging.current = true;
      dragStart.current = { x: e.clientX, y: e.clientY };
      lastCrop.current = { x: crop.x, y: crop.y };
    } else if (pointers.current.size === 2) {
      isDragging.current = false; // Pinch started
      const pts = Array.from(pointers.current.values());
      prevDist.current = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointers.current.size === 2) {
      const pts = Array.from(pointers.current.values());
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);

      if (prevDist.current !== null && prevDist.current > 0) {
        const delta = dist - prevDist.current;
        const zoomFactor = delta * 0.005; 
        setCrop(prev => ({
          ...prev,
          scale: Math.min(3, Math.max(1, prev.scale + zoomFactor))
        }));
      }
      prevDist.current = dist;
    } else if (pointers.current.size === 1 && isDragging.current) {
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;
      setCrop(prev => ({
        ...prev,
        x: lastCrop.current.x + dx,
        y: lastCrop.current.y + dy
      }));
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    pointers.current.delete(e.pointerId);

    if (pointers.current.size < 2) {
      prevDist.current = null;
    }

    if (pointers.current.size === 1) {
      // Transition smoothly back to single finger drag
      const p = pointers.current.values().next().value;
      dragStart.current = { x: p.x, y: p.y };
      lastCrop.current = { x: crop.x, y: crop.y };
      isDragging.current = true;
    } else if (pointers.current.size === 0) {
      isDragging.current = false;
    }
  };

  const handleConfirmCrop = async () => {
    if (editingImgIdx === null || !cropContainerRef.current) return;
    
    try {
        const { default: html2canvas } = await import('html2canvas');
        const canvas = await html2canvas(cropContainerRef.current, {
            useCORS: true,
            backgroundColor: '#111827',
            scale: 2, 
            logging: false,
        });
        
        const croppedImage = canvas.toDataURL('image/jpeg', 0.85);
        
        setImages(prev => {
            const newImages = [...prev];
            newImages[editingImgIdx] = croppedImage;
            return newImages;
        });
        
        setEditingImgIdx(null); 
        setCrop({ scale: 1, x: 0, y: 0 }); 
    } catch (error) {
        console.error("Crop failed:", error);
        alert("图片裁剪失败，请重试");
    }
  };

  const handleSave = async () => {
    if (isSaving || isUploading) return;
    if (!title.trim()) return setMessage('请先填写菜名。');
    const quantities = ingredients.filter(item => item.name.trim()).map(item => ({
      name: item.name.trim(), amount: item.toTaste ? 0 : item.amount,
      unit: item.toTaste ? '' : item.unit.trim(), ...(item.toTaste ? { toTaste: true } : {}),
    }));
    if (quantities.some(item => !item.toTaste && (!Number.isFinite(item.amount) || item.amount <= 0 || !item.unit))) {
      return setMessage('请补齐食材的数量与单位，或者选择「适量」。');
    }
    const duration = [Number(prepTime), Number(cookTime)];
    if (duration.some(value => !Number.isFinite(value) || value < 0)) return setMessage('准备和烹饪时间应大于或等于 0。');
    const url = link.trim();
    if (url) {
      try {
        if (!['http:', 'https:'].includes(new URL(url).protocol)) throw new Error();
      } catch {
        return setMessage('请输入以 https:// 或 http:// 开头的来源链接。');
      }
    }

    setIsSaving(true);
    try {
      const success = await onSave({
        id: initialRecipe?.id ?? '',
        title: title.trim(),
        description: desc.trim(),
        category,
        images,
        prepTime: duration[0],
        cookTime: duration[1],
        ingredients: quantities,
        steps: steps.map(step => step.trim()).filter(Boolean),
        tags: initialRecipe?.tags ?? ['家常'],
        ...(url ? { source: { type: 'link', url } } : {}),
      });
      if (success) {
        try { localStorage.removeItem(draftKey); } catch { /* The recipe itself was saved. */ }
      } else {
        setMessage('菜谱未能保存，可以先存本机草稿。');
      }
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-[#fcfdfe] min-h-screen pb-32 pt-[calc(4rem+env(safe-area-inset-top))] animate-in slide-in-from-bottom duration-300">
      {/* 图片编辑 Modal */}
      {editingImgIdx !== null && (
        <div className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-6 select-none touch-none">
          {/* 裁剪容器 wrapper */}
          <div className="relative w-full max-w-sm aspect-square shadow-2xl rounded-2xl overflow-hidden border border-white/10">
            {/* 实际被截图的区域：必须没有 grid lines */}
            <div ref={cropContainerRef} className="w-full h-full bg-gray-900 relative overflow-hidden">
                <img 
                  src={images[editingImgIdx]} 
                  className="w-full h-full object-cover origin-center cursor-move"
                  style={{ transform: `scale(${crop.scale}) translate(${crop.x}px, ${crop.y}px)`, touchAction: 'none' }}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  onPointerCancel={handlePointerUp}
                  draggable={false}
                  alt="editing"
                />
            </div>

            {/* 网格参考线 - 在截图区域之上，不被包含在 ref 中 */}
            <div className="absolute inset-0 pointer-events-none z-10">
               <div className="absolute top-1/3 left-0 right-0 h-px bg-white/20 shadow-sm"></div>
               <div className="absolute top-2/3 left-0 right-0 h-px bg-white/20 shadow-sm"></div>
               <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white/20 shadow-sm"></div>
               <div className="absolute left-2/3 top-0 bottom-0 w-px bg-white/20 shadow-sm"></div>
               <div className="absolute inset-0 border border-white/20 rounded-2xl"></div>
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
                <button onClick={handleConfirmCrop} className="flex-1 py-3 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-500 transition-colors">确认裁剪</button>
             </div>
             <p className="text-center text-gray-400 text-[10px] font-bold tracking-widest uppercase">单指拖拽 • 双指缩放</p>
          </div>
        </div>
      )}

      <header className="fixed top-0 left-0 right-0 lg:left-64 z-[100] bg-white/90 backdrop-blur-xl border-b border-gray-100 px-4 box-content pt-[env(safe-area-inset-top)] h-16 flex justify-between items-center gap-2">
        <button onClick={onCancel} className="text-gray-400 font-bold text-sm hover:text-gray-900 transition-colors">取消</button>
        <h2 className="mr-auto text-sm font-black text-gray-900">{initialRecipe ? "编辑菜谱" : "记录菜谱"}</h2>
        <button disabled={isUploading || isSaving} onClick={saveDraft} className="min-h-11 px-2 text-sm font-bold text-emerald-800">存草稿</button>
        <button onClick={handleSave} disabled={isSaving || isUploading} className="min-h-11 px-3 py-2 bg-gray-900 text-white rounded-lg text-xs font-bold hover:bg-emerald-600 transition-colors">
          {isSaving ? '保存中' : '保存'}
        </button>
      </header>

      <div className="max-w-2xl mx-auto px-5 space-y-6 mt-4">
        {message && <p className="rounded-xl bg-amber-50 p-3 text-sm text-amber-900" role="status">{message}</p>}
        <section>
           <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
              <label className="shrink-0 w-24 h-24 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center cursor-pointer active:scale-95 transition-all hover:bg-gray-100 hover:border-emerald-200">
                 <span className="text-xl text-gray-400">＋</span>
                 <span className="text-[10px] font-bold text-gray-400 mt-1">{isUploading ? "处理中" : "加照片"}</span>
                 <input type="file" className="hidden" accept="image/*" multiple onChange={handleImageUpload} />
              </label>
              {images.map((img, idx) => (
                <div key={idx} onClick={() => { setEditingImgIdx(idx); setCrop({scale: 1, x: 0, y: 0}); }} className="shrink-0 w-24 h-24 bg-gray-100 rounded-xl relative overflow-hidden group border border-gray-100 cursor-pointer shadow-sm">
                  <img src={img} className="w-full h-full object-cover" alt="recipe thumb" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-[10px] font-bold transition-opacity backdrop-blur-[2px]">点击裁剪</div>
                  {idx === 0 && <span className="absolute bottom-1 left-1 px-1.5 py-0.5 bg-emerald-500 text-white text-[8px] font-bold rounded">封面</span>}
                  <button onClick={(e) => { e.stopPropagation(); setImages(images.filter((_, i) => i !== idx)); }} className="absolute top-1 right-1 w-5 h-5 bg-black/50 text-white rounded-full flex items-center justify-center text-[10px] hover:bg-red-500 transition-colors">✕</button>
                </div>
              ))}
           </div>
        </section>

        <section className="space-y-4">
          <input 
            type="text" maxLength={120}
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

        <section className="grid grid-cols-2 gap-3">
          <label className="min-w-0 text-sm font-bold">准备时间（分钟）
            <input type="number" min="0" step="any" inputMode="decimal" value={prepTime} onChange={event => setPrepTime(event.target.value)} className="mt-1 min-h-11 w-full rounded-xl border border-gray-100 bg-gray-50 px-3" />
          </label>
          <label className="min-w-0 text-sm font-bold">烹饪时间（分钟）
            <input type="number" min="0" step="any" inputMode="decimal" value={cookTime} onChange={event => setCookTime(event.target.value)} className="mt-1 min-h-11 w-full rounded-xl border border-gray-100 bg-gray-50 px-3" />
          </label>
        </section>

        <section className="space-y-3">
           <div className="flex justify-between items-center">
             <h3 className="font-black text-sm text-gray-900">食材清单</h3>
             <span className="text-[10px] font-bold text-gray-400">{ingredients.length} 项</span>
           </div>
           <div className="space-y-2">
              {ingredients.map((ing, index) => (
                <div key={index} className="w-full space-y-2 rounded-xl border border-gray-100 bg-white p-3">
                  <div className="flex gap-2">
                    <input type="text" aria-label={`食材 ${index + 1} 名称`} placeholder="食材名（如牛肉）" maxLength={100}
                      className="min-h-11 min-w-0 flex-1 rounded-xl bg-gray-50 px-3" value={ing.name}
                      onChange={event => updateIngredient(index, { name: event.target.value })} />
                    <button aria-label={`删除食材 ${index + 1}`} className="h-11 w-11 shrink-0 rounded-xl text-sm font-bold text-red-700"
                      onClick={() => setIngredients(items => items.filter((_, i) => i !== index))}>删除</button>
                  </div>
                  <div className="grid grid-cols-3 items-center gap-2">
                    <input type="number" min="0" step="any" inputMode="decimal" aria-label={`食材 ${index + 1} 数量`} placeholder="数量"
                      className="min-h-11 w-full min-w-0 rounded-xl bg-gray-50 px-3 disabled:opacity-50" value={ing.amount || ''} disabled={ing.toTaste}
                      onChange={event => updateIngredient(index, { amount: Number(event.target.value) })} />
                    <input type="text" aria-label={`食材 ${index + 1} 单位`} placeholder="单位" maxLength={20}
                      className="min-h-11 w-full min-w-0 rounded-xl bg-gray-50 px-3 disabled:opacity-50" value={ing.unit} disabled={ing.toTaste}
                      onChange={event => updateIngredient(index, { unit: event.target.value })} />
                    <label className="flex min-h-11 items-center justify-center gap-2 text-sm font-bold">
                      <input type="checkbox" checked={Boolean(ing.toTaste)} onChange={event => updateIngredient(index, { toTaste: event.target.checked })} />
                      适量
                    </label>
                  </div>
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
                   <textarea placeholder="描述步骤..." className="min-w-0 flex-1 bg-gray-50 p-3 rounded-xl text-sm outline-none resize-none font-medium min-h-[80px] focus:bg-white focus:ring-1 ring-emerald-500 transition-all" value={s} onChange={e => { const n = [...steps]; n[i] = e.target.value; setSteps(n); }} />
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
