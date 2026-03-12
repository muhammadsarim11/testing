import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv'
dotenv.config()
// Step 1: Initialize the API with your Key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);

export const generateCodeReview = async (userCode) => {
    // Step 2: Select the model (Flash is fast and free)
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash",
        generationConfig:{responseMimeType:"application/json"},
        systemInstruction: "You are a code reviewer. Always return ONLY pure JSON."

     },{
    maxOutputTokens: 1024,
    temperature: 0.5,
    
    });

    // Step 3: Define your instructions (System Prompt)
const prompt = `Review this code and return JSON with keys: quality, bugs, testCases, suggestions. Code: ${userCode}`;

    // Step 4: Call the model and get the result
    const result = await model.generateContent(prompt);
    const response = result.response;
    
    const rawText = response.text(); // Yeh woh messy string hai jo aapne dekhi

    try {
        // Step 1: Parse the string into a JS Object
        const cleanObject = JSON.parse(rawText);
        return cleanObject;
    } catch (error) {
        console.error("JSON Parsing Error:", error);
        return { error: "AI returned invalid format" };
    }
};

