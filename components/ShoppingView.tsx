
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

  // 简单的中文数量识别
  const smartParse = (input: string): { name: string, amount: string } => {
    // 匹配模式：数字(含小数/中文数字) + 单位(可选) + 物品名
    // 或者：物品名 + 数字 + 单位
    // 这里使用一个简单的正则来尝试提取开头的数量
    const trimmed = input.trim();
    const qtyRegex = /^(\d+(\.\d+)?|[一二三四五六七八九十百千万]+)\s*([个只把条包袋瓶盒斤两kg克gmL升L]*)?\s*(.+)$/;
    
    const match = trimmed.match(qtyRegex);
    if (match) {
      // match[1] 是数字, match[3] 是单位(可能undefined), match[4] 是物品名
      const num = match[1];
      const unit = match[3] || '';
      const name = match[4];
      return { name, amount: num + unit };
    }
    
    // 尝试后缀模式：苹果 5个
    const suffixRegex = /^(.+)\s+(\d+(\.\d+)?|[一二三四五六七八九十百千万]+)\s*([个只把条包袋瓶盒斤两kg克gmL升L]*)?$/;
    const matchSuffix = trimmed.match(suffixRegex);
    if (matchSuffix) {
       const name = matchSuffix[1];
       const num = matchSuffix[2];
       const unit = matchSuffix[4] || '';
       return { name, amount: num + unit };
    }

    return { name: trimmed, amount: '适量' };
  };

  const addItem = (input: string) => {
    if (!input.trim()) return;
    
    const { name, amount } = smartParse(input);

    const newItem: ShoppingItem = {
      id: Date.now().toString(),
      name: name,
      amount: amount,
      checked: false,
      addedAt: Date.now()
    };
    onUpdate([newItem, ...list]);
    setInputValue('');
  };

  return (
    <div className="p-5 lg:p-10 space-y-8 pb-32 max-w-4xl mx-auto animate-in fade-in duration-500">
      <header className="flex justify-between items-center">
        <h2 className="text-2xl font-black text-gray-900 italic">采购清单</h2>
        <button onClick={() => onUpdate(list.filter(item => !item.checked))} className="px-4 py-2 bg-red-50 text-red-600 rounded-lg text-xs font-bold hover:bg-red-500 hover:text-white transition-colors">清除已买</button>
      </header>

      <div className="flex gap-3">
        <input 
          type="text" 
          placeholder="例如: 2斤排骨 (自动识别数量)" 
          className="flex-1 bg-white border border-gray-100 p-4 rounded-xl font-bold text-base outline-none shadow-sm focus:border-amber-400 transition-all"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addItem(inputValue)}
        />
        <button onClick={() => addItem(inputValue)} className="w-14 bg-amber-500 text-white rounded-xl flex items-center justify-center text-2xl shadow-lg active:scale-90 transition-all">＋</button>
      </div>

      <div className="space-y-3">
        {list.length === 0 ? (
          <div className="py-20 text-center text-gray-300">
            <span className="text-6xl block mb-4 grayscale opacity-20">🛒</span>
            <p className="text-xs font-bold uppercase tracking-widest">清单空空如也</p>
          </div>
        ) : (
          list.map(item => (
            <div 
              key={item.id} 
              onClick={() => onUpdate(list.map(i => i.id === item.id ? { ...i, checked: !i.checked } : i))}
              className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                item.checked ? 'bg-gray-50 border-transparent opacity-40' : 'bg-white border-gray-100 shadow-sm hover:border-amber-200'
              }`}
            >
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                item.checked ? 'bg-amber-500 border-amber-500' : 'border-gray-200 bg-white'
              }`}>
                {item.checked && <span className="text-white text-[10px] font-bold">✓</span>}
              </div>
              <div className="flex-1 flex justify-between items-center">
                <span className={`font-bold text-lg ${item.checked ? 'line-through text-gray-400' : 'text-gray-900'}`}>{item.name}</span>
                <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">{item.amount}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ShoppingView;
