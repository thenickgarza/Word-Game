import { Container, Box, Stack, Button } from "@mui/material";
import { useState, useEffect } from "react";

const words = ["too", "fire", "belly", "beast", "cherry", "fig", "grape"];

export default function GamePlay() {
  const [word, setWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );

  
    const generateSentence = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/generate-sentence",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ word }),
          }
        );
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.error("error generating sentence:", error);
        throw error;
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
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
