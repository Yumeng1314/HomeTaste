
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { createClient } from '@supabase/supabase-js';
import { INITIAL_INVENTORY, INITIAL_RECIPES } from './constants';
import { Ingredient, Recipe, ViewType, UserProfile, DailyPlan } from './types';
import BottomNav from './components/BottomNav';
import Sidebar from './components/Sidebar';
import InventoryView from './components/InventoryView';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeView from './components/AddRecipeView';
import PlanView from './components/PlanView';

// =============================================================
// 🛠️ 这里的 URL 和 Key 需要填入你自己的，否则会自动进入离线模式
// =============================================================
const SUPABASE_URL = "https://vonqpvvjhkbfhdojckbb.supabase.co"; 
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvbnFwdnZqaGtiZmhkb2pja2JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczMjAwMzksImV4cCI6MjA4Mjg5NjAzOX0.f2_wB9d_11W1Q0O3Vg5u86a0JmdRQJGl5IiTgrtZwls"; 
// =============================================================

const supabase = (SUPABASE_URL && SUPABASE_ANON_KEY) 
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY) 
  : null;

const App: React.FC = () => {
  const [inventory, setInventory] = useState<Ingredient[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [dailyPlans, setDailyPlans] = useState<DailyPlan>({});
  const [dbError, setDbError] = useState<boolean>(false);
  
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem('hometaste_profile');
      if (saved) return JSON.parse(saved);
    } catch (e) { console.error("Profile parse error", e); }
    return { name: '家庭成员', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Family', role: '大厨' };
  });

  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);
  const [syncToasts, setSyncToasts] = useState<{id: number, msg: string}[]>([]);
  const [recipeSearchQuery, setRecipeSearchQuery] = useState('');
  
  const toastIdCounter = useRef(0);

  const showSyncToast = useCallback((msg: string) => {
    const id = ++toastIdCounter.current;
    setSyncToasts(prev => [...prev, {id, msg}]);
    setTimeout(() => setSyncToasts(prev => prev.filter(t => t.id !== id)), 3000);
  }, []);

  const fetchData = useCallback(async () => {
    // 第一步：立即尝试从本地恢复，确保 UI 不卡顿
    try {
      const savedInv = localStorage.getItem('hometaste_inventory');
      const savedRec = localStorage.getItem('hometaste_recipes');
      const savedPlans = localStorage.getItem('hometaste_plans');
      
      if (savedInv) setInventory(JSON.parse(savedInv));
      else if (inventory.length === 0) setInventory(INITIAL_INVENTORY);
      
      if (savedRec) setRecipes(JSON.parse(savedRec));
      else if (recipes.length === 0) setRecipes(INITIAL_RECIPES);
      
      if (savedPlans) setDailyPlans(JSON.parse(savedPlans));
    } catch (e) {
      console.warn("Local storage parse error, resetting to initial", e);
      setInventory(INITIAL_INVENTORY);
      setRecipes(INITIAL_RECIPES);
    }

    if (!supabase) return;

    // 第二步：尝试从云端拉取更新
    try {
      const [{ data: inv, error: e1 }, { data: rec, error: e2 }, { data: plans, error: e3 }] = await Promise.all([
        supabase.from('inventory').select('*').limit(200),
        supabase.from('recipes').select('*').limit(200),
        supabase.from('daily_plans').select('*').limit(200)
      ]);

      if (e1 || e2 || e3) throw new Error("Cloud fetch failed");

      if (inv) setInventory(inv.map(i => ({
        ...i, 
        amount: Number(i.amount), 
        storageZone: i.storage_zone || '常温', 
        updatedAt: i.updated_at ? new Date(i.updated_at).getTime() : Date.now()
      })));
      
      if (rec) setRecipes(rec.map(r => ({
        ...r, 
        prepTime: r.prep_time || 0, 
        cookTime: r.cook_time || 0
      })));

      if (plans) {
        const planMap: DailyPlan = {};
        plans.forEach(p => { if (p.date) planMap[p.date] = p.recipe_ids || []; });
        setDailyPlans(planMap);
      }
      setDbError(false);
    } catch (err) {
      console.warn("Using Offline Mode:", err);
      setDbError(true);
    }
  }, []);

  useEffect(() => {
    // 强制执行初始化
    fetchData();

    // 加载动画“双保险”：无论后台数据是否加载完，500ms 后强制移除遮罩
    const hideLoader = () => {
      const loader = document.getElementById('loading-screen');
      if (loader) {
        loader.style.transition = 'opacity 0.4s ease';
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 400);
      }
    };
    const forceTimer = setTimeout(hideLoader, 500);

    if (supabase) {
      const channel = supabase.channel('hometaste_realtime_v7')
        .on('postgres_changes' as any, { event: '*', schema: 'public', table: 'inventory' }, () => { showSyncToast('同步：库存已更新'); fetchData(); })
        .on('postgres_changes' as any, { event: '*', schema: 'public', table: 'recipes' }, () => { showSyncToast('同步：食谱已同步'); fetchData(); })
        .on('postgres_changes' as any, { event: '*', schema: 'public', table: 'daily_plans' }, () => { showSyncToast('同步：计划已同步'); fetchData(); })
        .subscribe();
      return () => { clearTimeout(forceTimer); supabase.removeChannel(channel); };
    }
    return () => clearTimeout(forceTimer);
  }, [fetchData, showSyncToast]);

  useEffect(() => {
    try {
      localStorage.setItem('hometaste_inventory', JSON.stringify(inventory));
      localStorage.setItem('hometaste_recipes', JSON.stringify(recipes));
      localStorage.setItem('hometaste_plans', JSON.stringify(dailyPlans));
      localStorage.setItem('hometaste_profile', JSON.stringify(userProfile));
    } catch (e) { console.error("Save local storage failed", e); }
  }, [inventory, recipes, dailyPlans, userProfile]);

  const handleUpdateInventory = async (id: string, amount: number) => {
    setInventory(prev => prev.map(i => i.id === id ? { ...i, amount } : i));
    if (supabase && !dbError) await supabase.from('inventory').update({ amount, updated_at: new Date().toISOString() }).eq('id', id);
  };

  const handleAddInventory = async (item: Partial<Ingredient>) => {
    if (supabase && !dbError) {
      await supabase.from('inventory').insert([{ name: item.name, amount: item.amount, unit: item.unit, category: item.category, storage_zone: item.storageZone }]);
      fetchData();
    } else {
      const newItem = { ...item, id: Math.random().toString(36).substr(2, 9), updatedAt: Date.now() } as Ingredient;
      setInventory(prev => [newItem, ...prev]);
    }
  };

  const handleDeleteInventory = async (id: string) => {
    setInventory(prev => prev.filter(i => i.id !== id));
    if (supabase && !dbError) await supabase.from('inventory').delete().eq('id', id);
  };

  const handleSaveRecipe = async (recipe: Recipe) => {
    setRecipes(prev => {
      const exists = prev.find(r => r.id === recipe.id);
      return exists ? prev.map(r => r.id === recipe.id ? recipe : r) : [recipe, ...prev];
    });
    if (supabase && !dbError) {
      await supabase.from('recipes').upsert([{ id: recipe.id, title: recipe.title, description: recipe.description, images: recipe.images, prep_time: recipe.prepTime, cook_time: recipe.cookTime, ingredients: recipe.ingredients, steps: recipe.steps, tags: recipe.tags }]);
    }
    setEditingRecipe(null); setCurrentView('recipes');
  };

  const handleTogglePlan = async (recipeId: string, date: string) => {
    const nextPlans = (dailyPlans[date] || []).includes(recipeId) ? dailyPlans[date].filter(id => id !== recipeId) : [...(dailyPlans[date] || []), recipeId];
    setDailyPlans(prev => ({ ...prev, [date]: nextPlans }));
    if (supabase && !dbError) await supabase.from('daily_plans').upsert({ date, recipe_ids: nextPlans, updated_at: new Date().toISOString() });
  };

  const filteredRecipes = recipes.filter(r => r.title.toLowerCase().includes(recipeSearchQuery.toLowerCase()));

  const renderView = () => {
    if (editingRecipe) return <AddRecipeView initialRecipe={editingRecipe} onSave={handleSaveRecipe} onCancel={() => setEditingRecipe(null)} />;
    if (selectedRecipe) return <RecipeDetail recipe={selectedRecipe} inventory={inventory} plans={dailyPlans} onBack={() => setSelectedRecipe(null)} onPlan={handleTogglePlan} onEdit={() => { setEditingRecipe(selectedRecipe); setSelectedRecipe(null); }} />;

    switch (currentView) {
      case 'dashboard':
        return (
          <div className="max-w-6xl mx-auto p-6 space-y-8 pb-44 animate-in fade-in">
            <header className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-black text-gray-800">你好, {userProfile.name}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <div className={`w-2 h-2 rounded-full ${supabase && !dbError ? 'bg-emerald-500 animate-pulse' : 'bg-amber-400'}`}></div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{supabase && !dbError ? '云端实时同步中' : '离线存储模式'}</p>
                </div>
              </div>
              <img onClick={() => setCurrentView('settings')} src={userProfile.avatar} className="w-14 h-14 rounded-2xl border-2 border-white shadow-lg cursor-pointer hover:scale-105 transition-all" />
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div onClick={() => setCurrentView('inventory')} className="bg-emerald-600 p-8 rounded-[3rem] text-white shadow-xl cursor-pointer hover:scale-[1.02] transition-all"><span className="text-4xl block mb-4">📦</span><p className="font-black text-xl">家庭库存</p><p className="text-xs opacity-70 uppercase tracking-widest">{inventory.length} 种食材</p></div>
              <div onClick={() => setCurrentView('recipes')} className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm cursor-pointer hover:shadow-xl hover:scale-[1.02] transition-all"><span className="text-4xl block mb-4">📖</span><p className="font-black text-xl text-gray-800">全家食谱</p><p className="text-xs text-gray-400 uppercase tracking-widest">{recipes.length} 个灵感</p></div>
              <div onClick={() => setCurrentView('plan')} className="bg-amber-400 p-8 rounded-[3rem] text-amber-900 shadow-xl cursor-pointer hover:scale-[1.02] transition-all"><span className="text-4xl block mb-4">🗓️</span><p className="font-black text-xl">烹饪计划</p><p className="text-xs opacity-70 uppercase tracking-widest">规划全家美味</p></div>
            </div>
          </div>
        );
      case 'recipes':
        return (
          <div className="max-w-6xl mx-auto p-6 pb-44 space-y-8 animate-in fade-in">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h2 className="text-3xl font-black text-gray-800">家庭食谱库</h2>
              <div className="flex gap-3">
                <input type="text" placeholder="搜索菜谱..." className="px-4 py-2 bg-white border border-gray-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-emerald-500/20" value={recipeSearchQuery} onChange={e => setRecipeSearchQuery(e.target.value)} />
                <button onClick={() => setCurrentView('add-recipe')} className="bg-emerald-600 text-white px-6 py-2 rounded-xl text-xs font-black uppercase shadow-lg">新增</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map(r => (
                <div key={r.id} onClick={() => setSelectedRecipe(r)} className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all cursor-pointer group">
                  <div className="h-48 overflow-hidden"><img src={r.images[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /></div>
                  <div className="p-6"><h4 className="font-black text-gray-800 text-lg">{r.title}</h4></div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'inventory': return <InventoryView inventory={inventory} onAdd={handleAddInventory} onUpdate={handleUpdateInventory} onDelete={handleDeleteInventory} />;
      case 'plan': return <PlanView plans={dailyPlans} recipes={recipes} inventory={inventory} onRemoveFromPlan={handleTogglePlan} onArchive={() => {}} history={[]} />;
      case 'settings':
        return (
          <div className="max-w-2xl mx-auto p-6 space-y-8 pb-44 animate-in slide-in-from-bottom">
            <h2 className="text-2xl font-black text-gray-800">设置与家庭关联</h2>
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-8">
              <div className="flex items-center gap-5">
                <img src={userProfile.avatar} className="w-20 h-20 rounded-2xl border-4 border-white shadow-xl" />
                <div className="flex-1 space-y-1">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">修改昵称</label>
                  <input type="text" className="w-full bg-gray-50 p-4 rounded-xl font-black text-gray-800" value={userProfile.name} onChange={e => setUserProfile({...userProfile, name: e.target.value})} />
                </div>
              </div>
              <div className={`p-8 rounded-[2rem] text-center space-y-2 border ${supabase && !dbError ? 'bg-emerald-50 border-emerald-100 text-emerald-700' : 'bg-amber-50 border-amber-100 text-amber-700'}`}>
                <p className="font-black text-lg">{supabase && !dbError ? '✅ 云端实时同步已开启' : '⚠️ 当前处于离线本地模式'}</p>
                <p className="text-xs opacity-70">如果您已经填写了 API 密钥但看到此提示，请确保 SQL 脚本已在 Supabase 运行。当前修改仅存在本机缓存。</p>
              </div>
            </div>
          </div>
        );
      case 'add-recipe': return <AddRecipeView onSave={handleSaveRecipe} onCancel={() => setCurrentView('recipes')} />;
      default: return null;
    }
  };

  return (
    <div className="h-screen bg-[#fcfdfe] flex flex-col md:flex-row overflow-hidden">
      <div className="hidden md:block"><Sidebar currentView={currentView} onViewChange={setCurrentView} userProfile={userProfile} /></div>
      <main className="flex-1 relative md:pl-64 h-full"><div id="main-scroll-container" className="w-full h-full overflow-y-auto no-scrollbar pb-20">{renderView()}</div></main>
      <div className="md:hidden"><BottomNav currentView={currentView} onViewChange={setCurrentView} /></div>
      <div className="fixed top-6 right-6 z-[200] flex flex-col gap-3">
        {syncToasts.map(t => (
          <div key={t.id} className="bg-gray-900/90 backdrop-blur-md text-white px-6 py-4 rounded-2xl shadow-2xl text-[10px] font-black uppercase tracking-widest animate-in slide-in-from-right flex items-center gap-3">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>{t.msg}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
