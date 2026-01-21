import OpenAI from "openai";

const AI = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPEN_AI_BASE_URL,
});

export default AI;