
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
  // 安全加载本地数据的辅助函数
  const safeLoad = (key: string, defaultValue: any) => {
    try {
      const saved = localStorage.getItem(key);
      if (!saved) return defaultValue;
      return JSON.parse(saved);
    } catch (e) {
      console.warn(`Failed to parse ${key}, using defaults.`);
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
    connectionCode: 'LOVE-520-HOME',
    members: [
      { id: 'm1', name: '小李', avatar: 'https://picsum.photos/seed/partner/100', role: '帮厨', isOnline: true, lastActive: '刚才' }
    ]
  }));

  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [syncToasts, setSyncToasts] = useState<string[]>([]);
  
  const avatarInputRef = useRef<HTMLInputElement>(null);

  // 当 App 成功运行后，手动移除 index.html 里的加载屏幕
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
    localStorage.setItem('hometaste_history', JSON.stringify(menuHistory));
    localStorage.setItem('hometaste_plans', JSON.stringify(dailyPlans));
    localStorage.setItem('hometaste_profile', JSON.stringify(userProfile));
    localStorage.setItem('hometaste_sync_status', JSON.stringify(syncStatus));
  }, [inventory, recipes, menuHistory, dailyPlans, userProfile, syncStatus]);

  useEffect(() => {
    setSelectedRecipe(null);
    setEditingRecipe(null);
    const scrollContainer = document.getElementById('main-scroll-container');
    if (scrollContainer) scrollContainer.scrollTo(0, 0);
  }, [currentView]);

  const showSyncToast = useCallback((msg: string) => {
    setSyncToasts(prev => [...prev, msg]);
    setTimeout(() => setSyncToasts(prev => prev.slice(1)), 3000);
  }, []);

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserProfile(prev => ({ ...prev, avatar: reader.result as string }));
        showSyncToast('头像更新成功');
      };
      reader.readAsDataURL(file);
    }
  };

  const removeMember = (id: string) => {
    setSyncStatus(prev => {
      const newMembers = prev.members.filter(m => m.id !== id);
      return {
        ...prev,
        members: newMembers,
        partnerName: newMembers.length > 0 ? newMembers[0].name : ''
      };
    });
    showSyncToast('已解除关联');
  };

  const filteredRecipes = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return recipes;
    return recipes.filter(r => 
      r.title.toLowerCase().includes(query) || 
      r.ingredients.some(ing => ing.name.toLowerCase().includes(query))
    );
  }, [recipes, searchQuery]);

  const handleSaveRecipe = (recipe: Recipe) => {
    setRecipes(prev => {
      const exists = prev.find(r => r.id === recipe.id);
      return exists ? prev.map(r => r.id === recipe.id ? recipe : r) : [recipe, ...prev];
    });
    setEditingRecipe(null);
    setSelectedRecipe(null);
    setCurrentView('recipes');
    showSyncToast(`《${recipe.title}》已同步`);
  };

  const handleTogglePlan = (recipeId: string, date: string) => {
    setDailyPlans(prev => {
      const dayPlans = prev[date] || [];
      const isAdded = dayPlans.includes(recipeId);
      const nextPlans = isAdded ? dayPlans.filter(id => id !== recipeId) : [...dayPlans, recipeId];
      const newPlans = { ...prev, [date]: nextPlans };
      if (nextPlans.length === 0) {
        const { [date]: _, ...rest } = newPlans;
        return rest;
      }
      showSyncToast(isAdded ? '已从计划移除' : `已加入 ${date} 计划`);
      return newPlans;
    });
  };

  const renderView = () => {
    if (editingRecipe) return <div className="max-w-4xl mx-auto"><AddRecipeView initialRecipe={editingRecipe} onSave={handleSaveRecipe} onCancel={() => setEditingRecipe(null)} /></div>;
    if (selectedRecipe) return <div className="max-w-4xl mx-auto"><RecipeDetail recipe={selectedRecipe} inventory={inventory} plans={dailyPlans} onBack={() => setSelectedRecipe(null)} onPlan={handleTogglePlan} onEdit={() => { setEditingRecipe(selectedRecipe); setSelectedRecipe(null); }} /></div>;

    switch (currentView) {
      case 'dashboard':
        return (
          <div className="max-w-6xl mx-auto p-6 lg:p-10 pb-44 space-y-10 animate-in fade-in">
            <h2 className="text-3xl font-black text-gray-800 tracking-tight">你好, {userProfile.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div onClick={() => setCurrentView('inventory')} className="bg-emerald-600 p-8 rounded-[3rem] text-white shadow-xl hover:scale-[1.03] cursor-pointer transition-all">
                <span className="text-5xl block mb-6">📦</span>
                <p className="font-black text-2xl">库存管理</p>
                <p className="text-xs opacity-70 mt-1 uppercase font-bold tracking-widest">{inventory.length} 种食材在库</p>
              </div>
              <div onClick={() => setCurrentView('plan')} className="bg-amber-400 p-8 rounded-[3rem] text-amber-900 shadow-xl hover:scale-[1.03] cursor-pointer transition-all">
                <span className="text-5xl block mb-6">🗓️</span>
                <p className="font-black text-2xl">烹饪计划</p>
                <p className="text-xs opacity-70 mt-1 uppercase font-bold tracking-widest">规划全家三餐</p>
              </div>
              <div onClick={() => setCurrentView('settings')} className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm space-y-5 hover:shadow-xl transition-all cursor-pointer">
                <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">同步动态</h3>
                <div className="space-y-4">
                  {syncStatus.members.length === 0 ? <p className="text-xs text-gray-400 italic">暂无在线成员</p> : syncStatus.members.map(m => (
                    <div key={m.id} className="flex gap-4 items-center">
                      <img src={m.avatar} className="w-10 h-10 rounded-2xl object-cover" />
                      <div>
                        <p className="text-xs font-black text-gray-700">{m.name}</p>
                        <p className="text-[9px] font-bold text-emerald-500 uppercase">正在线上</p>
                      </div>
                    </div>
                  ))}
                  <p className="text-[9px] font-black text-emerald-600 uppercase tracking-widest border-t border-gray-50 pt-3">管理家庭成员 →</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'recipes':
        return (
          <div className="max-w-6xl mx-auto p-6 lg:p-10 pb-44 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-4xl font-black tracking-tight text-gray-800">全家食谱</h2>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">SHARED FAMILY GALLERY</p>
              </div>
              <button onClick={() => setCurrentView('add-recipe')} className="bg-gray-900 text-white px-8 h-14 rounded-2xl flex items-center gap-2 shadow-xl hover:bg-emerald-600 transition-all active:scale-95">
                <span className="text-2xl">+</span>
                <span className="text-xs font-black uppercase tracking-widest">写新菜谱</span>
              </button>
            </div>
            <div className="relative group max-w-2xl">
              <input 
                type="text" 
                placeholder="搜索菜谱..." 
                className="w-full h-16 pl-14 pr-6 bg-white border border-gray-100 rounded-[1.5rem] shadow-sm outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all font-bold text-gray-700"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-xl grayscale opacity-50">🔍</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRecipes.map(r => (
                <div key={r.id} className="relative group animate-in zoom-in-95 duration-300">
                  <div onClick={() => setSelectedRecipe(r)} className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500">
                    <div className="h-60 bg-gray-100">
                      <img src={r.images?.[0] || 'https://picsum.photos/seed/food/400/300'} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={r.title} />
                    </div>
                    <div className="p-8">
                      <h4 className="font-black text-2xl text-gray-800">{r.title}</h4>
                      <p className="text-xs text-gray-400 font-bold mt-2 truncate leading-relaxed">{r.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'inventory': return <InventoryView inventory={inventory} onAdd={(item) => setInventory(prev => [...prev, { id: Math.random().toString(36).substr(2, 9), name: item.name!, amount: item.amount!, unit: item.unit!, category: item.category!, storageZone: item.storageZone!, updatedAt: Date.now() }])} onUpdate={(id, amount) => setInventory(prev => prev.map(i => i.id === id ? { ...i, amount } : i))} onDelete={(id) => setInventory(prev => prev.filter(i => i.id !== id))} />;
      
      case 'plan': return <PlanView plans={dailyPlans} recipes={recipes} inventory={inventory} onRemoveFromPlan={handleTogglePlan} onArchive={(date) => { const ids = dailyPlans[date]; if (!ids) return; setMenuHistory(prev => [...prev, { date, recipeIds: ids, recipeTitles: recipes.filter(r => ids.includes(r.id)).map(r => r.title) }]); setDailyPlans(prev => { const { [date]: _, ...rest } = prev; return rest; }); showSyncToast(`${date} 任务已完成`); }} history={menuHistory} />;
      
      case 'settings':
        return (
          <div className="max-w-4xl mx-auto p-6 lg:p-10 pb-60 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-black text-gray-800 tracking-tight">个人与家庭管理</h2>
            
            <div className="bg-white p-8 sm:p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-10">
              <div className="flex flex-col sm:flex-row items-center gap-8">
                <div className="relative group cursor-pointer shrink-0" onClick={() => avatarInputRef.current?.click()}>
                  <img src={userProfile.avatar} className="w-32 h-32 rounded-[2.5rem] object-cover border-4 border-white shadow-2xl transition-transform group-hover:scale-105" alt="Avatar" />
                  <div className="absolute inset-0 bg-black/40 rounded-[2.5rem] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-black text-xs uppercase">更换</span>
                  </div>
                  <input ref={avatarInputRef} type="file" accept="image/*" className="hidden" onChange={handleAvatarUpload} />
                </div>
                <div className="flex-1 w-full space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">我的称呼</label>
                    <input type="text" className="w-full bg-gray-50 rounded-2xl px-5 py-3 font-black text-gray-800 outline-none" value={userProfile.name} onChange={(e) => setUserProfile({...userProfile, name: e.target.value})} />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">我的角色</label>
                    <input type="text" className="w-full bg-gray-50 rounded-2xl px-5 py-3 font-black text-gray-800 outline-none" value={userProfile.role} onChange={(e) => setUserProfile({...userProfile, role: e.target.value})} />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 p-8 rounded-[3rem] border border-emerald-100 space-y-6">
              <h3 className="text-xl font-black text-emerald-800 flex items-center gap-2">
                <span>📱</span> 如何在手机上像 App 一样使用？
              </h3>
              <div className="space-y-4 text-emerald-900/70 text-sm font-medium leading-relaxed">
                <p>1. <b>使用 Safari：</b> 在 iPhone 上复制当前网址并在 Safari 中访问。</p>
                <p>2. <b>点击分享：</b> 点击浏览器底部的“分享”按钮（向上箭头）。</p>
                <p>3. <b>添加到主屏幕：</b> 这样桌面就会出现图标，像真正的 App 一样流畅。</p>
              </div>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  showSyncToast('当前地址已复制');
                }}
                className="bg-emerald-600 text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase shadow-lg shadow-emerald-200 active:scale-95 transition-all"
              >
                🔗 复制当前页面地址发给手机
              </button>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-10">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black text-gray-800">关联成员</h3>
                <span className="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest">在线同步中</span>
              </div>
              <div className="bg-gray-50 p-6 sm:p-8 rounded-[2.5rem] space-y-4">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">家庭同步码</p>
                <div className="flex justify-between items-center gap-4">
                  <span className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">{syncStatus.connectionCode}</span>
                  <button onClick={() => { navigator.clipboard.writeText(syncStatus.connectionCode); showSyncToast('已复制'); }} className="bg-gray-900 text-white px-6 py-3 rounded-2xl text-[10px] font-black shadow-lg active:scale-95 transition-all">复制</button>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">当前成员</p>
                <div className="space-y-3">
                  {syncStatus.members.map(m => (
                    <div key={m.id} className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-[2rem] hover:shadow-md transition-all">
                      <div className="flex items-center gap-4">
                        <img src={m.avatar} className="w-12 h-12 rounded-2xl object-cover border-2 border-white shadow-sm" />
                        <div>
                          <p className="text-base font-black text-gray-800">{m.name}</p>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{m.role}</p>
                        </div>
                      </div>
                      <button onClick={() => removeMember(m.id)} className="w-10 h-10 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-all font-black">✕</button>
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
      <div className="hidden md:block"><Sidebar currentView={currentView} onViewChange={setCurrentView} userProfile={userProfile} partnerName={syncStatus.partnerName} /></div>
      <main className="flex-1 relative md:pl-64 h-full">
        <div id="main-scroll-container" className="w-full h-full overflow-y-auto overflow-x-hidden relative scroll-smooth pb-20 md:pb-0">
          {renderView()}
        </div>
      </main>
      <div className="md:hidden"><BottomNav currentView={currentView} onViewChange={setCurrentView} /></div>
      <div className="fixed top-6 right-6 flex flex-col gap-3 z-[200] pointer-events-none">
        {syncToasts.map((t, i) => (
          <div key={i} className="bg-gray-900/95 backdrop-blur-xl text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-right duration-300 pointer-events-auto">
            <div className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,1)]"></div>
            <span className="text-[11px] font-black tracking-widest uppercase">{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
