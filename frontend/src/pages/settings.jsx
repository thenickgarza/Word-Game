import { Container, Box, Typography, Button, Stack, TextField, Chip } from "@mui/material";
import { useState } from "react";
import { useWordContext } from '../contexts/WordContext';

export default function Settings() {
  const { words, addWord, deleteWord } = useWordContext();

  const [newWord, setNewWord] = useState("");

  const handleAddWord = () => {
    addWord(newWord);
    setNewWord("");
  }

  const handleRemoveWord = (wordToRemove) => {
    deleteWord(wordToRemove);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddWord();
    }
  }

  return (
    <Container maxWidth="md" minHeight="100vh">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        verticalAlign="center"
        minHeight="100vh"
        textAlign="center"
        margin="auto"
        gap={3}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Settings
        </Typography>
        <Stack direction="column" spacing={2} sx={{ width: "100%", maxWidth: 600 }}>
          <TextField
            label="Add a word"
            value={newWord}
            onChange={(e) => setNewWord(e.target.value)}
            onKeyPress={handleKeyPress}
            variant="outlined"
            placeholder="Enter your word here..."
            sx={{ 
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
        </Stack>
        <Stack direction="column" spacing={2} sx={{ width: "100%", maxWidth: 600 }}>
          {words.map((word) => (
            <Chip 
              key={word} 
              label={word} 
              onDelete={() => handleRemoveWord(word)} 
              variant="outlined"
              sx={{
                backgroundColor: '#333',
                color: 'white',
                borderColor: '#1976d2',
                borderWidth: '2px',
                '&:hover': {
                  backgroundColor: '#444',
                  borderColor: '#1976d2',
                  borderWidth: '2px',
                },
                '& .MuiChip-deleteIcon': {
                  color: '#ff6b6b',
                  '&:hover': {
                    color: '#ff5252',
                  }
                }
              }}
            />
          ))}
        </Stack>
      </Box>
    </Container>
  );
}