
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

// =============================================================
// 🛠️ 请确保这里的 URL 和 Key 是正确的
// =============================================================
const SUPABASE_URL = ""; 
const SUPABASE_ANON_KEY = ""; 
// =============================================================

const supabase = (SUPABASE_URL && SUPABASE_ANON_KEY) 
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY) 
  : null;

const App: React.FC = () => {
  const [inventory, setInventory] = useState<Ingredient[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [dailyPlans, setDailyPlans] = useState<DailyPlan>({});
  const [dbError, setDbError] = useState<string | null>(null);
  
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('hometaste_profile');
    const randomId = Math.floor(Math.random() * 1000);
    return saved ? JSON.parse(saved) : { 
      name: `成员_${randomId}`, 
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${randomId}`, 
      role: '家庭成员' 
    };
  });

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
    setTimeout(() => setSyncToasts(prev => prev.filter(t => t.id !== id)), 4000);
  }, []);

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
    // 基础加载逻辑：先加载本地缓存或默认数据，确保 App 能“开机”
    const savedInv = localStorage.getItem('hometaste_inventory');
    const savedRec = localStorage.getItem('hometaste_recipes');
    const savedPlans = localStorage.getItem('hometaste_plans');
    
    if (!supabase) {
      setInventory(savedInv ? JSON.parse(savedInv) : INITIAL_INVENTORY);
      setRecipes(savedRec ? JSON.parse(savedRec) : INITIAL_RECIPES);
      setDailyPlans(savedPlans ? JSON.parse(savedPlans) : {});
      return;
    }

    try {
      const [{ data: inv, error: invErr }, { data: rec, error: recErr }, { data: plans, error: planErr }] = await Promise.all([
        supabase.from('inventory').select('*').order('updated_at', { ascending: false }),
        supabase.from('recipes').select('*').order('created_at', { ascending: false }),
        supabase.from('daily_plans').select('*')
      ]);

      if (invErr || recErr || planErr) {
        throw new Error("数据库表可能尚未创建，请检查 Supabase SQL Editor 设置。");
      }

      if (inv) setInventory(inv.map(mapInventoryFromDB));
      if (rec) setRecipes(rec.map(mapRecipeFromDB));
      if (plans) {
        const planMap: DailyPlan = {};
        plans.forEach(p => planMap[p.date] = p.recipe_ids);
        setDailyPlans(planMap);
      }
      setDbError(null);
    } catch (err: any) {
      console.warn("Supabase Sync Failed, using local storage:", err.message);
      setDbError(err.message);
      // 回退到本地数据
      setInventory(savedInv ? JSON.parse(savedInv) : INITIAL_INVENTORY);
      setRecipes(savedRec ? JSON.parse(savedRec) : INITIAL_RECIPES);
      setDailyPlans(savedPlans ? JSON.parse(savedPlans) : {});
    }
  }, []);

  useEffect(() => {
    fetchData();
    // 移除 Loading Screen 的逻辑移到这里，确保无论如何都会移除
    const loader = document.getElementById('loading-screen');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 500);
    }

    if (!supabase) return;

    const channel = supabase.channel('family_sync_v4')
      .on('postgres_changes' as any, { event: '*', schema: 'public', table: 'inventory' }, () => {
        showSyncToast('库存已跨设备同步');
        fetchData();
      })
      .on('postgres_changes' as any, { event: '*', schema: 'public', table: 'recipes' }, () => {
        showSyncToast('食谱库已同步');
        fetchData();
      })
      .on('postgres_changes' as any, { event: '*', schema: 'public', table: 'daily_plans' }, () => {
        showSyncToast('烹饪计划已更新');
        fetchData();
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [fetchData, showSyncToast]);

  useEffect(() => {
    localStorage.setItem('hometaste_profile', JSON.stringify(userProfile));
    // 即使在云端模式，也将数据备份到本地，提高首屏加载速度
    localStorage.setItem('hometaste_inventory', JSON.stringify(inventory));
    localStorage.setItem('hometaste_recipes', JSON.stringify(recipes));
    localStorage.setItem('hometaste_plans', JSON.stringify(dailyPlans));
  }, [inventory, recipes, dailyPlans, userProfile]);

  const handleUpdateInventory = async (id: string, amount: number) => {
    if (supabase && !dbError) {
      await supabase.from('inventory').update({ amount, updated_at: new Date().toISOString() }).eq('id', id);
    } else {
      setInventory(prev => prev.map(i => i.id === id ? { ...i, amount } : i));
    }
  };

  const handleAddInventory = async (item: Partial<Ingredient>) => {
    if (supabase && !dbError) {
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
    if (supabase && !dbError) { await supabase.from('inventory').delete().eq('id', id); }
    else { setInventory(prev => prev.filter(i => i.id !== id)); }
  };

  const handleSaveRecipe = async (recipe: Recipe) => {
    if (supabase && !dbError) {
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

    if (supabase && !dbError) { await supabase.from('daily_plans').upsert({ date, recipe_ids: nextPlans, updated_at: new Date().toISOString() }); }
    else { setDailyPlans(prev => ({ ...prev, [date]: nextPlans })); }
  };

  const handleViewChange = (view: ViewType) => {
    setSelectedRecipe(null); setEditingRecipe(null); setCurrentView(view);
    document.getElementById('main-scroll-container')?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredRecipes = recipes.filter(r => {
    const q = recipeSearchQuery.toLowerCase();
    return r.title.toLowerCase().includes(q) || r.ingredients.some(ing => ing.name.toLowerCase().includes(q));
  });

  const renderView = () => {
    if (editingRecipe) return <AddRecipeView initialRecipe={editingRecipe} onSave={handleSaveRecipe} onCancel={() => setEditingRecipe(null)} />;
    if (selectedRecipe) return <RecipeDetail recipe={selectedRecipe} inventory={inventory} plans={dailyPlans} onBack={() => setSelectedRecipe(null)} onPlan={handleTogglePlan} onEdit={() => { setEditingRecipe(selectedRecipe); setSelectedRecipe(null); }} />;

    switch (currentView) {
      case 'dashboard':
        return (
          <div className="max-w-6xl mx-auto p-6 space-y-10 pb-44 animate-in fade-in">
            <header className="flex justify-between items-center">
              <div className="space-y-1">
                <h2 className="text-3xl font-black text-gray-800 tracking-tight">你好, {userProfile.name}</h2>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${supabase && !dbError ? 'bg-emerald-500 animate-pulse' : 'bg-amber-400'}`}></div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    {supabase && !dbError ? '已连接云端同步' : (supabase && dbError ? '本地模式（表未创建）' : '离线模式')}
                  </p>
                </div>
              </div>
              <img onClick={() => setCurrentView('settings')} src={userProfile.avatar} className="w-14 h-14 rounded-2xl border-2 border-white shadow-lg cursor-pointer hover:scale-105 transition-all" />
            </header>
            
            {dbError && (
              <div className="bg-amber-50 border border-amber-100 p-6 rounded-[2rem] space-y-2">
                <p className="text-[11px] font-black text-amber-600 uppercase tracking-widest flex items-center gap-2">
                   ⚠️ 配置提示
                </p>
                <p className="text-xs text-amber-700 leading-relaxed">
                  检测到 Supabase 已连接但无法读取数据。请确保已在 Supabase SQL Editor 中运行了创建表的脚本。当前已自动切换为本地存储模式，您的更改暂不会同步到其他设备。
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div onClick={() => handleViewChange('inventory')} className="bg-emerald-600 p-8 rounded-[3rem] text-white shadow-xl cursor-pointer hover:-translate-y-1 transition-all">
                <span className="text-5xl block mb-6">📦</span>
                <p className="font-black text-2xl">家庭库存</p>
                <p className="text-xs opacity-70 font-bold uppercase mt-1 tracking-widest">{inventory.length} 种食材</p>
              </div>
              <div onClick={() => handleViewChange('recipes')} className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all">
                <span className="text-5xl block mb-6">📖</span>
                <p className="font-black text-2xl text-gray-800">全家食谱</p>
                <p className="text-xs text-gray-400 font-bold uppercase mt-1 tracking-widest">{recipes.length} 个灵感</p>
              </div>
              <div onClick={() => handleViewChange('plan')} className="bg-amber-400 p-8 rounded-[3rem] text-amber-900 shadow-xl cursor-pointer hover:-translate-y-1 transition-all">
                <span className="text-5xl block mb-6">🗓️</span>
                <p className="font-black text-2xl">烹饪计划</p>
                <p className="text-xs opacity-70 font-bold uppercase mt-1 tracking-widest">规划全家美味</p>
              </div>
            </div>
          </div>
        );

      case 'recipes':
        return (
          <div className="max-w-6xl mx-auto p-6 pb-44 space-y-8 animate-in fade-in">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-4xl font-black text-gray-800 tracking-tighter">家庭食谱库</h2>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Shared Family Secrets</p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <div className="relative flex-1 sm:w-80">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                  <input type="text" placeholder="搜索菜名或食材..." className="w-full pl-12 pr-6 py-4 bg-white border border-gray-100 rounded-2xl text-sm font-bold focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" value={recipeSearchQuery} onChange={(e) => setRecipeSearchQuery(e.target.value)} />
                </div>
                <button onClick={() => setCurrentView('add-recipe')} className="bg-emerald-600 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase shadow-lg hover:bg-emerald-700">新增菜谱</button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRecipes.map(r => (
                <div key={r.id} onClick={() => setSelectedRecipe(r)} className="bg-white rounded-[3rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all group cursor-pointer">
                  <div className="relative h-56 overflow-hidden"><img src={r.images[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                  <div className="p-8">
                    <h4 className="font-black text-xl text-gray-800">{r.title}</h4>
                    <p className="text-xs text-gray-400 mt-2 line-clamp-1">{r.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="max-w-4xl mx-auto p-6 space-y-12 pb-44 animate-in slide-in-from-bottom-4">
            <h2 className="text-3xl font-black text-gray-800 tracking-tight">账户与家庭同步</h2>
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-8">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">个人资料设置</p>
              <div className="flex items-center gap-8">
                <img src={userProfile.avatar} className="w-24 h-24 rounded-2xl object-cover shadow-xl border-2 border-white" />
                <div className="space-y-4 flex-1">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-gray-400 uppercase ml-1">修改昵称</label>
                    <input type="text" className="w-full bg-gray-50 rounded-xl px-6 py-3 font-bold text-gray-800 outline-none focus:ring-2 focus:ring-emerald-500/20" value={userProfile.name} onChange={e => setUserProfile({...userProfile, name: e.target.value})} />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-6 text-center">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">连接状态</p>
              <div className={`p-8 rounded-3xl font-black ${supabase && !dbError ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                {supabase && !dbError ? '🚀 已成功连接 Supabase 实时云端' : (dbError ? '⚠️ Supabase 表未创建，请检查配置' : '⚠️ 尚未配置 API 密钥')}
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
      <main className="flex-1 relative md:pl-64 h-full"><div id="main-scroll-container" className="w-full h-full overflow-y-auto no-scrollbar pb-20">{renderView()}</div></main>
      <div className="md:hidden"><BottomNav currentView={currentView} onViewChange={handleViewChange} /></div>
      
      {/* 实时动态通知气泡 */}
      <div className="fixed top-8 right-8 z-[200] flex flex-col gap-3">
        {syncToasts.map(t => (
          <div key={t.id} className="bg-gray-900/90 backdrop-blur-md text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-right">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-black tracking-widest uppercase">{t.msg}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
