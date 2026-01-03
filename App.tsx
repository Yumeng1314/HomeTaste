
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

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [inventory, setInventory] = useState<Ingredient[]>(INITIAL_INVENTORY);
  const [recipes, setRecipes] = useState<Recipe[]>(INITIAL_RECIPES);
  const [plans, setPlans] = useState<DailyPlan>({});
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>([]);
  const [history, setHistory] = useState<MenuHistory[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  
  const [aiRecommendedIds, setAiRecommendedIds] = useState<string[]>([]);
  const [isAiLoading, setIsAiLoading] = useState(false);

  const [recipeSearch, setRecipeSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('全部');

  const categories = ['全部', ...RECIPE_CATEGORIES];

  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: '超级大厨',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
    role: '主理人',
    pairCode: 'HT-' + Math.floor(1000 + Math.random() * 9000)
  });

  useEffect(() => {
    refreshAIRecommendations();
  }, [inventory.length, recipes.length]);

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
      id: Date.now().toString(),
      name: item.name || '未知食材',
      amount: item.amount || 0,
      unit: item.unit || '份',
      category: (item.category as any) || '其他',
      storageZone: (item.storageZone as any) || '常温',
      updatedAt: Date.now()
    };
    setInventory(prev => [...prev, newItem]);
  };

  const handleUpdateIngredient = (id: string, amount: number) => {
    setInventory(prev => prev.map(i => i.id === id ? { ...i, amount, updatedAt: Date.now() } : i));
  };

  const handleDeleteIngredient = (id: string) => {
    setInventory(prev => prev.filter(i => i.id !== id));
  };

  const handleAIScan = async (base64: string) => {
    const results = await parseIngredientsFromImage(base64);
    results.forEach(res => handleAddIngredient(res));
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
          <div className="p-6 lg:p-10 space-y-12 max-w-5xl mx-auto pb-32">
            <div className="flex justify-between items-center">
              <h2 className="text-4xl font-black text-gray-900 tracking-tight">全家动态</h2>
              <button onClick={refreshAIRecommendations} className={`p-3 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all ${isAiLoading ? 'animate-spin opacity-50' : 'active:scale-90 hover:bg-emerald-50'}`}>
                {isAiLoading ? '⌛' : '🔄'}
              </button>
            </div>

            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xl">✨</span>
                <h3 className="text-sm font-black text-gray-400 uppercase tracking-[0.2em]">Chef's AI Suggestions</h3>
              </div>
              <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 snap-x">
                {isAiLoading ? (
                  [1,2].map(i => <div key={i} className="shrink-0 w-72 h-44 bg-gray-100 rounded-[2.5rem] animate-pulse"></div>)
                ) : recommendedRecipes.length > 0 ? (
                  recommendedRecipes.map(r => (
                    <div key={r.id} onClick={() => setSelectedRecipe(r)} className="shrink-0 w-72 h-44 rounded-[2.5rem] relative overflow-hidden group cursor-pointer snap-center shadow-lg hover:shadow-xl transition-all">
                      <img src={r.images[0]} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest block mb-1">匹配度 95%</span>
                        <h4 className="text-white font-black text-lg truncate leading-tight">{r.title}</h4>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="w-full py-10 bg-emerald-50/50 rounded-[2.5rem] border border-dashed border-emerald-100 flex flex-col items-center justify-center text-center px-10">
                    <p className="text-xs font-black text-emerald-600 uppercase tracking-widest">库存不足，AI 还在努力构思中...</p>
                  </div>
                )}
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div onClick={() => switchView('inventory')} className="bg-emerald-600 p-8 rounded-[3rem] text-white space-y-4 shadow-xl active:scale-95 transition-all cursor-pointer group">
                <div className="flex justify-between items-start">
                  <p className="text-sm font-black uppercase tracking-widest opacity-80">当前库存</p>
                  <span className="text-2xl group-hover:rotate-12 transition-transform">🧊</span>
                </div>
                <p className="text-5xl font-black">{inventory.length} <span className="text-xl opacity-60 font-bold">项</span></p>
              </div>
              <div onClick={() => switchView('plan')} className="bg-amber-500 p-8 rounded-[3rem] text-white space-y-4 shadow-xl active:scale-95 transition-all cursor-pointer group">
                <div className="flex justify-between items-start">
                  <p className="text-sm font-black uppercase tracking-widest opacity-80">今日安排</p>
                  <span className="text-2xl group-hover:rotate-12 transition-transform">🍳</span>
                </div>
                <p className="text-5xl font-black">{(plans[new Date().toISOString().split('T')[0]] || []).length} <span className="text-xl opacity-60 font-bold">道菜</span></p>
              </div>
              <div onClick={() => switchView('shopping')} className="bg-gray-900 p-8 rounded-[3rem] text-white space-y-4 shadow-xl active:scale-95 transition-all cursor-pointer group">
                <div className="flex justify-between items-start">
                  <p className="text-sm font-black uppercase tracking-widest opacity-80">采购清单</p>
                  <span className="text-2xl group-hover:rotate-12 transition-transform">🛒</span>
                </div>
                <p className="text-5xl font-black">{shoppingList.filter(l => !l.checked).length} <span className="text-xl opacity-60 font-bold">待买</span></p>
              </div>
            </div>
          </div>
        );
      case 'inventory':
        return <InventoryView inventory={inventory} onAdd={handleAddIngredient} onUpdate={handleUpdateIngredient} onDelete={handleDeleteIngredient} onAIScan={handleAIScan} />;
      case 'recipes':
        return (
          <div className="p-6 lg:p-10 space-y-10 max-w-6xl mx-auto pb-32">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-black text-gray-900 tracking-tight">私房食谱</h2>
              <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.3em]">Family Cookbook Archive</p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="relative group max-w-2xl mx-auto w-full">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xl grayscale opacity-30 group-focus-within:opacity-100 transition-opacity">🔍</span>
                <input 
                  type="text" 
                  placeholder="搜索菜名或食材..." 
                  className="w-full bg-white border border-gray-100 pl-14 pr-6 py-4 rounded-2xl font-bold text-sm outline-none shadow-sm focus:border-emerald-400 focus:ring-4 ring-emerald-50 transition-all"
                  value={recipeSearch}
                  onChange={e => setRecipeSearch(e.target.value)}
                />
              </div>

              <div className="flex justify-center">
                <button 
                  onClick={() => switchView('add-recipe')} 
                  className="px-12 py-5 bg-gray-900 text-white rounded-2xl text-[12px] font-black uppercase tracking-[0.2em] active:scale-95 transition-all shadow-xl hover:bg-black flex items-center gap-3 group"
                >
                  <span className="text-2xl group-hover:rotate-12 transition-transform">👨‍🍳</span> 记录新美味
                </button>
              </div>

              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 justify-center">
                {categories.map(cat => (
                  <button 
                    key={cat} 
                    onClick={() => setActiveCategory(cat)}
                    className={`shrink-0 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-emerald-600 text-white shadow-md' : 'bg-white border border-gray-100 text-gray-400 hover:border-emerald-200'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map(r => (
                <div key={r.id} onClick={() => setSelectedRecipe(r)} className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={r.images?.[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={r.title} />
                  </div>
                  <div className="absolute top-4 right-4 flex flex-col gap-1.5">
                    <div className="px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-xl flex items-center gap-1 shadow-sm border border-white/20">
                      <span className="text-amber-400 text-xs">★</span>
                      <span className="text-[10px] font-black text-gray-800">{r.rating ? r.rating.toFixed(1) : '5.0'}</span>
                    </div>
                    <div className="px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-xl flex items-center gap-1 shadow-sm border border-white/20">
                      <span className="text-orange-400 text-[10px]">🍚</span>
                      <span className="text-[10px] font-black text-gray-800">{r.appetizingRating ? r.appetizingRating.toFixed(1) : '5.0'}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest mb-1.5 block">{r.category}</span>
                    <h3 className="font-black text-gray-800 text-lg leading-tight">{r.title}</h3>
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
        <header className="fixed top-0 left-0 right-0 lg:left-64 z-[80] h-20 px-6 lg:px-10 flex justify-between items-center bg-white/60 backdrop-blur-2xl border-b border-gray-100/30">
          <div className="flex items-center">
            <h1 onClick={() => switchView('dashboard')} className="text-2xl font-black text-gray-900 tracking-tighter italic cursor-pointer select-none">
              HOMETASTE<span className="text-emerald-500">.</span>
            </h1>
          </div>
          <div className="flex items-center gap-3">
            {userProfile.partner && (
              <div className="flex items-center -space-x-3 mr-3 transition-all animate-in fade-in slide-in-from-right-2">
                <img src={userProfile.partner.avatar} className="w-8 h-8 rounded-full border-2 border-white shadow-sm ring-2 ring-emerald-100" alt="Partner" />
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white relative top-2 right-1 animate-pulse"></div>
              </div>
            )}
            <button onClick={() => switchView('settings')} className="w-10 h-10 rounded-2xl border-2 border-white shadow-xl overflow-hidden hover:scale-105 active:scale-95 transition-all bg-white ring-1 ring-gray-100">
              <img src={userProfile.avatar} className="w-full h-full object-cover" alt="Profile" />
            </button>
          </div>
        </header>
      )}

      <Sidebar currentView={currentView} onViewChange={switchView} userProfile={userProfile} />
      
      <main className={`relative transition-all duration-300 ${!isDetailActive ? 'pt-28' : ''}`}>
        {renderView()}
      </main>
      
      <div className="lg:hidden">
        <BottomNav currentView={currentView} onViewChange={switchView} />
      </div>
    </div>
  );
};

export default App;
