import React, { useEffect, useMemo, useState } from 'react';
import type { Ingredient, PlanEntry, Recipe, ShoppingItem, UserProfile, ViewType } from './types';
import Sidebar from './components/Sidebar';
import InventoryView from './components/InventoryView';
import RecipeDetail from './components/RecipeDetail';
import PlanView from './components/PlanView';
import ShoppingView from './components/ShoppingView';
import BottomNav from './components/BottomNav';
import AddRecipeView from './components/AddRecipeView';
import SettingsView from './components/SettingsView';
import { RECIPE_CATEGORIES, RECIPE_PLACEHOLDER } from './constants';
import { parseIngredientsFromImage, getAIRecommendedRecipeIds } from './services/geminiService';
import { FridgeIcon, PlanIcon, ShoppingIcon, MagicIcon, SpinnerIcon } from './components/Icons';
import { publishProfile, subscribeToActivity, validFamilyId } from './services/firebase';
import { useHousehold } from './services/useHousehold';
import { convertAmount, formatAmount, ingredientName, localDate, newId, normalizeRecipe, planKey, records, shoppingId, type Operation } from './household';

const defaultProfile: UserProfile = {
  name: '美食主理人',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
  role: '家庭成员',
};

function loadProfile(): UserProfile {
  try {
    const saved = JSON.parse(localStorage.getItem('ht_profile') ?? '{}');
    return { ...defaultProfile, ...saved, pairCode: validFamilyId(saved.pairCode ?? '') ? saved.pairCode : undefined };
  } catch {
    return defaultProfile;
  }
}

function App() {
  const [profile, setProfile] = useState(loadProfile);

  function updateProfile(updates: Partial<UserProfile>) {
    const next = { ...profile, ...updates };
    try {
      localStorage.setItem('ht_profile', JSON.stringify(next));
      setProfile(next);
      return true;
    } catch {
      return false;
    }
  }

  return <Kitchen key={profile.pairCode ?? 'local'} userProfile={profile} onUpdateProfile={updateProfile} />;
}

interface KitchenProps {
  userProfile: UserProfile;
  onUpdateProfile: (updates: Partial<UserProfile>) => boolean;
}

