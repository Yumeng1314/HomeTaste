
import { GoogleGenAI, Type } from "@google/genai";
import { Ingredient, Recipe } from "../types";

export const getAIRecommendedRecipeIds = async (inventory: Ingredient[], recipes: Recipe[]): Promise<string[]> => {
  // 如果没有 API KEY，或者食谱为空，返回随机推荐作为 Mock (保证演示效果)
  if (!process.env.API_KEY) {
    console.warn("未检测到 API_KEY，切换至随机推荐模式。");
    // 模拟网络延迟
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (recipes.length === 0) return [];
    const shuffled = [...recipes].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2).map(r => r.id);
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const inventoryStr = inventory.filter(i => i.amount > 0).map(i => `${i.name}`).join(', ');
  const recipesBrief = recipes.map(r => ({
    id: r.id,
    title: r.title,
    ingredients: r.ingredients.map(ing => ing.name).join(',')
  }));

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
        你是一位家庭私房菜大厨。
        冰箱当前库存食材：${inventoryStr || "无"}。
        现有私房食谱库（包含ID和食材）：${JSON.stringify(recipesBrief)}。
        任务：根据库存，推荐 1-3 个最能消耗现有库存、匹配度最高的食谱 ID。如果库存很少，推荐简单的食谱。
        IMPORTANT: 只返回 JSON 字符串数组，不要包含 Markdown 格式，例如: ["r1", "r2"]。
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        }
      }
    });

    let text = response.text || "[]";
    // 清理可能的 Markdown 标记
    if (text.startsWith("```")) {
      text = text.replace(/^```json\n?/, "").replace(/^```\n?/, "").replace(/\n?```$/, "");
    }
    
    return JSON.parse(text);
  } catch (error) {
    console.error("AI Recommendation Error:", error);
    // 出错时返回空数组，由 UI 层处理提示
    return [];
  }
};

export const parseIngredientsFromImage = async (base64Data: string): Promise<Partial<Ingredient>[]> => {
  if (!process.env.API_KEY) {
     console.warn("No API Key, skipping image analysis");
     throw new Error("API Key missing");
  }
  
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  // 关键修复：移除 Base64 头部 (data:image/jpeg;base64,)，Gemini 只接受纯数据
  const cleanBase64 = base64Data.includes(',') ? base64Data.split(',')[1] : base64Data;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: {
        parts: [
          { text: "识别图中的食材。对于每种食材，返回：name(名称), amount(估算数量数字), unit(单位,如个/kg/包), category(蔬菜/水果/肉类/海鲜/蛋奶/豆制品/粮油/干货/调料/饮品/主食/其他), storageZone(常温/冷藏/冷冻)。" },
          { inlineData: { mimeType: "image/jpeg", data: cleanBase64 } }
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

    let text = response.text || "[]";
    if (text.startsWith("```")) {
      text = text.replace(/^```json\n?/, "").replace(/^```\n?/, "").replace(/\n?```$/, "");
    }

    return JSON.parse(text);
  } catch (error) {
    console.error("Image Recognition Error:", error);
    return [];
  }
};
