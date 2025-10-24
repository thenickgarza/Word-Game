import { Container, Box, Typography, Button, Stack } from "@mui/material";

export default function Settings() {
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
      </Box>
    </Container>
  );
}