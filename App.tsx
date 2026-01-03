
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ViewType, Ingredient, Recipe, DailyPlan, ShoppingItem, MenuHistory, UserProfile } from './types';
import Sidebar from './components/Sidebar';
import InventoryView from './components/InventoryView';
import RecipeDetail from './components/RecipeDetail';
import PlanView from './components/PlanView';
import ShoppingView from './components/ShoppingView';
import BottomNav from './components/BottomNav';
import AddRecipeView from './components/AddRecipeView';
import SettingsView from './components/SettingsView';
import { INITIAL_INVENTORY, INITIAL_RECIPES, RECIPE_CATEGORIES } from './constants';
import { parseIngredientsFromImage, getAIRecommendedRecipeIds } from './services/geminiService';
import { FridgeIcon, PlanIcon, ShoppingIcon, MagicIcon, SpinnerIcon } from './components/Icons';
import { syncService } from './services/firebase';

// Updated Hook: Handles both LocalStorage (offline/cache) and Firebase Sync
function useSyncedState<T>(key: string, initialValue: T, pairCode?: string): [T, React.Dispatch<React.SetStateAction<T>>] {
  // 1. 初始化 state，优先从 LocalStorage 读取
  const [state, setState] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  // Ref to track if the update comes from Firebase (to avoid loops)
  const isFromCloud = useRef(false);

  // 2. 监听 Firebase 变化 (Downstream: Cloud -> Local)
  useEffect(() => {
    if (!pairCode) return;

    const unsubscribe = syncService.subscribeToData(pairCode, key, (data) => {
      if (JSON.stringify(data) !== JSON.stringify(state)) {
        isFromCloud.current = true;
        setState(data);
      }
    });

    return () => unsubscribe();
  }, [pairCode, key]);

  // 3. 监听 State 变化并保存 (Upstream: Local -> Cloud & LocalStorage)
  useEffect(() => {
    // 保存到本地 (Always)，并添加错误捕获
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (e) {
      console.warn('LocalStorage save failed (Quota Exceeded?):', e);
      // 可选：这里可以触发一个全局 Toast 提示用户清理空间
    }

    // 保存到云端 (If connected)
    if (pairCode && !isFromCloud.current) {
      // 简单的防抖可以加在这里，但为了实时性先直接推
      syncService.pushData(pairCode, key, state);
    }
    
    // Reset flag
    isFromCloud.current = false;
  }, [key, state, pairCode]);

  return [state, setState];
}

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  
  // 用户资料先从本地读取，获取 pairCode
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem('ht_profile');
      return saved ? JSON.parse(saved) : {
        name: '美食主理人',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
        role: '高级厨师',
        pairCode: '' 
      };
    } catch (e) {
      return {
        name: '美食主理人',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
        role: '高级厨师',
        pairCode: ''
      };
    }
  });

  const pairCode = userProfile.pairCode;

  // 使用同步 Hook
  const [inventory, setInventory] = useSyncedState<Ingredient[]>('ht_inventory', INITIAL_INVENTORY, pairCode);
  const [recipes, setRecipes] = useSyncedState<Recipe[]>('ht_recipes', INITIAL_RECIPES, pairCode);
  const [plans, setPlans] = useSyncedState<DailyPlan>('ht_plans', {}, pairCode);
  const [shoppingList, setShoppingList] = useSyncedState<ShoppingItem[]>('ht_shopping', [], pairCode);
  const [history, setHistory] = useSyncedState<MenuHistory[]>('ht_history', [], pairCode);
  
  // 监听家庭成员变化
  const [partner, setPartner] = useState<UserProfile['partner']>(undefined);
  useEffect(() => {
    if (!pairCode) return;
    const unsub = syncService.subscribeToData(pairCode, 'users', (usersData) => {
      if (usersData) {
        const otherUserKey = Object.keys(usersData).find(k => k !== userProfile.name);
        if (otherUserKey) {
           setPartner(usersData[otherUserKey]);
        }
      }
    });
    return () => unsub();
  }, [pairCode, userProfile.name]);

  // 上报自己的在线状态/资料 & 本地持久化 (添加了 try-catch 保护)
  useEffect(() => {
    try {
      // 总是尝试保存本地，这样即使没有同步也能记住修改
      localStorage.setItem('ht_profile', JSON.stringify(userProfile));

      // 如果已连接，同步状态到 Firebase
      if (pairCode) {
         syncService.updateUserStatus(pairCode, userProfile.name, {
           name: userProfile.name,
           avatar: userProfile.avatar,
           isOnline: true
         });
      }
    } catch (error) {
      console.error("Profile Save Error:", error);
      // 即使本地存储满了，也尽量不让 App 崩溃
    }
  }, [userProfile, pairCode]);

  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [aiRecommendedIds, setAiRecommendedIds] = useState<string[]>([]);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [recipeSearch, setRecipeSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('全部');
  const categories = ['全部', ...RECIPE_CATEGORIES];

  const refreshAIRecommendations = async () => {
    setIsAiLoading(true);
    try {
      const ids = await getAIRecommendedRecipeIds(inventory, recipes);
      setAiRecommendedIds(ids);
    } catch (err) {
      console.error("AI 推荐失败", err);
    } finally {
      setIsAiLoading(false);
    }
  };

  const recommendedRecipes = useMemo(() => {
    return recipes.filter(r => aiRecommendedIds.includes(r.id));
  }, [recipes, aiRecommendedIds]);

  const filteredRecipes = useMemo(() => {
    return recipes.filter(r => {
      const matchesSearch = r.title.toLowerCase().includes(recipeSearch.toLowerCase()) || 
                           r.ingredients.some(i => i.name.toLowerCase().includes(recipeSearch.toLowerCase()));
      const matchesCat = activeCategory === '全部' || r.category === activeCategory;
      return matchesSearch && matchesCat;
    });
  }, [recipes, recipeSearch, activeCategory]);

  const handleUpdateProfile = async (updates: Partial<UserProfile>) => {
    const newProfile = { ...userProfile, ...updates };
    setUserProfile(newProfile);
    
    // 如果设置了新的 pairCode (即刚刚加入家庭)
    if (updates.pairCode && updates.pairCode !== userProfile.pairCode) {
       // 尝试把当前的本地数据推送到云端作为初始化（如果云端为空）
       await syncService.initializeCloudData(updates.pairCode, {
          ht_inventory: inventory,
          ht_recipes: recipes,
          ht_plans: plans,
          ht_shopping: shoppingList,
          ht_history: history
       });
       alert("家庭连接成功！数据已开始同步。");
    }
  };

  const handleAddIngredient = (item: Partial<Ingredient>) => {
    const newItem: Ingredient = {
      id: Date.now().toString() + Math.random(),
      name: item.name || '未知食材',
      amount: item.amount || 0,
      unit: item.unit || '单位',
      category: (item.category as any) || '其他',
      storageZone: (item.storageZone as any) || '常温',
      updatedAt: Date.now()
    };
    setInventory(prev => [newItem, ...prev]);
  };

  const handleUpdateIngredient = (id: string, amount: number) => {
    setInventory(prev => prev.map(i => i.id === id ? { ...i, amount, updatedAt: Date.now() } : i));
  };

  const handleDeleteIngredient = (id: string) => {
    setInventory(prev => prev.filter(item => item.id !== id));
  };

  const handleAIScan = async (base64: string) => {
    setIsScanning(true);
    try {
      const results = await parseIngredientsFromImage(base64);
      if (results && results.length > 0) {
        results.forEach(res => handleAddIngredient(res));
      } else {
        alert('AI 未能识别出食材，请确保图片清晰。');
      }
    } catch (err) {
      alert('AI 服务暂时不可用。');
    } finally {
      setIsScanning(false);
    }
  };

  const handlePlanRecipe = (recipeId: string, date: string) => {
    setPlans(prev => ({ ...prev, [date]: [...(prev[date] || []), recipeId] }));
  };

  const handleRemoveFromPlan = (recipeId: string, date: string) => {
    setPlans(prev => ({
      ...prev,
      [date]: (prev[date] || []).filter(id => id !== recipeId)
    }));
  };

  const handleDeductInventory = (deductions: { name: string, amount: number }[]) => {
    setInventory(prev => prev.map(item => {
      const deduction = deductions.find(d => d.name === item.name);
      if (deduction) {
        return { ...item, amount: Math.max(0, item.amount - deduction.amount), updatedAt: Date.now() };
      }
      return item;
    }));
  };

  const handleArchive = (date: string) => {
    const recipeIds = plans[date] || [];
    const recipeTitles = recipes.filter(r => recipeIds.includes(r.id)).map(r => r.title);
    if (recipeTitles.length > 0) {
      setHistory(prev => [...prev, { date, recipeTitles }]);
    }
  };

  const handleRecipeFeedback = (recipeId: string, rating: number, appetizingRating: number) => {
    setRecipes(prev => prev.map(r => {
      if (r.id === recipeId) {
        const count = (r.reviewCount || 0) + 1;
        const appCount = (r.appetizingCount || 0) + 1;
        return {
          ...r,
          rating: ((r.rating || 5) * (count - 1) + rating) / count,
          reviewCount: count,
          appetizingRating: ((r.appetizingRating || 5) * (appCount - 1) + appetizingRating) / appCount,
          appetizingCount: appCount
        };
      }
      return r;
    }));
  };

  const handleSaveRecipe = async (recipe: Recipe) => {
    if (recipe.id) {
      setRecipes(prev => prev.map(r => r.id === recipe.id ? recipe : r));
    } else {
      setRecipes(prev => [...prev, { ...recipe, id: Date.now().toString() }]);
    }
    setCurrentView('recipes');
    setSelectedRecipe(null);
    return true;
  };

  const switchView = (v: ViewType) => {
    setSelectedRecipe(null);
    setCurrentView(v);
  };

  const renderView = () => {
    if (selectedRecipe && currentView !== 'add-recipe') {
      return (
        <RecipeDetail 
          recipe={selectedRecipe} 
          inventory={inventory} 
          plans={plans}
          onBack={() => setSelectedRecipe(null)}
          onPlan={handlePlanRecipe}
          onEdit={() => setCurrentView('add-recipe')}
        />
      );
    }

    switch (currentView) {
      case 'dashboard':
        return (
          <div className="p-5 lg:p-10 space-y-6 max-w-5xl mx-auto pb-32">
            <header className="flex justify-between items-center">
              <h2 className="text-2xl font-black text-gray-900 tracking-tight italic">家庭概览</h2>
              {pairCode && (
                 <div className="flex items-center gap-2 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100 animate-pulse">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-[10px] font-bold text-emerald-700">实时同步中</span>
                 </div>
              )}
            </header>

            {/* 高度缩减的核心卡片 */}
            <div className="grid grid-cols-3 gap-3">
              <div onClick={() => switchView('inventory')} className="bg-emerald-800 p-4 rounded-2xl text-white flex flex-col justify-center items-center h-28 shadow-md active:scale-95 transition-all cursor-pointer">
                <div className="mb-2"><FridgeIcon className="w-8 h-8 text-emerald-200" /></div>
                <p className="text-sm font-bold opacity-90 mb-0.5">食材储备</p>
                <p className="text-2xl font-black leading-none">{inventory.length}</p>
              </div>
              <div onClick={() => switchView('plan')} className="bg-amber-600 p-4 rounded-2xl text-white flex flex-col justify-center items-center h-28 shadow-md active:scale-95 transition-all cursor-pointer">
                <div className="mb-2"><PlanIcon className="w-8 h-8 text-amber-200" /></div>
                <p className="text-sm font-bold opacity-90 mb-0.5">今日计划</p>
                <p className="text-2xl font-black leading-none">{(plans[new Date().toISOString().split('T')[0]] || []).length}</p>
              </div>
              <div onClick={() => switchView('shopping')} className="bg-gray-900 p-4 rounded-2xl text-white flex flex-col justify-center items-center h-28 shadow-md active:scale-95 transition-all cursor-pointer">
                <div className="mb-2"><ShoppingIcon className="w-8 h-8 text-gray-400" /></div>
                <p className="text-sm font-bold opacity-90 mb-0.5">同步采购</p>
                <p className="text-2xl font-black leading-none">{shoppingList.filter(l => !l.checked).length}</p>
              </div>
            </div>

            <section className="space-y-3">
              <h3 className="text-xs font-black text-gray-400 tracking-widest">AI 灵感工坊</h3>
              
              {!isAiLoading && aiRecommendedIds.length > 0 && (
                <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 snap-x">
                  {recommendedRecipes.map(r => (
                    <div key={r.id} onClick={() => setSelectedRecipe(r)} className="shrink-0 w-48 h-28 rounded-2xl relative overflow-hidden group cursor-pointer snap-center shadow-sm">
                      <img src={r.images[0]} className="absolute inset-0 w-full h-full object-cover" alt="" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      
                      {/* 推荐卡片上的评分 */}
                      <div className="absolute top-2 right-2 flex flex-col items-end gap-1">
                         <div className="bg-black/40 backdrop-blur-md px-1.5 py-0.5 rounded flex items-center gap-0.5 border border-white/10">
                            <span className="text-[8px] text-amber-400">★</span>
                            <span className="text-[8px] font-bold text-white">{r.rating?.toFixed(1) || '5.0'}</span>
                         </div>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3">
                        <h4 className="text-white font-bold text-sm truncate">{r.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <button 
                onClick={refreshAIRecommendations}
                className={`w-full group relative overflow-hidden bg-emerald-950/90 py-4 rounded-2xl text-center transition-all ${isAiLoading ? 'cursor-wait' : 'hover:bg-black active:scale-[0.98]'}`}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className={`${isAiLoading ? 'animate-spin' : ''} text-2xl`}>
                    {isAiLoading ? <SpinnerIcon className="w-6 h-6 text-emerald-400" /> : <MagicIcon className="w-6 h-6 text-emerald-400" />}
                  </span>
                  <span className="text-white font-bold text-sm">
                    {isAiLoading ? '正在分析...' : '获取今日灵感'}
                  </span>
                </div>
                {isAiLoading && (
                  <div className="absolute bottom-0 left-0 h-0.5 bg-emerald-500 w-full animate-[loading_2s_infinite]"></div>
                )}
              </button>
            </section>
          </div>
        );
      case 'inventory':
        return <InventoryView inventory={inventory} onAdd={handleAddIngredient} onUpdate={handleUpdateIngredient} onDelete={handleDeleteIngredient} onAIScan={handleAIScan} isScanning={isScanning} />;
      case 'recipes':
        return (
          <div className="p-5 lg:p-10 space-y-6 max-w-6xl mx-auto pb-32">
            <h2 className="text-2xl font-black text-center text-gray-900 italic">私房食谱库</h2>
            <div className="flex flex-col gap-4">
              <div className="relative group w-full">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30 text-sm">🔍</span>
                <input 
                  type="text" 
                  placeholder="搜索..." 
                  className="w-full bg-white border border-gray-100 pl-10 pr-4 py-3 rounded-xl font-bold text-sm outline-none shadow-sm focus:border-emerald-400 transition-all"
                  value={recipeSearch}
                  onChange={e => setRecipeSearch(e.target.value)}
                />
              </div>
              <button 
                onClick={() => switchView('add-recipe')} 
                className="w-full py-3 bg-gray-900 text-white rounded-xl text-xs font-black uppercase tracking-widest active:scale-95 transition-all shadow-md"
              >
                ＋ 记录新菜谱
              </button>
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                {categories.map(cat => (
                  <button 
                    key={cat} 
                    onClick={() => setActiveCategory(cat)}
                    className={`shrink-0 px-4 py-1.5 rounded-lg text-[10px] font-bold transition-all ${activeCategory === cat ? 'bg-emerald-600 text-white shadow-sm' : 'bg-white border border-gray-100 text-gray-500'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredRecipes.map(r => (
                <div key={r.id} onClick={() => setSelectedRecipe(r)} className="bg-white rounded-2xl overflow-hidden border border-gray-50 shadow-sm transition-all cursor-pointer group">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={r.images?.[0]} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={r.title} />
                    
                    {/* 食谱封面评分遮罩 */}
                    <div className="absolute top-2 right-2 flex flex-col items-end gap-1.5">
                       {/* 星级评分 */}
                       <div className="bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 border border-white/10 shadow-sm">
                          <span className="text-[10px] text-amber-400">★</span>
                          <span className="text-[10px] font-bold text-white leading-none">{r.rating?.toFixed(1) || '5.0'}</span>
                       </div>
                       
                       {/* 下饭评分 */}
                       <div className="bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 border border-white/10 shadow-sm">
                          <span className="text-[10px] text-orange-200">🍚</span>
                          <span className="text-[10px] font-bold text-white leading-none">{r.appetizingRating ? r.appetizingRating.toFixed(1) : '5.0'}</span>
                       </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase mb-1.5 inline-block">{r.category}</span>
                    <h3 className="font-bold text-gray-800 text-sm leading-tight line-clamp-1">{r.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'plan':
        return <PlanView plans={plans} recipes={recipes} inventory={inventory} onRemoveFromPlan={handleRemoveFromPlan} onArchive={handleArchive} onAddItemsToShopping={(items) => setShoppingList(prev => [...items.map(i => ({ ...i, id: Date.now().toString()+Math.random(), checked: false, addedAt: Date.now() })) as ShoppingItem[], ...prev])} onDeductInventory={handleDeductInventory} onRecipeFeedback={handleRecipeFeedback} history={history} />;
      case 'shopping':
        return <ShoppingView list={shoppingList} onUpdate={setShoppingList} plans={plans} recipes={recipes} inventory={inventory} />;
      case 'settings':
        // 传递 partner 状态给 SettingsView
        const profileWithPartner = { ...userProfile, partner: partner };
        return <SettingsView userProfile={profileWithPartner} onUpdateProfile={handleUpdateProfile} recipes={recipes} inventory={inventory} onLogout={() => {}} />;
      case 'add-recipe':
        return <AddRecipeView onSave={handleSaveRecipe} onCancel={() => switchView('recipes')} initialRecipe={selectedRecipe || undefined} />;
      default:
        return null;
    }
  };

  const isDetailActive = selectedRecipe || currentView === 'add-recipe';

  return (
    <div className="min-h-screen bg-[#fcfdfe] lg:pl-64">
      {!isDetailActive && (
        <header className="fixed top-0 left-0 right-0 lg:left-64 z-[80] h-14 px-5 lg:px-10 flex justify-between items-center bg-white/80 backdrop-blur-xl border-b border-gray-100/50">
          <div className="flex items-center">
            <h1 onClick={() => switchView('dashboard')} className="text-lg font-black text-gray-900 tracking-tighter italic cursor-pointer select-none">
              HOMETASTE<span className="text-emerald-500">.</span>
            </h1>
          </div>
          <button onClick={() => switchView('settings')} className="w-8 h-8 rounded-full border border-gray-100 overflow-hidden bg-gray-50 relative">
            <img src={userProfile.avatar} className="w-full h-full object-cover" alt="Profile" />
            {pairCode && <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></div>}
          </button>
        </header>
      )}

      <Sidebar currentView={currentView} onViewChange={switchView} userProfile={userProfile} />
      
      <main className={`relative transition-all duration-300 ${!isDetailActive ? 'pt-16' : ''}`}>
        {renderView()}
      </main>
      
      {/* Hide BottomNav when in Detail mode to allow full screen overlay without z-index issues */}
      {!isDetailActive && (
        <div className="lg:hidden">
          <BottomNav currentView={currentView} onViewChange={switchView} />
        </div>
      )}

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default App;
