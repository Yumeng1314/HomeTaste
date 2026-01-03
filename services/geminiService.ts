import { GoogleGenAI, Type } from "@google/genai";
import { Ingredient, Recipe } from "../types";

export const getAIRecommendedRecipeIds = async (inventory: Ingredient[], recipes: Recipe[]): Promise<string[]> => {
  if (!process.env.API_KEY) return [];

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const inventoryStr = inventory.map(i => `${i.name}(${i.amount}${i.unit})`).join(', ');
  const recipesBrief = recipes.map(r => ({
    id: r.id,
    title: r.title,
    ingredients: r.ingredients.map(ing => `${ing.name}(${ing.amount}${ing.unit})`).join(',')
  }));

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
        当前冰箱有：${inventoryStr}。
        可选菜谱：${JSON.stringify(recipesBrief)}。
        请推荐匹配度最高的菜谱 ID。
        特别提示：水果类食材优先推荐直接食用或甜点。
        只返回 JSON 数组，如 ["r1", "r2"]。
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        }
      }
    });

    return JSON.parse(response.text || "[]");
  } catch (error) {
    console.error(error);
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