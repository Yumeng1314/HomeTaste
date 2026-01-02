
import React, { useState, useRef } from 'react';
import { Recipe, RecipeIngredient, RecipeSource } from '../types';

interface AddRecipeViewProps {
  onSave: (recipe: Recipe) => void;
  onCancel: () => void;
  initialRecipe?: Recipe;
}

const AddRecipeView: React.FC<AddRecipeViewProps> = ({ onSave, onCancel, initialRecipe }) => {
  const [title, setTitle] = useState(initialRecipe?.title || '');
  const [desc, setDesc] = useState(initialRecipe?.description || '');
  const [prepTime, setPrepTime] = useState(initialRecipe?.prepTime || 15);
  const [cookTime, setCookTime] = useState(initialRecipe?.cookTime || 20);
  const [images, setImages] = useState<string[]>(initialRecipe?.images || []);
  const [ingredients, setIngredients] = useState<RecipeIngredient[]>(() => 
    initialRecipe?.ingredients && initialRecipe.ingredients.length > 0
    ? [...initialRecipe.ingredients] 
    : [{ name: '', amount: 0, unit: 'g' }]
  );
  const [steps, setSteps] = useState<string[]>(() => 
    initialRecipe?.steps && initialRecipe.steps.length > 0
    ? [...initialRecipe.steps]
    : ['']
  );
  
  const [sourceUrl, setSourceUrl] = useState(initialRecipe?.source?.url || '');
  const [showSourceInput, setShowSourceInput] = useState(!!initialRecipe?.source?.url);
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const readers = Array.from(files).map((file: File) => {
        return new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        });
      });
      Promise.all(readers).then(newImages => {
        setImages(prev => [...prev, ...newImages].slice(0, 6));
      });
    }
  };

  const handleSave = () => {
    if (!title) return alert('请填写菜谱标题');
    if (images.length === 0) return alert('请上传至少一张成品照片');
    
    const source: RecipeSource | undefined = showSourceInput && sourceUrl ? {
      type: 'link',
      url: sourceUrl
    } : undefined;

    onSave({
      id: initialRecipe?.id || Math.random().toString(36).substr(2, 9),
      title,
      description: desc,
      images,
      prepTime: Number(prepTime),
      cookTime: Number(cookTime),
      ingredients: ingredients.filter(i => i.name.trim() !== ''),
      steps: steps.filter(s => s.trim() !== ''),
      tags: initialRecipe?.tags || ['家常'],
      source
    });
  };

  return (
    <div className="bg-white min-h-screen animate-in slide-in-from-bottom duration-300 px-6 pb-60">
      <div className="flex justify-between items-center mb-12 pt-8">
        <div>
          <h2 className="text-3xl font-black text-gray-800 tracking-tight">{initialRecipe ? '修改食谱' : '记录新菜谱'}</h2>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Shared Family Gallery</p>
        </div>
        <button onClick={onCancel} className="bg-gray-50 text-gray-400 font-bold p-4 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors">✕</button>
      </div>

      <div className="space-y-16 max-w-2xl mx-auto">
        {/* 图片上传区域 */}
        <section>
          <h3 className="font-black text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            成品展示 ({images.length}/6)
          </h3>
          <div className="grid grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <div key={idx} className="relative aspect-square rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 group">
                <img src={img} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                <button onClick={() => setImages(prev => prev.filter((_, i) => i !== idx))} className="absolute top-3 right-3 bg-black/50 text-white w-8 h-8 rounded-full text-[11px] opacity-0 group-hover:opacity-100 transition-all backdrop-blur-md">✕</button>
              </div>
            ))}
            {images.length < 6 && (
              <label className="aspect-square bg-gray-50 border-2 border-dashed border-gray-200 rounded-[2rem] flex flex-col items-center justify-center cursor-pointer hover:bg-emerald-50 hover:border-emerald-200 transition-all group">
                <span className="text-4xl text-gray-300 group-hover:text-emerald-500 group-hover:scale-110 transition-all">＋</span>
                <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest mt-2 group-hover:text-emerald-400">上传照片</p>
                <input type="file" accept="image/*" multiple onChange={handleImageUpload} className="hidden" />
              </label>
            )}
          </div>
        </section>

        {/* 标题与描述 - 优化字体比例 */}
        <section className="space-y-10">
          <div className="space-y-3">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">菜谱标题</label>
            <input 
              type="text" 
              placeholder="给你的作品起个好听的名字..." 
              className="w-full text-xl font-black border-b-2 border-gray-100 py-3 focus:border-emerald-500 outline-none transition-all placeholder:text-gray-200 placeholder:text-lg placeholder:font-bold" 
              value={title} 
              onChange={e => setTitle(e.target.value)} 
            />
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">准备时间 (min)</label>
              <input type="number" className="w-full bg-gray-50 rounded-2xl p-5 text-lg font-black outline-none focus:ring-4 focus:ring-emerald-500/10 focus:bg-white transition-all" value={prepTime} onChange={e => setPrepTime(Number(e.target.value))} />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">烹饪时间 (min)</label>
              <input type="number" className="w-full bg-gray-50 rounded-2xl p-5 text-lg font-black outline-none focus:ring-4 focus:ring-emerald-500/10 focus:bg-white transition-all" value={cookTime} onChange={e => setCookTime(Number(e.target.value))} />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">心得描述</label>
            <textarea placeholder="简单介绍一下这道菜的特色或背后的故事..." className="w-full bg-gray-50 rounded-[2rem] p-8 h-40 font-medium outline-none focus:ring-4 focus:ring-emerald-500/10 focus:bg-white transition-all resize-none leading-relaxed" value={desc} onChange={e => setDesc(e.target.value)} />
          </div>
        </section>

        {/* 食材与步骤 */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-black text-[11px] uppercase tracking-widest text-gray-400">所需食材库</h3>
            <button onClick={() => setIngredients([...ingredients, { name: '', amount: 0, unit: 'g' }])} className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-5 py-2.5 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all">＋ 添加一行</button>
          </div>
          <div className="space-y-4">
            {ingredients.map((ing, idx) => (
              <div key={idx} className="flex gap-4 items-center animate-in slide-in-from-left-4 duration-200">
                <input type="text" placeholder="食材名称" className="flex-1 bg-gray-50 rounded-2xl p-4 text-sm font-black outline-none focus:bg-white border border-gray-50 focus:border-emerald-200 transition-all" value={ing.name} onChange={e => { const n = [...ingredients]; n[idx].name = e.target.value; setIngredients(n); }} />
                <input type="number" placeholder="量" className="w-24 bg-gray-50 rounded-2xl p-4 text-sm font-black text-center" value={ing.amount || ''} onChange={e => { const n = [...ingredients]; n[idx].amount = Number(e.target.value); setIngredients(n); }} />
                <input type="text" placeholder="单位" className="w-20 bg-gray-50 rounded-2xl p-4 text-sm font-black" value={ing.unit} onChange={e => { const n = [...ingredients]; n[idx].unit = e.target.value; setIngredients(n); }} />
                <button onClick={() => setIngredients(ingredients.filter((_, i) => i !== idx))} className="text-gray-300 hover:text-red-500 p-3 bg-gray-50 rounded-xl">✕</button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-black text-[11px] uppercase tracking-widest text-gray-400">详细烹饪步骤</h3>
            <button onClick={() => setSteps([...steps, ''])} className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-5 py-2.5 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all">＋ 添加步骤</button>
          </div>
          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6 animate-in slide-in-from-bottom-4 duration-300">
                <div className="w-12 h-12 rounded-[1.2rem] bg-gray-900 text-white text-[12px] font-black flex items-center justify-center shrink-0 shadow-lg">{idx+1}</div>
                <div className="flex-1 group">
                  <textarea placeholder="描述该步骤的具体细节..." className="w-full border-b-2 border-gray-50 py-3 outline-none focus:border-emerald-500 resize-none min-h-[60px] font-medium leading-relaxed transition-all" value={step} onChange={e => { const n = [...steps]; n[idx] = e.target.value; setSteps(n); }} />
                  <button onClick={() => setSteps(steps.filter((_, i) => i !== idx))} className="text-[9px] font-black text-gray-300 hover:text-red-500 uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity">删除此步骤</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-8 bg-white/90 backdrop-blur-2xl border-t border-gray-100 z-[120] max-w-4xl mx-auto flex gap-4">
        <button onClick={onCancel} className="hidden sm:block px-8 bg-gray-100 text-gray-400 font-black rounded-[2.5rem] text-sm hover:bg-gray-200 transition-all">取消</button>
        <button onClick={handleSave} className="flex-1 py-6 bg-gray-900 text-white rounded-[2.5rem] font-black text-sm shadow-2xl shadow-gray-900/20 hover:bg-emerald-600 transition-all active:scale-95">保存并发布全家同步</button>
      </div>
    </div>
  );
};

export default AddRecipeView;
