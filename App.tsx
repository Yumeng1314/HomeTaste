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
import { getDatabase, ref, onValue, set, update, onDisconnect, off, Database } from "firebase/database";

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

// 修复：确保 getDatabase 总是能拿到 URL
let _db: Database | null = null;
const initFirebase = () => {
  if (_db) return _db;
  try {
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    // 显式传入第二个参数 databaseURL，防止 SDK 自动识别失败
    _db = getDatabase(app, firebaseConfig.databaseURL);
    return _db;
  } catch (error) {
    console.error("Firebase init failed:", error);
    return null;
  }
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

const App: React.FC = () => {
  // 核心状态
  const [inventory, setInventory] = useState<Ingredient[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [plans, setPlans] = useState<DailyPlan>({});
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>([]);
  const [history, setHistory] = useState<MenuHistory[]>([]);
  const [members, setMembers] = useState<FamilyMember[]>([]);
  
  // 同步状态
  const [connectionCode, setConnectionCode] = useState(localStorage.getItem(STORAGE_KEYS.CONNECTION_CODE) || '');
  const [isLinked, setIsLinked] = useState(!!localStorage.getItem(STORAGE_KEYS.CONNECTION_CODE));
  const [isSyncing, setIsSyncing] = useState(false);
  const [isCloudDataLoaded, setIsCloudDataLoaded] = useState(false);
  const [dbStatus, setDbStatus] = useState<'idle' | 'connecting' | 'connected' | 'error'>('idle');

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
    try {
      return saved ? JSON.parse(saved) : {
        name: '新成员', 
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userId}`, 
        role: '家庭主厨'
      };
    } catch {
      return { name: '新成员', avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userId}`, role: '家庭主厨' };
    }
  });

  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<RecipeCategory | '全部'>('全部');
  const [isAIThinking, setIsAIThinking] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isInitialMount = useRef(true);
  const remoteUpdateInProgress = useRef(false);
  const syncTimer = useRef<any>(null);

  // 1. 本地初始化加载并关闭加载屏
  useEffect(() => {
    const load = (key: string) => {
      const val = localStorage.getItem(key);
      try { return val ? JSON.parse(val) : null; } catch { return null; }
    };
    
    setInventory(load(STORAGE_KEYS.INVENTORY) || INITIAL_INVENTORY);
    setRecipes(load(STORAGE_KEYS.RECIPES) || INITIAL_RECIPES);
    setPlans(load(STORAGE_KEYS.PLANS) || {});
    setShoppingList(load(STORAGE_KEYS.SHOPPING) || []);
    setHistory(load(STORAGE_KEYS.HISTORY) || []);
    
    // 强制关闭加载动画
    const loader = document.getElementById('loading-screen');
    if (loader) { 
      loader.style.opacity = '0'; 
      setTimeout(() => loader.remove(), 500); 
    }
  }, []);

  // 2. 数据库监听逻辑
  useEffect(() => {
    if (!isLinked || !connectionCode) {
      setDbStatus('idle');
      return;
    }

    setDbStatus('connecting');
    const db = initFirebase();
    if (!db) {
      setDbStatus('error');
      return;
    }

    const familyDataRef = ref(db, `families/${connectionCode}`);
    
    const handleDataChange = (snapshot: any) => {
      setDbStatus('connected');
      const data = snapshot.val();
      if (!data) {
        setIsCloudDataLoaded(true);
        return;
      }

      remoteUpdateInProgress.current = true;
      setIsSyncing(true);
      
      if (data.inventory) setInventory(data.inventory);
      if (data.recipes) setRecipes(data.recipes);
      if (data.plans) setPlans(data.plans);
      if (data.shopping) setShoppingList(data.shopping);
      if (data.history) setHistory(data.history);
      if (data.members) setMembers(Object.values(data.members) as FamilyMember[]);
      
      setIsCloudDataLoaded(true);
      setTimeout(() => {
        remoteUpdateInProgress.current = false;
        setIsSyncing(false);
      }, 500);
    };

    const handleError = (error: any) => {
      console.error("Firebase watch error:", error);
      setDbStatus('error');
    };

    onValue(familyDataRef, handleDataChange, handleError);

    // 用户在线状态
    const myMemberRef = ref(db, `families/${connectionCode}/members/${userId}`);
    update(myMemberRef, { ...userProfile, id: userId, isOnline: true, lastActive: '在线' }).catch(() => {});
    onDisconnect(myMemberRef).update({ isOnline: false, lastActive: new Date().toLocaleTimeString() }).catch(() => {});

    return () => {
      off(familyDataRef);
    };
  }, [isLinked, connectionCode, userId, userProfile]);

  // 3. 数据回传
  const pushToCloud = (path: string, data: any) => {
    if (!isLinked || remoteUpdateInProgress.current || !connectionCode || !isCloudDataLoaded) return;

    const db = initFirebase();
    if (!db) return;

    setIsSyncing(true);
    if (syncTimer.current) clearTimeout(syncTimer.current);

    syncTimer.current = setTimeout(() => {
      const targetRef = ref(db, `families/${connectionCode}/${path}`);
      set(targetRef, data).then(() => {
        setIsSyncing(false);
      }).catch(err => {
        console.error("Push failed:", err);
        setIsSyncing(false);
        setDbStatus('error');
      });
    }, 1000);
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.INVENTORY, JSON.stringify(inventory));
    if (!isInitialMount.current) pushToCloud('inventory', inventory);
  }, [inventory]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.RECIPES, JSON.stringify(recipes));
    if (!isInitialMount.current) pushToCloud('recipes', recipes);
  }, [recipes]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PLANS, JSON.stringify(plans));
    if (!isInitialMount.current) pushToCloud('plans', plans);
  }, [plans]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SHOPPING, JSON.stringify(shoppingList));
    if (!isInitialMount.current) pushToCloud('shopping', shoppingList);
  }, [shoppingList]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
    if (!isInitialMount.current) pushToCloud('history', history);
  }, [history]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(userProfile));
    isInitialMount.current = false;
  }, [userProfile]);

  const handleUpdateProfile = (updates: Partial<UserProfile>) => setUserProfile(prev => ({ ...prev, ...updates }));

  const generateInviteCode = () => {
    const code = Math.random().toString(36).substr(2, 6).toUpperCase();
    handleLinkPartner(code);
  };

  const handleLinkPartner = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode.length === 6) {
      setConnectionCode(cleanCode);
      setIsLinked(true);
      setIsCloudDataLoaded(false);
      localStorage.setItem(STORAGE_KEYS.CONNECTION_CODE, cleanCode);
      alert(`已接入家庭库: ${cleanCode}`);
    }
  };

  const handleAIScanInventory = async (base64: string) => {
    setIsAIThinking(true);
    try {
      const detected = await parseIngredientsFromImage(base64);
      if (detected.length > 0) {
        const newItems = detected.map(d => ({ ...d, id: 'ai_' + Math.random().toString(36).substr(2, 9), updatedAt: Date.now() } as Ingredient));
        setInventory(prev => [...newItems, ...prev]);
        alert(`AI 识别到 ${detected.length} 种食材！`);
      }
    } finally { setIsAIThinking(false); }
  };

  const handleAISuggestion = async () => {
    if (inventory.length === 0 || recipes.length === 0) return alert('库存或菜谱为空');
    setIsAIThinking(true);
    try {
      const matchedIds = await getAIRecommendedRecipeIds(inventory, recipes);
      if (matchedIds && matchedIds.length > 0) {
        const firstMatch = recipes.find(r => r.id === matchedIds[0]);
        if (firstMatch) { setSelectedRecipe(firstMatch); setCurrentView('recipes'); }
      } else { alert('当前食材没有匹配的菜谱。'); }
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
                  <div className={`w-2 h-2 rounded-full ${dbStatus === 'connected' ? 'bg-emerald-500 animate-pulse' : dbStatus === 'error' ? 'bg-red-500' : 'bg-gray-300'}`}></div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    {dbStatus === 'connected' ? `实时同步中: ${connectionCode}` : dbStatus === 'connecting' ? '正在建立家庭连接...' : dbStatus === 'error' ? '云端连接失败: 处于离线模式' : '未连接家庭云端'}
                  </p>
                </div>
              </div>
              <img src={userProfile.avatar} className="w-16 h-16 rounded-[1.5rem] border-4 border-white shadow-xl cursor-pointer hover:scale-105 transition-transform" onClick={() => setCurrentView('settings')} />
            </header>

            <div className="grid grid-cols-2 gap-4">
              <div onClick={() => setCurrentView('inventory')} className="bg-emerald-600 p-6 rounded-[2.5rem] text-white shadow-xl cursor-pointer hover:bg-emerald-700 transition-colors">
                <p className="font-black text-xl">冰箱库存</p>
                <p className="text-[10px] opacity-70 mt-1 uppercase tracking-widest">{inventory.length} 种储备</p>
              </div>
              <div onClick={() => setCurrentView('shopping')} className="bg-amber-500 p-6 rounded-[2.5rem] text-white shadow-xl cursor-pointer hover:bg-amber-600 transition-colors">
                <p className="font-black text-xl">采购清单</p>
                <p className="text-[10px] opacity-70 mt-1 uppercase tracking-widest">{shoppingList.filter(i => !i.checked).length} 项待办</p>
              </div>
            </div>

            <section className="bg-gray-900 p-8 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-emerald-500/20 transition-all"></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-3xl">✨</div>
                <div>
                  <h3 className="text-xl font-black italic">AI 智能匹配</h3>
                  <p className="text-[9px] text-gray-400 mt-1 uppercase tracking-widest">根据当前冰箱存货智能推荐菜谱</p>
                </div>
              </div>
              <button onClick={handleAISuggestion} className="px-8 py-4 bg-emerald-500 rounded-2xl font-black text-xs hover:bg-emerald-400 transition-all shadow-lg active:scale-95">匹配看看</button>
            </section>

            {members.length > 0 && (
              <section className="space-y-4">
                <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">家庭活跃成员 ({members.length})</h3>
                <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                  {members.map(m => (
                    <div key={m.id} className="shrink-0 flex items-center gap-3 bg-white px-4 py-3 rounded-2xl border border-gray-100 shadow-sm transition-all hover:border-emerald-100">
                      <div className="relative">
                        <img src={m.avatar} className="w-9 h-9 rounded-lg object-cover" />
                        {m.isOnline && <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>}
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-gray-800">{m.name === userProfile.name ? '我' : m.name}</p>
                        <p className="text-[8px] font-bold text-gray-400 uppercase">{m.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
            
            <section className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm space-y-4">
               <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">最近烹饪记录</h3>
               {history.length > 0 ? (
                 <div className="space-y-3">
                    {history.slice(-2).reverse().map((h, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-none">
                        <p className="text-sm font-black text-gray-700 truncate mr-4">{h.recipeTitles.join(', ')}</p>
                        <span className="text-[9px] font-bold text-gray-300 whitespace-nowrap">{h.date}</span>
                      </div>
                    ))}
                 </div>
               ) : (
                 <p className="text-[10px] text-gray-300 italic">暂无记录，开启你的第一餐吧！</p>
               )}
            </section>
          </div>
        );
      case 'inventory':
        return <InventoryView inventory={inventory} onAdd={(i) => setInventory([{...i, id: Date.now().toString(), updatedAt: Date.now()} as Ingredient, ...inventory])} onUpdate={(id, amount) => setInventory(inventory.map(i => i.id === id ? {...i, amount, updatedAt: Date.now()} : i))} onDelete={(id) => setInventory(inventory.filter(i => i.id !== id))} onAISuggest={handleAISuggestion} onAIScan={handleAIScanInventory} />;
      case 'recipes':
        return (
          <div className="p-6 lg:p-10 space-y-8 pb-40">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-3xl font-black text-gray-800 tracking-tight">共享菜谱</h2>
                <input type="text" placeholder="搜索菜谱..." className="w-full bg-white border border-gray-100 p-4 rounded-2xl font-black text-sm outline-none mt-4 shadow-sm" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              </div>
              <button onClick={() => { setSelectedRecipe(null); setCurrentView('add-recipe'); }} className="shrink-0 bg-gray-900 text-white px-8 h-14 rounded-2xl text-[10px] font-black uppercase shadow-lg">+ 记录美味</button>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map(r => (
                <div key={r.id} onClick={() => setSelectedRecipe(r)} className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group">
                  <div className="aspect-[4/3] overflow-hidden"><img src={r.images?.[0] || 'https://picsum.photos/seed/food/400/300'} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={r.title} /></div>
                  <div className="p-6"><h3 className="font-black text-gray-800 text-lg">{r.title}</h3></div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'plan':
        return <PlanView plans={plans} recipes={recipes} inventory={inventory} onRemoveFromPlan={(rid, d) => setPlans(prev => ({ ...prev, [d]: (prev[d] || []).filter(id => id !== rid) }))} onArchive={(d) => {
          const titles = (plans[d] || []).map(id => recipes.find(r => r.id === id)?.title || '未知菜品');
          setHistory(prev => [...prev, { date: d, recipeTitles: titles }]);
          setPlans(prev => { const next = {...prev}; delete next[d]; return next; });
        }} onAddItemsToShopping={(items) => setShoppingList(prev => [...items.map(i => ({...i, id: Date.now().toString() + Math.random(), checked: false, addedAt: Date.now()}) as ShoppingItem), ...prev])} onDeductInventory={(deductions) => {
          setInventory(prev => {
            const next = [...prev];
            deductions.forEach(d => {
              const idx = next.findIndex(item => item.name === d.name);
              if (idx !== -1) next[idx] = { ...next[idx], amount: Math.max(0, next[idx].amount - d.amount), updatedAt: Date.now() };
            });
            return next;
          });
        }} onRecipeFeedback={handleRecipeFeedback} history={history} />;
      case 'shopping':
        return <ShoppingView list={shoppingList} onUpdate={setShoppingList} inventory={inventory} plans={plans} recipes={recipes} />;
      case 'settings':
        return (
          <div className="p-6 lg:p-10 space-y-12 pb-32 max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-gray-900 tracking-tighter">个人与关联</h2>
            
            <section className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 space-y-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative group cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                  <img src={userProfile.avatar} className="w-32 h-32 rounded-[2rem] border-4 border-white shadow-xl object-cover" />
                  <div className="absolute inset-0 bg-black/20 rounded-[2rem] flex items-center justify-center text-white font-black text-[10px] uppercase opacity-0 group-hover:opacity-100">上传头像</div>
                  <input type="file" ref={fileInputRef} onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = async () => {
                        const compressed = await compressImage(reader.result as string, 200);
                        handleUpdateProfile({ avatar: compressed });
                      };
                      reader.readAsDataURL(file);
                    }
                  }} className="hidden" accept="image/*" />
                </div>
                <div className="flex-1 w-full space-y-6">
                  <div><label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">我的昵称</label><input type="text" className="w-full bg-gray-50 border-none p-5 rounded-2xl font-black text-xl outline-none" value={userProfile.name} onChange={e => handleUpdateProfile({ name: e.target.value })} /></div>
                  <div><label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">家庭角色</label><div className="flex flex-wrap gap-2 mt-2">{ROLES.map(role => (<button key={role} onClick={() => handleUpdateProfile({ role })} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${userProfile.role === role ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-400'}`}>{role}</button>))}</div></div>
                </div>
              </div>
            </section>

            <section className="bg-gray-900 rounded-[3rem] p-10 text-white space-y-8 shadow-2xl relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="text-2xl font-black">云端同步连接</h3>
                 <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem]">
                      <p className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">当前关联 ID</p>
                      <p className="text-4xl font-black tracking-widest mt-1 text-emerald-50">{connectionCode || '未生成'}</p>
                      {!connectionCode && <button onClick={generateInviteCode} className="mt-4 px-6 py-3 bg-emerald-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-all">生成我的家庭码</button>}
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] flex flex-col justify-center">
                      <p className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-4">加入其他家庭</p>
                      <input 
                        type="text" 
                        maxLength={6} 
                        placeholder="输入 6 位 ID" 
                        className="w-full bg-white/10 border border-white/10 p-5 rounded-2xl font-black text-center text-xl uppercase outline-none focus:bg-white/20 transition-all"
                        onChange={(e) => { if(e.target.value.length === 6) handleLinkPartner(e.target.value); }} 
                      />
                    </div>
                 </div>
               </div>
            </section>

            <button onClick={() => { if (confirm('确认注销并清空本地数据？')) { localStorage.clear(); window.location.reload(); } }} className="w-full py-6 text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] hover:text-red-500 transition-colors">退出登录并重置应用</button>
          </div>
        );
      default: return null;
    }
  };

  const handleRecipeFeedback = (recipeId: string, rating: number, appetizingRating: number) => {
    setRecipes(prev => prev.map(r => {
      if (r.id === recipeId) {
        const count = r.reviewCount || 1;
        const newRating = ((r.rating || 5) * count + rating) / (count + 1);
        const appCount = r.appetizingCount || 1;
        const newAppetizing = ((r.appetizingRating || 5) * appCount + appetizingRating) / (appCount + 1);
        return { ...r, rating: Number(newRating.toFixed(1)), reviewCount: count + 1, appetizingRating: Number(newAppetizing.toFixed(1)), appetizingCount: appCount + 1 };
      }
      return r;
    }));
  };

  return (
    <div className="h-screen bg-[#fcfdfe] flex overflow-hidden">
      {isSyncing && <div className="fixed top-6 right-6 z-[200] bg-emerald-600 text-white text-[8px] font-black uppercase px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 animate-bounce">同步中 <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span></div>}
      {isAIThinking && <div className="fixed inset-0 z-[250] bg-white/80 backdrop-blur-xl flex flex-col items-center justify-center"><div className="w-20 h-20 bg-emerald-500 rounded-full animate-pulse flex items-center justify-center text-3xl">✨</div><h3 className="text-2xl font-black mt-8 tracking-tighter">AI 思考中...</h3></div>}
      <div className="hidden md:block"><Sidebar currentView={currentView} onViewChange={setCurrentView} userProfile={userProfile} partnerName={isLinked ? connectionCode : undefined} /></div>
      <main className="flex-1 overflow-y-auto no-scrollbar md:pl-64 bg-white relative"><div className="max-w-5xl mx-auto min-h-full">{renderContent()}</div></main>
      <div className="md:hidden"><BottomNav currentView={currentView} onViewChange={(v) => { setCurrentView(v); setSelectedRecipe(null); }} /></div>
    </div>
  );
};

export default App;