
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
    { id: 'recipes', label: '私房食谱', icon: '📖' },
    { id: 'plan', label: '烹饪计划', icon: '📅' },
    { id: 'shopping', label: '协作采购', icon: '🛒' },
    { id: 'inventory', label: '冰箱库存', icon: '🧊' },
    { id: 'settings', label: '设置中心', icon: '⚙️' },
  ] as const;

  return (
    <div className="hidden lg:flex w-64 h-screen bg-white border-r border-gray-100 fixed left-0 top-0 flex-col z-50">
      <div className="p-10 pt-12">
        <h1 className="text-3xl font-black text-gray-900 tracking-tighter italic">
          HOMETASTE<span className="text-emerald-500">.</span>
        </h1>
        <div className="mt-6 flex items-center gap-2 px-3 py-2 bg-emerald-50 rounded-xl text-[10px] font-black text-emerald-700 uppercase tracking-[0.2em]">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
          Connected
        </div>
      </div>

      <nav className="flex-1 px-6 space-y-1.5 mt-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${
              currentView === item.id
                ? 'bg-gray-900 text-white shadow-xl scale-105'
                : 'text-gray-400 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-xs font-black uppercase tracking-widest">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-8">
        <button 
          onClick={() => onViewChange('settings')}
          className="w-full flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100 hover:bg-emerald-50 transition-all group"
        >
          <img src={userProfile.avatar} className="w-10 h-10 rounded-xl border-2 border-white shadow-sm object-cover" alt="Avatar" />
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-black text-gray-800 truncate uppercase">{userProfile.name}</p>
            <p className="text-[8px] font-bold text-gray-400 uppercase tracking-[0.2em] truncate">Premium Chef</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
