
import { GoogleGenAI, Type } from "@google/genai";
import { Ingredient, Recipe } from "../types";

export const getAIRecommendedRecipeIds = async (inventory: Ingredient[], recipes: Recipe[]): Promise<string[]> => {
  if (!process.env.API_KEY || recipes.length === 0) return [];

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // 仅传递关键信息以节省 Token
  const inventoryStr = inventory.filter(i => i.amount > 0).map(i => `${i.name}`).join(', ');
  const recipesBrief = recipes.map(r => ({
    id: r.id,
    title: r.title,
    needed: r.ingredients.map(ing => ing.name).join(',')
  }));

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
        你是一位家庭私房菜大厨。
        冰箱当前库存食材：${inventoryStr}。
        现有私房食谱库：${JSON.stringify(recipesBrief)}。
        任务：根据库存，推荐 1-3 个最能消耗现有库存、匹配度最高的食谱 ID。
        要求：
        1. 必须只返回食谱库中存在的 ID。
        2. 如果匹配度低，可以推荐通过少量采购就能完成的菜品。
        3. 只返回 JSON 数组格式，例如 ["r1", "r2"]。
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        }
      }
    });

    const text = response.text || "[]";
    return JSON.parse(text);
  } catch (error) {
    console.error("AI Recommendation Error:", error);
    return [];
  }
};

export const parseIngredientsFromImage = async (base64Data: string): Promise<Partial<Ingredient>[]> => {
  if (!process.env.API_KEY) return [];
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: {
        parts: [
          { text: "识别图片中的食材名称、数量、单位、分类(蔬菜,水果,肉类,海鲜,蛋奶,豆制品,粮油,干货,调料,饮品,主食,其他)和存放区(常温,冷藏,冷冻)。返回 JSON 数组。" },
          { inlineData: { mimeType: "image/jpeg", data: base64Data.split(',')[1] } }
        ]
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING },
              amount: { type: Type.NUMBER },
              unit: { type: Type.STRING },
              category: { type: Type.STRING },
              storageZone: { type: Type.STRING }
            },
            required: ["name", "amount", "unit"]
          }
        }
      }
    });

    return JSON.parse(response.text || "[]");
  } catch (error) {
    console.error(error);
    return [];
  }
};
