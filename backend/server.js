import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import OpenAI from "openai";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const generateSentence = async (word) => {
  try {
  const sentence = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `Generate a simple sentence that uses the word "${word}" in a natural way for a word guessing game. 
        Make it appropriate for easy difficulty and children. If you can add humor that would be awesome.. if you use 
        the word multiple times that would be ok too`,
      },
    ],
  });

  return sentence.choices[0].message.content;
} catch (error) {
  console.error("error generating sentence:", error);
  throw error;
}
};

app.post("/generate-sentence", async (req, res) => {
  try {
    const { word }  = req.body;
    const sentence = await generateSentence(word);

    const audioSentence = await openai.audio.speech.create({
      model: "tts-1-hd",
      voice: "alloy",
      input: sentence,
    });

    const arrayBuffer = await audioSentence.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);
    
    res.json({
      audioBuffer: Array.from(uint8Array),
      sentence: sentence,
    });
    console.log("success generating sentence(s):", sentence);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Failed to generate sentence" })
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
