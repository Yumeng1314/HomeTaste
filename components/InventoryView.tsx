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

  const categories = ['蔬菜', '水果', '肉类', '海鲜', '蛋奶', '豆制品', '粮油', '干货', '调料', '饮品', '主食', '其他'] as const;
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
      case '水果': return '🍎';
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
    <div className="p-6 lg:p-10 pb-40 space-y-8">
      <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8">
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-black text-gray-800 tracking-tight">冰箱库存</h2>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="flex gap-1.5 p-1 bg-gray-100 rounded-2xl w-fit">
              {['全部', ...storageZones].map(zone => (
                <button key={zone} onClick={() => setActiveZone(zone as any)} className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeZone === zone ? 'bg-white text-gray-900 shadow-md' : 'text-gray-400'}`}>{zone}</button>
              ))}
            </div>
            <input type="text" placeholder="搜索食材..." className="w-full max-w-md bg-white border border-gray-100 px-6 py-3 rounded-2xl font-black text-sm outline-none shadow-sm" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
        </div>
        <div className="flex gap-3">
          <input type="file" ref={scanInputRef} className="hidden" accept="image/*" onChange={handleScanChange} />
          <button onClick={() => scanInputRef.current?.click()} className="px-6 h-14 rounded-2xl bg-white border-2 border-emerald-100 text-emerald-600 flex items-center gap-3 shadow-sm font-black text-[10px] uppercase">📸 AI 识图</button>
          <button onClick={() => setShowAdd(true)} className="px-8 h-14 bg-gray-900 text-white rounded-2xl flex items-center gap-3 shadow-xl font-black text-[10px] uppercase">+ 录入</button>
        </div>
      </div>

      {showAdd && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-[150] p-4">
          <div className="bg-white p-8 rounded-[3rem] w-full max-w-lg shadow-2xl overflow-y-auto max-h-[90vh] no-scrollbar">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-black text-gray-800">新食材入库</h3>
              <button onClick={() => setShowAdd(false)} className="text-gray-400">✕</button>
            </div>
            <div className="space-y-6">
              <input type="text" placeholder="食材名称" className="w-full border-b-2 border-gray-100 py-3 text-2xl font-black outline-none" value={newItem.name} onChange={e => setNewItem({ ...newItem, name: e.target.value })} />
              <div className="grid grid-cols-2 gap-4">
                <input type="number" placeholder="数量" className="bg-gray-50 rounded-xl p-4 font-black" value={newItem.amount} onChange={e => setNewItem({ ...newItem, amount: Number(e.target.value) })} />
                <input type="text" placeholder="单位" className="bg-gray-50 rounded-xl p-4 font-black" value={newItem.unit} onChange={e => setNewItem({ ...newItem, unit: e.target.value })} />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {categories.map(cat => (
                  <button key={cat} onClick={() => setNewItem({ ...newItem, category: cat })} className={`p-3 rounded-2xl border text-center transition-all ${newItem.category === cat ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-gray-50 border-gray-100 text-gray-400'}`}>
                    <div className="text-xl">{getCategoryEmoji(cat)}</div>
                    <div className="text-[9px] font-black mt-1">{cat}</div>
                  </button>
                ))}
              </div>
              <button onClick={() => { if(!newItem.name) return; onAdd(newItem); setShowAdd(false); }} className="w-full py-5 bg-emerald-600 text-white rounded-[2rem] font-black shadow-xl">确认入库</button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredInventory.map(item => (
          <div key={item.id} className="bg-white p-5 rounded-[2rem] border border-gray-100 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-2xl">{getCategoryEmoji(item.category)}</div>
              <div>
                <h4 className="font-black text-gray-800 text-sm">{item.name}</h4>
                <span className={`text-[8px] font-black px-2 py-0.5 rounded-md uppercase ${getZoneColor(item.storageZone)}`}>{item.storageZone}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-gray-50 rounded-lg overflow-hidden">
                <button onClick={() => onUpdate(item.id, Math.max(0, item.amount - 1))} className="px-3 py-1 font-black text-gray-400">-</button>
                <span className="px-2 font-black text-xs">{item.amount}{item.unit}</span>
                <button onClick={() => onUpdate(item.id, item.amount + 1)} className="px-3 py-1 font-black text-gray-400">+</button>
              </div>
              <button onClick={() => onDelete(item.id)} className="text-red-300 hover:text-red-500">✕</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryView;