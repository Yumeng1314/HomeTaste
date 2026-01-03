
import React from 'react';
import { ViewType } from '../types';

interface BottomNavProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentView, onViewChange }) => {
  const navItems = [
    { id: 'dashboard', label: '首页', icon: '🏠' },
    { id: 'recipes', label: '食谱', icon: '📖' },
    { id: 'plan', label: '计划', icon: '📅' },
    { id: 'shopping', label: '采购', icon: '🛒' },
    { id: 'inventory', label: '库存', icon: '🧊' },
  ] as const;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-100 px-2 pb-safe z-50">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={`flex flex-col items-center justify-center w-full h-full transition-all ${
              currentView === item.id ? 'text-emerald-600 scale-110' : 'text-gray-400'
            }`}
          >
            <span className="text-xl mb-0.5">{item.icon}</span>
            <span className="text-[10px] font-black">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
