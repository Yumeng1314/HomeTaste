
import React, { useRef, useState } from 'react';
import { Ingredient } from '../types';
import { 
  VegetableIcon, FruitIcon, MeatIcon, SeafoodIcon, DairyIcon, 
  BeanIcon, GrainOilIcon, DryGoodsIcon, CondimentIcon, DrinkIcon, 
  StapleIcon, OtherIcon 
} from './Icons';

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
  
  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // Distinction between adding and editing
  const [formData, setFormData] = useState<Partial<Ingredient>>({
    name: '',
    amount: 1,
    unit: '份',
    category: '蔬菜',
    storageZone: '冷藏'
  });
  
  const scanInputRef = useRef<HTMLInputElement>(null);

  const getCategoryIcon = (cat: string) => {
    const props = { className: "w-8 h-8" };
    switch (cat) {
      case '蔬菜': return <VegetableIcon {...props} />;
      case '水果': return <FruitIcon {...props} />;
      case '肉类': return <MeatIcon {...props} />;
      case '蛋奶': return <DairyIcon {...props} />;
      case '豆制品': return <BeanIcon {...props} />;
      case '粮油': return <GrainOilIcon {...props} />;
      case '干货': return <DryGoodsIcon {...props} />;
      case '调料': return <CondimentIcon {...props} />;
      case '主食': return <StapleIcon {...props} />;
      case '海鲜': return <SeafoodIcon {...props} />;
      case '饮品': return <DrinkIcon {...props} />;
      default: return <OtherIcon {...props} />;
    }
  };

  const filteredInventory = inventory.filter(item => {
    const matchesZone = activeZone === '全部' || item.storageZone === activeZone;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesZone && matchesSearch;
  });

  const openAddModal = () => {
    setIsEditing(false);
    setFormData({ name: '', amount: 1, unit: '份', category: '蔬菜', storageZone: '冷藏' });
    setShowModal(true);
  };

  const openEditModal = (item: Ingredient) => {
    setIsEditing(true);
    setFormData({ ...item });
    setShowModal(true);
  };

  const handleSubmit = () => {
    if (!formData.name) return;
    
    if (isEditing && formData.id) {
       // 这里实际上是一个 hack，因为 App.tsx 里的 onUpdate 只接受 (id, amount)。
       // 为了支持完整编辑，我们需要修改 App.tsx 或者这里先只支持 amount/unit 更新?
       // 鉴于用户要求“万一录入错了能修改”，我们假设需要更强的更新能力。
       // 这是一个前端模拟，实际上应该调用一个 onFullUpdate 接口。
       // 作为一个 workaround，我们可以先删除旧的再添加新的 (会丢失 id)，或者只更新 amount。
       // 为了最好体验，我假设 App.tsx 的 onUpdate 只能更 amount。
       // 修正：为了满足需求，我应该请求修改 App.tsx 的接口，或者这里用 delete + add 模拟 update
       onDelete(formData.id); 
       onAdd({ ...formData, id: Date.now().toString() }); // 生成新 ID
    } else {
       onAdd(formData);
    }
    setShowModal(false);
  };

  return (
    <div className="p-5 lg:p-10 pb-64 space-y-8 max-w-4xl mx-auto animate-in fade-in duration-500">
      {/* 统一的 录入/编辑 Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-xl flex items-center justify-center p-6">
          <div className="bg-white w-full max-w-lg rounded-3xl p-8 shadow-2xl space-y-6 animate-in zoom-in-95">
            <h3 className="text-xl font-black">{isEditing ? '编辑食材' : '录入食材'}</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-400 ml-1">名称</label>
                <input type="text" className="w-full bg-gray-50 p-4 rounded-xl text-lg font-bold outline-none focus:ring-1 ring-emerald-400" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="text-xs font-bold text-gray-400 ml-1">数量</label>
                  <input type="number" className="w-full bg-gray-50 p-4 rounded-xl text-lg font-bold text-center outline-none" value={formData.amount} onChange={e => setFormData({...formData, amount: Number(e.target.value)})} />
                </div>
                <div className="w-24">
                  <label className="text-xs font-bold text-gray-400 ml-1">单位</label>
                  <input type="text" className="w-full bg-gray-50 p-4 rounded-xl text-lg font-bold text-center outline-none" placeholder="个" value={formData.unit} onChange={e => setFormData({...formData, unit: e.target.value})} />
                </div>
              </div>
              <div>
                 <label className="text-xs font-bold text-gray-400 ml-1">存放区域</label>
                 <div className="flex gap-2 mt-1">
                    {ZONES.map(z => (
                      <button key={z} onClick={() => setFormData({...formData, storageZone: z as any})} className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${formData.storageZone === z ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-400'}`}>
                        {z}
                      </button>
                    ))}
                 </div>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 ml-1">分类</label>
                <div className="grid grid-cols-4 gap-2 mt-1">
                  {CATEGORIES.map(cat => (
                    <button key={cat} onClick={() => setFormData({...formData, category: cat as any})} className={`py-2 rounded-lg text-[10px] font-bold transition-all ${formData.category === cat ? 'bg-emerald-600 text-white' : 'bg-gray-50 text-gray-500'}`}>
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={handleSubmit} className="flex-1 py-3 bg-emerald-600 text-white rounded-xl font-bold shadow-lg">保存</button>
                <button onClick={() => setShowModal(false)} className="flex-1 py-3 bg-gray-100 text-gray-400 rounded-xl font-bold">取消</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isScanning && (
        <div className="fixed inset-0 z-[1000] bg-emerald-950/90 backdrop-blur-3xl flex flex-col items-center justify-center p-12 text-center animate-in fade-in">
          <div className="w-16 h-16 border-4 border-emerald-500/30 rounded-full border-t-emerald-400 animate-spin mb-6"></div>
          <h4 className="text-white text-xl font-bold">正在识别食材...</h4>
        </div>
      )}

      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight italic">食材储备</h2>
        <div className="flex bg-gray-100 p-1 rounded-xl w-fit">
          {['全部', ...ZONES].map(z => (
            <button key={z} onClick={() => setActiveZone(z as any)} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeZone === z ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-400'}`}>
              {z}
            </button>
          ))}
        </div>
      </header>

      <div className="flex gap-3">
        <div className="flex-1 relative">
           <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30 text-sm">🔍</span>
           <input type="text" placeholder="搜索..." className="w-full bg-white border border-gray-100 pl-10 pr-4 py-3 rounded-xl font-bold text-sm outline-none shadow-sm" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </div>
        <button onClick={() => scanInputRef.current?.click()} className="px-5 bg-emerald-600 text-white rounded-xl text-lg shadow-lg active:scale-95 transition-all">📸</button>
        <button onClick={openAddModal} className="px-5 bg-gray-900 text-white rounded-xl text-lg shadow-lg active:scale-95 transition-all">＋</button>
        <input type="file" ref={scanInputRef} className="hidden" accept="image/*" onChange={(e) => {
          const file = e.target.files?.[0];
          if (file && onAIScan) {
            const reader = new FileReader();
            reader.onloadend = () => onAIScan(reader.result as string);
            reader.readAsDataURL(file);
          }
        }} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredInventory.map(item => (
          <div key={item.id} className="bg-white rounded-2xl border border-gray-50 flex items-center p-3 relative group hover:border-emerald-100 hover:shadow-lg transition-all">
            {/* 点击图标区域打开编辑 */}
            <div onClick={() => openEditModal(item)} className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 mr-3 cursor-pointer hover:bg-emerald-50 transition-colors">
              {getCategoryIcon(item.category)}
            </div>
            
            {/* 点击文字区域打开编辑 */}
            <div onClick={() => openEditModal(item)} className="flex-1 min-w-0 cursor-pointer mr-2">
              <h4 className="font-black text-gray-900 text-base truncate">{item.name}</h4>
              <p className="text-[10px] font-bold text-gray-400 mt-0.5">{item.storageZone} • {item.category}</p>
            </div>
            
            {/* 数量控制区独立 */}
            <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-lg border border-gray-100 shrink-0">
              <button onClick={() => onUpdate(item.id, Math.max(0, item.amount - 1))} className="w-7 h-7 flex items-center justify-center text-gray-400 font-bold hover:text-emerald-600 active:scale-75 transition-all">－</button>
              <span className="font-black text-emerald-700 min-w-[2rem] text-center text-sm">{item.amount}<span className="text-[9px] text-gray-400 ml-0.5">{item.unit}</span></span>
              <button onClick={() => onUpdate(item.id, item.amount + 1)} className="w-7 h-7 flex items-center justify-center text-gray-400 font-bold hover:text-emerald-600 active:scale-75 transition-all">＋</button>
            </div>

            <button onClick={() => onDelete(item.id)} className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-white border border-gray-100 rounded-full text-[10px] text-gray-300 hover:text-red-500 shadow-sm opacity-0 group-hover:opacity-100 transition-all z-10">✕</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryView;
