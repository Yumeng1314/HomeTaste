
import { Recipe, Ingredient, RecipeCategory } from './types';

// Shared recipe categories list
export const RECIPE_CATEGORIES: RecipeCategory[] = [
  '素菜小炒',
  '肉菜小炒',
  '海鲜类',
  '油炸类',
  '卤味类',
  '速食类',
  '炙烤类',
  '滋补炖菜',
  '精美甜品',
  '清爽饮品',
  '暖心汤品',
  '美味主食',
  '新鲜水果',
  '其他'
];

export const INITIAL_INVENTORY: Ingredient[] = [
  { id: '1', name: '鸡蛋', amount: 12, unit: '个', category: '蛋奶', storageZone: '冷藏', updatedAt: Date.now() },
  { id: '2', name: '西红柿', amount: 3, unit: '个', category: '蔬菜', storageZone: '常温', updatedAt: Date.now() },
  { id: '3', name: '红富士苹果', amount: 5, unit: '个', category: '水果', storageZone: '常温', updatedAt: Date.now() },
  { id: '4', name: '老抽', amount: 1, unit: '瓶', category: '调料', storageZone: '常温', updatedAt: Date.now() },
  { id: '5', name: '土豆', amount: 4, unit: '个', category: '蔬菜', storageZone: '常温', updatedAt: Date.now() },
  { id: '6', name: '巨峰葡萄', amount: 1, unit: '串', category: '水果', storageZone: '冷藏', updatedAt: Date.now() },
  { id: '7', name: '花生油', amount: 5, unit: '升', category: '粮油', storageZone: '常温', updatedAt: Date.now() },
  { id: '8', name: '干香菇', amount: 100, unit: '克', category: '干货', storageZone: '常温', updatedAt: Date.now() },
];

export const INITIAL_RECIPES: Recipe[] = [
  {
    id: 'r1',
    title: '西红柿炒鸡蛋',
    category: '素菜小炒',
    description: '国民家常菜，酸甜适口，做法简单。',
    images: ['https://picsum.photos/seed/tomato/800/600'],
    prepTime: 10,
    cookTime: 10,
    ingredients: [
      { name: '鸡蛋', amount: 3, unit: '个' },
      { name: '西红柿', amount: 2, unit: '个' },
    ],
    steps: ['西红柿切块，鸡蛋打散','热锅炒蛋盛出','炒西红柿出汁','合炒调味'],
    tags: ['简单', '经典']
  },
  {
    id: 'r2',
    title: '元气水果沙拉',
    category: '新鲜水果',
    description: '清爽解腻，维C满满。',
    images: ['https://picsum.photos/seed/fruit/800/600'],
    prepTime: 5,
    cookTime: 0,
    ingredients: [
      { name: '苹果', amount: 1, unit: '个' },
      { name: '葡萄', amount: 10, unit: '颗' },
      { name: '酸奶', amount: 1, unit: '盒' },
    ],
    steps: ['水果切块','倒入酸奶拌匀'],
    tags: ['健康', '无火']
  }
];
