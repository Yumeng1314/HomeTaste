
import React, { useState, useEffect, useRef } from 'react';
import { UserProfile, Recipe, Ingredient } from '../types';
import { syncService } from '../services/firebase';

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
  const [isConnecting, setIsConnecting] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const backupInputRef = useRef<HTMLInputElement>(null);

  const handleSaveProfile = () => {
    onUpdateProfile({ name: editName, role: editRole });
    setIsEditing(false);
  };

const handleCreateFamily = async () => {
  if (userProfile.pairCode) {
    alert("您已经拥有家庭配对码。");
    return;
  }

  setIsConnecting(true);
  try {
    const newCode = syncService.generatePairCode();

    // ✅ 创建后立刻把自己加入 members
    const result = await syncService.joinFamily(newCode);

    if (result.success) {
      onUpdateProfile({ pairCode: result.familyCode || newCode });
      alert("🎉 家庭已创建并加入成功！把配对码发给家人即可同步。");
    } else {
      alert(`创建失败：${result.error || "未知错误"}`);
    }
  } finally {
    setIsConnecting(false);
  }
};


  const handleJoinFamily = async () => {
  if (!targetPairCode) return;

  setIsConnecting(true);
  try {
    const result = await syncService.joinFamily(targetPairCode);

    if (result.success) {
      const code = result.familyCode || targetPairCode.trim().toUpperCase();
      onUpdateProfile({ pairCode: code });

      alert("🎉 连接成功！在另一台设备/另一个浏览器输入同一个配对码，就会实时同步。");
    } else {
      alert(`连接失败：${result.error || "请检查配对码是否正确"}`);
    }
  } finally {
    setIsConnecting(false);
  }
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

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const compressedBase64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
          const img = new Image();
          img.src = event.target?.result as string;
          img.onload = () => {
            const canvas = document.createElement('canvas');
            const maxWidth = 300; 
            let width = img.width;
            let height = img.height;

            if (width > maxWidth) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            }

            canvas.width = width;
            canvas.height = height;
            
            const ctx = canvas.getContext('2d');
            if (!ctx) {
              reject(new Error('Canvas context not supported'));
              return;
            }
            
            ctx.drawImage(img, 0, 0, width, height);
            resolve(canvas.toDataURL('image/jpeg', 0.7));
          };
          img.onerror = (err) => reject(err);
        };
        reader.onerror = (err) => reject(err);
      });

      onUpdateProfile({ avatar: compressedBase64 });

    } catch (error) {
      console.error("Image processing failed:", error);
      alert("图片处理失败，请尝试换一张图片。");
    }
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
               <input 
                 type="file" 
                 ref={fileInputRef} 
                 className="hidden" 
                 accept="image/*" 
                 onChange={handleAvatarUpload} 
               />
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

      {/* 同步配对卡片 */}
      <section className="bg-emerald-950 p-6 rounded-3xl text-white space-y-6 shadow-xl overflow-hidden relative">
         <div className="relative z-10">
           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h3 className="text-lg font-black italic">家庭同步</h3>
              {userProfile.pairCode ? (
                 <div className="bg-white/10 px-4 py-2 rounded-lg border border-white/10">
                   <p className="text-[9px] font-bold uppercase opacity-50 mb-0.5">我的配对码</p>
                   <p className="text-lg font-mono font-bold tracking-widest">{userProfile.pairCode}</p>
                 </div>
              ) : (
                 <button onClick={handleCreateFamily} className="px-4 py-2 bg-emerald-600 rounded-lg text-xs font-bold shadow hover:bg-emerald-500">创建新家庭</button>
              )}
           </div>

           {userProfile.partner ? (
             <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                <img src={userProfile.partner.avatar} className="w-12 h-12 rounded-xl border border-white/20" alt="" />
                <div>
                   <p className="font-bold text-white">{userProfile.partner.name}</p>
                   <div className="flex items-center gap-2 mt-1">
                     <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                     <p className="text-[10px] uppercase tracking-wider opacity-60">已实时同步</p>
                   </div>
                </div>
             </div>
           ) : (
             <div className="space-y-3">
                <p className="text-xs opacity-60">输入伴侣的配对码以加入家庭：</p>
                <div className="flex gap-2">
                   <input 
                     type="text" 
                     placeholder="例如: HT-ABC123"
                     className="bg-white/10 px-4 py-3 rounded-xl outline-none text-white font-mono font-bold flex-1 border border-white/10 text-sm placeholder:text-white/20" 
                     value={targetPairCode} 
                     onChange={e => setTargetPairCode(e.target.value)} 
                   />
                   <button 
                     onClick={handleJoinFamily} 
                     disabled={isConnecting}
                     className="bg-emerald-500 px-6 py-3 rounded-xl text-xs font-bold shadow-lg hover:bg-emerald-400 transition-colors disabled:opacity-50"
                   >
                     {isConnecting ? '连接中...' : '连接'}
                   </button>
                </div>
                {userProfile.pairCode && (<p className="text-[10px] opacity-40 italic"> * 云同步模式：在另一台设备输入相同配对码即可共享同一家庭数据。</p>)}

             </div>
           )}
         </div>
         {/* 装饰背景 */}
         <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      </section>

      {/* 数据安全备份区 */}
      <section className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
         <h3 className="text-sm font-black text-gray-900 mb-4 flex items-center gap-2">
           <span>💾 数据备份</span>
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
      </section>

      <button onClick={onLogout} className="w-full py-4 bg-red-50 text-red-500 font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-red-500 hover:text-white transition-all">退出登录</button>
    </div>
  );
};

export default SettingsView;
