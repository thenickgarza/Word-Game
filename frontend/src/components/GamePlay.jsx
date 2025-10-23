import { Container, Box, Stack, Button } from "@mui/material";
import { useState, useEffect } from "react";

const words = ["too", "fire", "belly", "beast", "cherry", "fig", "grape"];

export default function GamePlay() {
  const [word, setWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );

  const [sentence, setSentence] = useState("");
  const [audioUrl, setAudioUrl] = useState(null);
  const [isAudioLoading, setIsAudioLoading] = useState(false);

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
      console.error("error generating sentence:", error);
      throw error;
    } finally {
      setIsAudioLoading(false);
    }
  };

  useEffect(() => {
    generateSentence();
  }, [word]);

  return (
    <Container maxWidth="md" minHeight="100vh">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Stack direction="row" spacing={2}>
          <Button onClick={generateSentence} variant="contained" size="large">
            Hear it in a sentence
          </Button>
          <Button variant="contained" size="large">
            <audio
              src={audioUrl}
              onError={(e) => console.error("Audio error:", e.target.error)}
              onLoadStart={() => console.log("Audio loading started")}
              onCanPlay={() => console.log("Audio can play")}
              controls
            />
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
