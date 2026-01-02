
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

/**
 * Interface representing the source of a recipe.
 */
export interface RecipeSource {
  type: 'link';
  url: string;
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
  // Fix: Added optional source property
  source?: RecipeSource;
}

export interface SyncStatus {
  lastSynced: number;
  partnerName: string;
  isOnline: boolean;
  connectionCode: string;
  members: FamilyMember[];
}

/**
 * Interface representing a completed cooking plan record.
 */
export interface MenuHistory {
  date: string;
  recipeTitles: string[];
}

export type DailyPlan = Record<string, string[]>;

export type ViewType = 'dashboard' | 'inventory' | 'recipes' | 'plan' | 'settings' | 'add-recipe';
