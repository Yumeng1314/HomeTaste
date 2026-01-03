
import React, { useState } from 'react';
import { Recipe, RecipeIngredient, RecipeCategory } from '../types';
import { RECIPE_CATEGORIES } from '../constants';

interface AddRecipeViewProps {
  onSave: (recipe: Recipe) => Promise<boolean>;
  onCancel: () => void;
  initialRecipe?: Recipe;
}

const AddRecipeView: React.FC<AddRecipeViewProps> = ({ onSave, onCancel, initialRecipe }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [title, setTitle] = useState(initialRecipe?.title || '');
  const [desc, setDesc] = useState(initialRecipe?.description || '');
  const [category, setCategory] = useState<RecipeCategory>(initialRecipe?.category || '素菜小炒');
  const [prepTime, setPrepTime] = useState(initialRecipe?.prepTime || 15);
  const [cookTime, setCookTime] = useState(initialRecipe?.cookTime || 20);
  const [images, setImages] = useState<string[]>(initialRecipe?.images || []);
  const [ingredients, setIngredients] = useState<RecipeIngredient[]>(() => initialRecipe?.ingredients || [{ name: '', amount: 0, unit: 'g' }]);
  const [steps, setSteps] = useState<string[]>(() => initialRecipe?.steps || ['']);
  const [link, setLink] = useState(initialRecipe?.source?.url || '');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImages(prev => [...prev, reader.result as string]);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    if (!title || images.length === 0) return alert('请填写标题并上传图片');
    setIsSaving(true);
    const success = await onSave({
      id: initialRecipe?.id || '',
      title,
      description: desc,
      category,
      images,
      prepTime,
      cookTime,
      ingredients: ingredients.filter(i => i.name),
      steps: steps.filter(s => s),
      tags: ['家常'],
      source: link ? { type: 'link', url: link } : undefined
    } as Recipe);
    if (!success) setIsSaving(false);
  };

  return (
    <div className="bg-[#fcfdfe] min-h-screen pb-40 animate-in slide-in-from-right duration-500 pt-10">
      <header className="fixed top-0 left-0 right-0 lg:left-64 z-[120] bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 h-16 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button onClick={onCancel} className="text-gray-400">✕</button>
          <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest">{initialRecipe ? '编辑' : '记录'}美味作品</h2>
        </div>
        <button onClick={handleSave} disabled={isSaving} className="px-6 py-2 bg-gray-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg">
          {isSaving ? '同步中...' : '发布'}
        </button>
      </header>

      <div className="max-w-3xl mx-auto px-6 space-y-8 mt-10">
        <section className="space-y-4">
           <div className="aspect-[4/3] bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200 flex items-center justify-center overflow-hidden relative">
              {images.length > 0 ? (
                <img src={images[0]} className="w-full h-full object-cover" />
              ) : (
                <label className="flex flex-col items-center cursor-pointer">
                   <span className="text-3xl mb-2">📸</span>
                   <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">上传成品封面</span>
                   <input type="file" className="hidden" onChange={handleImageUpload} />
                </label>
              )}
           </div>
        </section>

        {/* 强化链接导入模块 */}
        <section className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm space-y-6">
          <input type="text" placeholder="给你的作品起个名字..." className="w-full text-2xl font-black outline-none placeholder:text-gray-100" value={title} onChange={e => setTitle(e.target.value)} />
          
          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
            <label className="text-[9px] font-black text-emerald-600 uppercase tracking-widest mb-2 block">🌍 网页链接导入 (AI 将从链接抓取内容)</label>
            <input type="text" placeholder="https://..." className="w-full bg-white px-4 py-3 rounded-xl text-xs outline-none focus:ring-2 ring-emerald-400 transition-all font-mono" value={link} onChange={e => setLink(e.target.value)} />
          </div>

          <textarea placeholder="分享这道菜的灵感或技巧..." className="w-full bg-gray-50 p-6 rounded-[2rem] h-24 outline-none resize-none text-sm" value={desc} onChange={e => setDesc(e.target.value)} />
          
          <div className="flex flex-wrap gap-2">
             {RECIPE_CATEGORIES.map(cat => (
               <button key={cat} onClick={() => setCategory(cat)} className={`px-4 py-1.5 rounded-xl text-[9px] font-black transition-all ${category === cat ? 'bg-emerald-600 text-white shadow-lg' : 'bg-gray-50 text-gray-400'}`}>{cat}</button>
             ))}
          </div>
        </section>

        <section className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm space-y-6">
           <h3 className="font-black text-sm uppercase tracking-widest text-gray-400">食材清单</h3>
           <div className="space-y-2">
              {ingredients.map((ing, i) => (
                <div key={i} className="flex gap-2">
                   <input type="text" placeholder="食材" className="flex-1 bg-gray-50 p-4 rounded-2xl text-sm font-bold" value={ing.name} onChange={e => { const n = [...ingredients]; n[i].name = e.target.value; setIngredients(n); }} />
                   <input type="number" placeholder="量" className="w-20 bg-gray-50 p-4 rounded-2xl text-sm font-bold text-center" value={ing.amount} onChange={e => { const n = [...ingredients]; n[i].amount = Number(e.target.value); setIngredients(n); }} />
                </div>
              ))}
              <button onClick={() => setIngredients([...ingredients, { name: '', amount: 0, unit: 'g' }])} className="text-[9px] font-black text-emerald-600 uppercase mt-2">＋ 新增食材</button>
           </div>
        </section>

        <section className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm space-y-6">
           <h3 className="font-black text-sm uppercase tracking-widest text-gray-400">制作步骤</h3>
           <div className="space-y-4">
              {steps.map((s, i) => (
                <div key={i} className="flex gap-4">
                   <span className="w-8 h-8 bg-gray-100 rounded-xl flex items-center justify-center text-[10px] font-black shrink-0">{i+1}</span>
                   <textarea placeholder="具体操作描述..." className="flex-1 bg-gray-50 p-4 rounded-2xl text-sm outline-none resize-none" value={s} onChange={e => { const n = [...steps]; n[i] = e.target.value; setSteps(n); }} />
                </div>
              ))}
              <button onClick={() => setSteps([...steps, ''])} className="text-[9px] font-black text-emerald-600 uppercase">＋ 新增步骤</button>
           </div>
        </section>
      </div>
    </div>
  );
};

export default AddRecipeView;