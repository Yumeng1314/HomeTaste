
import React, { useRef, useState } from 'react';
import { Ingredient, RecipeCategory } from '../types';

interface InventoryViewProps {
  inventory: Ingredient[];
  onAdd: (item: Partial<Ingredient>) => void;
  onUpdate: (id: string, amount: number) => void;
  onDelete: (id: string) => void;
  onAIScan?: (base64: string) => void;
  isScanning?: boolean;
}

const CATEGORIES = ['蔬菜', '水果', '肉类', '海鲜', '蛋奶', '豆制品', '粮油', '干货', '调料', '饮品', '主食', '其他'];
const ZONES = ['常温', '冷藏', '冷冻'];

const InventoryView: React.FC<InventoryViewProps> = ({ inventory, onAdd, onUpdate, onDelete, onAIScan, isScanning }) => {
  const [activeZone, setActiveZone] = useState<'全部' | '常温' | '冷藏' | '冷冻'>('全部');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const scanInputRef = useRef<HTMLInputElement>(null);

  // 表单状态
  const [formData, setFormData] = useState<Partial<Ingredient>>({
    name: '',
    amount: 1,
    unit: '份',
    category: '蔬菜',
    storageZone: '冷藏'
  });

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
      case '海鲜': return '🦐';
      case '饮品': return '🥤';
      default: return '📦';
    }
  };

  const filteredInventory = inventory.filter(item => {
    const matchesZone = activeZone === '全部' || item.storageZone === activeZone;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesZone && matchesSearch;
  });

  const submitAdd = () => {
    if (!formData.name) return alert('请输入食材名称');
    onAdd(formData);
    setShowAddModal(false);
    setFormData({ name: '', amount: 1, unit: '份', category: '蔬菜', storageZone: '冷藏' });
  };

  return (
    <div className="p-6 lg:p-10 pb-40 space-y-6 max-w-5xl mx-auto animate-in fade-in duration-500">
      {/* 录入模态框 */}
      {showAddModal && (
        <div className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white w-full max-w-lg rounded-t-[2.5rem] sm:rounded-[2.5rem] p-8 shadow-2xl animate-in slide-in-from-bottom duration-300 max-h-[90vh] overflow-y-auto no-scrollbar">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-black text-gray-900 italic">录入食材</h3>
              <button onClick={() => setShowAddModal(false)} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">✕</button>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">食材名称</label>
                <input 
                  type="text" 
                  autoFocus
                  placeholder="例如：新鲜五花肉" 
                  className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl font-bold text-base outline-none focus:ring-4 ring-emerald-50 focus:border-emerald-400 transition-all"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">数量</label>
                  <input 
                    type="number" 
                    className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl font-bold text-base outline-none"
                    value={formData.amount}
                    onChange={e => setFormData({...formData, amount: Number(e.target.value)})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">单位</label>
                  <select 
                    className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl font-bold text-base outline-none appearance-none"
                    value={formData.unit}
                    onChange={e => setFormData({...formData, unit: e.target.value})}
                  >
                    {['份', '个', '克', 'kg', '瓶', '盒', '斤', '把'].map(u => <option key={u} value={u}>{u}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">分类</label>
                <div className="grid grid-cols-4 gap-2">
                  {CATEGORIES.map(cat => (
                    <button 
                      key={cat}
                      onClick={() => setFormData({...formData, category: cat as any})}
                      className={`py-3 rounded-xl border text-[10px] font-black flex flex-col items-center gap-1 transition-all ${
                        formData.category === cat ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg' : 'bg-white border-gray-100 text-gray-400'
                      }`}
                    >
                      <span className="text-base">{getCategoryEmoji(cat)}</span>
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">存放区</label>
                <div className="flex gap-2">
                  {ZONES.map(z => (
                    <button 
                      key={z}
                      onClick={() => setFormData({...formData, storageZone: z as any})}
                      className={`flex-1 py-4 rounded-2xl border text-[11px] font-black uppercase tracking-widest transition-all ${
                        formData.storageZone === z ? 'bg-gray-900 border-gray-900 text-white shadow-xl' : 'bg-gray-50 border-gray-100 text-gray-400'
                      }`}
                    >
                      {z}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={submitAdd}
                className="w-full py-5 bg-emerald-600 text-white rounded-[1.8rem] font-black text-sm uppercase tracking-[0.3em] shadow-xl shadow-emerald-100 active:scale-95 transition-all mt-4"
              >
                保存到厨房
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 扫码 Loading 覆盖层 */}
      {isScanning && (
        <div className="fixed inset-0 z-[300] bg-emerald-950/80 backdrop-blur-xl flex flex-col items-center justify-center p-10 text-center">
          <div className="relative mb-12">
            <div className="w-48 h-48 border-4 border-emerald-400/30 rounded-3xl relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-400/20 to-transparent w-full h-1/2 animate-[scan_2s_ease-in-out_infinite]"></div>
               <div className="absolute top-0 left-0 right-0 h-0.5 bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)] animate-[scan_2s_ease-in-out_infinite]"></div>
            </div>
          </div>
          <h4 className="text-white text-xl font-black italic mb-2">AI 正在深度扫描</h4>
          <p className="text-emerald-400/60 text-[10px] font-black uppercase tracking-[0.4em]">正在解析食材与份量信息...</p>
        </div>
      )}

      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-4 flex flex-col items-center md:items-start w-full">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight italic">冰箱库存</h2>
            
            <div className="flex justify-center w-full">
              <div className="flex w-full md:w-[24rem] gap-1 p-1 bg-gray-100 rounded-xl border border-gray-200/50">
                {['全部', ...ZONES].map(zone => (
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
            <div className="flex w-full md:w-[20rem] gap-2">
              <button 
                onClick={() => scanInputRef.current?.click()} 
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 text-white rounded-xl shadow-md transition-all active:scale-95 text-[11px] font-black uppercase tracking-widest group"
              >
                <span className="group-hover:rotate-12 transition-transform">📸</span> AI 扫码
                <input type="file" ref={scanInputRef} className="hidden" accept="image/*" onChange={handleScanChange} />
              </button>
              <button 
                onClick={() => setShowAddModal(true)} 
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white rounded-xl shadow-md transition-all active:scale-95 text-[11px] font-black uppercase tracking-widest"
              >
                ＋ 手动录入
              </button>
            </div>
          </div>
        </div>

        <div className="relative group max-w-4xl mx-auto w-full">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-lg grayscale opacity-30">🔎</span>
          <input 
            type="text" 
            placeholder="搜索冰箱中的食材..." 
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
            
            <div className="flex-1 min-w-0 mr-4">
              <h4 className="font-black text-gray-800 text-sm truncate leading-tight">{item.name}</h4>
              <p className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md inline-block mt-1 uppercase tracking-tighter">{item.storageZone}</p>
            </div>
            
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

      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          50% { transform: translateY(180px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default InventoryView;
