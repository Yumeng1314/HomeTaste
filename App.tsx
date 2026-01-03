
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
  const [isScanning, setIsScanning] = useState(false);

  const [recipeSearch, setRecipeSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('全部');

  const categories = ['全部', ...RECIPE_CATEGORIES];

  const [userProfile, setUserProfile] = useState<UserProfile>({
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

  // Fixed the filter predicate to correctly identify items to remove
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
          <div className="p-6 lg:p-10 space-y-12 max-w-5xl mx-auto pb-48">
            <header className="flex justify-between items-center">
              <h2 className="text-4xl font-black text-gray-900 tracking-tight italic">家庭概览</h2>
              {/* 移除了下方的冗余头像组 */}
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div onClick={() => switchView('inventory')} className="bg-emerald-800 p-8 rounded-[2.5rem] text-white space-y-6 shadow-xl active:scale-95 transition-all cursor-pointer group">
                <div className="flex justify-between items-start">
                  <p className="text-xl font-black uppercase tracking-tight opacity-90">食材储备</p>
                  <span className="text-3xl group-hover:rotate-12 transition-transform">🧊</span>
                </div>
                <p className="text-6xl font-black leading-none">{inventory.length} <span className="text-2xl opacity-60 font-bold tracking-tighter">件</span></p>
              </div>
              <div onClick={() => switchView('plan')} className="bg-amber-600 p-8 rounded-[2.5rem] text-white space-y-6 shadow-xl active:scale-95 transition-all cursor-pointer group">
                <div className="flex justify-between items-start">
                  <p className="text-xl font-black uppercase tracking-tight opacity-90">今日计划</p>
                  <span className="text-3xl group-hover:rotate-12 transition-transform">🍳</span>
                </div>
                <p className="text-6xl font-black leading-none">{(plans[new Date().toISOString().split('T')[0]] || []).length} <span className="text-2xl opacity-60 font-bold tracking-tighter">餐</span></p>
              </div>
              <div onClick={() => switchView('shopping')} className="bg-gray-900 p-8 rounded-[2.5rem] text-white space-y-6 shadow-xl active:scale-95 transition-all cursor-pointer group">
                <div className="flex justify-between items-start">
                  <p className="text-xl font-black uppercase tracking-tight opacity-90">同步采购</p>
                  <span className="text-3xl group-hover:rotate-12 transition-transform">🛒</span>
                </div>
                <p className="text-6xl font-black leading-none">{shoppingList.filter(l => !l.checked).length} <span className="text-2xl opacity-60 font-bold tracking-tighter">待买</span></p>
              </div>
            </div>

            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xl">✨</span>
                <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.4em]">AI 灵感工坊</h3>
              </div>
              
              {!isAiLoading && aiRecommendedIds.length > 0 && (
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-6 snap-x animate-in slide-in-from-bottom duration-500">
                  {recommendedRecipes.map(r => (
                    <div key={r.id} onClick={() => setSelectedRecipe(r)} className="shrink-0 w-72 h-44 rounded-[2.5rem] relative overflow-hidden group cursor-pointer snap-center shadow-lg hover:shadow-2xl transition-all">
                      <img src={r.images[0]} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest block mb-1">根据现有食材推荐</span>
                        <h4 className="text-white font-black text-lg truncate leading-tight">{r.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <button 
                onClick={refreshAIRecommendations}
                className={`w-full group relative overflow-hidden bg-emerald-950 p-10 rounded-[3rem] text-center transition-all ${isAiLoading ? 'cursor-wait' : 'hover:bg-black active:scale-[0.98]'}`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-400/5 rounded-full -ml-16 -mb-16 blur-2xl"></div>

                <div className="relative z-10 space-y-4">
                  <div className={`text-4xl mx-auto mb-2 transition-transform duration-1000 ${isAiLoading ? 'animate-pulse scale-110' : 'group-hover:rotate-[15deg]'}`}>
                    {isAiLoading ? '🕯️' : '🪄'}
                  </div>
                  <h4 className="text-white font-black text-lg tracking-tight italic">
                    {isAiLoading ? '正在为您调制今日灵感...' : '寻求 AI 厨师的定制建议'}
                  </h4>
                  <p className="text-emerald-400/40 text-[9px] font-black uppercase tracking-[0.4em]">
                    {isAiLoading ? 'ANALYZING PANTRY...' : 'Seek Culinary Inspiration'}
                  </p>
                </div>
                
                {isAiLoading && (
                  <div className="absolute bottom-0 left-0 h-1 bg-emerald-500 w-full animate-[loading_2s_infinite]"></div>
                )}
              </button>
            </section>
          </div>
        );
      case 'inventory':
        return <InventoryView inventory={inventory} onAdd={handleAddIngredient} onUpdate={handleUpdateIngredient} onDelete={handleDeleteIngredient} onAIScan={handleAIScan} isScanning={isScanning} />;
      case 'recipes':
        return (
          <div className="p-6 lg:p-10 space-y-10 max-w-6xl mx-auto pb-32">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-black text-gray-900 tracking-tight italic">私房食谱库</h2>
              <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.4em]">Artisan Collection</p>
            </div>

            <div className="flex flex-col gap-8">
              <div className="relative group max-w-2xl mx-auto w-full">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-xl grayscale opacity-30 group-focus-within:opacity-100 transition-opacity">🔍</span>
                <input 
                  type="text" 
                  placeholder="搜索菜名或食材..." 
                  className="w-full bg-white border border-gray-100 pl-16 pr-8 py-5 rounded-2xl font-bold text-base outline-none shadow-sm focus:border-emerald-400 focus:ring-4 ring-emerald-50 transition-all"
                  value={recipeSearch}
                  onChange={e => setRecipeSearch(e.target.value)}
                />
              </div>

              <div className="flex justify-center">
                <button 
                  onClick={() => switchView('add-recipe')} 
                  className="px-14 py-5 bg-gray-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] active:scale-95 transition-all shadow-2xl hover:bg-black flex items-center gap-4 group"
                >
                  <span className="text-2xl group-hover:rotate-12 transition-transform">👨‍🍳</span> 记录新菜谱
                </button>
              </div>

              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 justify-center">
                {categories.map(cat => (
                  <button 
                    key={cat} 
                    onClick={() => setActiveCategory(cat)}
                    className={`shrink-0 px-6 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-emerald-600 text-white shadow-md' : 'bg-white border border-gray-100 text-gray-400 hover:border-emerald-200'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRecipes.map(r => (
                <div key={r.id} onClick={() => setSelectedRecipe(r)} className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-50 shadow-sm hover:shadow-2xl transition-all cursor-pointer group relative">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={r.images?.[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={r.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-xl flex items-center gap-1 shadow-sm">
                      <span className="text-amber-400 text-xs">★</span>
                      <span className="text-[10px] font-black text-gray-800">{r.rating ? r.rating.toFixed(1) : '5.0'}</span>
                    </div>
                  </div>

                  <div className="p-7">
                    <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg uppercase tracking-widest mb-2 inline-block">{r.category}</span>
                    <h3 className="font-black text-gray-800 text-xl leading-tight group-hover:text-emerald-600 transition-colors">{r.title}</h3>
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
          <button onClick={() => switchView('settings')} className="w-10 h-10 rounded-2xl border-2 border-white shadow-xl overflow-hidden hover:scale-110 active:scale-95 transition-all bg-white ring-1 ring-gray-100">
            <img src={userProfile.avatar} className="w-full h-full object-cover" alt="Profile" />
          </button>
        </header>
      )}

      <Sidebar currentView={currentView} onViewChange={switchView} userProfile={userProfile} />
      
      <main className={`relative transition-all duration-300 ${!isDetailActive ? 'pt-28' : ''}`}>
        {renderView()}
      </main>
      
      <div className="lg:hidden">
        <BottomNav currentView={currentView} onViewChange={switchView} />
      </div>

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
