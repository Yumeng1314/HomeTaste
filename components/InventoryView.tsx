
import React, { useState } from 'react';
import { Ingredient } from '../types';

interface InventoryViewProps {
  inventory: Ingredient[];
  onAdd: (item: Partial<Ingredient>) => void;
  onUpdate: (id: string, amount: number) => void;
  onDelete: (id: string) => void;
}

const InventoryView: React.FC<InventoryViewProps> = ({ inventory, onAdd, onUpdate, onDelete }) => {
  const [showAdd, setShowAdd] = useState(false);
  const [activeZone, setActiveZone] = useState<'全部' | '常温' | '冷藏' | '冷冻'>('全部');
  // Fix: Explicitly type the newItem state to allow all valid categories and storage zones from the Ingredient type
  const [newItem, setNewItem] = useState<{
    name: string;
    amount: number;
    unit: string;
    category: Ingredient['category'];
    storageZone: Ingredient['storageZone'];
  }>({ 
    name: '', 
    amount: 1, 
    unit: '个', 
    category: '蔬菜',
    storageZone: '常温'
  });

  const categories = ['蔬菜', '肉类', '海鲜', '蛋奶', '豆制品', '粮油', '干货', '调料', '饮品', '主食', '其他'] as const;
  const storageZones = ['常温', '冷藏', '冷冻'] as const;

  const getCategoryEmoji = (cat: string) => {
    switch (cat) {
      case '蔬菜': return '🥬';
      case '肉类': return '🥩';
      case '海鲜': return '🦞';
      case '蛋奶': return '🥚';
      case '豆制品': return '🍱';
      case '粮油': return '🛢️';
      case '干货': return '🍄';
      case '调料': return '🧂';
      case '饮品': return '🍹';
      case '主食': return '🍚';
      default: return '📦';
    }
  };

  const getZoneColor = (zone: string) => {
    switch (zone) {
      case '常温': return 'bg-amber-50 text-amber-600 border-amber-100';
      case '冷藏': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case '冷冻': return 'bg-blue-50 text-blue-600 border-blue-100';
      default: return 'bg-gray-50 text-gray-600 border-gray-100';
    }
  };

  const filteredInventory = activeZone === '全部' 
    ? inventory 
    : inventory.filter(item => item.storageZone === activeZone);

  return (
    <div className="p-4 lg:p-10 pb-40 max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-gray-800 tracking-tight">全家库存管理</h2>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Smart Family Inventory</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex bg-gray-100 p-1.5 rounded-2xl border border-gray-100 shadow-inner">
            {['全部', ...storageZones].map(zone => (
              <button
                key={zone}
                onClick={() => setActiveZone(zone as any)}
                className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeZone === zone 
                  ? 'bg-white text-gray-900 shadow-md' 
                  : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {zone}
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowAdd(true)}
            className="bg-gray-900 text-white px-6 h-12 rounded-xl flex items-center gap-2 shadow-xl hover:bg-emerald-600 transition-all active:scale-95"
          >
            <span className="text-xl">+</span>
            <span className="text-[10px] font-black uppercase tracking-widest">录入食材</span>
          </button>
        </div>
      </div>

      {showAdd && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-end sm:items-center justify-center z-[100] p-4">
          <div className="bg-white p-8 rounded-[3rem] w-full max-w-lg shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-black tracking-tight text-gray-800">新增食材</h3>
              <button onClick={() => setShowAdd(false)} className="bg-gray-50 text-gray-400 p-3 rounded-full hover:text-gray-600 transition-colors">✕</button>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">食材名称</label>
                <input
                  type="text"
                  placeholder="如：三文鱼"
                  className="w-full border-b-2 border-gray-100 py-3 text-2xl font-black focus:border-emerald-500 outline-none transition-all"
                  value={newItem.name}
                  onChange={e => setNewItem({ ...newItem, name: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">数量</label>
                  <input
                    type="number"
                    className="w-full bg-gray-50 rounded-2xl p-4 text-xl font-black focus:ring-2 focus:ring-emerald-500/20 outline-none"
                    value={newItem.amount}
                    onChange={e => setNewItem({ ...newItem, amount: Number(e.target.value) })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">单位</label>
                  <input
                    type="text"
                    placeholder="g / 个"
                    className="w-full bg-gray-50 rounded-2xl p-4 text-xl font-black focus:ring-2 focus:ring-emerald-500/20 outline-none"
                    value={newItem.unit}
                    onChange={e => setNewItem({ ...newItem, unit: e.target.value })}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">类别</label>
                  <select
                    className="w-full bg-gray-50 rounded-2xl p-4 font-black text-sm outline-none"
                    value={newItem.category}
                    onChange={e => setNewItem({ ...newItem, category: e.target.value as any })}
                  >
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">存放区域</label>
                  <div className="flex gap-1.5 p-1 bg-gray-100 rounded-2xl">
                    {storageZones.map(zone => (
                      <button
                        key={zone}
                        onClick={() => setNewItem({ ...newItem, storageZone: zone })}
                        className={`flex-1 py-3 rounded-xl text-[9px] font-black uppercase transition-all ${
                          newItem.storageZone === zone 
                          ? 'bg-white text-gray-900 shadow-sm' 
                          : 'text-gray-400'
                        }`}
                      >
                        {zone}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  if(!newItem.name) return;
                  onAdd(newItem);
                  setShowAdd(false);
                  setNewItem({ name: '', amount: 1, unit: '个', category: '蔬菜', storageZone: '常温' });
                }}
                className="w-full py-5 bg-emerald-600 text-white rounded-[2rem] font-black text-sm mt-4 shadow-xl shadow-emerald-100 hover:bg-emerald-700 transition-all active:scale-95"
              >
                发布到云端同步
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInventory.length === 0 ? (
          <div className="col-span-full py-32 bg-white rounded-[3rem] border-2 border-dashed border-gray-100 flex flex-col items-center justify-center text-center">
            <span className="text-6xl mb-6 grayscale opacity-20">🧊</span>
            <p className="text-gray-400 font-black text-sm uppercase tracking-widest">暂无该区域食材</p>
          </div>
        ) : (
          filteredInventory.map(item => (
            <div key={item.id} className="bg-white p-5 rounded-[2.5rem] border border-gray-100 flex items-center justify-between group hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300">
              <div className="flex items-center gap-5 min-w-0">
                <div className="w-16 h-16 bg-gray-50 rounded-3xl flex-shrink-0 flex items-center justify-center text-3xl border border-gray-50 group-hover:bg-white group-hover:scale-110 transition-transform">
                  {getCategoryEmoji(item.category)}
                </div>
                <div className="min-w-0">
                  <h4 className="font-black text-gray-800 text-base truncate">{item.name}</h4>
                  <div className="flex gap-1.5 items-center mt-1.5">
                    <span className="text-[9px] font-black px-2 py-0.5 bg-gray-100 text-gray-500 rounded-lg uppercase tracking-tight">
                      {item.category}
                    </span>
                    <span className={`text-[9px] font-black px-2 py-0.5 border rounded-lg uppercase tracking-tight ${getZoneColor(item.storageZone)}`}>
                      {item.storageZone}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden shadow-inner">
                  <button
                    onClick={() => onUpdate(item.id, Math.max(0, item.amount - 1))}
                    className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white font-black transition-all"
                  >
                    -
                  </button>
                  <div className="px-3 font-black min-w-[50px] text-center border-x border-gray-100">
                    <div className="text-sm text-gray-800 leading-none mb-0.5">{item.amount}</div>
                    <div className="text-[8px] font-black text-gray-400 uppercase tracking-tighter">{item.unit}</div>
                  </div>
                  <button
                    onClick={() => onUpdate(item.id, item.amount + 1)}
                    className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-emerald-500 hover:bg-white font-black transition-all"
                  >
                    +
                  </button>
                </div>
                <button onClick={() => onDelete(item.id)} className="text-[10px] font-black text-gray-300 hover:text-red-500 uppercase tracking-widest px-2">移除</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default InventoryView;
