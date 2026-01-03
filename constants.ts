
import { Recipe, Ingredient } from './types';

export const INITIAL_INVENTORY: Ingredient[] = [
  { id: '1', name: '鸡蛋', amount: 12, unit: '个', category: '蛋奶', storageZone: '冷藏', updatedAt: Date.now() },
  { id: '2', name: '西红柿', amount: 3, unit: '个', category: '蔬菜', storageZone: '常温', updatedAt: Date.now() },
  { id: '3', name: '五花肉', amount: 500, unit: '克', category: '肉类', storageZone: '冷冻', updatedAt: Date.now() },
  { id: '4', name: '老抽', amount: 1, unit: '瓶', category: '调料', storageZone: '常温', updatedAt: Date.now() },
  { id: '5', name: '土豆', amount: 4, unit: '个', category: '蔬菜', storageZone: '常温', updatedAt: Date.now() },
  { id: '6', name: '北豆腐', amount: 1, unit: '盒', category: '豆制品', storageZone: '冷藏', updatedAt: Date.now() },
  { id: '7', name: '花生油', amount: 5, unit: '升', category: '粮油', storageZone: '常温', updatedAt: Date.now() },
  { id: '8', name: '干香菇', amount: 100, unit: '克', category: '干货', storageZone: '常温', updatedAt: Date.now() },
];

export const INITIAL_RECIPES: Recipe[] = [
  {
    id: 'r1',
    title: '西红柿炒鸡蛋',
    category: '素菜小炒',
    description: '国民家常菜，酸甜适口，做法简单，是下饭的不二之选。',
    images: ['https://picsum.photos/seed/tomato/800/600'],
    prepTime: 10,
    cookTime: 10,
    ingredients: [
      { name: '鸡蛋', amount: 3, unit: '个' },
      { name: '西红柿', amount: 2, unit: '个' },
      { name: '生抽', amount: 5, unit: '毫升' },
    ],
    steps: [
      '西红柿洗净切块，鸡蛋打散备用。',
      '锅中倒油，油热后倒入蛋液炒散盛出。',
      '锅留底油，下西红柿炒至出汁。',
      '倒入炒好的鸡蛋，加入少许生抽和盐调味。',
      '翻炒均匀即可出锅。'
    ],
    tags: ['简单', '快速', '经典']
  },
  {
    id: 'r2',
    title: '青椒土豆丝',
    category: '素菜小炒',
    description: '清脆爽口，火候是关键。',
    images: ['https://picsum.photos/seed/potato/800/600'],
    prepTime: 15,
    cookTime: 8,
    ingredients: [
      { name: '土豆', amount: 2, unit: '个' },
      { name: '青椒', amount: 1, unit: '个' },
      { name: '醋', amount: 10, unit: '毫升' },
    ],
    steps: [
      '土豆切丝，用清水浸泡去除淀粉。',
      '青椒切丝。',
      '热锅凉油，下蒜瓣爆香，倒入土豆丝大火快炒。',
      '土豆丝变透明时加入青椒丝，淋入生抽 and 陈醋。',
      '快速翻炒均匀起锅。'
    ],
    tags: ['家常', '下饭']
  }
];
