import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Ingredient, Recipe, ViewType, DailyPlan, MenuHistory, UserProfile, FamilyMember, ShoppingItem, RecipeCategory } from './types';
import { INITIAL_INVENTORY, INITIAL_RECIPES } from './constants';
import Sidebar from './components/Sidebar';
import BottomNav from './components/BottomNav';
import InventoryView from './components/InventoryView';
import RecipeDetail from './components/RecipeDetail';
import PlanView from './components/PlanView';
import AddRecipeView from './components/AddRecipeView';
import ShoppingView from './components/ShoppingView';
import { getAIRecommendedRecipeIds, parseIngredientsFromImage } from './services/geminiService';

// Firebase Imports
import { initializeApp, getApp, getApps } from "firebase/app";
import { getDatabase, ref, onValue, set, update, onDisconnect, off } from "firebase/database";

const STORAGE_KEYS = {
  INVENTORY: 'hometaste_inventory',
  RECIPES: 'hometaste_recipes',
  PLANS: 'hometaste_plans',
  HISTORY: 'hometaste_history',
  MEMBERS: 'hometaste_members',
  PROFILE: 'hometaste_profile',
  CONNECTION_CODE: 'hometaste_conn_code',
  SHOPPING: 'hometaste_shopping',
  USER_ID: 'hometaste_user_id'
};

const firebaseConfig = {
  apiKey: "AIzaSyAldb_sD5Vg1zDt3P2CnHE1_boY4RMf9m4",
  authDomain: "hometaste-d6834.firebaseapp.com",
  databaseURL: "https://hometaste-d6834-default-rtdb.firebaseio.com",
  projectId: "hometaste-d6834",
  storageBucket: "hometaste-d6834.firebasestorage.app",
  messagingSenderId: "132298816482",
  appId: "1:132298816482:web:2915b8e21fcb62e6c497bb",
  measurementId: "G-8PVGYSB065"
};

const ROLES = ['家庭主厨', '全能帮厨', '资深吃货', '采购部长', '家庭家长'];

