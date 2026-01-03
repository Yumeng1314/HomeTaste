
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
        我的冰箱库存有：${inventoryStr}。
        我的食谱库中有以下菜谱：${JSON.stringify(recipesBrief)}。
        请分析哪些菜谱最适合现在做（食材匹配度最高）。
        按匹配程度排序，返回一个包含菜谱 ID 的 JSON 数组。
        只返回 JSON 数组，例如：["r1", "r2"]。不要包含任何解释文字。
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        }
      }
    });

    const text = response.text;
    if (!text) return [];
    const matchedIds = JSON.parse(text);
    return Array.isArray(matchedIds) ? matchedIds : [];
  } catch (error) {
    console.error("Gemini Matching Error:", error);
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
          { text: "请识别这张照片（可能是冰箱、小票或散落食材）中的食材、数量和单位。返回一个 JSON 数组，包含 name, amount(数字), unit, category(蔬菜,肉类,海鲜,蛋奶,豆制品,粮油,干货,调料,饮品,主食,其他), storageZone(常温,冷藏,冷冻)。只返回 JSON。" },
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

    const text = response.text;
    return text ? JSON.parse(text) : [];
  } catch (error) {
    console.error("Gemini Vision Error:", error);
    return [];
  }
};
