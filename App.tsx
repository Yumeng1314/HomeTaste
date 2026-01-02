
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { INITIAL_INVENTORY, INITIAL_RECIPES } from './constants';
import { Ingredient, Recipe, SyncStatus, ViewType, UserProfile, DailyPlan, MenuHistory, FamilyMember } from './types';
import BottomNav from './components/BottomNav';
import Sidebar from './components/Sidebar';
import InventoryView from './components/InventoryView';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeView from './components/AddRecipeView';
import PlanView from './components/PlanView';

const App: React.FC = () => {
  const safeLoad = (key: string, defaultValue: any) => {
    try {
      const saved = localStorage.getItem(key);
      if (!saved) return defaultValue;
      return JSON.parse(saved);
    } catch (e) {
      return defaultValue;
    }
  };

  const [inventory, setInventory] = useState<Ingredient[]>(() => safeLoad('hometaste_inventory', INITIAL_INVENTORY));
  const [recipes, setRecipes] = useState<Recipe[]>(() => safeLoad('hometaste_recipes', INITIAL_RECIPES));
  const [userProfile, setUserProfile] = useState<UserProfile>(() => safeLoad('hometaste_profile', {
    name: '我的昵称',
    avatar: 'https://picsum.photos/seed/chef/100',
    role: '家庭大厨'
  }));
  const [dailyPlans, setDailyPlans] = useState<DailyPlan>(() => safeLoad('hometaste_plans', {}));
  const [menuHistory, setMenuHistory] = useState<MenuHistory[]>(() => safeLoad('hometaste_history', []));
  const [syncStatus, setSyncStatus] = useState<SyncStatus>(() => safeLoad('hometaste_sync_status', {
    lastSynced: Date.now(),
    partnerName: '另一半',
    isOnline: true,
    connectionCode: 'HOME-VIPS-888',
    members: [
      { id: 'm1', name: '另一半', avatar: 'https://picsum.photos/seed/partner/100', role: '帮厨', isOnline: true, lastActive: '刚才' }
    ]
  }));

  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [syncToasts, setSyncToasts] = useState<{id: number, msg: string}[]>([]);
  
  const toastIdCounter = useRef(0);
  const avatarInputRef = useRef<HTMLInputElement>(null);

  const showSyncToast = useCallback((msg: string) => {
    const id = ++toastIdCounter.current;
    setSyncToasts(prev => [...prev, {id, msg}]);
    setTimeout(() => setSyncToasts(prev => prev.filter(t => t.id !== id)), 3000);
  }, []);

  // 核心：处理视图切换，自动关闭子页面
  const handleViewChange = (view: ViewType) => {
    setSelectedRecipe(null);
    setEditingRecipe(null);
    setCurrentView(view);
    // 滚动回顶部
    const container = document.getElementById('main-scroll-container');
    if (container) container.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const loader = document.getElementById('loading-screen');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 500);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('hometaste_inventory', JSON.stringify(inventory));
    localStorage.setItem('hometaste_recipes', JSON.stringify(recipes));
    localStorage.setItem('hometaste_plans', JSON.stringify(dailyPlans));
    localStorage.setItem('hometaste_profile', JSON.stringify(userProfile));
    localStorage.setItem('hometaste_sync_status', JSON.stringify(syncStatus));
  }, [inventory, recipes, dailyPlans, userProfile, syncStatus]);

  const handleUpdateInventory = (id: string, amount: number) => {
    setInventory(prev => prev.map(i => i.id === id ? { ...i, amount, updatedAt: Date.now() } : i));
    showSyncToast('库存已同步至家庭云端');
  };

  const handleAddInventory = (item: Partial<Ingredient>) => {
    const newItem: Ingredient = {
      id: Math.random().toString(36).substr(2, 9),
      name: item.name!,
      amount: item.amount!,
      unit: item.unit!,
      category: item.category!,
      storageZone: item.storageZone!,
      updatedAt: Date.now()
    };
    setInventory(prev => [newItem, ...prev]);
    showSyncToast(`${newItem.name} 已入库`);
  };

  const handleSaveRecipe = (recipe: Recipe) => {
    setRecipes(prev => {
      const exists = prev.find(r => r.id === recipe.id);
      return exists ? prev.map(r => r.id === recipe.id ? recipe : r) : [recipe, ...prev];
    });
    setEditingRecipe(null);
    setCurrentView('recipes');
    showSyncToast(`《${recipe.title}》已更新并同步`);
  };

  const handleTogglePlan = (recipeId: string, date: string) => {
    setDailyPlans(prev => {
      const dayPlans = prev[date] || [];
      const isAdded = dayPlans.includes(recipeId);
      const nextPlans = isAdded ? dayPlans.filter(id => id !== recipeId) : [...dayPlans, recipeId];
      showSyncToast(isAdded ? '已移出计划' : '计划已同步');
      return { ...prev, [date]: nextPlans };
    });
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserProfile(prev => ({ ...prev, avatar: reader.result as string }));
        showSyncToast('头像已同步');
      };
      reader.readAsDataURL(file);
    }
  };

  const removeMember = (id: string) => {
    setSyncStatus(prev => ({
      ...prev,
      members: prev.members.filter(m => m.id !== id)
    }));
    showSyncToast('成员已解除关联');
  };

  const filteredRecipes = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return recipes;
    return recipes.filter(r => r.title.toLowerCase().includes(query));
  }, [recipes, searchQuery]);

  const renderView = () => {
    if (editingRecipe) return <AddRecipeView initialRecipe={editingRecipe} onSave={handleSaveRecipe} onCancel={() => setEditingRecipe(null)} />;
    if (selectedRecipe) return <RecipeDetail recipe={selectedRecipe} inventory={inventory} plans={dailyPlans} onBack={() => setSelectedRecipe(null)} onPlan={handleTogglePlan} onEdit={() => { setEditingRecipe(selectedRecipe); setSelectedRecipe(null); }} />;

    switch (currentView) {
      case 'dashboard':
        return (
          <div className="max-w-6xl mx-auto p-6 space-y-10 pb-44 animate-in fade-in">
            <header className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-black text-gray-800 tracking-tight">你好, {userProfile.name}</h2>
                <p className="text-xs text-emerald-600 font-bold uppercase tracking-widest mt-1">今天想吃点什么好的？</p>
              </div>
              <img onClick={() => setCurrentView('settings')} src={userProfile.avatar} className="w-14 h-14 rounded-2xl object-cover shadow-lg border-2 border-white cursor-pointer" />
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div onClick={() => handleViewChange('inventory')} className="bg-emerald-600 p-8 rounded-[3rem] text-white shadow-xl hover:scale-[1.02] active:scale-95 transition-all cursor-pointer">
                <span className="text-5xl block mb-6">📦</span>
                <p className="font-black text-2xl">全家库存</p>
                <p className="text-xs opacity-70 mt-1 uppercase font-bold tracking-widest">{inventory.length} 种食材待命</p>
              </div>
              <div onClick={() => handleViewChange('recipes')} className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer">
                <span className="text-5xl block mb-6">📖</span>
                <p className="font-black text-2xl text-gray-800">私房菜谱</p>
                <p className="text-xs text-gray-400 mt-1 font-bold uppercase tracking-widest">{recipes.length} 个珍藏灵感</p>
              </div>
              <div onClick={() => handleViewChange('plan')} className="bg-amber-400 p-8 rounded-[3rem] text-amber-900 shadow-xl hover:scale-[1.02] active:scale-95 transition-all cursor-pointer">
                <span className="text-5xl block mb-6">🗓️</span>
                <p className="font-black text-2xl">烹饪计划</p>
                <p className="text-xs opacity-70 mt-1 uppercase font-bold tracking-widest">规划健康生活</p>
              </div>
            </div>

            <section className="bg-white p-8 rounded-[3rem] border border-gray-100 space-y-6">
              <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest">正在同步的家庭成员</h3>
              <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                {syncStatus.members.map(m => (
                  <div key={m.id} className="flex flex-col items-center gap-2 shrink-0">
                    <div className="relative">
                      <img src={m.avatar} className="w-16 h-16 rounded-[1.5rem] object-cover border-2 border-emerald-100" />
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
                    </div>
                    <p className="text-[10px] font-black text-gray-800">{m.name}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );

      case 'recipes':
        return (
          <div className="max-w-6xl mx-auto p-6 pb-44 space-y-8">
            <div className="flex justify-between items-end">
              <h2 className="text-4xl font-black text-gray-800 tracking-tight">家庭食谱</h2>
              <button onClick={() => setCurrentView('add-recipe')} className="bg-emerald-600 text-white px-6 py-3 rounded-2xl text-xs font-black uppercase shadow-lg shadow-emerald-100">新增菜谱</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRecipes.map(r => (
                <div key={r.id} onClick={() => setSelectedRecipe(r)} className="group cursor-pointer">
                  <div className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-gray-100 group-hover:shadow-2xl transition-all duration-500">
                    <img src={r.images[0]} className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="p-8">
                      <h4 className="font-black text-2xl text-gray-800">{r.title}</h4>
                      <p className="text-xs text-gray-400 font-bold mt-2 truncate">{r.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'inventory': return <InventoryView inventory={inventory} onAdd={handleAddInventory} onUpdate={handleUpdateInventory} onDelete={(id) => setInventory(prev => prev.filter(i => i.id !== id))} />;
      case 'plan': return <PlanView plans={dailyPlans} recipes={recipes} inventory={inventory} onRemoveFromPlan={handleTogglePlan} onArchive={() => showSyncToast('任务已标记完成')} history={menuHistory} />;
      case 'settings': return (
        <div className="max-w-4xl mx-auto p-6 space-y-12 pb-44 animate-in slide-in-from-bottom-4">
           <h2 className="text-3xl font-black text-gray-800 tracking-tight">账户与同步中心</h2>
           
           <div className="bg-white p-8 sm:p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-10">
              <div className="flex flex-col sm:flex-row items-center gap-8">
                 <div className="relative group cursor-pointer" onClick={() => avatarInputRef.current?.click()}>
                    <img src={userProfile.avatar} className="w-32 h-32 rounded-[2.5rem] object-cover shadow-2xl border-4 border-white transition-transform group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 rounded-[2.5rem] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                       <span className="text-white font-black text-xs uppercase tracking-widest">更换头像</span>
                    </div>
                    <input ref={avatarInputRef} type="file" accept="image/*" className="hidden" onChange={handleAvatarUpload} />
                 </div>
                 <div className="flex-1 w-full space-y-6">
                    <div className="space-y-1.5">
                       <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">我的称呼</label>
                       <input type="text" className="w-full bg-gray-50 rounded-2xl px-6 py-4 font-black text-gray-800 outline-none focus:ring-4 focus:ring-emerald-500/10 focus:bg-white border border-transparent focus:border-emerald-100 transition-all" value={userProfile.name} onChange={e => setUserProfile({...userProfile, name: e.target.value})} />
                    </div>
                    <div className="space-y-1.5">
                       <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">家庭角色</label>
                       <input type="text" className="w-full bg-gray-50 rounded-2xl px-6 py-4 font-black text-gray-800 outline-none focus:ring-4 focus:ring-emerald-500/10 focus:bg-white border border-transparent focus:border-emerald-100 transition-all" value={userProfile.role} onChange={e => setUserProfile({...userProfile, role: e.target.value})} />
                    </div>
                 </div>
              </div>
           </div>

           <div className="bg-white p-8 sm:p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-10">
              <div className="space-y-4">
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">家庭关联码 (Cloud Sync)</p>
                 <div className="flex gap-4">
                    <div className="flex-1 bg-emerald-50 p-6 rounded-[2rem] text-2xl font-black text-emerald-600 tracking-widest flex items-center justify-center border border-emerald-100">
                       {syncStatus.connectionCode}
                    </div>
                    <button onClick={() => { navigator.clipboard.writeText(syncStatus.connectionCode); showSyncToast('关联码已复制'); }} className="bg-gray-900 text-white px-8 rounded-2xl font-black text-xs uppercase tracking-widest active:scale-95 transition-all shadow-xl">复制</button>
                 </div>
              </div>

              <div className="space-y-6 pt-4 border-t border-gray-50">
                 <div className="flex justify-between items-center">
                    <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest ml-1">当前关联成员</h3>
                    <span className="text-[10px] font-black text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full">REALTIME ONLINE</span>
                 </div>
                 <div className="space-y-3">
                    {syncStatus.members.length === 0 ? (
                       <p className="text-gray-400 text-xs italic p-4 text-center">暂无关联成员</p>
                    ) : syncStatus.members.map(m => (
                       <div key={m.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-[2rem] border border-transparent hover:border-emerald-100 transition-all">
                          <div className="flex items-center gap-4">
                             <img src={m.avatar} className="w-12 h-12 rounded-2xl object-cover border-2 border-white shadow-sm" />
                             <div>
                                <p className="text-sm font-black text-gray-800">{m.name}</p>
                                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{m.role}</p>
                             </div>
                          </div>
                          <button onClick={() => removeMember(m.id)} className="w-10 h-10 flex items-center justify-center text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all font-black">✕</button>
                       </div>
                    ))}
                 </div>
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
      <div className="hidden md:block"><Sidebar currentView={currentView} onViewChange={handleViewChange} userProfile={userProfile} partnerName={syncStatus.partnerName} /></div>
      <main className="flex-1 relative md:pl-64 h-full">
        <div id="main-scroll-container" className="w-full h-full overflow-y-auto overflow-x-hidden relative scroll-smooth pb-20">
          {renderView()}
        </div>
      </main>
      {/* 提高 BottomNav 层级 */}
      <div className="md:hidden relative z-[100]"><BottomNav currentView={currentView} onViewChange={handleViewChange} /></div>

      <div className="fixed top-8 right-8 z-[200] flex flex-col gap-3">
        {syncToasts.map(t => (
          <div key={t.id} className="bg-gray-900/95 backdrop-blur-xl text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-in slide-in-from-right duration-300">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,1)]"></div>
            <span className="text-[11px] font-black tracking-widest uppercase">{t.msg}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
