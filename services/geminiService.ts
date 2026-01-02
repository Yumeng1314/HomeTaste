
import { GoogleGenAI, Type } from "@google/genai";
import { Ingredient, Recipe } from "../types";

export const getAIRecommendedRecipeIds = async (inventory: Ingredient[], recipes: Recipe[]): Promise<string[]> => {
  if (!process.env.API_KEY) return [];

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // 只提取 AI 需要的关键信息，减少 Token 消耗
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
