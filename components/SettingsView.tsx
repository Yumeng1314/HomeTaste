
import React, { useState, useEffect, useRef } from 'react';
import { UserProfile, Recipe, Ingredient } from '../types';

interface SettingsViewProps {
  userProfile: UserProfile;
  onUpdateProfile: (updates: Partial<UserProfile>) => void;
  recipes: Recipe[];
  inventory: Ingredient[];
  onLogout: () => void;
}

const SettingsView: React.FC<SettingsViewProps> = ({ userProfile, onUpdateProfile, recipes, inventory, onLogout }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(userProfile.name);
  const [editRole, setEditRole] = useState(userProfile.role);
  const [targetPairCode, setTargetPairCode] = useState('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const backupInputRef = useRef<HTMLInputElement>(null);

  const handleSaveProfile = () => {
    onUpdateProfile({ name: editName, role: editRole });
    setIsEditing(false);
  };

  const handleExportBackup = () => {
    const backupData = {
      ht_inventory: localStorage.getItem('ht_inventory'),
      ht_recipes: localStorage.getItem('ht_recipes'),
      ht_plans: localStorage.getItem('ht_plans'),
      ht_shopping: localStorage.getItem('ht_shopping'),
      ht_history: localStorage.getItem('ht_history'),
      ht_profile: localStorage.getItem('ht_profile'),
      backup_date: new Date().toISOString(),
      version: '1.0'
    };
    
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hometaste_backup_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImportBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string);
        if (data.version && data.ht_recipes) {
          if (confirm('导入备份将覆盖当前所有数据，确定要继续吗？')) {
            if (data.ht_inventory) localStorage.setItem('ht_inventory', data.ht_inventory);
            if (data.ht_recipes) localStorage.setItem('ht_recipes', data.ht_recipes);
            if (data.ht_plans) localStorage.setItem('ht_plans', data.ht_plans);
            if (data.ht_shopping) localStorage.setItem('ht_shopping', data.ht_shopping);
            if (data.ht_history) localStorage.setItem('ht_history', data.ht_history);
            if (data.ht_profile) localStorage.setItem('ht_profile', data.ht_profile);
            
            alert('数据导入成功！即将刷新页面...');
            window.location.reload();
          }
        } else {
          alert('无效的备份文件格式');
        }
      } catch (err) {
        alert('解析备份文件失败');
        console.error(err);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="p-6 lg:p-10 space-y-8 max-w-4xl mx-auto pb-64 animate-in fade-in duration-500">
      <header>
        <h2 className="text-2xl font-black italic">Settings</h2>
      </header>

      {/* 资料卡片：横向紧凑布局 */}
      <section className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
         <div className="flex items-center gap-6">
            <div className="relative shrink-0">
               <div className="w-20 h-20 rounded-2xl border-2 border-gray-100 overflow-hidden relative group">
                  <img src={userProfile.avatar} className="w-full h-full object-cover" alt="" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer transition-opacity" onClick={() => fileInputRef.current?.click()}>
                    <span className="text-white text-[9px] font-bold">更换</span>
                  </div>
               </div>
               <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={(e) => {
                 const file = e.target.files?.[0];
                 if (file) {
                   const reader = new FileReader();
                   reader.onloadend = () => onUpdateProfile({ avatar: reader.result as string });
                   reader.readAsDataURL(file);
                 }
               }} />
            </div>
            
            <div className="flex-1 min-w-0">
               {isEditing ? (
                 <div className="flex gap-3">
                    <div className="space-y-2 flex-1">
                      <input className="text-lg font-black text-gray-900 bg-gray-50 px-3 py-2 rounded-lg w-full border border-gray-100 outline-none" value={editName} onChange={e => setEditName(e.target.value)} placeholder="称呼" />
                      <input className="text-xs font-bold text-gray-500 bg-gray-50 px-3 py-2 rounded-lg w-full border border-gray-100 outline-none" value={editRole} onChange={e => setEditRole(e.target.value)} placeholder="身份" />
                    </div>
                    <div className="flex flex-col gap-2 justify-center">
                       <button onClick={handleSaveProfile} className="px-4 py-2 bg-gray-900 text-white text-xs font-bold rounded-lg">保存</button>
                       <button onClick={() => setIsEditing(false)} className="px-4 py-2 bg-gray-100 text-gray-400 text-xs font-bold rounded-lg">取消</button>
                    </div>
                 </div>
               ) : (
                 <div className="flex items-center justify-between">
                    <div>
                       <h3 className="text-xl font-black text-gray-900">{userProfile.name}</h3>
                       <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mt-1">{userProfile.role}</p>
                    </div>
                    <button onClick={() => setIsEditing(true)} className="px-4 py-2 bg-gray-50 text-gray-400 text-xs font-bold rounded-xl border border-gray-100">编辑</button>
                 </div>
               )}
            </div>
         </div>
      </section>

      {/* 数据安全备份区 */}
      <section className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
         <h3 className="text-sm font-black text-gray-900 mb-4 flex items-center gap-2">
           <span>💾 数据安全</span>
           <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-bold">自动保存中</span>
         </h3>
         <div className="grid grid-cols-2 gap-4">
            <button onClick={handleExportBackup} className="py-4 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-700 hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm">
               📤 导出数据备份
            </button>
            <button onClick={() => backupInputRef.current?.click()} className="py-4 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-700 hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm">
               📥 导入恢复数据
            </button>
            <input type="file" ref={backupInputRef} className="hidden" accept=".json" onChange={handleImportBackup} />
         </div>
         <p className="text-[10px] text-gray-400 mt-3 leading-relaxed">
            您的数据（食谱、库存、计划等）已实时保存在本地设备中。建议定期导出备份，以防设备丢失或清理浏览器缓存导致数据丢失。
         </p>
      </section>

      {/* 同步配对卡片：修复溢出 */}
      <section className="bg-emerald-950 p-6 rounded-3xl text-white space-y-6 shadow-xl overflow-hidden relative">
         <div className="relative z-10">
           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h3 className="text-lg font-black italic">家庭同步</h3>
              {!userProfile.partner && (
                 <div className="bg-white/10 px-4 py-2 rounded-lg border border-white/10">
                   <p className="text-[9px] font-bold uppercase opacity-50 mb-0.5">本机配对码</p>
                   <p className="text-lg font-mono font-bold tracking-widest">{userProfile.pairCode}</p>
                 </div>
              )}
           </div>

           {userProfile.partner ? (
             <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                <img src={userProfile.partner.avatar} className="w-12 h-12 rounded-xl border border-white/20" alt="" />
                <div>
                   <p className="font-bold text-white">{userProfile.partner.name}</p>
                   <div className="flex items-center gap-2 mt-1">
                     <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                     <p className="text-[10px] uppercase tracking-wider opacity-60">已连接</p>
                   </div>
                </div>
             </div>
           ) : (
             <div className="space-y-3">
                <p className="text-xs opacity-60">输入伴侣的配对码以共享数据：</p>
                <div className="flex gap-2">
                   <input 
                     type="text" 
                     placeholder="例如: HT-1234" 
                     className="bg-white/10 px-4 py-3 rounded-xl outline-none text-white font-mono font-bold flex-1 border border-white/10 text-sm placeholder:text-white/20" 
                     value={targetPairCode} 
                     onChange={e => setTargetPairCode(e.target.value)} 
                   />
                   <button onClick={() => { if(targetPairCode) onUpdateProfile({ partner: { name: '同步伴侣', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Partner' } }); }} className="bg-emerald-500 px-6 py-3 rounded-xl text-xs font-bold shadow-lg hover:bg-emerald-400 transition-colors">连接</button>
                </div>
             </div>
           )}
         </div>
         {/* 装饰背景 */}
         <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      </section>

      <button onClick={onLogout} className="w-full py-4 bg-red-50 text-red-500 font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-red-500 hover:text-white transition-all">退出登录</button>
    </div>
  );
};

export default SettingsView;
