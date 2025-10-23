import { Container, Box, Stack, Button } from "@mui/material";
import { useState } from "react";

const words = ["too", "fire", "belly", "beast", "cherry", "fig", "grape"];

export default function GamePlay() {
  // Get a random word from the words array
  const [word, setWord] = useState(words[Math.floor(Math.random() * words.length)]);
  // Sentence state
  const [sentence, setSentence] = useState("");
  const [audioUrl, setAudioUrl] = useState(null);
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  // Listen to word state
  const [hearWord, setHearWord] = useState(null);
  const [wordAudioLoading, setWordAudioLoading] = useState(false);

  const generateAudioWord = async () => {
    setWordAudioLoading(true);
    
    // Use browser's Speech Synthesis API
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.rate = 0.8; // Slightly slower speech
    utterance.pitch = 1; // Normal pitch
    utterance.volume = 1; // Full volume
    // Play the audio
    speechSynthesis.speak(utterance);
    
    setWordAudioLoading(false);
  }

  const generateSentence = async () => {
    setIsAudioLoading(true);
    
    try {
      const response = await fetch("http://localhost:3000/generate-sentence", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ word }),
      });
      const data = await response.json();

      if (data.audioBuffer) {
        const uint8Array = new Uint8Array(data.audioBuffer);
        const audioBlob = new Blob([uint8Array], { type: "audio/mpeg" });
        const audioUrl = URL.createObjectURL(audioBlob);
        
        setAudioUrl(audioUrl);
        setSentence(data.sentence);
      }
      
    } catch (error) {
      console.error("Error generating sentence:", error);
      throw error;
    } finally {
      setIsAudioLoading(false);
    }
  };

  return (
    <Container maxWidth="md" minHeight="100vh">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Stack direction="row" spacing={2}>
         {/* Button to hear the word in a sentence */}
          <Button 
            onClick={isAudioLoading ? () => {console.log("Audio is loading")} : generateSentence} 
            variant="contained" 
            size="large"
            sx={{ 
              opacity: isAudioLoading ? 0.7 : 1,
            }}
          >
            {isAudioLoading ? (
              "🔄 Generating Audio..."
            ) : audioUrl ? (
              <audio
                src={audioUrl}
                onError={(e) => console.error("Audio error:", e.target.error)}
                onLoadStart={() => console.log("Audio loading started")}
                onCanPlay={() => console.log("Audio can play")}
                controls
              />
            ) : (
              "Hear it in a sentence"
            )}
          </Button>
           {/* Button to hear the word by itself */}
           <Button
           onClick={wordAudioLoading ? undefined : generateAudioWord}
           variant="contained"
           size="large"
           sx={{
             opacity: wordAudioLoading ? 0.7 : 1,
           }}
           >
             {wordAudioLoading ? "🔊 Speaking..." : "Hear the word by itself"}
           </Button>
        </Stack>
      </Box>
    </Container>
  );
}
