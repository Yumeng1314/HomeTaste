
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
import { getDatabase, ref, onValue, set, update, onDisconnect } from "firebase/database";

const STORAGE_KEYS = {
  INVENTORY: 'hometaste_inventory',
  RECIPES: 'hometaste_recipes',
  PLANS: 'hometaste_plans',
  HISTORY: 'hometaste_history',
  MEMBERS: 'hometaste_members',
  PROFILE: 'hometaste_profile',
  CONNECTION_CODE: 'hometaste_conn_code',
  SHOPPING: 'hometaste_shopping'
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

const RECIPE_CATEGORIES: RecipeCategory[] = ['素菜小炒', '肉菜小炒', '滋补炖菜', '暖心汤品', '美味主食', '精美甜品', '清爽饮品', '其他'];

const compressImage = (base64Str: string, maxWidth = 800, quality = 0.7): Promise<string> => {
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
  const [connectionCode, setConnectionCode] = useState(localStorage.getItem(STORAGE_KEYS.CONNECTION_CODE) || 'HT' + Math.floor(1000 + Math.random() * 9000));
  const [isLinked, setIsLinked] = useState(!!localStorage.getItem(STORAGE_KEYS.CONNECTION_CODE));
  const [isSyncing, setIsSyncing] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: '我', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Home', role: '管理员'
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

  useEffect(() => {
    if (firebaseConfig.apiKey.includes("DummyKey")) return;
    try {
      const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
      dbRef.current = getDatabase(app);
    } catch (e) { console.warn("Firebase Init Error", e); }
  }, []);

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
    const prof = load(STORAGE_KEYS.PROFILE);
    if (prof) setUserProfile(prof);
    
    const loader = document.getElementById('loading-screen');
    if (loader) { loader.style.opacity = '0'; setTimeout(() => loader.remove(), 500); }
  }, []);

  useEffect(() => {
    if (!isLinked || !dbRef.current) return;
    const familyDataRef = ref(dbRef.current, `families/${connectionCode}`);
    const unsubscribe = onValue(familyDataRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) return;
      remoteUpdateInProgress.current = true;
      setIsSyncing(true);
      if (data.inventory) setInventory(data.inventory);
      if (data.recipes) setRecipes(data.recipes);
      if (data.plans) setPlans(data.plans);
      if (data.shopping) setShoppingList(data.shopping);
      if (data.members) setMembers(Object.values(data.members));
      setTimeout(() => { remoteUpdateInProgress.current = false; setIsSyncing(false); }, 500);
    });
    const myMemberRef = ref(dbRef.current, `families/${connectionCode}/members/m1`);
    set(myMemberRef, { ...userProfile, id: 'm1', isOnline: true, lastActive: '现在' });
    onDisconnect(myMemberRef).update({ isOnline: false, lastActive: new Date().toLocaleTimeString() });
    return () => unsubscribe();
  }, [isLinked, connectionCode, userProfile.name]);

  const syncToCloud = (path: string, data: any) => {
    if (!isLinked || !dbRef.current || remoteUpdateInProgress.current) return;
    setIsSyncing(true);
    const targetRef = ref(dbRef.current, `families/${connectionCode}/${path}`);
    set(targetRef, data).finally(() => { setTimeout(() => setIsSyncing(false), 800); });
  };

  useEffect(() => { safeSave(STORAGE_KEYS.INVENTORY, inventory); if (!isInitialMount.current) syncToCloud('inventory', inventory); }, [inventory]);
  useEffect(() => { safeSave(STORAGE_KEYS.RECIPES, recipes); if (!isInitialMount.current) syncToCloud('recipes', recipes); }, [recipes]);
  useEffect(() => { safeSave(STORAGE_KEYS.PLANS, plans); if (!isInitialMount.current) syncToCloud('plans', plans); }, [plans]);
  useEffect(() => { safeSave(STORAGE_KEYS.SHOPPING, shoppingList); if (!isInitialMount.current) syncToCloud('shopping', shoppingList); }, [shoppingList]);
  useEffect(() => { safeSave(STORAGE_KEYS.PROFILE, userProfile); if (isLinked) syncToCloud('members/m1', { ...userProfile, id: 'm1', isOnline: true }); isInitialMount.current = false; }, [userProfile]);

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
      setConnectionCode(cleanCode); setIsLinked(true);
      localStorage.setItem(STORAGE_KEYS.CONNECTION_CODE, cleanCode);
      alert(`已连接 [${cleanCode}]`);
    }
  };

  const handleBatchAddToShopping = (items: Partial<ShoppingItem>[]) => {
    const newItems: ShoppingItem[] = items.map(i => ({
      id: Date.now().toString() + Math.random().toString(36).substr(2, 5),
      name: i.name || '',
      amount: i.amount || '适量',
      checked: false,
      addedAt: Date.now()
    }));
    setShoppingList(prev => [...newItems, ...prev]);
  };

  const handleDeductInventory = (deductions: { name: string, amount: number }[]) => {
    setInventory(prev => {
      const next = [...prev];
      deductions.forEach(d => {
        const idx = next.findIndex(i => i.name === d.name);
        if (idx !== -1) {
          next[idx] = {
            ...next[idx],
            amount: Math.max(0, next[idx].amount - d.amount),
            updatedAt: Date.now()
          };
        }
      });
      return next;
    });
  };

  const handleRecipeFeedback = (recipeId: string, rating: number, appetizingRating: number) => {
    setRecipes(prev => prev.map(r => {
      if (r.id !== recipeId) return r;
      const oldCount = r.reviewCount || 0;
      const oldRating = r.rating || 0;
      const oldAppRating = r.appetizingRating || 0;
      const newCount = oldCount + 1;
      const newRating = ((oldRating * oldCount) + rating) / newCount;
      const newAppRating = ((oldAppRating * oldCount) + appetizingRating) / newCount;

      return {
        ...r,
        rating: Math.round(newRating * 10) / 10,
        appetizingRating: Math.round(newAppRating * 10) / 10,
        reviewCount: newCount,
        appetizingCount: newCount
      };
    }));
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
        alert(`AI 成功识别并添加了 ${detected.length} 件食材！`);
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
      }
    } finally { setIsAIThinking(false); }
  };

  const handleArchivePlan = (date: string) => {
    const recipeIds = plans[date];
    if (!recipeIds || recipeIds.length === 0) return;
    const titles = recipes.filter(r => recipeIds.includes(r.id)).map(r => r.title);
    setHistory(prev => [...prev, { date, recipeTitles: titles }]);
    setPlans(prev => { const n = { ...prev }; delete n[date]; return n; });
  };

  const filteredRecipes = useMemo(() => {
    return recipes.filter(r => {
      const matchesSearch = r.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           r.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === '全部' || r.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [recipes, searchTerm, selectedCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { '全部': recipes.length };
    recipes.forEach(r => {
      counts[r.category] = (counts[r.category] || 0) + 1;
    });
    return counts;
  }, [recipes]);

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
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2">{isLinked ? `已连接至家庭: ${connectionCode}` : '离线模式'}</p>
              </div>
              <img src={userProfile.avatar} className="w-16 h-16 rounded-[1.5rem] border-4 border-white shadow-xl cursor-pointer" onClick={() => setCurrentView('settings')} />
            </header>
            <div className="grid grid-cols-2 gap-4">
              <div onClick={() => setCurrentView('inventory')} className="bg-emerald-600 p-6 rounded-[2.5rem] text-white shadow-xl cursor-pointer">
                <p className="font-black text-xl">冰箱库存</p>
                <p className="text-[10px] opacity-70">{inventory.length} 种食材</p>
              </div>
              <div onClick={() => setCurrentView('shopping')} className="bg-amber-500 p-6 rounded-[2.5rem] text-white shadow-xl cursor-pointer">
                <p className="font-black text-xl">采购清单</p>
                <p className="text-[10px] opacity-70">{shoppingList.filter(i => !i.checked).length} 项待买</p>
              </div>
            </div>
            <section className="bg-gray-900 p-8 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="text-3xl">✨</span>
                <div><h3 className="text-xl font-black">AI 灵感匹配</h3><p className="text-[9px] text-gray-400 uppercase">基于库存为您挑选最匹配的库内食谱</p></div>
              </div>
              <button onClick={handleAISuggestion} className="px-8 py-4 bg-emerald-500 rounded-2xl font-black text-xs">开始匹配</button>
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
                <h2 className="text-3xl font-black text-gray-800 tracking-tight">共享食谱</h2>
                <div className="relative mt-4">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300">🔍</span>
                  <input type="text" placeholder="搜索标题或标签..." className="w-full bg-white border border-gray-100 pl-12 pr-4 py-4 rounded-2xl font-black text-sm outline-none shadow-sm focus:border-emerald-400 transition-all" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
              </div>
              <button onClick={() => { setSelectedRecipe(null); setCurrentView('add-recipe'); }} className="shrink-0 bg-gray-900 text-white px-8 h-14 rounded-2xl text-[10px] font-black uppercase shadow-lg active:scale-95 transition-all">+ 记录新菜</button>
            </header>

            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 snap-x">
              <button onClick={() => setSelectedCategory('全部')} className={`snap-center shrink-0 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${selectedCategory === '全部' ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white border border-gray-100 text-gray-400'}`}>全部 ({categoryCounts['全部'] || 0})</button>
              {RECIPE_CATEGORIES.map(cat => (
                <button key={cat} onClick={() => setSelectedCategory(cat)} className={`snap-center shrink-0 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${selectedCategory === cat ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white border border-gray-100 text-gray-400'}`}>{cat} ({categoryCounts[cat] || 0})</button>
              ))}
            </div>

            {filteredRecipes.length === 0 ? (
              <div className="py-32 text-center space-y-4">
                <span className="text-6xl grayscale opacity-20">📖</span>
                <p className="font-black text-gray-400 uppercase tracking-widest">在这个分类下还没发现美食...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {filteredRecipes.map(r => (
                  <div key={r.id} onClick={() => setSelectedRecipe(r)} className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group relative">
                    {/* 右侧并排勋章 */}
                    <div className="absolute top-4 right-4 z-10 flex gap-2">
                       {r.rating && <span className="px-2 py-1.5 bg-black/60 backdrop-blur-md rounded-xl text-[9px] font-black text-amber-400 border border-white/10 flex items-center gap-1 shadow-lg">⭐ {r.rating}</span>}
                       {r.appetizingRating && <span className="px-2 py-1.5 bg-black/60 backdrop-blur-md rounded-xl text-[9px] font-black text-orange-400 border border-white/10 flex items-center gap-1 shadow-lg">🍚 {r.appetizingRating}</span>}
                    </div>
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg text-[9px] font-black text-gray-800 uppercase tracking-widest shadow-sm">{r.category}</span>
                    </div>
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={r.images?.[0] || 'https://picsum.photos/seed/food/400/300'} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={r.title} />
                    </div>
                    <div className="p-6">
                      <h3 className="font-black text-gray-800 text-lg group-hover:text-emerald-600 transition-colors">{r.title}</h3>
                      <div className="flex gap-4 mt-3 opacity-60">
                        <span className="text-[10px] font-black text-gray-400 flex items-center gap-1">🕒 {r.prepTime + r.cookTime} min</span>
                        <span className="text-[10px] font-black text-gray-400 flex items-center gap-1">🥘 {r.ingredients.length} 种食材</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      case 'plan':
        return <PlanView plans={plans} recipes={recipes} inventory={inventory} onRemoveFromPlan={(rid, d) => setPlans(prev => ({ ...prev, [d]: prev[d].filter(id => id !== rid) }))} onArchive={handleArchivePlan} onAddItemsToShopping={handleBatchAddToShopping} onDeductInventory={handleDeductInventory} onRecipeFeedback={handleRecipeFeedback} history={history} />;
      case 'shopping':
        return <ShoppingView list={shoppingList} onUpdate={setShoppingList} inventory={inventory} plans={plans} recipes={recipes} />;
      case 'settings':
        return (
          <div className="p-6 lg:p-10 space-y-12 pb-32 max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-gray-900">同步设置</h2>
            <section className="bg-white p-10 rounded-[3rem] shadow-sm space-y-8">
              <div className="flex items-center gap-6">
                <img src={userProfile.avatar} className="w-24 h-24 rounded-3xl border-4 border-white shadow-xl object-cover" />
                <button onClick={() => fileInputRef.current?.click()} className="text-[10px] font-black uppercase text-emerald-600">更换头像</button>
                <input type="file" ref={fileInputRef} onChange={handleAvatarUpload} className="hidden" />
              </div>
              <input type="text" className="w-full bg-gray-50 border-none p-5 rounded-2xl font-black text-xl outline-none" value={userProfile.name} onChange={e => handleUpdateProfile({ name: e.target.value })} />
            </section>
            <section className="bg-gray-900 rounded-[3rem] p-10 text-white space-y-8">
               <h3 className="text-2xl font-black">家庭同步 ID: {connectionCode}</h3>
               <div className="flex gap-4">
                  <input type="text" maxLength={6} placeholder="输入对方 ID 加入" className="bg-white/5 border border-white/10 p-4 rounded-2xl flex-1 font-black text-xl uppercase" onChange={(e) => { if(e.target.value.length === 6) handleLinkPartner(e.target.value); }} />
               </div>
            </section>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="h-screen bg-[#fcfdfe] flex overflow-hidden">
      {isAIThinking && <div className="fixed inset-0 z-[200] bg-white/80 backdrop-blur-xl flex flex-col items-center justify-center animate-in fade-in"><div className="w-20 h-20 bg-emerald-500 rounded-full animate-pulse flex items-center justify-center text-3xl">✨</div><h3 className="text-2xl font-black mt-8">AI 正在深度处理...</h3></div>}
      <div className="hidden md:block"><Sidebar currentView={currentView} onViewChange={setCurrentView} userProfile={userProfile} partnerName={isLinked ? connectionCode : undefined} /></div>
      <main className="flex-1 overflow-y-auto no-scrollbar md:pl-64 bg-white relative"><div className="max-w-5xl mx-auto min-h-full">{renderContent()}</div></main>
      <div className="md:hidden"><BottomNav currentView={currentView} onViewChange={(v) => { setCurrentView(v); setSelectedRecipe(null); }} /></div>
    </div>
  );
};

export default App;
