
import React from 'react';
import { ViewType } from '../types';
import { HomeIcon, RecipeBookIcon, PlanIcon, ShoppingIcon, FridgeIcon } from './Icons';

interface BottomNavProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentView, onViewChange }) => {
  const navItems = [
    { id: 'dashboard', label: '首页', icon: HomeIcon, color: 'text-orange-500' },
    { id: 'recipes', label: '食谱', icon: RecipeBookIcon, color: 'text-emerald-500' },
    { id: 'plan', label: '计划', icon: PlanIcon, color: 'text-indigo-500' },
    { id: 'shopping', label: '清单', icon: ShoppingIcon, color: 'text-rose-500' },
    { id: 'inventory', label: '库存', icon: FridgeIcon, color: 'text-cyan-500' },
  ] as const;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-3xl border-t border-gray-100 px-6 pb-safe z-[100] h-20 shadow-[0_-5px_20px_rgba(0,0,0,0.03)]">
      <div className="flex justify-between items-center h-full max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = currentView === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className="flex flex-col items-center justify-center w-12 h-full active:scale-95 transition-all"
            >
              <div className={`transition-all duration-300 ${isActive ? `${item.color} -translate-y-1` : 'text-gray-300'}`}>
                <Icon className="w-6 h-6" />
              </div>
              <span className={`text-[10px] font-bold mt-1 transition-colors ${
                isActive ? 'text-gray-900' : 'text-transparent'
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
