import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

if (!process.env.GEMINI_API_KEY) {
  console.error("❌ GEMINI_API_KEY is missing in .env");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const SYSTEM_PROMPT = `
You are a media framing and narrative analysis system.

Your task is to analyze how two articles about the same event frame the story differently.

You must:
1. Identify emotional bias in each article
2. Summarize the narrative framing of each article
3. Explain how a reader’s belief might differ if they only read one article

Do NOT fact check.
Do NOT take sides.
Do NOT judge correctness.

Focus only on:
- Emotional tone
- Language choices
- Narrative framing
`;

app.post("/analyze", async (req, res) => {
  try {
    const { articleA, articleB } = req.body;

    if (!articleA || !articleB) {
      return res.status(400).json({ error: "Both articles are required" });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
${SYSTEM_PROMPT}

Article A:
"""
${articleA}
"""

Article B:
"""
${articleB}
"""

Return the analysis in the following exact format:

Article A Emotional Bias:
- Dominant emotions:
- Emotional intensity:
- Emotionally loaded phrases:

Article B Emotional Bias:
- Dominant emotions:
- Emotional intensity:
- Emotionally loaded phrases:

Narrative Framing:
- Article A frames the event as:
- Article B frames the event as:

Reader Impact:
- If a reader only read Article A, they would likely believe:
- If a reader only read Article B, they would likely believe:
`;

    const result = await model.generateContent(prompt);

    const output = result.response.text();

    console.log("✅ Gemini response received");
    res.json({ output });

  } catch (error) {
    console.error("❌ Gemini error:", error.message || error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.get("/test", (req, res) => {
  res.send("Server is working");
});

app.listen(3001, () => {
  console.log("Backend running on http://localhost:3001");
});
