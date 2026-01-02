
import React from 'react';
import { ViewType, UserProfile } from '../types';

interface SidebarProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
  partnerName?: string;
  userProfile: UserProfile;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange, partnerName, userProfile }) => {
  const navItems = [
    { id: 'dashboard', label: '家庭概览', icon: '🏠' },
    { id: 'recipes', label: '共享食谱', icon: '📖' },
    { id: 'plan', label: '今日计划', icon: '📅' },
    { id: 'inventory', label: '全家库存', icon: '📦' },
    { id: 'settings', label: '个人与关联', icon: '🔗' },
  ] as const;

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-100 fixed left-0 top-0 flex flex-col z-50">
      <div className="p-10">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter italic">
          HOMETASTE<span className="text-emerald-500">.</span>
        </h1>
        {partnerName && (
          <div className="mt-4 flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-xl text-[10px] font-black text-emerald-700 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            Linked: {partnerName}
          </div>
        )}
      </div>

      <nav className="flex-1 px-6 space-y-1.5">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-200 ${
              currentView === item.id
                ? 'bg-gray-900 text-white shadow-lg'
                : 'text-gray-400 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm font-black tracking-tight">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-6 border-t border-gray-50">
        <button 
          onClick={() => onViewChange('settings')}
          className="w-full flex items-center gap-3 bg-gray-50 p-3 rounded-2xl border border-gray-100 hover:bg-emerald-50 transition-colors text-left"
        >
          <img src={userProfile.avatar} className="w-10 h-10 rounded-xl border-2 border-white shadow-sm object-cover" alt="Avatar" />
          <div className="min-w-0 flex-1">
            <p className="text-xs font-black text-gray-800 truncate uppercase">{userProfile.name}</p>
            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest truncate">{userProfile.role}</p>
          </div>
          <span className="text-gray-300 text-xs">✎</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
