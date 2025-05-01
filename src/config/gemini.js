import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold
} from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;
// Updated model name to ensure compatibility
const MODEL_NAME = "gemini-1.5-pro";

async function runChat(prompt) {
  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    
    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };
    
    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];
    
    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [],
    });
    
    const result = await chat.sendMessage(prompt);
    const response = result.response;
    // console.log(response.text());
    return response.text();
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    // Log more detailed error information
    if (error.message) {
      console.error("Error message:", error.message);
    }
    if (error.stack) {
      console.error("Stack trace:", error.stack);
    }
    throw error;
  }
}

export default runChat;
