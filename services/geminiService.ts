
import { GoogleGenAI, Type } from "@google/genai";
import { Ingredient, Recipe } from "../types";

export const getAIPromptRecipe = async (inventory: Ingredient[]): Promise<Partial<Recipe> | null> => {
  if (!process.env.API_KEY) return null;

  // Always initialize GoogleGenAI inside the function to capture the latest process.env.API_KEY
  // Use the standard initialization with named apiKey parameter and direct process.env usage
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const inventoryList = inventory.map(i => `${i.name}(${i.amount}${i.unit})`).join(', ');

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `基于以下现有食材，请推荐一个新菜谱：${inventoryList}。请以JSON格式返回，包含：title(名称), description(简介), prepTime(准备时间/分), cookTime(烹饪时间/分), ingredients(所需食材列表，包含name, amount, unit), steps(步骤数组)。所有内容必须使用中文。`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            description: { type: Type.STRING },
            prepTime: { type: Type.NUMBER },
            cookTime: { type: Type.NUMBER },
            ingredients: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  amount: { type: Type.NUMBER },
                  unit: { type: Type.STRING }
                }
              }
            },
            steps: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          }
        }
      }
    });

    // Ensure we access the .text property directly (not as a method)
    const jsonStr = response.text?.trim();
    if (!jsonStr) return null;
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};