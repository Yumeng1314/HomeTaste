
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { createClient } from '@supabase/supabase-js';
import { INITIAL_INVENTORY, INITIAL_RECIPES } from './constants';
import { Ingredient, Recipe, ViewType, UserProfile, DailyPlan, FamilyMember } from './types';
import BottomNav from './components/BottomNav';
import Sidebar from './components/Sidebar';
import InventoryView from './components/InventoryView';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeView from './components/AddRecipeView';
import PlanView from './components/PlanView';

// --- 请在这里填入你的 API 信息 (在 Supabase Settings -> API 获取) ---
const SUPABASE_URL = ""; 
const SUPABASE_ANON_KEY = "";
// -------------------------------------------------------------

const supabase = (SUPABASE_URL && SUPABASE_ANON_KEY) 
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY) 
  : null;

const App: React.FC = () => {
  const [inventory, setInventory] = useState<Ingredient[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [dailyPlans, setDailyPlans] = useState<DailyPlan>({});
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('hometaste_profile');
    return saved ? JSON.parse(saved) : { name: '家庭管理员', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Admin', role: '首席大厨' };
  });

  // 家庭成员状态（在实际项目中可通过数据库 profiles 表获取，此处为模拟同步展示）
  const [familyMembers] = useState<FamilyMember[]>([
    { id: '1', name: '我', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix', role: '首席大厨', isOnline: true, lastActive: '现在' },
    { id: '2', name: '亲爱的', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka', role: '后勤管家', isOnline: false, lastActive: '5分钟前' }
  ]);

  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);
  const [syncToasts, setSyncToasts] = useState<{id: number, msg: string}[]>([]);
  const [recipeSearchQuery, setRecipeSearchQuery] = useState('');
  
  const toastIdCounter = useRef(0);
  const avatarInputRef = useRef<HTMLInputElement>(null);

  const showSyncToast = useCallback((msg: string) => {
    const id = ++toastIdCounter.current;
    setSyncToasts(prev => [...prev, {id, msg}]);
    setTimeout(() => setSyncToasts(prev => prev.filter(t => t.id !== id)), 3000);
  }, []);

  // --- 数据库映射逻辑 ---
  const mapInventoryFromDB = (item: any): Ingredient => ({
    id: item.id,
    name: item.name,
    amount: Number(item.amount),
    unit: item.unit,
    category: item.category,
    storageZone: item.storage_zone,
    updatedAt: new Date(item.updated_at).getTime()
  });

  const mapRecipeFromDB = (item: any): Recipe => ({
    id: item.id,
    title: item.title,
    description: item.description,
    images: item.images,
    prepTime: item.prep_time,
    cookTime: item.cook_time,
    ingredients: item.ingredients || [],
    steps: item.steps || [],
    tags: item.tags || []
  });

  const fetchData = useCallback(async () => {
    if (!supabase) {
      const savedInv = localStorage.getItem('hometaste_inventory');
      const savedRec = localStorage.getItem('hometaste_recipes');
      const savedPlans = localStorage.getItem('hometaste_plans');
      setInventory(savedInv ? JSON.parse(savedInv) : INITIAL_INVENTORY);
      setRecipes(savedRec ? JSON.parse(savedRec) : INITIAL_RECIPES);
      setDailyPlans(savedPlans ? JSON.parse(savedPlans) : {});
      return;
    }

    try {
      const [{ data: inv }, { data: rec }, { data: plans }] = await Promise.all([
        supabase.from('inventory').select('*').order('updated_at', { ascending: false }),
        supabase.from('recipes').select('*').order('created_at', { ascending: false }),
        supabase.from('daily_plans').select('*')
      ]);

      if (inv) setInventory(inv.map(mapInventoryFromDB));
      if (rec) setRecipes(rec.map(mapRecipeFromDB));
      if (plans) {
        const planMap: DailyPlan = {};
        plans.forEach(p => planMap[p.date] = p.recipe_ids);
        setDailyPlans(planMap);
      }
    } catch (err) {
      console.error("Sync Error:", err);
    }
  }, []);

  useEffect(() => {
    fetchData();
    if (!supabase) return;

    const channel = supabase.channel('family_realtime_v2')
      .on('postgres_changes', { event: '*', table: 'inventory' }, () => { showSyncToast('家庭库存已跨设备同步'); fetchData(); })
      .on('postgres_changes', { event: '*', table: 'recipes' }, () => { showSyncToast('共享食谱库已同步更新'); fetchData(); })
      .on('postgres_changes', { event: '*', table: 'daily_plans' }, () => { showSyncToast('烹饪计划已同步'); fetchData(); })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [fetchData, showSyncToast]);

  useEffect(() => {
    localStorage.setItem('hometaste_profile', JSON.stringify(userProfile));
    if (!supabase) {
      localStorage.setItem('hometaste_inventory', JSON.stringify(inventory));
      localStorage.setItem('hometaste_recipes', JSON.stringify(recipes));
      localStorage.setItem('hometaste_plans', JSON.stringify(dailyPlans));
    }
  }, [inventory, recipes, dailyPlans, userProfile]);

  const handleUpdateInventory = async (id: string, amount: number) => {
    if (supabase) {
      await supabase.from('inventory').update({ amount, updated_at: new Date().toISOString() }).eq('id', id);
    } else {
      setInventory(prev => prev.map(i => i.id === id ? { ...i, amount } : i));
    }
  };

  const handleAddInventory = async (item: Partial<Ingredient>) => {
    if (supabase) {
      await supabase.from('inventory').insert([{
        name: item.name, amount: item.amount, unit: item.unit, category: item.category, storage_zone: item.storageZone
      }]);
    } else {
      const newItem: Ingredient = {
        id: Math.random().toString(36).substr(2, 9),
        name: item.name!, amount: item.amount!, unit: item.unit!, category: item.category!, storageZone: item.storageZone!, updatedAt: Date.now()
      };
      setInventory(prev => [newItem, ...prev]);
    }
  };

  const handleDeleteInventory = async (id: string) => {
    if (supabase) { await supabase.from('inventory').delete().eq('id', id); }
    else { setInventory(prev => prev.filter(i => i.id !== id)); }
  };

  const handleSaveRecipe = async (recipe: Recipe) => {
    if (supabase) {
      await supabase.from('recipes').upsert([{
        id: recipe.id, title: recipe.title, description: recipe.description, images: recipe.images, prep_time: recipe.prepTime, cook_time: recipe.cookTime, ingredients: recipe.ingredients, steps: recipe.steps, tags: recipe.tags
      }]);
    } else {
      setRecipes(prev => {
        const exists = prev.find(r => r.id === recipe.id);
        return exists ? prev.map(r => r.id === recipe.id ? recipe : r) : [recipe, ...prev];
      });
    }
    setEditingRecipe(null);
    setCurrentView('recipes');
  };

  const handleTogglePlan = async (recipeId: string, date: string) => {
    const nextPlans = (dailyPlans[date] || []).includes(recipeId)
      ? dailyPlans[date].filter(id => id !== recipeId)
      : [...(dailyPlans[date] || []), recipeId];

    if (supabase) { await supabase.from('daily_plans').upsert({ date, recipe_ids: nextPlans, updated_at: new Date().toISOString() }); }
    else { setDailyPlans(prev => ({ ...prev, [date]: nextPlans })); }
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserProfile(prev => ({ ...prev, avatar: reader.result as string }));
        showSyncToast('资料已跨设备更新');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleViewChange = (view: ViewType) => {
    setSelectedRecipe(null); setEditingRecipe(null); setCurrentView(view);
    document.getElementById('main-scroll-container')?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const loader = document.getElementById('loading-screen');
    if (loader) { loader.style.opacity = '0'; setTimeout(() => loader.remove(), 500); }
  }, []);

  // 增强版搜索逻辑：支持菜名搜索 + 食材搜索
  const filteredRecipes = recipes.filter(r => {
    const q = recipeSearchQuery.toLowerCase();
    const matchesTitle = r.title.toLowerCase().includes(q);
    const matchesIngredients = r.ingredients.some(ing => ing.name.toLowerCase().includes(q));
    const matchesTags = r.tags.some(tag => tag.toLowerCase().includes(q));
    return matchesTitle || matchesIngredients || matchesTags;
  });

  const renderView = () => {
    if (editingRecipe) return <AddRecipeView initialRecipe={editingRecipe} onSave={handleSaveRecipe} onCancel={() => setEditingRecipe(null)} />;
    if (selectedRecipe) return <RecipeDetail recipe={selectedRecipe} inventory={inventory} plans={dailyPlans} onBack={() => setSelectedRecipe(null)} onPlan={handleTogglePlan} onEdit={() => { setEditingRecipe(selectedRecipe); setSelectedRecipe(null); }} />;

    switch (currentView) {
      case 'dashboard':
        return (
          <div className="max-w-6xl mx-auto p-6 space-y-10 pb-44 animate-in fade-in duration-500">
            <header className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-black text-gray-800">你好, {userProfile.name}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <div className={`w-2 h-2 rounded-full ${supabase ? 'bg-emerald-500 animate-pulse' : 'bg-gray-300'}`}></div>
                  <p className={`text-[10px] font-bold uppercase tracking-widest ${supabase ? 'text-emerald-600' : 'text-gray-400'}`}>
                    {supabase ? '双人同步模式已开启' : '本地离线模式'}
                  </p>
                </div>
              </div>
              <img onClick={() => setCurrentView('settings')} src={userProfile.avatar} className="w-14 h-14 rounded-2xl object-cover shadow-xl border-2 border-white cursor-pointer hover:scale-105 transition-transform" />
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div onClick={() => handleViewChange('inventory')} className="bg-emerald-600 p-8 rounded-[3rem] text-white shadow-xl cursor-pointer hover:translate-y-[-4px] transition-all"><span className="text-5xl block mb-6">📦</span><p className="font-black text-2xl">家庭库存</p><p className="text-xs opacity-70 font-bold uppercase tracking-widest">{inventory.length} 种食材</p></div>
              <div onClick={() => handleViewChange('recipes')} className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm cursor-pointer hover:shadow-xl hover:translate-y-[-4px] transition-all"><span className="text-5xl block mb-6">📖</span><p className="font-black text-2xl text-gray-800">全家食谱</p><p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{recipes.length} 个灵感</p></div>
              <div onClick={() => handleViewChange('plan')} className="bg-amber-400 p-8 rounded-[3rem] text-amber-900 shadow-xl cursor-pointer hover:translate-y-[-4px] transition-all"><span className="text-5xl block mb-6">🗓️</span><p className="font-black text-2xl">烹饪计划</p><p className="text-xs opacity-70 font-bold uppercase tracking-widest">规划全家美味</p></div>
            </div>
          </div>
        );

      case 'recipes':
        return (
          <div className="max-w-6xl mx-auto p-6 pb-44 space-y-8 animate-in fade-in">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-4xl font-black text-gray-800 tracking-tighter">家庭食谱库</h2>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Shared Cooking Inspiration</p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <div className="relative flex-1 sm:w-80">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                  <input 
                    type="text" 
                    placeholder="搜索菜名或配料食材..." 
                    className="w-full pl-12 pr-6 py-4 bg-white border border-gray-100 rounded-2xl text-sm font-bold shadow-sm focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                    value={recipeSearchQuery}
                    onChange={(e) => setRecipeSearchQuery(e.target.value)}
                  />
                </div>
                <button onClick={() => setCurrentView('add-recipe')} className="bg-emerald-600 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase shadow-lg hover:bg-emerald-700 transition-all">新增菜谱</button>
              </div>
            </div>
            {filteredRecipes.length === 0 ? (
              <div className="bg-white py-32 rounded-[4rem] border-2 border-dashed border-gray-100 flex flex-col items-center justify-center text-center space-y-4">
                <span className="text-6xl grayscale opacity-20">🥘</span>
                <p className="text-gray-400 font-black text-sm uppercase tracking-widest">未找到相关食谱</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredRecipes.map(r => (
                  <div key={r.id} onClick={() => setSelectedRecipe(r)} className="group cursor-pointer">
                    <div className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-gray-100 group-hover:shadow-2xl transition-all duration-500">
                      <div className="relative h-64 overflow-hidden"><img src={r.images[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /></div>
                      <div className="p-8"><h4 className="font-black text-2xl text-gray-800 group-hover:text-emerald-600 transition-colors">{r.title}</h4></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 'settings':
        return (
          <div className="max-w-4xl mx-auto p-6 space-y-12 pb-44 animate-in slide-in-from-bottom-4">
            <h2 className="text-3xl font-black text-gray-800 tracking-tight">账户与家庭同步管理</h2>
            
            {/* 个人资料 */}
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-8">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">个人资料设置</p>
              <div className="flex flex-col sm:flex-row items-center gap-8">
                <div className="relative group cursor-pointer" onClick={() => avatarInputRef.current?.click()}>
                  <img src={userProfile.avatar} className="w-32 h-32 rounded-[2.5rem] object-cover border-4 border-white shadow-2xl transition-transform group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 rounded-[2.5rem] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><span className="text-white text-[10px] font-black uppercase">更换</span></div>
                  <input ref={avatarInputRef} type="file" accept="image/*" className="hidden" onChange={handleAvatarUpload} />
                </div>
                <div className="flex-1 w-full space-y-6">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">我的昵称</label>
                    <input type="text" className="w-full bg-gray-50 rounded-2xl px-6 py-4 font-black text-gray-800 outline-none border border-transparent focus:border-emerald-100 transition-all" value={userProfile.name} onChange={e => setUserProfile({...userProfile, name: e.target.value})} />
                  </div>
                </div>
              </div>
            </div>

            {/* 家庭成员管理模块 (重写补全) */}
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-8">
              <div className="flex justify-between items-center">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">家庭同步成员</p>
                <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 rounded-full">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-[9px] font-black text-emerald-600 uppercase">群组: HOME-888</span>
                </div>
              </div>
              <div className="space-y-4">
                {familyMembers.map(member => (
                  <div key={member.id} className="flex items-center justify-between p-6 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:border-emerald-100 transition-all">
                    <div className="flex items-center gap-5">
                      <div className="relative">
                        <img src={member.avatar} className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-sm" />
                        <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-gray-50 ${member.isOnline ? 'bg-emerald-500' : 'bg-gray-300'}`}></div>
                      </div>
                      <div>
                        <p className="font-black text-gray-800">{member.name} {member.id === '1' && <span className="text-[9px] text-gray-400 font-bold ml-1">(我)</span>}</p>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">{member.role} · {member.isOnline ? '当前在线' : `上次活跃: ${member.lastActive}`}</p>
                      </div>
                    </div>
                    {member.id !== '1' && (
                      <button className="px-4 py-2 bg-white text-[9px] font-black text-gray-400 hover:text-red-500 hover:border-red-100 border border-gray-100 rounded-xl uppercase transition-all">解除关联</button>
                    )}
                  </div>
                ))}
                <button className="w-full py-6 border-2 border-dashed border-gray-200 rounded-[2.5rem] text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-600 transition-all flex items-center justify-center gap-3">
                  <span className="text-lg">+</span> 邀请另一名家庭成员
                </button>
              </div>
            </div>

            {/* 云端服务状态 */}
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-6 text-center">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">云端同步服务</p>
              <div className={`p-10 rounded-[2.5rem] font-black tracking-[0.2em] border transition-all ${supabase ? 'bg-emerald-50 text-emerald-600 border-emerald-100 shadow-xl shadow-emerald-500/5' : 'bg-amber-50 text-amber-600 border-amber-100'}`}>
                <div className="text-3xl mb-3">{supabase ? 'LIVE ON' : 'OFFLINE'}</div>
                <div className="text-[10px] opacity-70 leading-relaxed font-bold uppercase">
                  {supabase ? '双人同步通道已建立，所有更改将实时推送' : '当前处于离线模式，配置 Supabase 后开启实时同步'}
                </div>
              </div>
            </div>
          </div>
        );

      case 'inventory': return <InventoryView inventory={inventory} onAdd={handleAddInventory} onUpdate={handleUpdateInventory} onDelete={handleDeleteInventory} />;
      case 'plan': return <PlanView plans={dailyPlans} recipes={recipes} inventory={inventory} onRemoveFromPlan={handleTogglePlan} onArchive={() => {}} history={[]} />;
      case 'add-recipe': return <AddRecipeView onSave={handleSaveRecipe} onCancel={() => setCurrentView('recipes')} />;
      default: return null;
    }
  };

  return (
    <div className="h-screen bg-[#fcfdfe] flex flex-col md:flex-row overflow-hidden">
      <div className="hidden md:block"><Sidebar currentView={currentView} onViewChange={handleViewChange} userProfile={userProfile} /></div>
      <main className="flex-1 relative md:pl-64 h-full"><div id="main-scroll-container" className="w-full h-full overflow-y-auto relative no-scrollbar pb-20">{renderView()}</div></main>
      <div className="md:hidden"><BottomNav currentView={currentView} onViewChange={handleViewChange} /></div>
      <div className="fixed top-8 right-8 z-[200] flex flex-col gap-3">
        {syncToasts.map(t => (
          <div key={t.id} className="bg-gray-900/90 backdrop-blur-xl text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-in slide-in-from-right duration-300">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
            <span className="text-[11px] font-black tracking-widest uppercase">{t.msg}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
