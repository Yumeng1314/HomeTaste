
import React, { useState, useMemo, useEffect } from 'react';
import { ShoppingItem, DailyPlan, Recipe, Ingredient } from '../types';

interface ShoppingViewProps {
  list: ShoppingItem[];
  onUpdate: (newList: ShoppingItem[]) => void;
  plans: DailyPlan;
  recipes: Recipe[];
  inventory: Ingredient[];
}

const ShoppingView: React.FC<ShoppingViewProps> = ({ list, onUpdate, plans, recipes, inventory }) => {
  const [inputValue, setInputValue] = useState('');
  const [parsePreview, setParsePreview] = useState<{ name: string, amount: string } | null>(null);

  // 计算建议导入的缺口食材（仅用于当前视图的快速建议）
  const suggestedItems = useMemo(() => {
    const needed: Record<string, { amount: number, unit: string }> = {};
    Object.values(plans).flat().forEach(rid => {
      const r = recipes.find(rec => rec.id === rid);
      r?.ingredients.forEach(ing => {
        needed[ing.name] = { 
          amount: (needed[ing.name]?.amount || 0) + ing.amount,
          unit: ing.unit
        };
      });
    });

    return Object.entries(needed)
      .filter(([name, req]) => {
        const inv = inventory.find(i => i.name === name);
        const alreadyInList = list.some(l => l.name === name);
        return (inv ? inv.amount < req.amount : true) && !alreadyInList;
      })
      .map(([name, req]) => ({ name, amount: `${req.amount}${req.unit}` }));
  }, [plans, recipes, inventory, list]);

  /**
   * 极简语义解析引擎
   * 支持：1. "苹果 两个" (Name + Quantity)
   *      2. "两个苹果" (Quantity + Name)
   *      3. "一斤五花肉" (Quantity + Name)
   */
  const smartParse = (input: string): { name: string, amount: string } => {
    const trimmed = input.trim();
    if (!trimmed) return { name: '', amount: '' };

    const cnNums = '一二三四五六七八九十百千万两半几数多';
    const units = '个斤两磅盒瓶克gkgml升L只支把条包袋片副块副';
    
    // 构建一个通用的“数量+单位”正则，如 "2.5个", "三个", "两斤"
    const quantityPattern = `([\\d\\.]+|[${cnNums}]+)\\s*[${units}]+`;
    const quantityRegex = new RegExp(quantityPattern);
    
    const match = trimmed.match(quantityRegex);
    if (match) {
      const amountStr = match[0];
      // 提取剩余部分作为名称
      let name = trimmed.replace(amountStr, '').trim();
      
      // 如果去掉数量后名字为空，说明用户只写了数量，尝试反向解析或设为默认
      if (!name) {
        return { name: trimmed, amount: '适量' };
      }

      return {
        name: name,
        amount: amountStr.trim()
      };
    }

    return {
      name: trimmed,
      amount: '适量'
    };
  };

  useEffect(() => {
    if (inputValue.trim()) {
      setParsePreview(smartParse(inputValue));
    } else {
      setParsePreview(null);
    }
  }, [inputValue]);

  const addItem = (input: string, explicitAmount?: string) => {
    if (!input.trim()) return;

    let finalName = '';
    let finalAmount = '';

    if (explicitAmount) {
      finalName = input.trim();
      finalAmount = explicitAmount;
    } else {
      const parsed = smartParse(input);
      finalName = parsed.name;
      finalAmount = parsed.amount;
    }

    const newItem: ShoppingItem = {
      id: Date.now().toString(),
      name: finalName,
      amount: finalAmount,
      checked: false,
      addedAt: Date.now()
    };

    onUpdate([newItem, ...list]);
    setInputValue('');
  };

  const toggleItem = (id: string) => {
    onUpdate(list.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const clearChecked = () => {
    onUpdate(list.filter(item => !item.checked));
  };

  return (
    <div className="p-6 lg:p-10 space-y-10 pb-40 animate-in fade-in duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-gray-800">采购清单</h2>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Shared Family Shopping List</p>
        </div>
        <button onClick={clearChecked} className="text-[10px] font-black text-red-400 uppercase tracking-widest bg-red-50 px-4 py-2 rounded-xl">清除已买</button>
      </header>

      <div className="space-y-3">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <input 
              type="text" 
              placeholder="尝试输入：两个苹果、一斤猪肉、五花肉500g" 
              className="w-full bg-white border border-gray-100 p-5 rounded-[2rem] font-black text-sm outline-none shadow-sm focus:border-amber-400 transition-all"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && addItem(inputValue)}
            />
          </div>
          <button 
            onClick={() => addItem(inputValue)} 
            className="bg-amber-500 text-white w-16 h-16 rounded-[2rem] flex items-center justify-center text-2xl shadow-lg shadow-amber-200 active:scale-95 transition-all"
          >
            ＋
          </button>
        </div>
        
        {parsePreview && (
          <div className="px-6 flex items-center gap-2 animate-in slide-in-from-top-2 duration-200">
            <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">智能识别:</span>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-black text-gray-700">{parsePreview.name}</span>
              <span className="px-2 py-0.5 bg-amber-50 text-amber-600 rounded-md text-[9px] font-black">{parsePreview.amount}</span>
            </div>
          </div>
        )}
      </div>

      {suggestedItems.length > 0 && (
        <section className="space-y-4">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">计划中缺少的食材</p>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {suggestedItems.map(item => (
              <button 
                key={item.name} 
                onClick={() => addItem(item.name, item.amount)} 
                className="shrink-0 bg-emerald-50 border border-emerald-100 px-4 py-2.5 rounded-xl text-xs font-black text-emerald-700 flex items-center gap-2 hover:bg-emerald-100 transition-all active:scale-95"
              >
                <span>➕ {item.name}</span>
                <span className="opacity-50 text-[10px]">{item.amount}</span>
              </button>
            ))}
          </div>
        </section>
      )}

      <div className="space-y-3">
        {list.length === 0 ? (
          <div className="py-20 text-center space-y-4">
            <span className="text-6xl grayscale opacity-20">🛒</span>
            <p className="font-black text-gray-400 uppercase tracking-widest">清单空空的</p>
          </div>
        ) : (
          list.map(item => (
            <div 
              key={item.id} 
              onClick={() => toggleItem(item.id)}
              className={`flex items-center gap-4 p-5 rounded-[2.5rem] border transition-all cursor-pointer ${
                item.checked ? 'bg-gray-50 border-transparent opacity-40 scale-95' : 'bg-white border-gray-100 shadow-sm'
              }`}
            >
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
                item.checked ? 'bg-amber-500 border-amber-500' : 'border-gray-100'
              }`}>
                {item.checked && <span className="text-white text-xs">✓</span>}
              </div>
              <div className="flex-1">
                <p className={`font-black text-base transition-all ${item.checked ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                  {item.name}
                </p>
                {!item.checked && <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">{item.amount}</p>}
              </div>
              <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">
                {new Date(item.addedAt).toLocaleDateString()}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ShoppingView;
