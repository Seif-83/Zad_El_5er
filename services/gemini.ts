
import { GoogleGenAI } from "@google/genai";

// Note: API_KEY should be set as an environment variable
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

let ai: InstanceType<typeof GoogleGenAI> | null = null;

if (apiKey) {
  try {
    ai = new GoogleGenAI({ apiKey });
  } catch (e) {
    console.warn('Failed to initialize Gemini AI:', e);
  }
}

export const getHerbalBenefits = async (itemName: string): Promise<string> => {
  if (!ai) {
    // Return default benefits if API is not configured
    return `معلومات عن ${itemName}:\n• فوائد صحية متعددة\n• غني بالعناصر الغذائية\n• استخدام تقليدي عريق`;
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `بصفتك خبير عطارة وأعشاب، اذكر 3 فوائد صحية باختصار شديد لـ "${itemName}". اجعل الإجابة بلهجة عربية جذابة وودودة بصيغة نقاط مختصرة.`,
      config: {
        maxOutputTokens: 200,
        temperature: 0.7,
      },
    });
    return response.text || "لم يتم العثور على معلومات حالياً.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "نعتذر، حدث خطأ أثناء جلب المعلومات.";
  }
};
