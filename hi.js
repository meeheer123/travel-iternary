// Make sure to include these imports:
// import { GoogleGenerativeAI } from "@google/generative-ai";
const { GoogleGenerativeAI } = require("@google/generative-ai");
async function test() {
    const genAI = new GoogleGenerativeAI('AIzaSyC3BAxb2KxdXXr_NPSXkacXihMs4uQThNA');
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Write a story about a magic backpack.";

const result = await model.generateContent(prompt);
}

test();