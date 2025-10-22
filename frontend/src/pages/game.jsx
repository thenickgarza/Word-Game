import { Container, Typography, Box, Button, Stack } from "@mui/material";
import { useState } from "react";
import GamePlay from "../components/GamePlay";

const words = ["too", "fire", "belly", "beast", "cherry", "fig", "grape"];

export default function Game() {
  //get a random word from words array
  const [gameStart, setGameStart] = useState(false);

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
        {gameStart ? (
          <GamePlay />
        ) : (
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ width: "100%", maxWidth: 600 }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => setGameStart(true)}
              fullWidth
              sx={{
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: "bold",
              }}
            >
              Let's Play
            </Button>

            <Button
              variant="outlined"
              size="large"
              fullWidth
              sx={{
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: "bold",
              }}
            >
              Exit
            </Button>
          </Stack>
        )}
      </Box>
    </Container>
  );
}
