
import React, { useState } from 'react';
import { Recipe, RecipeIngredient, RecipeSource, RecipeCategory } from '../types';

interface AddRecipeViewProps {
  onSave: (recipe: Recipe) => Promise<boolean>;
  onCancel: () => void;
  initialRecipe?: Recipe;
}

const RECIPE_CATEGORIES: RecipeCategory[] = ['素菜小炒', '肉菜小炒', '滋补炖菜', '暖心汤品', '美味主食', '精美甜品', '清爽饮品', '其他'];

const getCategoryIcon = (cat: RecipeCategory) => {
  switch (cat) {
    case '素菜小炒': return '🥗';
    case '肉菜小炒': return '🥩';
    case '滋补炖菜': return '🥘';
    case '暖心汤品': return '🥣';
    case '美味主食': return '🍚';
    case '精美甜品': return '🍰';
    case '清爽饮品': return '🍹';
    default: return '🍴';
  }
};

const compressRecipeImage = (base64Str: string, maxWidth = 800, quality = 0.7): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = base64Str;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      let width = img.width;
      let height = img.height;
      if (width > maxWidth) {
        height = (maxWidth / width) * height;
        width = maxWidth;
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL('image/jpeg', quality));
    };
    img.onerror = () => resolve(base64Str);
  });
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
          reader.onloadend = async () => {
            const compressed = await compressRecipeImage(reader.result as string);
            resolve(compressed);
          };
          reader.readAsDataURL(file);
        });
      });
      Promise.all(readers).then(newImages => {
        setImages(prev => [...prev, ...newImages].slice(0, 6));
      });
    }
  };

  const handleSave = async () => {
    if (!title) return alert('请填写菜谱标题');
    if (images.length === 0) return alert('请上传至少一张成品照片');
    
    setIsSaving(true);
    const source: RecipeSource | undefined = (showSourceInput && sourceUrl) ? {
      type: 'link',
      url: sourceUrl
    } : undefined;

    const recipeData: any = {
      title,
      description: desc,
      category,
      images,
      prepTime: Number(prepTime),
      cookTime: Number(cookTime),
      ingredients: ingredients.filter(i => i.name.trim() !== ''),
      steps: steps.filter(s => s.trim() !== ''),
      tags: initialRecipe?.tags || ['家常'],
      source
    };

    if (initialRecipe?.id) recipeData.id = initialRecipe.id;

    const success = await onSave(recipeData);
    if (!success) {
      setIsSaving(false);
      alert('保存失败，可能是存储空间已满。请尝试减少图片数量。');
    }
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen animate-in fade-in duration-500 pb-40">
      {/* 沉浸式顶部 Header */}
      <header className="sticky top-0 z-[130] bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button onClick={onCancel} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
              <span className="text-lg">✕</span>
            </button>
            <h2 className="text-xl font-black text-gray-900 tracking-tight">
              {initialRecipe ? '编辑美味' : '记录新作品'}
            </h2>
          </div>
          <button 
            onClick={handleSave} 
            disabled={isSaving}
            className="px-6 py-2.5 bg-gray-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg hover:bg-emerald-600 disabled:opacity-50 transition-all"
          >
            {isSaving ? '同步中...' : '发布同步'}
          </button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 mt-8 space-y-8">
        {/* 图片展示区 - 视觉焦点 */}
        <section className="bg-white rounded-[3rem] p-8 shadow-sm border border-gray-100">
          <div className="flex justify-between items-end mb-6 px-2">
            <div>
              <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-400">成品美照</h3>
              <p className="text-xs text-gray-300 font-medium mt-1">展示你的烹饪成果 ({images.length}/6)</p>
            </div>
            {images.length < 6 && (
              <label className="text-emerald-600 text-[10px] font-black uppercase cursor-pointer hover:text-emerald-700">
                + 继续上传
                <input type="file" accept="image/*" multiple onChange={handleImageUpload} className="hidden" />
              </label>
            )}
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {images.map((img, idx) => (
              <div key={idx} className="relative aspect-[4/3] rounded-3xl overflow-hidden group shadow-inner bg-gray-50 border border-gray-100">
                <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <button 
                  onClick={() => setImages(prev => prev.filter((_, i) => i !== idx))}
                  className="absolute top-2 right-2 w-8 h-8 bg-black/40 backdrop-blur-md text-white rounded-full text-xs opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center hover:bg-red-500"
                >
                  ✕
                </button>
              </div>
            ))}
            {images.length === 0 && (
              <label className="col-span-full aspect-[21/9] bg-gray-50 border-2 border-dashed border-gray-200 rounded-[2.5rem] flex flex-col items-center justify-center cursor-pointer hover:bg-emerald-50 hover:border-emerald-200 transition-all group">
                <span className="text-4xl text-gray-200 group-hover:text-emerald-300 transition-colors mb-2">📸</span>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">点击上传第一张照片</span>
                <input type="file" accept="image/*" multiple onChange={handleImageUpload} className="hidden" />
              </label>
            )}
          </div>
        </section>

        {/* 核心信息卡片 */}
        <section className="bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100 space-y-10">
          <div className="space-y-3">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">菜谱标题</label>
            <input 
              type="text" 
              placeholder="这道菜的名字是..." 
              className="w-full text-3xl font-black text-gray-800 border-none p-0 focus:ring-0 placeholder:text-gray-100"
              value={title} 
              onChange={e => setTitle(e.target.value)} 
            />
          </div>

          <div className="space-y-4">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">所属门类</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {RECIPE_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all ${category === cat ? 'bg-gray-900 border-gray-900 text-white shadow-lg' : 'bg-gray-50 border-gray-100 text-gray-400 hover:bg-white hover:border-emerald-200 hover:text-gray-900'}`}
                >
                  <span className="text-xl mb-1">{getCategoryIcon(cat)}</span>
                  <span className="text-[10px] font-black">{cat}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">准备 (分钟)</label>
              <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-2 px-5">
                <span className="text-xl">🔪</span>
                <input type="number" className="bg-transparent w-full py-3 font-black text-lg outline-none" value={prepTime} onChange={e => setPrepTime(Number(e.target.value))} />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">烹饪 (分钟)</label>
              <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-2 px-5">
                <span className="text-xl">🔥</span>
                <input type="number" className="bg-transparent w-full py-3 font-black text-lg outline-none" value={cookTime} onChange={e => setCookTime(Number(e.target.value))} />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">心得寄语</label>
            <textarea 
              placeholder="这道菜有什么特别的技巧，或者背后的故事？" 
              className="w-full bg-gray-50 rounded-[2rem] p-6 h-32 font-medium outline-none border border-transparent focus:border-emerald-100 transition-all resize-none"
              value={desc} 
              onChange={e => setDesc(e.target.value)} 
            />
          </div>

          <div className="pt-6 border-t border-gray-50">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">外部参考 (可选)</h4>
              <button onClick={() => setShowSourceInput(!showSourceInput)} className="text-[9px] font-black text-blue-500 uppercase px-3 py-1 bg-blue-50 rounded-lg">
                {showSourceInput ? '取消链接' : '添加链接'}
              </button>
            </div>
            {showSourceInput && (
              <div className="flex items-center gap-3 bg-blue-50/30 rounded-2xl p-4 px-5 border border-blue-50">
                <span className="text-blue-400">🔗</span>
                <input 
                  type="url" 
                  placeholder="粘贴食谱原网页链接..." 
                  className="bg-transparent w-full text-sm font-bold text-blue-700 outline-none placeholder:text-blue-200"
                  value={sourceUrl} 
                  onChange={e => setSourceUrl(e.target.value)} 
                />
              </div>
            )}
          </div>
        </section>

        {/* 食材清单卡片 */}
        <section className="bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-black text-gray-800">所需食材</h3>
            <button 
              onClick={() => setIngredients([...ingredients, { name: '', amount: 0, unit: 'g' }])}
              className="px-5 py-2.5 bg-emerald-50 text-emerald-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-100 transition-colors"
            >
              + 新增食材
            </button>
          </div>
          
          <div className="space-y-3">
            {ingredients.map((ing, idx) => (
              <div key={idx} className="flex gap-3 items-center group">
                <div className="flex-1 bg-gray-50 rounded-2xl flex items-center px-5 border border-transparent focus-within:border-emerald-200 focus-within:bg-white transition-all">
                  <input 
                    type="text" placeholder="食材名称" 
                    className="flex-[3] bg-transparent py-4 font-black text-sm outline-none" 
                    value={ing.name} onChange={e => { const n = [...ingredients]; n[idx].name = e.target.value; setIngredients(n); }} 
                  />
                  <div className="w-px h-6 bg-gray-200 mx-2"></div>
                  <input 
                    type="number" placeholder="量" 
                    className="flex-1 bg-transparent py-4 font-black text-sm outline-none text-center" 
                    value={ing.amount || ''} onChange={e => { const n = [...ingredients]; n[idx].amount = Number(e.target.value); setIngredients(n); }} 
                  />
                  <input 
                    type="text" placeholder="单位" 
                    className="w-16 bg-transparent py-4 font-black text-[10px] text-gray-400 outline-none text-right uppercase" 
                    value={ing.unit} onChange={e => { const n = [...ingredients]; n[idx].unit = e.target.value; setIngredients(n); }} 
                  />
                </div>
                <button 
                  onClick={() => setIngredients(ingredients.filter((_, i) => i !== idx))}
                  className="w-12 h-12 flex items-center justify-center text-gray-200 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 步骤清单卡片 */}
        <section className="bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-black text-gray-800">烹饪步骤</h3>
            <button 
              onClick={() => setSteps([...steps, ''])}
              className="px-5 py-2.5 bg-emerald-50 text-emerald-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-100 transition-colors"
            >
              + 新增步骤
            </button>
          </div>

          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6 group">
                <div className="flex flex-col items-center gap-3 shrink-0">
                  <div className="w-10 h-10 rounded-2xl bg-gray-900 text-white text-[11px] font-black flex items-center justify-center shadow-lg group-hover:bg-emerald-600 transition-colors">
                    {idx + 1}
                  </div>
                  {idx < steps.length - 1 && <div className="w-0.5 flex-1 bg-gray-100 rounded-full"></div>}
                </div>
                <div className="flex-1 pt-0.5">
                  <textarea 
                    placeholder="描述这个步骤的操作细节..." 
                    className="w-full border-none p-0 py-1 text-gray-700 font-medium outline-none focus:ring-0 resize-none min-h-[60px] placeholder:text-gray-100 leading-relaxed"
                    value={step} 
                    onChange={e => { const n = [...steps]; n[idx] = e.target.value; setSteps(n); }} 
                  />
                  <div className="flex justify-end mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => setSteps(steps.filter((_, i) => i !== idx))}
                      className="text-[9px] font-black text-gray-300 hover:text-red-500 uppercase tracking-widest"
                    >
                      删除此步
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 底部浮动保存栏 (移动端适配) */}
      <div className="fixed bottom-0 left-0 right-0 p-6 z-[140] pointer-events-none">
        <div className="max-w-2xl mx-auto flex gap-4 pointer-events-auto">
          <button 
            onClick={onCancel}
            className="hidden sm:block px-8 h-16 bg-white/80 backdrop-blur-xl border border-gray-100 text-gray-400 font-black rounded-3xl hover:text-gray-900 transition-all shadow-xl"
          >
            放弃修改
          </button>
          <button 
            onClick={handleSave} 
            disabled={isSaving}
            className="flex-1 h-16 bg-gray-900 text-white rounded-3xl font-black text-sm shadow-2xl shadow-emerald-900/10 hover:bg-emerald-600 transition-all flex items-center justify-center gap-3 active:scale-95"
          >
            {isSaving ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                正在发布
              </>
            ) : (
              '发布并实时同步全家'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRecipeView;
