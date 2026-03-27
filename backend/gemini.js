import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

async function generateEvent() {
    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: "Generate a random life event with 3 choices in JSON with title, description, and choices which is another json object with choice_number and choice_text"
    });
    
    return response.text;
}


// TODO: Create more generation actions
// async function generateEvent() {
//     const response = await ai.models.generateContent({
//         model: "gemini-3-flash-preview",
//         contents: "Generate a random life event with 3 choices in JSON",
        
//     });

//     return response.text;
// }


export const geminiService = {
    generateEvent,
}