const Kitchen: React.FC<KitchenProps> = ({ userProfile, onUpdateProfile }) => {
  const pairCode = userProfile.pairCode;
  const sync = useHousehold(pairCode);
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(null);
  const [editingRecipe, setEditingRecipe] = useState<Recipe | undefined>();
  const [toast, setToast] = useState<{ text: string } | null>(null);
  const [aiRecommendedIds, setAiRecommendedIds] = useState<string[]>([]);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [recipeSearch, setRecipeSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('全部');
  const categories = ['全部', ...RECIPE_CATEGORIES];
  const inventory = useMemo(() => records(sync.data, 'inventory').sort((a, b) => b.updatedAt - a.updatedAt), [sync.data]);
  const recipes = useMemo(() => records(sync.data, 'recipes').map(normalizeRecipe), [sync.data]);
  const plans = useMemo(() => records(sync.data, 'plans'), [sync.data]);
  const shoppingList = useMemo(() => records(sync.data, 'shopping').sort((a, b) => Number(a.checked) - Number(b.checked) || b.addedAt - a.addedAt), [sync.data]);
  const history = useMemo(() => records(sync.data, 'history').sort((a, b) => b.date.localeCompare(a.date) || b.completedAt - a.completedAt), [sync.data]);
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId);

  const showToast = (text: string) => setToast({ text });
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 3500);
    return () => clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    if (!pairCode) return;
    let active = true;
    let unsubscribe: (() => void) | undefined;
    subscribeToActivity(pairCode, message => {
      if (active) showToast(message);
    }).then(stop => {
      if (active) unsubscribe = stop;
      else stop();
    }).catch(error => console.warn('Family activity unavailable', error));
    return () => {
      active = false;
      unsubscribe?.();
    };
  }, [pairCode]);

  useEffect(() => {
    if (pairCode && sync.online) {
      publishProfile(pairCode, userProfile).catch(error => console.warn('Family profile update failed', error));
    }
  }, [pairCode, userProfile, sync.online]);

  const filteredRecipes = useMemo(() => {
    const search = recipeSearch.trim().toLowerCase();
    return recipes.filter(recipe =>
      (activeCategory === '全部' || recipe.category === activeCategory)
      && (recipe.title.toLowerCase().includes(search)
        || recipe.ingredients.some(ingredient => ingredient.name.toLowerCase().includes(search))),
    );
  }, [recipes, activeCategory, recipeSearch]);
  const categoryRecipeCount = filteredRecipes.length;
  const recommendedRecipes = recipes.filter(recipe => aiRecommendedIds.includes(recipe.id));

  function activity(action: string, targetType: string, targetName: string) {
    return { actorName: userProfile.name, action, targetType, targetName };
  }

  async function save(operations: Operation[]) {
    const saved = await sync.save(operations);
    if (!saved) showToast(sync.failure || (sync.writable ? '这次更改未能保存，请重试。' : '请等家庭数据加载完成后重试。'));
    return saved;
  }

  function switchView(view: ViewType) {
    setSelectedRecipeId(null);
    setEditingRecipe(undefined);
    setCurrentView(view);
    window.scrollTo(0, 0);
  }

  function addIngredient(item: Omit<Ingredient, 'id' | 'updatedAt'>) {
    const created = { ...item, id: newId(), updatedAt: Date.now() };
    return save([{
      id: newId(), kind: 'change', change: { collection: 'inventory', key: created.id, mode: 'add', value: created },
      activity: activity('新增', '食材', created.name),
    }]);
  }

  function updateIngredient(initial: Ingredient, item: Omit<Ingredient, 'id' | 'updatedAt'>) {
    const patch = Object.fromEntries(Object.entries(item).filter(([field, value]) => initial[field] !== value));
    if (!Object.keys(patch).length) return Promise.resolve(true);
    return save([{
      id: newId(), kind: 'change',
      change: { collection: 'inventory', key: initial.id, mode: 'edit', patch: { ...patch, updatedAt: Date.now() } },
      activity: activity('更新', '食材', item.name),
    }]);
  }

  function deleteIngredient(item: Ingredient) {
    return save([{
      id: newId(), kind: 'change', change: { collection: 'inventory', key: item.id, mode: 'delete' },
      activity: activity('删除', '食材', item.name),
    }]);
  }

  async function refreshAIRecommendations() {
    if (recipes.length === 0) return showToast('先添加菜谱，就能按库存找灵感。');
    setIsAiLoading(true);
    try {
      const ids = await getAIRecommendedRecipeIds(inventory, recipes);
      setAiRecommendedIds(ids);
      if (!ids.length) showToast('暂时没有找到合适的菜谱。');
    } catch {
      showToast('获取灵感失败，请稍后重试。');
    } finally {
      setIsAiLoading(false);
    }
  }

  async function scanIngredients(data: string) {
    setIsScanning(true);
    try {
      return await parseIngredientsFromImage(data);
    } catch {
      showToast('图片识别暂时不可用，可以手动录入。');
      return [];
    } finally {
      setIsScanning(false);
    }
  }

  async function saveRecipe(recipe: Recipe) {
    const previous = editingRecipe;
    const recipeId = previous?.id ?? newId();
    const next = { ...recipe, id: recipeId };
    const changes = Object.fromEntries(Object.entries(next)
      .filter(([field, value]) => value !== undefined && JSON.stringify(previous?.[field]) !== JSON.stringify(value)));
    const saved = await save([{
      id: newId(),
      kind: 'change',
      change: previous
        ? { collection: 'recipes', key: recipeId, mode: 'edit', patch: changes, ...(previous.source && !recipe.source ? { remove: ['source'] } : {}) }
        : { collection: 'recipes', key: recipeId, mode: 'add', value: next },
      activity: activity(previous ? '更新' : '新增', '菜谱', recipe.title),
    }]);
    if (saved) switchView('recipes');
    return saved;
  }

  async function addToPlan(recipeId: string, date: string) {
    const id = planKey(date, recipeId);
    const value = { id, recipeId, date, instanceId: newId() };
    const ok = await save([{ id: newId(), kind: 'change', change: { collection: 'plans', key: id, mode: 'add', value } }]);
    if (ok) showToast('已加入烹饪计划');
    return ok;
  }

  async function addGaps(gaps: { name: string; missing: number; unit: string }[]) {
    const operations = gaps.flatMap<Operation>(gap => {
      const id = shoppingId(gap.name, gap.unit);
      const alreadyListed = shoppingList.filter(item => !item.stockedAt && (item.id !== id || item.checked)
        && ingredientName(item.name) === ingredientName(gap.name)).reduce((sum, item) =>
        sum + (convertAmount(item.quantity ?? 0, item.unit ?? '', gap.unit) ?? 0), 0);
      const quantity = gap.missing - alreadyListed;
      if (!(quantity > 0.000001)) return [];
      const item: ShoppingItem = {
        id, name: gap.name, amount: formatAmount(quantity, gap.unit),
        quantity, unit: gap.unit, addedAt: Date.now(), checked: false, cycle: newId(),
      };
      return [{ id: newId(), kind: 'gap', item }];
    });
    if (!operations.length) {
      showToast('缺料已在清单中，或已买待入库。');
      return true;
    }
    const saved = await save(operations);
    if (saved) showToast('缺料已加入采购清单，重复项已合并。');
    return saved;
  }

  function finishPlan(plan: PlanEntry, uses: { name: string; amount: number; unit: string }[], rating: number, appetizing: number) {
    return save([{
      id: newId(), kind: 'finish', plan, uses, rating, appetizing, at: Date.now(),
      activity: activity('完成', '烹饪计划', recipes.find(recipe => recipe.id === plan.recipeId)?.title || '菜谱'),
    }]);
  }

  const renderView = () => {
    if (selectedRecipe && currentView !== 'add-recipe') {
      return (
        <RecipeDetail
          recipe={selectedRecipe}
          inventory={inventory}
          plans={plans}
          onBack={() => setSelectedRecipeId(null)}
          onPlan={addToPlan}
          onEdit={() => {
            setEditingRecipe(selectedRecipe);
            setCurrentView('add-recipe');
          }}
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
                 <div className="flex items-center gap-2 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100">
                    <div className={`w-2 h-2 rounded-full ${sync.synced ? "bg-emerald-500" : "bg-amber-500"}`}></div>
                    <span className="text-[10px] font-bold text-emerald-700">{sync.status}</span>
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
                <p className="text-2xl font-black leading-none">{plans.filter(plan => plan.date === localDate()).length}</p>
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
                <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 snap-x animate-in fade-in slide-in-from-bottom-2">
                  {recommendedRecipes.map(r => (
                    <div key={r.id} onClick={() => setSelectedRecipeId(r.id)} className="shrink-0 w-48 h-28 rounded-2xl relative overflow-hidden group cursor-pointer snap-center shadow-sm border border-gray-100">
                      <img src={r.images[0] || RECIPE_PLACEHOLDER} className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110" alt="" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      
                      {/* 推荐卡片上的评分 */}
                      <div className="absolute top-2 right-2 flex flex-col items-end gap-1">
                         <div className="bg-black/40 backdrop-blur-md px-1.5 py-0.5 rounded flex items-center gap-0.5 border border-white/10">
                            <span className="text-[8px] text-amber-400">★</span>
                            <span className="text-[8px] font-bold text-white">{r.rating?.toFixed(1) || '5.0'}</span>
                         </div>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="text-[8px] font-bold text-emerald-300 uppercase tracking-wider mb-0.5 block">今日推荐</span>
                        <h4 className="text-white font-bold text-sm truncate">{r.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <button 
                onClick={refreshAIRecommendations} disabled={isAiLoading}
                className={`w-full group relative overflow-hidden bg-emerald-950/90 py-4 rounded-2xl text-center transition-all ${isAiLoading ? 'cursor-wait opacity-80' : 'hover:bg-black active:scale-[0.98]'}`}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className={`${isAiLoading ? 'animate-spin' : ''} text-2xl`}>
                    {isAiLoading ? <SpinnerIcon className="w-6 h-6 text-emerald-400" /> : <MagicIcon className="w-6 h-6 text-emerald-400" />}
                  </span>
                  <span className="text-white font-bold text-sm">
                    {isAiLoading ? '正在分析库存与口味...' : '获取今日灵感'}
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
        return <InventoryView inventory={inventory} onAdd={addIngredient} onUpdate={updateIngredient} onDelete={deleteIngredient}
          onAdjust={(item, delta) => save([{ id: newId(), kind: 'quantity', key: item.id, delta, at: Date.now() }])}
          onAIScan={scanIngredients} isScanning={isScanning} />;
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
              <p className="text-[11px] font-bold text-gray-400 px-1">
                {activeCategory === '全部' ? '全部菜谱' : activeCategory} · {categoryRecipeCount}道菜品
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredRecipes.length === 0 && <p className="col-span-full py-12 text-center text-sm text-gray-500">{recipeSearch ? '没有符合搜索条件的菜谱' : '这里还没有菜谱'}</p>}
              {filteredRecipes.map(r => (
                <div key={r.id} onClick={() => setSelectedRecipeId(r.id)} className="bg-white rounded-2xl overflow-hidden border border-gray-50 shadow-sm transition-all cursor-pointer group">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img loading="lazy" src={r.images[0] || RECIPE_PLACEHOLDER} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={r.title} />
                    
                    {/* 食谱封面评分遮罩 */}
                    <div className="absolute top-2 right-2 flex flex-col items-end gap-1.5">
                       {/* 星级评分 */}
                       <div className="bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 border border-white/10 shadow-sm">
                          <span className="text-[10px] text-amber-400">★</span>
                          <span className="text-[10px] font-bold text-white leading-none">{r.rating?.toFixed(1) || '—'}</span>
                       </div>
                       
                       {/* 下饭评分 */}
                       <div className="bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 border border-white/10 shadow-sm">
                          <span className="text-[10px] text-orange-200">🍚</span>
                          <span className="text-[10px] font-bold text-white leading-none">{r.appetizingRating?.toFixed(1) || '—'}</span>
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
        return <PlanView plans={plans} recipes={recipes} inventory={inventory} history={history}
          onRemoveFromPlan={plan => save([{ id: newId(), kind: 'remove-plan', plan }])}
          onComplete={finishPlan} onAddItemsToShopping={addGaps} />;
      case 'shopping':
        return <ShoppingView list={shoppingList} inventory={inventory}
          onSaveItem={(item, previous) => save([{
            id: newId(), ...(previous
              ? { kind: 'edit-shopping', item, cycle: previous.cycle }
              : { kind: 'change', change: { collection: 'shopping', key: item.id, mode: 'add', value: item } }),
            activity: activity(previous ? '更新' : '新增', '采购项', item.name),
          }])}
          onToggle={item => save([{
            id: newId(), kind: 'check', key: item.id, cycle: item.cycle, checked: !item.checked,
            activity: activity(item.checked ? '取消完成' : '勾选', '采购项', item.name),
          }])}
          onRemove={items => save(items.map(item => ({ id: newId(), kind: 'remove-shopping', key: item.id, cycle: item.cycle, checked: item.checked })))}
          onStock={(item, ingredient) => save([{
            id: newId(), kind: 'stock', key: item.id, cycle: item.cycle,
            ingredient: { ...ingredient, id: newId(), updatedAt: Date.now() },
            activity: activity('入库', '食材', item.name),
          }])} />;
      case 'settings':
        return <SettingsView userProfile={userProfile} onUpdateProfile={onUpdateProfile} sync={sync} />;
      case 'add-recipe':
        return <AddRecipeView onSave={saveRecipe} onCancel={() => switchView('recipes')} initialRecipe={editingRecipe}
          draftKey={`ht_draft:${pairCode ?? 'local'}:${editingRecipe?.id ?? 'new'}`} />;
      default:
        return null;
    }
  };

  const isDetailActive = selectedRecipe || currentView === 'add-recipe';

  return (
    <div className="min-h-screen bg-[#fcfdfe] lg:pl-64">
       {/* ✅ Toast：放最外层 div 里，靠上 */}
    {toast && (
      <div role="status" className="fixed top-16 left-1/2 -translate-x-1/2 z-[200] bg-black/80 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg">
        {toast.text}
      </div>
    )}

      {!isDetailActive && (
        <header className="fixed top-0 left-0 right-0 lg:left-64 z-[80] pt-[env(safe-area-inset-top)] box-content h-14 px-5 lg:px-10 flex justify-between items-center bg-white/80 backdrop-blur-xl border-b border-gray-100/50">
          <div className="flex items-center">
            <h1 onClick={() => switchView('dashboard')} className="text-lg font-black text-gray-900 tracking-tighter italic cursor-pointer select-none">
              HOMETASTE<span className="text-emerald-500">.</span>
            </h1>
          </div>
          <button onClick={() => switchView('settings')} className="w-8 h-8 rounded-full border border-gray-100 overflow-hidden bg-gray-50 relative">
            <img src={userProfile.avatar} className="w-full h-full object-cover" alt="家庭设置" />
            {sync.synced && <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></div>}
          </button>
        </header>
      )}

      <Sidebar currentView={currentView} onViewChange={switchView} userProfile={userProfile} />
      
      <main className={`relative transition-all duration-300 ${!isDetailActive ? 'pt-[calc(4rem+env(safe-area-inset-top))]' : ''}`}>
        {!isDetailActive && currentView !== 'settings' && (sync.failure || (pairCode && sync.pendingCount > 0)) && (
          <div role="status" className="mx-5 mt-2 rounded-xl bg-amber-50 px-4 py-2 text-sm text-amber-900">
            {sync.status}
            {sync.failure && <button onClick={sync.retry} className="ml-3 py-2 font-bold underline">重试</button>}
          </div>
        )}
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
