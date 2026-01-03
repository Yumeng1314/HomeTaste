
import React, { useState, useMemo, useEffect } from 'react';
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

// Custom Hook for LocalStorage Persistence
function usePersistentState<T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.warn(`Error writing localStorage key "${key}":`, error);
    }
  }, [key, state]);

  return [state, setState];
}

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  
  // Apply persistence to all critical data
  const [inventory, setInventory] = usePersistentState<Ingredient[]>('ht_inventory', INITIAL_INVENTORY);
  const [recipes, setRecipes] = usePersistentState<Recipe[]>('ht_recipes', INITIAL_RECIPES);
  const [plans, setPlans] = usePersistentState<DailyPlan>('ht_plans', {});
  const [shoppingList, setShoppingList] = usePersistentState<ShoppingItem[]>('ht_shopping', []);
  const [history, setHistory] = usePersistentState<MenuHistory[]>('ht_history', []);
  
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  
  const [aiRecommendedIds, setAiRecommendedIds] = useState<string[]>([]);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  const [recipeSearch, setRecipeSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('全部');

  const categories = ['全部', ...RECIPE_CATEGORIES];

  const [userProfile, setUserProfile] = usePersistentState<UserProfile>('ht_profile', {
    name: '美食主理人',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
    role: '高级厨师',
    pairCode: 'HT-' + Math.floor(1000 + Math.random() * 9000)
  });

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

  const handleUpdateProfile = (updates: Partial<UserProfile>) => {
    setUserProfile(prev => ({ ...prev, ...updates }));
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
        alert('AI 未能识别出食材，请换个角度试试。');
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
        return <SettingsView userProfile={userProfile} onUpdateProfile={handleUpdateProfile} recipes={recipes} inventory={inventory} onLogout={() => {}} />;
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
          <button onClick={() => switchView('settings')} className="w-8 h-8 rounded-full border border-gray-100 overflow-hidden bg-gray-50">
            <img src={userProfile.avatar} className="w-full h-full object-cover" alt="Profile" />
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
