
export interface UserProfile {
  name: string;
  avatar: string;
  role: string;
}

export interface FamilyMember extends UserProfile {
  id: string;
  isOnline: boolean;
  lastActive: string;
}

export interface Ingredient {
  id: string;
  name: string;
  amount: number;
  unit: string;
  category: '蔬菜' | '肉类' | '海鲜' | '蛋奶' | '豆制品' | '粮油' | '干货' | '调料' | '饮品' | '主食' | '其他';
  storageZone: '常温' | '冷藏' | '冷冻';
  updatedAt: number;
}

export interface ShoppingItem {
  id: string;
  name: string;
  amount: string;
  checked: boolean;
  addedAt: number;
}

export interface RecipeIngredient {
  name: string;
  amount: number;
  unit: string;
}

export interface RecipeSource {
  type: 'link';
  url: string;
}

export type RecipeCategory = '素菜小炒' | '肉菜小炒' | '滋补炖菜' | '精美甜品' | '清爽饮品' | '暖心汤品' | '美味主食' | '其他';

export interface Recipe {
  id: string;
  title: string;
  description: string;
  category: RecipeCategory;
  images: string[];
  prepTime: number;
  cookTime: number;
  ingredients: RecipeIngredient[];
  steps: string[];
  tags: string[];
  rating?: number;
  reviewCount?: number;
  appetizingRating?: number; // 下饭评分 (1-5)
  appetizingCount?: number; // 记录总人数
  source?: RecipeSource;
}

export interface SyncStatus {
  lastSynced: number;
  partnerName: string;
  isOnline: boolean;
  connectionCode: string;
  members: FamilyMember[];
}

export interface MenuHistory {
  date: string;
  recipeTitles: string[];
}

export type DailyPlan = Record<string, string[]>;

export type ViewType = 'dashboard' | 'inventory' | 'recipes' | 'plan' | 'settings' | 'add-recipe' | 'shopping';
