
import React from 'react';

export const VegetableIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
    <path d="M12 21C12 21 17 18 17 12C17 6 12 2 12 2C12 2 7 6 7 12C7 18 12 21 12 21Z" className="text-emerald-600" fill="currentColor" fillOpacity="0.1" />
    <path d="M12 21V12" strokeLinecap="round" />
    <path d="M12 2L15 6" strokeLinecap="round" />
    <path d="M12 2L9 6" strokeLinecap="round" />
  </svg>
);

export const FruitIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="13" r="8" className="text-red-500" fill="currentColor" fillOpacity="0.1" />
    <path d="M12 5V2" strokeLinecap="round" />
    <path d="M12 5L15 2" strokeLinecap="round" />
  </svg>
);

export const MeatIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
    <path d="M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1" className="text-rose-500" fill="currentColor" fillOpacity="0.1" strokeLinecap="round" />
    <circle cx="15" cy="15" r="2" fill="currentColor" className="text-white" />
    <path d="M5 8C5 8 7 10 9 10C11 10 13 8 13 8" strokeLinecap="round" />
  </svg>
);

export const SeafoodIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
    <path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 2 16 2 10C2 4 6 2 12 2C18 2 20 4.47715 20 10Z" className="text-blue-500" fill="currentColor" fillOpacity="0.1" />
    <path d="M20 10L23 13" strokeLinecap="round" />
    <path d="M20 10L23 7" strokeLinecap="round" />
  </svg>
);

export const DairyIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
    <path d="M7 6H17V20C17 21.1046 16.1046 22 15 22H9C7.89543 22 7 21.1046 7 20V6Z" className="text-yellow-500" fill="currentColor" fillOpacity="0.1" />
    <path d="M5 6H19" strokeLinecap="round" />
    <path d="M12 2L12 6" strokeLinecap="round" />
  </svg>
);

export const BeanIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="8" cy="12" rx="4" ry="6" transform="rotate(-30 8 12)" className="text-amber-700" fill="currentColor" fillOpacity="0.2" />
    <ellipse cx="16" cy="12" rx="4" ry="6" transform="rotate(30 16 12)" className="text-amber-600" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

export const GrainOilIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
    <path d="M12 22C16.4183 22 20 18.4183 20 14C20 9 12 2 12 2C12 2 4 9 4 14C4 18.4183 7.58172 22 12 22Z" className="text-yellow-600" fill="currentColor" fillOpacity="0.1" />
    <path d="M12 10V16" strokeLinecap="round" />
  </svg>
);

export const DryGoodsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
    <path d="M12 4C7 4 3 8 3 11H21C21 8 17 4 12 4Z" className="text-stone-600" fill="currentColor" fillOpacity="0.2" />
    <path d="M12 11V20" strokeLinecap="round" strokeWidth="2" />
    <path d="M8 20H16" strokeLinecap="round" />
  </svg>
);

export const CondimentIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
    <rect x="7" y="8" width="10" height="14" rx="2" className="text-gray-400" fill="currentColor" fillOpacity="0.1" />
    <path d="M7 8L9 2H15L17 8" />
  </svg>
);

export const DrinkIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
    <path d="M7 6L5 21H19L17 6H7Z" className="text-blue-400" fill="currentColor" fillOpacity="0.1" />
    <path d="M12 6V2" />
    <path d="M9 2H15" />
  </svg>
);

export const StapleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
    <path d="M4 14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14" className="text-orange-100" fill="currentColor" fillOpacity="0.5" />
    <path d="M2 14H22" strokeLinecap="round" />
    <path d="M12 14V10" />
    <path d="M7 14C7 10 12 8 12 8C12 8 17 10 17 14" strokeLinecap="round" />
  </svg>
);

export const OtherIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="7" width="18" height="14" rx="2" className="text-gray-400" fill="currentColor" fillOpacity="0.1" />
    <path d="M3 7L12 2L21 7" />
    <path d="M12 12V16" />
  </svg>
);

// Nav Icons
export const HomeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" />
    <path d="M9 22V12H15V22" />
  </svg>
);

export const RecipeBookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20V22H6.5A2.5 2.5 0 0 1 4 19.5V4.5A2.5 2.5 0 0 1 6.5 2Z" />
  </svg>
);

export const PlanIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export const ShoppingIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1H4L6.68 14.39C6.77144 14.8504 7.02191 15.264 7.38755 15.5583C7.75318 15.8526 8.2107 16.009 8.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" />
  </svg>
);

export const FridgeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
    <path d="M5 2H19C20.1046 2 21 2.89543 21 4V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2Z" />
    <path d="M3 10H21" />
    <path d="M10 5V8" />
    <path d="M10 14V17" />
  </svg>
);

// AI & Magic Icons
export const MagicIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
    <path d="M15 4V2" />
    <path d="M15 16V14" />
    <path d="M8 9H10" />
    <path d="M20 9H22" />
    <path d="M17.8 11.8L19 13" />
    <path d="M10.6 5.2L12 6.6" />
    <path d="M17.8 6.2L19 5" />
    <path d="M10.6 12.8L12 11.4" />
    <path d="M2 21L7 16" />
  </svg>
);

export const SpinnerIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
    <path d="M12 2V6" />
    <path d="M12 18V22" />
    <path d="M4.93 4.93L7.76 7.76" />
    <path d="M16.24 16.24L19.07 19.07" />
    <path d="M2 12H6" />
    <path d="M18 12H22" />
    <path d="M4.93 19.07L7.76 16.24" />
    <path d="M16.24 7.76L19.07 4.93" />
  </svg>
);
