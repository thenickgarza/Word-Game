import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import OpenAI from "openai";

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});


const app = express();
const PORT = process.env.PORT || 3000;

const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `Generate a simple sentence that uses the word "fire" in a natural way for a word guessing game. Make it appropriate for easy difficulty.`
      }
    ]
  });

console.log(completion.choices[0].message.content);

app.use(cors())
app.use(express.json())

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});