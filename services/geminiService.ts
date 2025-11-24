import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const apiKey = import.meta.env.VITE_API_KEY;


// Initialize the client only if the key is present to avoid runtime crashes on start,
// though the actual call will fail gracefully if missing.
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateAIResponse = async (
  userMessage: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  if (!ai) {
    return "I'm currently offline (API Key missing). Please contact the agency directly via email.";
  }

  try {
    const chat: Chat = ai.chats.create({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: `You are the AI assistant for Cortex Wave.
        
        Your instructions:
        - Be extremely direct, simple, and accurate.
        - Remove all filler words and marketing fluff.
        - Keep answers short (1-2 sentences).
        
        Agency Info:
        - Services: Branding, Web Dev, UI/UX, Digital Transformation.
        - Pricing: Custom quotes based on scope.
        - Contact: cortexwave.connect@gmail.com / +880 1533 744721
        
        If a user wants to start a project, simply ask for their name and a brief project description.`
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result: GenerateContentResponse = await chat.sendMessage({ message: userMessage });
    return result.text || "I didn't receive a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection failed. Please try again.";
  }
};