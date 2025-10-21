import { Container, Box } from "@mui/material";
import { useState, useEffect } from "react";

const words = ["too", "fire", "belly", "beast", "cherry", "fig", "grape"];

export default function GamePlay() {
    const [word, setWord] = useState(words[Math.floor(Math.random() * words.length)]);

    return (
        <Container maxWidth="md" minHeight="100vh">
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
            >

            </Box>
        </Container>
    )
}