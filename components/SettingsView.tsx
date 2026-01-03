
import React, { useState, useEffect, useRef } from 'react';
import { UserProfile, Recipe, Ingredient } from '../types';
import html2canvas from 'html2canvas';

interface SettingsViewProps {
  userProfile: UserProfile;
  onUpdateProfile: (updates: Partial<UserProfile>) => void;
  recipes: Recipe[];
  inventory: Ingredient[];
  onLogout: () => void;
}

const SettingsView: React.FC<SettingsViewProps> = ({ userProfile, onUpdateProfile, recipes, inventory, onLogout }) => {
  const [showShareModal, setShowShareModal] = useState<boolean>(false);
  const [isExporting, setIsExporting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isPairing, setIsPairing] = useState(false);
  const [targetPairCode, setTargetPairCode] = useState('');
  const [editName, setEditName] = useState(userProfile.name);
  const [editRole, setEditRole] = useState(userProfile.role);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const posterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setEditName(userProfile.name);
    setEditRole(userProfile.role);
  }, [userProfile]);

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => onUpdateProfile({ avatar: reader.result as string });
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

  const handleExportPoster = async () => {
    if (!posterRef.current) return;
    setIsExporting(true);
    try {
      const canvas = await html2canvas(posterRef.current, {
        useCORS: true,
        scale: 3, // 高清导出
        backgroundColor: '#ffffff'
      });
      const link = document.createElement('a');
      link.download = `${userProfile.name}的私房菜单.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error('导出失败', err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="p-6 lg:p-10 space-y-6 max-w-4xl mx-auto pb-40 animate-in fade-in duration-500">
      {/* 导出级海报模态框 */}
      {showShareModal && (
        <div className="fixed inset-0 z-[2000] bg-black/90 backdrop-blur-xl flex flex-col items-center p-6 overflow-y-auto no-scrollbar" onClick={() => setShowShareModal(false)}>
           <div className="w-full flex justify-end mb-6 max-w-[400px]">
              <button onClick={() => setShowShareModal(false)} className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center">✕</button>
           </div>

           {/* 实际渲染的海报区域 */}
           <div 
             ref={posterRef}
             className="bg-white w-full max-w-[400px] rounded-none shadow-2xl relative overflow-hidden flex flex-col p-10 min-h-[600px] border-[12px] border-double border-gray-100" 
             onClick={e => e.stopPropagation()}
           >
              {/* 装饰边角 */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-gray-900"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-gray-900"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-gray-900"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-gray-900"></div>

              <div className="text-center space-y-2 mb-10">
                 <h4 className="font-playfair text-4xl italic font-black text-gray-900 tracking-tighter">Chef's Table</h4>
                 <div className="h-0.5 w-12 bg-gray-900 mx-auto"></div>
                 <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">{userProfile.name} 的私房菜单</p>
              </div>

              <div className="flex-1 space-y-8">
                 {recipes.length > 0 ? (
                   ['肉菜小炒', '素菜小炒', '美味主食', '其他'].map(cat => {
                     const catRecipes = recipes.filter(r => r.category === cat || (cat === '其他' && !['肉菜小炒', '素菜小炒', '美味主食'].includes(r.category)));
                     if (catRecipes.length === 0) return null;
                     return (
                       <div key={cat} className="space-y-4">
                          <h5 className="text-[9px] font-black text-emerald-600 border-b border-gray-100 pb-1 uppercase tracking-widest">{cat}</h5>
                          <div className="space-y-3">
                            {catRecipes.map(r => (
                              <div key={r.id} className="flex justify-between items-baseline gap-4">
                                <span className="font-black text-gray-800 text-sm whitespace-nowrap">{r.title}</span>
                                <div className="flex-1 border-b border-dotted border-gray-200 h-1"></div>
                                <span className="text-[9px] font-black text-gray-300 italic uppercase">Signature</span>
                              </div>
                            ))}
                          </div>
                       </div>
                     )
                   })
                 ) : (
                   <div className="py-20 text-center italic text-gray-200 font-playfair">Your culinary journey begins here...</div>
                 )}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-50 flex justify-between items-end">
                 <div className="space-y-1">
                    <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest">Presented By</p>
                    <p className="text-sm font-black text-gray-900 uppercase italic">HomeTaste Sync.</p>
                 </div>
                 <div className="text-right">
                    <p className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">Authentic Quality</p>
                    <p className="text-[7px] text-gray-300 font-bold uppercase">{new Date().toLocaleDateString()}</p>
                 </div>
              </div>
           </div>

           <div className="mt-8 flex gap-4 w-full max-w-[400px]">
              <button 
                onClick={handleExportPoster} 
                disabled={isExporting}
                className="flex-1 py-5 bg-emerald-600 text-white font-black uppercase tracking-[0.3em] text-[11px] rounded-2xl shadow-xl hover:bg-emerald-700 transition-all active:scale-95 disabled:opacity-50"
              >
                {isExporting ? '正在生成图像...' : '💾 下载精美海报'}
              </button>
           </div>
           <p className="mt-4 text-[10px] text-white/40 font-black uppercase tracking-widest">也可以长按上方海报保存图片</p>
        </div>
      )}

      {/* 用户资料卡片 */}
      <section className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden group">
         <div className="flex items-center gap-6 relative z-10">
            <div className="relative shrink-0">
               <div className="w-20 h-20 rounded-2xl border-2 border-white shadow-md overflow-hidden relative group/avatar">
                  <img src={userProfile.avatar} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/avatar:opacity-100 transition-opacity flex items-center justify-center cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                    <span className="text-white text-[8px] font-black uppercase tracking-widest">更换</span>
                  </div>
               </div>
               <button onClick={() => fileInputRef.current?.click()} className="absolute -bottom-1 -right-1 w-7 h-7 bg-emerald-500 text-white rounded-lg flex items-center justify-center border-2 border-white shadow-md text-xs hover:scale-110 transition-transform">📸</button>
               <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleAvatarUpload} />
            </div>
            
            <div className="flex-1 min-w-0">
               {isEditing ? (
                 <div className="space-y-2">
                    <input className="text-lg font-black text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg w-full border border-gray-100 outline-none" value={editName} onChange={e => setEditName(e.target.value)} />
                    <input className="text-[10px] font-black text-gray-400 uppercase bg-gray-50 px-3 py-1.5 rounded-lg w-full border border-gray-100 outline-none" value={editRole} onChange={e => setEditRole(e.target.value)} />
                    <div className="flex gap-2 mt-2">
                       <button onClick={handleSaveProfile} className="px-4 py-2 bg-gray-900 text-white text-[9px] font-black uppercase rounded-lg">保存</button>
                       <button onClick={() => setIsEditing(false)} className="px-4 py-2 bg-gray-100 text-gray-400 text-[9px] font-black uppercase rounded-lg">取消</button>
                    </div>
                 </div>
               ) : (
                 <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0">
                       <h2 className="text-xl font-black text-gray-900 tracking-tight truncate">{userProfile.name}</h2>
                       <p className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md inline-block uppercase tracking-widest mt-1">{userProfile.role}</p>
                    </div>
                    <button onClick={() => setIsEditing(true)} className="px-4 py-2 bg-gray-50 text-gray-400 text-[9px] font-black uppercase rounded-lg border border-gray-100 hover:text-emerald-600 hover:bg-emerald-50 transition-all shrink-0">编辑资料</button>
                 </div>
               )}
            </div>
         </div>
      </section>

      {/* 家庭同步区域 */}
      <section className="bg-emerald-600 p-8 rounded-[2.5rem] text-white space-y-6 shadow-lg relative overflow-hidden group">
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
                className="bg-white/10 text-white placeholder:text-white/30 px-5 py-3 rounded-xl outline-none font-black text-xs flex-1 border border-white/20 focus:bg-white/20 transition-all"
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

      {/* 功能菜单区 */}
      <section className="grid grid-cols-2 gap-4">
         <div onClick={() => setShowShareModal(true)} className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-4 hover:shadow-md hover:border-emerald-100 transition-all cursor-pointer group">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform">📜</div>
            <div>
               <h3 className="text-sm font-black text-gray-900 tracking-tight">全库菜单海报</h3>
               <p className="text-[8px] text-gray-400 font-black mt-1 uppercase tracking-widest">导出高定风格菜单图片</p>
            </div>
         </div>
         <div onClick={onLogout} className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-4 hover:bg-red-50 hover:border-red-100 transition-all cursor-pointer group">
            <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center text-2xl shadow-inner group-hover:rotate-12 transition-transform">🚪</div>
            <div>
               <h3 className="text-sm font-black text-gray-900 tracking-tight">安全注销</h3>
               <p className="text-[8px] text-gray-400 font-black mt-1 uppercase tracking-widest">退出当前会话</p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default SettingsView;
