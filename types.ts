
export interface UserProfile {
  name: string;
  avatar: string;
  role: string;
  pairCode?: string;
  partner?: {
    name: string;
    avatar: string;
  };
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
  category: '蔬菜' | '水果' | '肉类' | '海鲜' | '蛋奶' | '豆制品' | '粮油' | '干货' | '调料' | '饮品' | '主食' | '其他';
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

export type RecipeCategory =
  | '素菜小炒'
  | '肉菜小炒'
  | '海鲜类'
  | '油炸类'
  | '卤味类'
  | '速食类'
  | '炙烤类'
  | '滋补炖菜'
  | '精美甜品'
  | '清爽饮品'
  | '暖心汤品'
  | '美味主食'
  | '新鲜水果'
  | '其他';

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
  appetizingRating?: number;
  appetizingCount?: number;
  source?: RecipeSource;
}

export interface MenuHistory {
  date: string;
  recipeTitles: string[];
}

export type DailyPlan = Record<string, string[]>;

export type ViewType = 'dashboard' | 'inventory' | 'recipes' | 'plan' | 'settings' | 'add-recipe' | 'shopping';
