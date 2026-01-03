
import React, { useState, useMemo } from 'react';
import { Recipe, RecipeIngredient, RecipeCategory } from '../types';
import { RECIPE_CATEGORIES } from '../constants';

interface AddRecipeViewProps {
  onSave: (recipe: Recipe) => Promise<boolean>;
  onCancel: () => void;
  initialRecipe?: Recipe;
}

const PLATFORM_MAP: Record<string, { name: string; color: string; icon: string }> = {
  'xiaohongshu.com': { name: '小红书', color: 'bg-[#ff2442]', icon: '📕' },
  'xiachufang.com': { name: '下厨房', color: 'bg-[#f86442]', icon: '🍳' },
  'bilibili.com': { name: 'Bilibili', color: 'bg-[#fb7299]', icon: '📺' },
  'douyin.com': { name: '抖音', color: 'bg-black', icon: '🎵' },
};

const AddRecipeView: React.FC<AddRecipeViewProps> = ({ onSave, onCancel, initialRecipe }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [title, setTitle] = useState(initialRecipe?.title || '');
  const [desc, setDesc] = useState(initialRecipe?.description || '');
  const [category, setCategory] = useState<RecipeCategory>(initialRecipe?.category || '素菜小炒');
  const [prepTime, setPrepTime] = useState(initialRecipe?.prepTime || 15);
  const [cookTime, setCookTime] = useState(initialRecipe?.cookTime || 20);
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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => setImages(prev => [...prev, reader.result as string]);
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const detectedPlatform = useMemo(() => {
    if (!link) return null;
    const key = Object.keys(PLATFORM_MAP).find(domain => link.includes(domain));
    return key ? PLATFORM_MAP[key] : { name: '外部链接', color: 'bg-gray-400', icon: '🔗' };
  }, [link]);

  const handleSave = async () => {
    if (!title || images.length === 0) return alert('请填写标题并至少上传一张照片');
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
    <div className="bg-[#fcfdfe] min-h-screen pb-40 animate-in slide-in-from-right duration-500 pt-16">
      <header className="fixed top-0 left-0 right-0 lg:left-64 z-[120] bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 h-16 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button onClick={onCancel} className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-full text-gray-400">✕</button>
          <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest">{initialRecipe ? '编辑' : '记录'}美味作品</h2>
        </div>
        <button onClick={handleSave} disabled={isSaving} className="px-6 py-2 bg-gray-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg active:scale-95 transition-all">
          {isSaving ? '同步中...' : '完成发布'}
        </button>
      </header>

      <div className="max-w-3xl mx-auto px-6 space-y-8 mt-10">
        {/* 图片管理区 */}
        <section className="space-y-4">
           <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">成品照片 (第一张为封面)</label>
           <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 px-2">
              {images.map((img, idx) => (
                <div key={idx} className="shrink-0 w-48 h-48 bg-gray-100 rounded-[2.5rem] relative overflow-hidden group shadow-md border border-gray-50">
                  <img src={img} className="w-full h-full object-cover" />
                  <button 
                    onClick={() => removeImage(idx)}
                    className="absolute top-3 right-3 w-8 h-8 bg-black/40 backdrop-blur-md text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    ✕
                  </button>
                  {idx === 0 && <span className="absolute bottom-3 left-3 px-2 py-0.5 bg-emerald-500 text-white text-[8px] font-black uppercase rounded-md shadow-sm">封面</span>}
                </div>
              ))}
              <label className="shrink-0 w-48 h-48 bg-gray-50 rounded-[2.5rem] border-2 border-dashed border-gray-200 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                 <span className="text-2xl mb-2">➕</span>
                 <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">添加照片</span>
                 <input type="file" className="hidden" accept="image/*" multiple onChange={handleImageUpload} />
              </label>
           </div>
        </section>

        <section className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm space-y-6">
          <input 
            type="text" 
            placeholder="给你的作品起个名字..." 
            className="w-full text-2xl font-black outline-none placeholder:text-gray-100" 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
          />
          
          <textarea 
            placeholder="分享这道菜的灵感或技巧..." 
            className="w-full bg-gray-50 p-6 rounded-[2rem] h-24 outline-none resize-none text-sm font-medium" 
            value={desc} 
            onChange={e => setDesc(e.target.value)} 
          />
          
          <div className="space-y-3">
             <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest ml-2">所属分类</label>
             <div className="flex flex-wrap gap-2">
                {RECIPE_CATEGORIES.map(cat => (
                  <button 
                    key={cat} 
                    onClick={() => setCategory(cat)} 
                    className={`px-4 py-2 rounded-xl text-[9px] font-black transition-all ${category === cat ? 'bg-emerald-600 text-white shadow-lg' : 'bg-gray-50 text-gray-400'}`}
                  >
                    {cat}
                  </button>
                ))}
             </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm space-y-6">
           <h3 className="font-black text-sm uppercase tracking-widest text-gray-400 flex items-center gap-2">
             <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> 食材清单
           </h3>
           <div className="space-y-2">
              {ingredients.map((ing, i) => (
                <div key={i} className="flex gap-2 group">
                   <input type="text" placeholder="食材" className="flex-1 bg-gray-50 p-4 rounded-2xl text-sm font-bold outline-none focus:ring-2 ring-emerald-100" value={ing.name} onChange={e => { const n = [...ingredients]; n[i].name = e.target.value; setIngredients(n); }} />
                   <input type="text" placeholder="用量" className="w-24 bg-gray-50 p-4 rounded-2xl text-sm font-bold text-center outline-none" value={ing.amount || ''} onChange={e => { const n = [...ingredients]; n[i].amount = Number(e.target.value); setIngredients(n); }} />
                   <button onClick={() => setIngredients(ingredients.filter((_, idx) => idx !== i))} className="px-3 text-gray-300 opacity-0 group-hover:opacity-100">✕</button>
                </div>
              ))}
              <button onClick={() => setIngredients([...ingredients, { name: '', amount: 0, unit: 'g' }])} className="w-full py-4 border-2 border-dashed border-gray-100 rounded-2xl text-[9px] font-black text-emerald-600 uppercase mt-2 hover:bg-emerald-50/50 transition-colors">＋ 新增食材</button>
           </div>
        </section>

        <section className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm space-y-6">
           <h3 className="font-black text-sm uppercase tracking-widest text-gray-400 flex items-center gap-2">
             <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span> 制作步骤
           </h3>
           <div className="space-y-4">
              {steps.map((s, i) => (
                <div key={i} className="flex gap-4 group">
                   <span className="w-8 h-8 bg-gray-900 text-white rounded-xl flex items-center justify-center text-[10px] font-black shrink-0">{i+1}</span>
                   <div className="flex-1 space-y-2">
                      <textarea placeholder="具体操作描述..." className="w-full bg-gray-50 p-4 rounded-2xl text-sm outline-none resize-none font-medium" value={s} onChange={e => { const n = [...steps]; n[i] = e.target.value; setSteps(n); }} />
                      <button onClick={() => setSteps(steps.filter((_, idx) => idx !== i))} className="text-[8px] font-black text-red-300 uppercase opacity-0 group-hover:opacity-100">删除此步骤</button>
                   </div>
                </div>
              ))}
              <button onClick={() => setSteps([...steps, ''])} className="w-full py-4 border-2 border-dashed border-gray-100 rounded-2xl text-[9px] font-black text-gray-400 uppercase hover:bg-gray-50 transition-colors">＋ 新增步骤</button>
           </div>
        </section>

        {/* 灵感来源放在最后 */}
        <section className="bg-gray-900 p-8 rounded-[3rem] text-white space-y-6 shadow-xl">
          <div className="flex justify-between items-center">
            <h3 className="font-black text-sm uppercase tracking-widest text-white/40 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span> 灵感来源
            </h3>
            {detectedPlatform && (
              <div className={`px-3 py-1 rounded-lg ${detectedPlatform.color} text-[8px] font-black flex items-center gap-1.5 animate-in slide-in-from-right`}>
                <span>{detectedPlatform.icon}</span>
                {detectedPlatform.name}
              </div>
            )}
          </div>
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="粘贴来自小红书、下厨房或B站的链接..." 
              className="w-full bg-white/10 px-6 py-4 rounded-2xl text-xs outline-none focus:ring-2 ring-white/20 transition-all font-mono placeholder:text-white/20" 
              value={link} 
              onChange={e => setLink(e.target.value)} 
            />
            <p className="text-[8px] text-white/30 font-black uppercase tracking-widest text-center">记录美味的出处，也是对原创的敬意</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddRecipeView;
