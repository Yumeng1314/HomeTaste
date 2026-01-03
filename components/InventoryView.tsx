
import React, { useRef, useState } from 'react';
import { Ingredient } from '../types';

interface InventoryViewProps {
  inventory: Ingredient[];
  onAdd: (item: Partial<Ingredient>) => void;
  onUpdate: (id: string, amount: number) => void;
  onDelete: (id: string) => void;
  onAIScan?: (base64: string) => void;
}

const InventoryView: React.FC<InventoryViewProps> = ({ inventory, onAdd, onUpdate, onDelete, onAIScan }) => {
  const [activeZone, setActiveZone] = useState<'全部' | '常温' | '冷藏' | '冷冻'>('全部');
  const [searchTerm, setSearchTerm] = useState('');
  const scanInputRef = useRef<HTMLInputElement>(null);

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
      case '蛋奶': return '🥚';
      case '调料': return '🧂';
      case '主食': return '🍚';
      default: return '📦';
    }
  };

  const filteredInventory = inventory.filter(item => {
    const matchesZone = activeZone === '全部' || item.storageZone === activeZone;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesZone && matchesSearch;
  });

  return (
    <div className="p-6 lg:p-10 pb-40 space-y-6 max-w-5xl mx-auto animate-in fade-in duration-500">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-4 flex flex-col items-center md:items-start w-full">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight italic">库存管理</h2>
            
            <div className="flex justify-center w-full">
              <div className="flex w-[90%] md:w-[24rem] gap-1 p-1 bg-gray-100 rounded-xl border border-gray-200/50">
                {['全部', ...storageZones].map(zone => (
                  <button 
                    key={zone} 
                    onClick={() => setActiveZone(zone as any)} 
                    className={`flex-1 px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
                      activeZone === zone ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-400'
                    }`}
                  >
                    {zone}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center w-full md:w-auto">
            <div className="flex w-[90%] md:w-[20rem] gap-2">
              <button 
                onClick={() => scanInputRef.current?.click()} 
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 text-white rounded-xl shadow-md transition-all active:scale-95 text-[11px] font-black uppercase tracking-widest"
              >
                📸 AI 扫码
                <input type="file" ref={scanInputRef} className="hidden" accept="image/*" onChange={handleScanChange} />
              </button>
              <button 
                onClick={() => onAdd({ name: '新食材', amount: 1, unit: '份', category: '其他', storageZone: '常温' })} 
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white rounded-xl shadow-md transition-all active:scale-95 text-[11px] font-black uppercase tracking-widest"
              >
                ＋ 录入
              </button>
            </div>
          </div>
        </div>

        <div className="relative group max-w-4xl mx-auto w-full">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-lg grayscale opacity-30">🔎</span>
          <input 
            type="text" 
            placeholder="在冰箱中搜索..." 
            className="w-full bg-white border border-gray-100 pl-12 pr-4 py-4 rounded-2xl font-bold text-sm outline-none shadow-sm focus:border-emerald-400 transition-all"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredInventory.map(item => (
          <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center p-4 relative group hover:border-emerald-200 transition-all">
            <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-xl shrink-0 mr-4 shadow-inner">
              {getCategoryEmoji(item.category)}
            </div>
            
            {/* 食材名称为主 */}
            <div className="flex-1 min-w-0 mr-4">
              <h4 className="font-black text-gray-800 text-sm truncate leading-tight">{item.name}</h4>
              <p className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md inline-block mt-1 uppercase tracking-tighter">{item.storageZone}</p>
            </div>
            
            {/* 紧凑的数量编辑区 */}
            <div className="flex items-center bg-gray-50 px-2 py-1 rounded-xl border border-gray-100 gap-0.5 shrink-0">
              <button onClick={() => onUpdate(item.id, Math.max(0, item.amount - 1))} className="w-7 h-7 flex items-center justify-center font-black text-gray-300 hover:text-emerald-500 transition-all active:scale-75 text-lg">－</button>
              <div className="flex flex-col items-center">
                <input 
                  type="number" 
                  value={item.amount} 
                  onChange={(e) => onUpdate(item.id, Number(e.target.value))}
                  className="w-10 bg-transparent text-center font-black text-emerald-600 text-sm outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <span className="text-[8px] font-black text-gray-300 uppercase tracking-tighter leading-none">{item.unit}</span>
              </div>
              <button onClick={() => onUpdate(item.id, item.amount + 1)} className="w-7 h-7 flex items-center justify-center font-black text-gray-300 hover:text-emerald-500 transition-all active:scale-75 text-lg">＋</button>
            </div>

            <button 
              onClick={() => onDelete(item.id)} 
              className="absolute -top-1 -right-1 w-6 h-6 bg-white border border-gray-100 rounded-full flex items-center justify-center text-[10px] text-gray-300 hover:text-red-500 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryView;
