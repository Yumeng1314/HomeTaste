
import React, { useState, useEffect, useRef } from 'react';
import { Ingredient, Recipe, ViewType, DailyPlan, MenuHistory, UserProfile, FamilyMember } from './types';
import { INITIAL_INVENTORY, INITIAL_RECIPES } from './constants';
import Sidebar from './components/Sidebar';
import BottomNav from './components/BottomNav';
import InventoryView from './components/InventoryView';
import RecipeDetail from './components/RecipeDetail';
import PlanView from './components/PlanView';
import AddRecipeView from './components/AddRecipeView';
import { getAIRecommendedRecipeIds } from './services/geminiService';

const STORAGE_KEYS = {
  INVENTORY: 'hometaste_inventory',
  RECIPES: 'hometaste_recipes',
  PLANS: 'hometaste_plans',
  HISTORY: 'hometaste_history',
  MEMBERS: 'hometaste_members',
  PROFILE: 'hometaste_profile',
  CONNECTION_CODE: 'hometaste_conn_code'
};

const AVATAR_PRESETS = [
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Home',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Chef',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Foodie',
];

const compressImage = (base64Str: string, maxWidth = 200, quality = 0.6): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = base64Str;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      let width = img.width, height = img.height;
      if (width > maxWidth) { height = (maxWidth / width) * height; width = maxWidth; }
      canvas.width = width; canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL('image/jpeg', quality));
    };
    img.onerror = () => resolve(base64Str);
  });
};

const safeSave = (key: string, value: any) => {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { console.error('Storage full'); }
};

const App: React.FC = () => {
  const [inventory, setInventory] = useState<Ingredient[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [plans, setPlans] = useState<DailyPlan>({});
  const [history, setHistory] = useState<MenuHistory[]>([]);
  const [members, setMembers] = useState<FamilyMember[]>([]);
  const [connectionCode, setConnectionCode] = useState(localStorage.getItem(STORAGE_KEYS.CONNECTION_CODE) || '');
  const [isLinked, setIsLinked] = useState(!!localStorage.getItem(STORAGE_KEYS.CONNECTION_CODE));
  const [isSyncing, setIsSyncing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: '我',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Home',
    role: '管理员'
  });

  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAIThinking, setIsAIThinking] = useState(false);

  useEffect(() => {
    const load = (key: string) => {
      const val = localStorage.getItem(key);
      return val ? JSON.parse(val) : null;
    };
    setInventory(load(STORAGE_KEYS.INVENTORY) || INITIAL_INVENTORY);
    setRecipes(load(STORAGE_KEYS.RECIPES) || INITIAL_RECIPES);
    setPlans(load(STORAGE_KEYS.PLANS) || {});
    setHistory(load(STORAGE_KEYS.HISTORY) || []);
    const prof = load(STORAGE_KEYS.PROFILE);
    if (prof) setUserProfile(prof);
    
    const defaultMembers: FamilyMember[] = [
      { id: 'm1', name: prof?.name || '我', avatar: prof?.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Home', role: prof?.role || '管理员', isOnline: true, lastActive: '' },
      { id: 'm2', name: 'Felix', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix', role: '伴侣', isOnline: true, lastActive: '1分钟前' }
    ];
    setMembers(load(STORAGE_KEYS.MEMBERS) || defaultMembers);

    const loader = document.getElementById('loading-screen');
    if (loader) { loader.style.opacity = '0'; setTimeout(() => loader.remove(), 500); }
  }, []);

  // 模拟同步动画
  const triggerSyncEffect = () => {
    if (!isLinked) return;
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 800);
  };

  useEffect(() => { safeSave(STORAGE_KEYS.INVENTORY, inventory); triggerSyncEffect(); }, [inventory]);
  useEffect(() => { safeSave(STORAGE_KEYS.RECIPES, recipes); triggerSyncEffect(); }, [recipes]);
  useEffect(() => { safeSave(STORAGE_KEYS.PLANS, plans); triggerSyncEffect(); }, [plans]);
  // Fix: Added persistence for history
  useEffect(() => { safeSave(STORAGE_KEYS.HISTORY, history); }, [history]);
  useEffect(() => { safeSave(STORAGE_KEYS.PROFILE, userProfile); }, [userProfile]);

  const handleUpdateProfile = (updates: Partial<UserProfile>) => {
    const newProfile = { ...userProfile, ...updates };
    setUserProfile(newProfile);
    setMembers(prev => prev.map(m => m.id === 'm1' ? { ...m, ...updates } : m));
  };

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64 = reader.result as string;
        const compressed = await compressImage(base64);
        handleUpdateProfile({ avatar: compressed });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLinkPartner = (code: string) => {
    if (code.length === 6) {
      setConnectionCode(code);
      setIsLinked(true);
      localStorage.setItem(STORAGE_KEYS.CONNECTION_CODE, code);
      alert(`已建立加密连接 [${code}]！所有数据现已实时双向同步。`);
    }
  };

  const handleAISuggestion = async () => {
    if (inventory.length === 0 || recipes.length === 0) {
      alert('库存或食谱库为空，无法进行 AI 匹配。');
      return;
    }
    setIsAIThinking(true);
    try {
      const matchedIds = await getAIRecommendedRecipeIds(inventory, recipes);
      if (matchedIds && matchedIds.length > 0) {
        const firstMatch = recipes.find(r => r.id === matchedIds[0]);
        if (firstMatch) {
          setSelectedRecipe(firstMatch);
          setCurrentView('recipes');
        }
      } else {
        alert('AI 没能在您的食谱库中找到匹配项。');
      }
    } finally {
      setIsAIThinking(false);
    }
  };

  // Fix: Added handleArchivePlan to fix Error in file App.tsx on line 260
  const handleArchivePlan = (date: string) => {
    const recipeIds = plans[date];
    if (!recipeIds || recipeIds.length === 0) return;

    const titles = recipes
      .filter(r => recipeIds.includes(r.id))
      .map(r => r.title);

    const newHistoryRecord: MenuHistory = {
      date,
      recipeTitles: titles
    };

    setHistory(prev => [...prev, newHistoryRecord]);
    setPlans(prev => {
      const next = { ...prev };
      delete next[date];
      return next;
    });
    alert('计划已完成并归档到历史记录中。');
  };

  // Fix: Added filteredRecipes to fix Error in file App.tsx on line 246
  const filteredRecipes = recipes.filter(r => 
    r.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    r.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const renderContent = () => {
    if (currentView === 'add-recipe') {
      return (
        <AddRecipeView 
          onSave={async (r) => {
            if (r.id) setRecipes(prev => prev.map(old => old.id === r.id ? r : old));
            else setRecipes(prev => [{...r, id: 'r' + Date.now()}, ...prev]);
            setCurrentView('recipes'); 
            return true;
          }}
          onCancel={() => setCurrentView('recipes')}
          initialRecipe={selectedRecipe || undefined}
        />
      );
    }

    if (selectedRecipe) {
      return (
        <RecipeDetail 
          recipe={selectedRecipe} inventory={inventory} plans={plans}
          onBack={() => setSelectedRecipe(null)}
          onPlan={(rid, d) => setPlans(prev => ({ ...prev, [d]: [...(prev[d] || []), rid] }))}
          onEdit={() => setCurrentView('add-recipe')}
        />
      );
    }

    switch (currentView) {
      case 'dashboard':
        return (
          <div className="p-6 lg:p-10 space-y-8 pb-32">
            <header className="flex justify-between items-start">
              <div>
                <h2 className="text-4xl font-black text-gray-900 tracking-tight">你好, {userProfile.name}</h2>
                <div className="flex items-center gap-2 mt-2">
                  <div className={`w-2 h-2 rounded-full ${isLinked ? 'bg-emerald-500 animate-pulse' : 'bg-gray-300'}`}></div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    {isLinked ? '全家云同步已开启' : '离线模式'}
                  </p>
                </div>
              </div>
              <img src={userProfile.avatar} className="w-16 h-16 rounded-[1.5rem] border-4 border-white shadow-xl cursor-pointer object-cover" onClick={() => setCurrentView('settings')} />
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div onClick={() => setCurrentView('inventory')} className="group bg-emerald-600 p-8 rounded-[3rem] text-white shadow-2xl cursor-pointer hover:scale-[1.01] transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-20 text-6xl group-hover:rotate-12 transition-transform">🧊</div>
                <p className="font-black text-2xl relative z-10">全家冰箱</p>
                <p className="text-xs opacity-70 mt-1 relative z-10">{inventory.length} 种食材共享中</p>
              </div>
              <div onClick={() => setCurrentView('recipes')} className="group bg-white border border-gray-100 p-8 rounded-[3rem] shadow-sm cursor-pointer hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 text-6xl group-hover:rotate-12 transition-transform">📖</div>
                <p className="font-black text-2xl text-gray-800">共享食谱库</p>
                <p className="text-xs text-gray-400 mt-1">{recipes.length} 道全家最爱</p>
              </div>
            </div>

            <section className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-[3rem] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl">✨</div>
                <div>
                  <h3 className="text-xl font-black mb-1">AI 灵感匹配</h3>
                  <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">根据现有冰箱食材，智能挑选库内菜谱</p>
                </div>
              </div>
              <button onClick={handleAISuggestion} className="w-full md:w-auto px-10 py-5 bg-emerald-500 text-white rounded-2xl font-black text-sm hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20">
                开启灵感
              </button>
            </section>
          </div>
        );

      case 'inventory':
        return <InventoryView inventory={inventory} onAdd={(i) => setInventory([{...i, id: Date.now().toString(), updatedAt: Date.now()} as Ingredient, ...inventory])} onUpdate={(id, amount) => setInventory(inventory.map(i => i.id === id ? {...i, amount, updatedAt: Date.now()} : i))} onDelete={(id) => setInventory(inventory.filter(i => i.id !== id))} onAISuggest={handleAISuggestion} />;

      case 'recipes':
        return (
          <div className="p-6 lg:p-10 space-y-8 pb-40">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-3xl font-black text-gray-800 tracking-tight">全家食谱</h2>
                <div className="relative mt-6 max-w-md">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-lg">🔍</span>
                  <input type="text" placeholder="搜索菜名或标签..." className="w-full bg-white border border-gray-100 pl-14 pr-6 py-4 rounded-2xl font-black text-sm outline-none shadow-sm" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
              </div>
              <button onClick={() => { setSelectedRecipe(null); setCurrentView('add-recipe'); }} className="shrink-0 bg-gray-900 text-white px-8 h-14 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg hover:bg-emerald-600 transition-all">+ 记录新食谱</button>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map(r => (
                <div key={r.id} onClick={() => setSelectedRecipe(r)} className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group">
                  <img src={r.images?.[0] || 'https://picsum.photos/seed/food/400/300'} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="p-6">
                    <h3 className="font-black text-gray-800 text-lg line-clamp-1">{r.title}</h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{(r.prepTime || 0) + (r.cookTime || 0)} MINS COOKING</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'plan':
        return <PlanView plans={plans} recipes={recipes} inventory={inventory} onRemoveFromPlan={(rid, d) => setPlans(prev => ({ ...prev, [d]: prev[d].filter(id => id !== rid) }))} onArchive={handleArchivePlan} history={history} />;

      case 'settings':
        return (
          <div className="p-6 lg:p-10 space-y-12 pb-32 max-w-4xl mx-auto">
            <header className="flex justify-between items-end">
              <h2 className="text-4xl font-black text-gray-900 tracking-tight">个人与全家同步</h2>
              {isSyncing && <div className="text-[9px] font-black text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full animate-bounce">实时同步中...</div>}
            </header>
            
            {/* 个人资料编辑 */}
            <section className="bg-white border border-gray-100 p-10 rounded-[3rem] shadow-sm space-y-10">
              <div className="flex flex-col md:flex-row items-center gap-10">
                 <div className="relative group shrink-0">
                   <img src={userProfile.avatar} className="w-32 h-32 rounded-[2.5rem] border-4 border-white shadow-2xl object-cover" />
                   <button 
                     onClick={() => fileInputRef.current?.click()}
                     className="absolute inset-0 bg-black/60 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center text-white gap-2"
                   >
                     <span className="text-2xl">📸</span>
                     <span className="text-[9px] font-black uppercase tracking-widest">上传照片</span>
                   </button>
                   <input type="file" ref={fileInputRef} onChange={handleAvatarUpload} accept="image/*" className="hidden" />
                 </div>
                 <div className="flex-1 w-full space-y-6">
                   <div className="space-y-2">
                     <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">我的昵称</label>
                     <input type="text" className="w-full bg-gray-50 border-none p-5 rounded-2xl font-black text-xl outline-none focus:ring-2 focus:ring-emerald-500/10" value={userProfile.name} onChange={e => handleUpdateProfile({ name: e.target.value })} />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">家庭角色</label>
                     <input type="text" placeholder="如：首席大厨" className="w-full bg-gray-50 border-none p-5 rounded-2xl font-black text-sm outline-none focus:ring-2 focus:ring-emerald-500/10" value={userProfile.role} onChange={e => handleUpdateProfile({ role: e.target.value })} />
                   </div>
                 </div>
              </div>

              <div className="space-y-4 pt-8 border-t border-gray-50">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">预设头像选择</p>
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                  {AVATAR_PRESETS.map((url, idx) => (
                    <button key={idx} onClick={() => handleUpdateProfile({ avatar: url })} className={`w-14 h-14 rounded-xl flex-shrink-0 border-2 transition-all ${userProfile.avatar === url ? 'border-emerald-500 scale-110 shadow-lg' : 'border-transparent hover:border-gray-200'}`}><img src={url} className="w-full h-full object-cover rounded-lg" /></button>
                  ))}
                </div>
              </div>
            </section>

            {/* 关联中心 */}
            <section className="bg-gray-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group">
               <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl group-hover:bg-emerald-500/30 transition-all"></div>
               <div className="relative z-10 space-y-8">
                 <div className="flex justify-between items-start">
                   <div>
                     <h3 className="text-2xl font-black">双人实时同步中心</h3>
                     <p className="text-xs text-gray-400 mt-2">打通两个人的冰箱和灵感。任何一方的修改都将秒级同步。</p>
                   </div>
                   {isLinked && <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-lg text-[10px] font-black">ACTIVE SYNC</span>}
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4">
                     <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400">本机同步 ID</p>
                     <div className="flex items-center justify-between">
                        <span className="text-3xl font-black tracking-widest">HT7829</span>
                        <button onClick={() => alert('代码已复制')} className="text-[10px] font-black uppercase bg-white/10 px-3 py-1.5 rounded-lg hover:bg-white/20 transition-all">复制</button>
                     </div>
                   </div>
                   <div className="space-y-4">
                     <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">连接另一台设备</p>
                     <div className="flex gap-2">
                        <input type="text" maxLength={6} placeholder="输入对方代码" className="bg-white/5 border border-white/10 p-4 rounded-2xl flex-1 font-black text-xl outline-none focus:border-emerald-500 transition-all uppercase" onChange={(e) => { if(e.target.value.length === 6) handleLinkPartner(e.target.value); }} />
                        <button className="px-6 bg-emerald-500 rounded-2xl font-black text-[10px] uppercase shadow-lg shadow-emerald-500/20">建立连接</button>
                     </div>
                   </div>
                 </div>

                 {isLinked && (
                   <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                      <button onClick={() => { setIsSyncing(true); setTimeout(() => {setIsSyncing(false); alert('已完成全家数据强制校准');}, 1500); }} className="flex-1 py-4 bg-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/20 transition-all">强制云端校准</button>
                      <button onClick={() => { setIsLinked(false); localStorage.removeItem(STORAGE_KEYS.CONNECTION_CODE); }} className="flex-1 py-4 bg-red-500/10 text-red-400 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-red-500/20 transition-all">解除全家关联</button>
                   </div>
                 )}
               </div>
            </section>

            {/* 成员列表展示 */}
            <section className="bg-white border border-gray-100 p-10 rounded-[3rem] shadow-sm space-y-8">
              <h3 className="text-[11px] font-black uppercase text-gray-400 tracking-widest">家庭成员 (2)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {members.map(m => (
                  <div key={m.id} className="flex items-center justify-between p-5 bg-gray-50 rounded-[2rem] border border-transparent hover:border-gray-100 transition-all">
                    <div className="flex items-center gap-4">
                      <img src={m.avatar} className="w-14 h-14 rounded-2xl border-2 border-white object-cover shadow-sm" />
                      <div>
                        <p className="font-black text-gray-800">{m.name} {m.id === 'm1' && '(我)'}</p>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{m.role}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className={`w-2 h-2 rounded-full mb-1 ${m.isOnline ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]' : 'bg-gray-300'}`}></div>
                      <span className="text-[8px] font-black text-gray-400 uppercase tracking-tighter">{m.isOnline ? 'ONLINE' : 'OFFLINE'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-screen bg-[#fcfdfe] flex overflow-hidden">
      {isAIThinking && (
        <div className="fixed inset-0 z-[200] bg-white/80 backdrop-blur-xl flex flex-col items-center justify-center animate-in fade-in duration-300">
          <div className="w-20 h-20 mb-8 relative">
             <div className="absolute inset-0 bg-emerald-500/20 rounded-full animate-ping"></div>
             <div className="absolute inset-2 bg-emerald-500 rounded-full flex items-center justify-center text-3xl">✨</div>
          </div>
          <h3 className="text-2xl font-black text-gray-900">正在匹配全家最爱...</h3>
        </div>
      )}
      
      <div className="hidden md:block">
        <Sidebar currentView={currentView} onViewChange={setCurrentView} userProfile={userProfile} partnerName={isLinked ? 'Felix' : undefined} />
      </div>

      <main className="flex-1 overflow-y-auto no-scrollbar md:pl-64 bg-white relative">
        <div className="max-w-5xl mx-auto min-h-full">
          {renderContent()}
        </div>
      </main>

      <div className="md:hidden">
        <BottomNav currentView={currentView} onViewChange={(v) => { setCurrentView(v); setSelectedRecipe(null); }} />
      </div>
    </div>
  );
};

export default App;
