
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
  const [showShareModal, setShowShareModal] = useState<'poster' | 'menu' | null>(null);
  const [targetPairCode, setTargetPairCode] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isPairing, setIsPairing] = useState(false);
  
  const [editName, setEditName] = useState(userProfile.name);
  const [editRole, setEditRole] = useState(userProfile.role);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setEditName(userProfile.name);
    setEditRole(userProfile.role);
  }, [userProfile]);

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpdateProfile({ avatar: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = () => {
    onUpdateProfile({ name: editName, role: editRole });
    setIsEditing(false);
  };

  const handleConnect = () => {
    if (!targetPairCode) return;
    setIsPairing(true);
    setTimeout(() => {
      onUpdateProfile({ 
        partner: { 
          name: '美味伴侣', 
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mimi' 
        } 
      });
      setIsPairing(false);
      setTargetPairCode('');
      alert('配对成功！你们现在可以实时同步食谱和厨房了。');
    }, 1500);
  };

  return (
    <div className="p-6 lg:p-10 space-y-6 max-w-4xl mx-auto pb-40 animate-in fade-in duration-500">
      {/* 分享弹窗 */}
      {showShareModal && (
        <div className="fixed inset-0 z-[2000] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6" onClick={() => setShowShareModal(null)}>
           <div className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-300" onClick={e => e.stopPropagation()}>
              <div className="bg-gray-900 p-8 text-white text-center">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 mb-2">The Collection</h4>
                 <h2 className="text-xl font-black tracking-tighter italic">家庭菜单合集</h2>
              </div>
              <div className="p-8 space-y-4 bg-white max-h-[50vh] overflow-y-auto no-scrollbar">
                 {recipes.length > 0 ? recipes.map((r, i) => (
                   <div key={r.id} className="flex justify-between items-center border-b border-gray-50 pb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-[9px] font-black text-emerald-500 bg-emerald-50 w-5 h-5 rounded-full flex items-center justify-center">{i+1}</span>
                        <span className="font-black text-gray-900 text-sm">{r.title}</span>
                      </div>
                      <span className="text-[9px] text-gray-300 font-black uppercase italic tracking-widest">{r.category}</span>
                   </div>
                 )) : <p className="text-center text-gray-300 font-black italic">尚无录入食谱</p>}
              </div>
              <button onClick={() => setShowShareModal(null)} className="w-full py-5 bg-gray-900 text-white font-black uppercase tracking-[0.3em] text-[11px] hover:bg-black transition-colors rounded-t-2xl">关闭</button>
           </div>
        </div>
      )}

      {/* 紧凑版个人资料卡片 */}
      <section className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
         <div className="flex items-center gap-6 relative z-10">
            <div className="relative shrink-0">
               <div className="w-20 h-20 rounded-2xl border-2 border-white shadow-md overflow-hidden relative group/avatar">
                  <img src={userProfile.avatar} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/avatar:opacity-100 transition-opacity flex items-center justify-center cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                    <span className="text-white text-[8px] font-black uppercase tracking-widest">更换</span>
                  </div>
               </div>
               <button onClick={() => fileInputRef.current?.click()} className="absolute -bottom-1 -right-1 w-7 h-7 bg-emerald-500 text-white rounded-lg flex items-center justify-center border-2 border-white shadow-md text-xs">📸</button>
               <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleAvatarUpload} />
            </div>
            
            <div className="flex-1 min-w-0">
               {isEditing ? (
                 <div className="space-y-2">
                    <input className="text-lg font-black text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg w-full border border-gray-100 outline-none" value={editName} onChange={e => setEditName(e.target.value)} />
                    <input className="text-[10px] font-black text-gray-400 uppercase bg-gray-50 px-3 py-1.5 rounded-lg w-full border border-gray-100 outline-none" value={editRole} onChange={e => setEditRole(e.target.value)} />
                    <div className="flex gap-2">
                       <button onClick={handleSaveProfile} className="px-4 py-1.5 bg-gray-900 text-white text-[9px] font-black uppercase rounded-lg">保存</button>
                       <button onClick={() => setIsEditing(false)} className="px-4 py-1.5 bg-gray-100 text-gray-400 text-[9px] font-black uppercase rounded-lg">取消</button>
                    </div>
                 </div>
               ) : (
                 <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0">
                       <h2 className="text-xl font-black text-gray-900 tracking-tight truncate">{userProfile.name}</h2>
                       <p className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md inline-block uppercase tracking-widest mt-1">{userProfile.role}</p>
                    </div>
                    <button onClick={() => setIsEditing(true)} className="px-4 py-2 bg-gray-50 text-gray-400 text-[9px] font-black uppercase rounded-lg border border-gray-100 hover:text-emerald-600 shrink-0">编辑资料</button>
                 </div>
               )}
            </div>
         </div>
      </section>

      {/* 家庭同步 */}
      <section className="bg-emerald-600 p-8 rounded-3xl text-white space-y-6 shadow-lg relative overflow-hidden group">
         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
            <div className="space-y-1">
               <h3 className="text-xl font-black tracking-tight italic">FAMILY SYNC</h3>
               <p className="text-xs opacity-80 font-bold">同步伴侣，共享食谱与厨房灵感。</p>
            </div>
            {userProfile.partner ? (
              <div className="bg-white/20 backdrop-blur-md px-5 py-3 rounded-2xl flex items-center gap-3 border border-white/20">
                <img src={userProfile.partner.avatar} className="w-10 h-10 rounded-xl border border-white/50" alt="" />
                <div className="text-[9px] font-black uppercase tracking-widest">
                  <p className="text-xs font-black">已关联: {userProfile.partner.name}</p>
                  <p className="opacity-70 text-[8px] mt-0.5">云端同步中</p>
                </div>
              </div>
            ) : (
              <div className="bg-black/20 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 flex flex-col items-center">
                 <p className="text-[9px] font-black uppercase tracking-[0.2em] opacity-60 mb-1 text-white">我的配对码</p>
                 <p className="text-2xl font-black tracking-tighter text-white">{userProfile.pairCode}</p>
              </div>
            )}
         </div>

         {!userProfile.partner && (
           <div className="flex gap-2 relative z-10">
              <input 
                type="text" 
                placeholder="输入伴侣配对码" 
                className="bg-white/10 text-white placeholder:text-white/30 px-5 py-3 rounded-xl outline-none font-black text-xs flex-1 border border-white/20"
                value={targetPairCode}
                onChange={e => setTargetPairCode(e.target.value)}
              />
              <button 
                onClick={handleConnect}
                disabled={isPairing}
                className="bg-white text-emerald-600 px-6 py-3 rounded-xl text-[10px] font-black uppercase active:scale-95 transition-all shadow-md shrink-0"
              >
                {isPairing ? '同步中...' : '开启'}
              </button>
           </div>
         )}
      </section>

      {/* 功能项 */}
      <section className="grid grid-cols-2 gap-4">
         <div onClick={() => setShowShareModal('menu')} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4 hover:shadow-md transition-all cursor-pointer group">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform">📜</div>
            <div>
               <h3 className="text-sm font-black text-gray-900 tracking-tight">全库菜单海报</h3>
               <p className="text-[8px] text-gray-400 font-black mt-1 uppercase tracking-widest">以餐厅风格列出珍藏</p>
            </div>
         </div>
         <div onClick={onLogout} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4 hover:bg-red-50 transition-all cursor-pointer group">
            <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center text-2xl shadow-inner group-hover:rotate-12 transition-transform">🚪</div>
            <div>
               <h3 className="text-sm font-black text-gray-900 tracking-tight">安全注销</h3>
               <p className="text-[8px] text-gray-400 font-black mt-1 uppercase tracking-widest">退出当前同步会话</p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default SettingsView;
