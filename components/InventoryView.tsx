
import React, { useState, useRef } from 'react';
import { Ingredient } from '../types';

interface InventoryViewProps {
  inventory: Ingredient[];
  onAdd: (item: Partial<Ingredient>) => void;
  onUpdate: (id: string, amount: number) => void;
  onDelete: (id: string) => void;
  onAISuggest?: () => void;
  onAIScan?: (base64: string) => void;
}

const InventoryView: React.FC<InventoryViewProps> = ({ inventory, onAdd, onUpdate, onDelete, onAISuggest, onAIScan }) => {
  const [showAdd, setShowAdd] = useState(false);
  const [activeZone, setActiveZone] = useState<'全部' | '常温' | '冷藏' | '冷冻'>('全部');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const scanInputRef = useRef<HTMLInputElement>(null);
  
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

  const handleScanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onAIScan) {
      const reader = new FileReader();
      reader.onloadend = () => onAIScan(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

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

  const filteredInventory = inventory.filter(item => {
    const matchesZone = activeZone === '全部' || item.storageZone === activeZone;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesZone && matchesSearch;
  });

  return (
    <div className="p-6 lg:p-10 pb-40 space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8">
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-black text-gray-800 tracking-tight">库存管理</h2>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="flex gap-1.5 p-1 bg-gray-100 rounded-2xl w-fit">
              {['全部', ...storageZones].map(zone => (
                <button key={zone} onClick={() => setActiveZone(zone as any)} className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeZone === zone ? 'bg-white text-gray-900 shadow-md' : 'text-gray-400 hover:text-gray-600'}`}>{zone}</button>
              ))}
            </div>
            <div className="relative flex-1 w-full max-w-md">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg grayscale opacity-50">🔍</span>
              <input type="text" placeholder="搜索食材名称..." className="w-full bg-white border border-gray-100 pl-12 pr-4 py-3 rounded-2xl font-black text-sm outline-none shadow-sm" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <input type="file" ref={scanInputRef} className="hidden" accept="image/*" onChange={handleScanChange} />
          <button
            onClick={() => scanInputRef.current?.click()}
            className="px-6 h-14 rounded-2xl bg-white border-2 border-emerald-100 text-emerald-600 flex items-center gap-3 shadow-sm hover:border-emerald-500 transition-all group"
          >
            <span className="text-xl">📸</span>
            <span className="text-[10px] font-black uppercase tracking-widest">AI 识图入库</span>
          </button>
          <button
            onClick={() => setShowAdd(true)}
            className="px-8 h-14 bg-gray-900 text-white rounded-2xl flex items-center gap-3 shadow-xl hover:bg-black transition-all active:scale-95"
          >
            <span className="text-xl">+</span>
            <span className="text-[10px] font-black uppercase tracking-widest">录入食材</span>
          </button>
        </div>
      </div>

      {showAdd && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-end sm:items-center justify-center z-[150] p-4">
          <div className="bg-white p-8 rounded-[3rem] w-full max-w-lg shadow-2xl animate-in zoom-in-95 duration-200 overflow-y-auto max-h-[90vh] no-scrollbar">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-black tracking-tight text-gray-800">录入新食材</h3>
              <button onClick={() => setShowAdd(false)} className="bg-gray-50 text-gray-400 p-3 rounded-full hover:text-gray-600">✕</button>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <input type="text" placeholder="食材名称" className="w-full border-b-2 border-gray-100 py-4 text-2xl font-black focus:border-emerald-500 outline-none" value={newItem.name} onChange={e => setNewItem({ ...newItem, name: e.target.value })} autoFocus />
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2"><label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">数量</label><input type="number" className="w-full bg-gray-50 rounded-2xl p-4 font-black outline-none" value={newItem.amount} onChange={e => setNewItem({ ...newItem, amount: Number(e.target.value) })} /></div>
                  <div className="space-y-2"><label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">单位</label><input type="text" placeholder="如：个, 克" className="w-full bg-gray-50 rounded-2xl p-4 font-black outline-none" value={newItem.unit} onChange={e => setNewItem({ ...newItem, unit: e.target.value })} /></div>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">存放区域</label>
                <div className="flex gap-2">
                  {storageZones.map(zone => (
                    <button key={zone} onClick={() => setNewItem({ ...newItem, storageZone: zone })} className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${newItem.storageZone === zone ? 'bg-gray-900 text-white border-gray-900 shadow-lg' : 'bg-white text-gray-400 border-gray-100 hover:bg-gray-50'}`}>{zone}</button>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">食材品类</label>
                <div className="grid grid-cols-3 gap-2">
                  {categories.map(cat => (
                    <button key={cat} onClick={() => setNewItem({ ...newItem, category: cat })} className={`flex flex-col items-center justify-center p-3 rounded-2xl transition-all border ${newItem.category === cat ? 'bg-emerald-50 border-emerald-200 text-emerald-700 shadow-sm' : 'bg-white border-gray-100 text-gray-400 hover:bg-gray-50'}`}>
                      <span className="text-xl mb-1">{getCategoryEmoji(cat)}</span><span className="text-[10px] font-black">{cat}</span>
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={() => { if(!newItem.name) return; onAdd(newItem); setShowAdd(false); }} className="w-full py-5 bg-emerald-600 text-white rounded-[2rem] font-black text-sm mt-4 shadow-xl hover:bg-emerald-700 active:scale-95 transition-all">加入冰箱清单</button>
            </div>
          </div>
        </div>
      )}

      {filteredInventory.length === 0 ? (
        <div className="py-40 text-center space-y-4">
          <span className="text-6xl grayscale opacity-20">🧊</span>
          <p className="font-black text-gray-400 text-sm uppercase tracking-widest">{searchTerm ? `没有找到 "${searchTerm}"` : '当前区域暂无食材'}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInventory.map(item => (
            <div key={item.id} className="bg-white p-6 rounded-[2.5rem] border border-gray-100 flex items-center justify-between group hover:shadow-xl transition-all">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">{getCategoryEmoji(item.category)}</div>
                <div>
                  <h4 className="font-black text-gray-800 text-base">{item.name}</h4>
                  <div className="flex gap-2 mt-1"><span className={`text-[9px] font-black px-2 py-0.5 border rounded-lg uppercase tracking-tight ${getZoneColor(item.storageZone)}`}>{item.storageZone}</span><span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">{item.category}</span></div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                  <button onClick={() => onUpdate(item.id, Math.max(0, item.amount - 1))} className="w-10 h-10 flex items-center justify-center font-black text-gray-400 hover:bg-white">-</button>
                  
                  {editingId === item.id ? (
                    <input 
                      autoFocus
                      type="number" 
                      className="w-16 h-10 bg-white text-center font-black text-sm outline-none border-x border-gray-100"
                      value={item.amount}
                      onBlur={() => setEditingId(null)}
                      onChange={(e) => onUpdate(item.id, Number(e.target.value))}
                      onKeyDown={(e) => e.key === 'Enter' && setEditingId(null)}
                    />
                  ) : (
                    <div 
                      onClick={() => setEditingId(item.id)}
                      className="px-3 font-black text-sm cursor-text hover:text-emerald-600 transition-colors"
                    >
                      {item.amount}{item.unit}
                    </div>
                  )}

                  <button onClick={() => onUpdate(item.id, item.amount + 1)} className="w-10 h-10 flex items-center justify-center font-black text-gray-400 hover:bg-white">+</button>
                </div>
                <button onClick={() => onDelete(item.id)} className="text-[9px] font-black text-gray-300 hover:text-red-500 uppercase tracking-widest">移除</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InventoryView;
