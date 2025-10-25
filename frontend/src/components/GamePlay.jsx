import { Container, Box, Stack, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useWordContext } from '../contexts/WordContext';

export default function GamePlay() {
  const { words } = useWordContext();
  
  // Get a random word from the words array
  const [word, setWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );
  // const { words } = useWordContext();
  // Current word index
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  let currentWord = words[currentWordIndex];
  // Sentence state
  const [sentence, setSentence] = useState("");
  const [audioUrl, setAudioUrl] = useState(null);
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  // Listen to word state
  const [hearWord, setHearWord] = useState(null);
  const [wordAudioLoading, setWordAudioLoading] = useState(false);
  // Word submission state
  const [wordSubmission, setWordSubmission] = useState("");

  const handleNextWord = () => {
    if (wordSubmission.toLowerCase() === currentWord.toLowerCase()) {
      setCurrentWordIndex((prev) => prev + 1);
      currentWord = words[currentWordIndex];
      setWord(currentWord);
      setWordSubmission("");
      setSentence("");
      setAudioUrl(null);
      setIsAudioLoading(false);
      setWordAudioLoading(false);
      setHearWord(null);
      console.log("Correct guess!");
      alert("Correct guess!");
      // other options to handle if correct
    } else {
      // do somehting if wrong.
      console.log("Incorrect guess!");
      alert("Incorrect guess!");
    }
  };

  const generateAudioWord = async () => {
    setWordAudioLoading(true);

    // Use browser's Speech Synthesis API
    const utterance = new SpeechSynthesisUtterance(currentWord);
    utterance.rate = 0.8; // Slightly slower speech
    utterance.pitch = 1; // Normal pitch
    utterance.volume = 1; // Full volume
    // Play the audio
    speechSynthesis.speak(utterance);

    setWordAudioLoading(false);
  };

  const generateSentence = async () => {
    setIsAudioLoading(true);

    try {
      const response = await fetch("http://localhost:3000/generate-sentence", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ word: currentWord})
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
        {/* Input section */}
        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <TextField
            label="Type your guess"
            type="text"
            
            variant="outlined"
            placeholder="Enter your guess"
            value={wordSubmission}
            onChange={(e) => setWordSubmission(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleNextWord();
              }
            }}
            sx={{ 
              minWidth: 300,
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#333',
                '& fieldset': {
                  borderColor: '#1976d2',
                  borderWidth: '2px',
                },
                '&:hover fieldset': {
                  borderColor: '#1976d2',
                  borderWidth: '2px',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#1976d2',
                  borderWidth: '2px',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#1976d2',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#1976d2',
              },
              '& .MuiOutlinedInput-input': {
                color: 'white',
              }
            }}
          />
          <Button
            onClick={handleNextWord}
            variant="contained"
            size="large"
          >
            Submit Guess
          </Button>
        </Stack>

        {/* Audio buttons */}
        <Stack direction="row" spacing={2}>
          {/* Button to hear the word in a sentence */}
          <Button
            onClick={
              isAudioLoading
                ? () => {
                    console.log("Audio is loading");
                  }
                : generateSentence
            }
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