const compressImage = (base64Str: string, maxWidth = 300, quality = 0.6): Promise<string> => {
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
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>([]);
  const [history, setHistory] = useState<MenuHistory[]>([]);
  const [members, setMembers] = useState<FamilyMember[]>([]);
  const [connectionCode, setConnectionCode] = useState(localStorage.getItem(STORAGE_KEYS.CONNECTION_CODE) || '');
  const [isLinked, setIsLinked] = useState(!!localStorage.getItem(STORAGE_KEYS.CONNECTION_CODE));
  const [isSyncing, setIsSyncing] = useState(false);
  const [isCloudDataLoaded, setIsCloudDataLoaded] = useState(false);
  
  // 生成设备唯一的 UserID
  const [userId] = useState(() => {
    let id = localStorage.getItem(STORAGE_KEYS.USER_ID);
    if (!id) {
      id = 'u_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem(STORAGE_KEYS.USER_ID, id);
    }
    return id;
  });

  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PROFILE);
    return saved ? JSON.parse(saved) : {
      name: '新成员', 
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + userId, 
      role: '家庭主厨'
    };
  });

  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<RecipeCategory | '全部'>('全部');
  const [isAIThinking, setIsAIThinking] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isInitialMount = useRef(true);
  const remoteUpdateInProgress = useRef(false);
  const dbRef = useRef<any>(null);

  // 初始化 Firebase
  useEffect(() => {
    try {
      const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
      dbRef.current = getDatabase(app);
    } catch (e) { console.warn("Firebase Init Error", e); }
  }, []);

  // 加载本地缓存
  useEffect(() => {
    const load = (key: string) => {
      const val = localStorage.getItem(key);
      return val ? JSON.parse(val) : null;
    };
    setInventory(load(STORAGE_KEYS.INVENTORY) || INITIAL_INVENTORY);
    setRecipes(load(STORAGE_KEYS.RECIPES) || INITIAL_RECIPES);
    setPlans(load(STORAGE_KEYS.PLANS) || {});
    setShoppingList(load(STORAGE_KEYS.SHOPPING) || []);
    setHistory(load(STORAGE_KEYS.HISTORY) || []);
    
    const loader = document.getElementById('loading-screen');
    if (loader) { loader.style.opacity = '0'; setTimeout(() => loader.remove(), 500); }
  }, []);

  // Firebase 同步监听
  useEffect(() => {
    if (!isLinked || !dbRef.current || !connectionCode) return;

    const familyDataRef = ref(dbRef.current, `families/${connectionCode}`);
    
    const handleSync = (snapshot: any) => {
      const data = snapshot.val();
      if (!data) {
        setIsCloudDataLoaded(true); // 云端无数据，当前就是第一人
        return;
      };
      
      remoteUpdateInProgress.current = true;
      setIsSyncing(true);
      
      if (data.inventory) setInventory(data.inventory);
      if (data.recipes) setRecipes(data.recipes);
      if (data.plans) setPlans(data.plans);
      if (data.shopping) setShoppingList(data.shopping);
      if (data.members) {
        // 过滤掉自己的 ID，剩下的就是其他成员
        const memberList = Object.values(data.members) as FamilyMember[];
        setMembers(memberList);
      }
      
      setIsCloudDataLoaded(true);
      setTimeout(() => { 
        remoteUpdateInProgress.current = false; 
        setIsSyncing(false); 
      }, 500);
    };

    onValue(familyDataRef, handleSync);

    // 维护个人在线状态
    const myMemberRef = ref(dbRef.current, `families/${connectionCode}/members/${userId}`);
    update(myMemberRef, { ...userProfile, id: userId, isOnline: true, lastActive: '在线' });
    
    onDisconnect(myMemberRef).update({ 
      isOnline: false, 
      lastActive: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }) 
    });

    return () => off(familyDataRef);
  }, [isLinked, connectionCode, userId, userProfile]);

  const syncToCloud = (path: string, data: any) => {
    if (!isLinked || !dbRef.current || remoteUpdateInProgress.current || !connectionCode || !isCloudDataLoaded) return;
    setIsSyncing(true);
    const targetRef = ref(dbRef.current, `families/${connectionCode}/${path}`);
    set(targetRef, data).finally(() => { 
      setTimeout(() => setIsSyncing(false), 500); 
    });
  };

  // 状态自动同步
  useEffect(() => { 
    safeSave(STORAGE_KEYS.INVENTORY, inventory); 
    if (!isInitialMount.current) syncToCloud('inventory', inventory); 
  }, [inventory]);

  useEffect(() => { 
    safeSave(STORAGE_KEYS.RECIPES, recipes); 
    if (!isInitialMount.current) syncToCloud('recipes', recipes); 
  }, [recipes]);

  useEffect(() => { 
    safeSave(STORAGE_KEYS.PLANS, plans); 
    if (!isInitialMount.current) syncToCloud('plans', plans); 
  }, [plans]);

  useEffect(() => { 
    safeSave(STORAGE_KEYS.SHOPPING, shoppingList); 
    if (!isInitialMount.current) syncToCloud('shopping', shoppingList); 
  }, [shoppingList]);

  useEffect(() => { 
    safeSave(STORAGE_KEYS.PROFILE, userProfile); 
    isInitialMount.current = false; 
  }, [userProfile]);

  const handleUpdateProfile = (updates: Partial<UserProfile>) => setUserProfile(prev => ({ ...prev, ...updates }));

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const compressed = await compressImage(reader.result as string, 200);
        handleUpdateProfile({ avatar: compressed });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLinkPartner = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode.length === 6) {
      setConnectionCode(cleanCode); 
      setIsLinked(true);
      setIsCloudDataLoaded(false);
      localStorage.setItem(STORAGE_KEYS.CONNECTION_CODE, cleanCode);
      alert('已连接到家庭组：' + cleanCode);
    }
  };

  const handleAIScanInventory = async (base64: string) => {
    setIsAIThinking(true);
    try {
      const detected = await parseIngredientsFromImage(base64);
      if (detected.length > 0) {
        const newItems = detected.map(d => ({
          ...d,
          id: 'ai_' + Math.random().toString(36).substr(2, 9),
          updatedAt: Date.now()
        } as Ingredient));
        setInventory(prev => [...newItems, ...prev]);
        alert(`识别到 ${detected.length} 种食材！`);
      }
    } finally { setIsAIThinking(false); }
  };

  const handleAISuggestion = async () => {
    if (inventory.length === 0 || recipes.length === 0) return alert('库存或食谱为空');
    setIsAIThinking(true);
    try {
      const matchedIds = await getAIRecommendedRecipeIds(inventory, recipes);
      if (matchedIds && matchedIds.length > 0) {
        const firstMatch = recipes.find(r => r.id === matchedIds[0]);
        if (firstMatch) { setSelectedRecipe(firstMatch); setCurrentView('recipes'); }
      } else {
        alert('当前食材暂无完美匹配，快去采购吧！');
      }
    } finally { setIsAIThinking(false); }
  };

  const filteredRecipes = useMemo(() => {
    return recipes.filter(r => {
      const matchesSearch = r.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === '全部' || r.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [recipes, searchTerm, selectedCategory]);

  const renderContent = () => {
    if (currentView === 'add-recipe') {
      return <AddRecipeView onSave={async (r) => { if (r.id) setRecipes(prev => prev.map(old => old.id === r.id ? r : old)); else setRecipes(prev => [{...r, id: 'r' + Date.now()}, ...prev]); setCurrentView('recipes'); return true; }} onCancel={() => setCurrentView('recipes')} initialRecipe={selectedRecipe || undefined} />;
    }
    if (selectedRecipe) {
      return <RecipeDetail recipe={selectedRecipe} inventory={inventory} plans={plans} onBack={() => setSelectedRecipe(null)} onPlan={(rid, d) => setPlans(prev => ({ ...prev, [d]: [...(prev[d] || []), rid] }))} onEdit={() => setCurrentView('add-recipe')} />;
    }

    switch (currentView) {
      case 'dashboard':
        return (
          <div className="p-6 lg:p-10 space-y-8 pb-32">
            <header className="flex justify-between items-start">
              <div>
                <h2 className="text-4xl font-black text-gray-900 tracking-tight">你好, {userProfile.name}</h2>
                <div className="flex items-center gap-2 mt-2">
                  <span className={`w-2 h-2 rounded-full ${isLinked ? 'bg-emerald-500 animate-pulse' : 'bg-gray-300'}`}></span>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{isLinked ? `已连接家庭: ${connectionCode}` : '单机模式'}</p>
                </div>
              </div>
              <img src={userProfile.avatar} className="w-16 h-16 rounded-[1.5rem] border-4 border-white shadow-xl cursor-pointer hover:scale-105 transition-transform" onClick={() => setCurrentView('settings')} />
            </header>
            
            <div className="grid grid-cols-2 gap-4">
              <div onClick={() => setCurrentView('inventory')} className="bg-emerald-600 p-6 rounded-[2.5rem] text-white shadow-xl cursor-pointer hover:bg-emerald-700 transition-colors">
                <p className="font-black text-xl">全家库存</p>
                <p className="text-[10px] opacity-70">{inventory.length} 种食材</p>
              </div>
              <div onClick={() => setCurrentView('shopping')} className="bg-amber-500 p-6 rounded-[2.5rem] text-white shadow-xl cursor-pointer hover:bg-amber-600 transition-colors">
                <p className="font-black text-xl">采购清单</p>
                <p className="text-[10px] opacity-70">{shoppingList.filter(i => !i.checked).length} 项待办</p>
              </div>
            </div>

            <section className="bg-gray-900 p-8 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-3xl">✨</div>
                <div>
                  <h3 className="text-xl font-black italic">AI 灵感</h3>
                  <p className="text-[9px] text-gray-400 uppercase tracking-widest mt-1">根据现有食材推荐最合适的菜谱</p>
                </div>
              </div>
              <button onClick={handleAISuggestion} className="px-8 py-4 bg-emerald-500 rounded-2xl font-black text-xs hover:bg-emerald-400 transition-all">匹配一下</button>
            </section>

            {members.length > 0 && (
              <section className="space-y-4">
                <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">家庭组员 ({members.length})</h3>
                <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                  {members.map(m => (
                    <div key={m.id} className="shrink-0 flex items-center gap-3 bg-white px-4 py-3 rounded-2xl border border-gray-100 shadow-sm">
                      <div className="relative">
                        <img src={m.avatar} className="w-8 h-8 rounded-lg object-cover" />
                        {m.isOnline && <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>}
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-gray-800">{m.name}</p>
                        <p className="text-[8px] font-bold text-gray-400 uppercase">{m.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        );
      case 'inventory':
        return <InventoryView inventory={inventory} onAdd={(i) => setInventory([{...i, id: Date.now().toString(), updatedAt: Date.now()} as Ingredient, ...inventory])} onUpdate={(id, amount) => setInventory(inventory.map(i => i.id === id ? {...i, amount, updatedAt: Date.now()} : i))} onDelete={(id) => setInventory(inventory.filter(i => i.id !== id))} onAISuggest={handleAISuggestion} onAIScan={handleAIScanInventory} />;
      case 'recipes':
        return (
          <div className="p-6 lg:p-10 space-y-8 pb-40">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-3xl font-black text-gray-800 tracking-tight">共享食谱库</h2>
                <input type="text" placeholder="搜索..." className="w-full bg-white border border-gray-100 p-4 rounded-2xl font-black text-sm outline-none mt-4 shadow-sm" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              </div>
              <button onClick={() => { setSelectedRecipe(null); setCurrentView('add-recipe'); }} className="shrink-0 bg-gray-900 text-white px-8 h-14 rounded-2xl text-[10px] font-black uppercase shadow-lg">+ 记录菜谱</button>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map(r => (
                <div key={r.id} onClick={() => setSelectedRecipe(r)} className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={r.images?.[0] || 'https://picsum.photos/seed/food/400/300'} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={r.title} />
                  </div>
                  <div className="p-6"><h3 className="font-black text-gray-800 text-lg">{r.title}</h3></div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'plan':
        return <PlanView plans={plans} recipes={recipes} inventory={inventory} onRemoveFromPlan={(rid, d) => setPlans(prev => ({ ...prev, [d]: prev[d].filter(id => id !== rid) }))} onArchive={() => {}} onAddItemsToShopping={(items) => setShoppingList(prev => [...items.map(i => ({...i, id: Date.now().toString() + Math.random(), checked: false, addedAt: Date.now()}) as ShoppingItem), ...prev])} onDeductInventory={() => {}} onRecipeFeedback={() => {}} history={history} />;
      case 'shopping':
        return <ShoppingView list={shoppingList} onUpdate={setShoppingList} inventory={inventory} plans={plans} recipes={recipes} />;
      case 'settings':
        return (
          <div className="p-6 lg:p-10 space-y-12 pb-32 max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-gray-900 tracking-tighter">个人与家庭设置</h2>
            
            {/* 个人档案编辑 */}
            <section className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 space-y-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative group cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                  <img src={userProfile.avatar} className="w-32 h-32 rounded-[2rem] border-4 border-white shadow-xl object-cover group-hover:opacity-80 transition-opacity" />
                  <div className="absolute inset-0 bg-black/20 rounded-[2rem] flex items-center justify-center text-white font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">上传头像</div>
                  <input type="file" ref={fileInputRef} onChange={handleAvatarUpload} className="hidden" accept="image/*" />
                </div>
                <div className="flex-1 w-full space-y-6">
                  <div>
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">昵称</label>
                    <input type="text" className="w-full bg-gray-50 border-none p-5 rounded-2xl font-black text-xl outline-none focus:ring-2 focus:ring-emerald-500/20" value={userProfile.name} onChange={e => handleUpdateProfile({ name: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">我的角色</label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {ROLES.map(role => (
                        <button key={role} onClick={() => handleUpdateProfile({ role })} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${userProfile.role === role ? 'bg-gray-900 text-white shadow-lg' : 'bg-gray-50 text-gray-400'}`}>{role}</button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 同步关联设置 */}
            <section className="bg-gray-900 rounded-[3rem] p-10 text-white space-y-8 shadow-2xl">
               <h3 className="text-2xl font-black">家庭实时同步</h3>
               <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <p className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">当前连接 ID</p>
                    <p className="text-4xl font-black tracking-widest mt-1 text-emerald-50">{connectionCode || '待连接'}</p>
                  </div>
                  <div className="flex-1 w-full max-w-xs">
                    <input 
                      type="text" 
                      maxLength={6} 
                      placeholder="输入 6 位 ID 同步" 
                      className="w-full bg-white/10 border border-white/10 p-5 rounded-2xl font-black text-center text-xl uppercase outline-none focus:bg-white/20 transition-all" 
                      onChange={(e) => { if(e.target.value.length === 6) handleLinkPartner(e.target.value); }} 
                    />
                  </div>
               </div>
            </section>
            
            <button onClick={() => { 
              if (confirm('确认注销并清空本地缓存？')) {
                localStorage.clear();
                window.location.reload();
              }
            }} className="w-full py-6 text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] hover:text-red-500 transition-colors">退出登录并清空数据</button>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="h-screen bg-[#fcfdfe] flex overflow-hidden">
      {isSyncing && <div className="fixed top-6 right-6 z-[200] bg-emerald-600 text-white text-[8px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-2xl flex items-center gap-2">同步中 <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span></div>}
      {isAIThinking && <div className="fixed inset-0 z-[250] bg-white/80 backdrop-blur-xl flex flex-col items-center justify-center"><div className="w-20 h-20 bg-emerald-500 rounded-full animate-pulse flex items-center justify-center text-3xl">✨</div><h3 className="text-2xl font-black mt-8 tracking-tighter">AI 正在处理...</h3></div>}
      <div className="hidden md:block">
        <Sidebar currentView={currentView} onViewChange={setCurrentView} userProfile={userProfile} partnerName={isLinked ? connectionCode : undefined} />
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