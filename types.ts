
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

export interface RecipeIngredient {
  name: string;
  amount: number;
  unit: string;
}

export interface RecipeSource {
  type: 'link' | 'image';
  url?: string;
  images?: string[];
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  images: string[];
  prepTime: number;
  cookTime: number;
  ingredients: RecipeIngredient[];
  steps: string[];
  tags: string[];
  source?: RecipeSource;
}

export interface MenuHistory {
  date: string;
  recipeTitles: string[];
  recipeIds: string[];
}

export interface SyncStatus {
  lastSynced: number;
  partnerName: string;
  isOnline: boolean;
  connectionCode: string;
  members: FamilyMember[];
}

export type DailyPlan = Record<string, string[]>;

export type ViewType = 'dashboard' | 'inventory' | 'recipes' | 'plan' | 'settings' | 'add-recipe';
