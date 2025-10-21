import { Container, Typography, Box, Button, Stack } from '@mui/material';
import { PersonAdd, Login } from '@mui/icons-material';

export default function Home() {
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
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{ 
            fontWeight: 'bold',
            color: 'white',
            mb: 4
          }}
        >
          Welcome to the Word Game
        </Typography>
        
        <Typography 
          variant="h6" 
          color="white"
          sx={{ mb: 3 }}
        >
          First things first, let's get you set up.
        </Typography>
        
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={2}
          sx={{ width: '100%', maxWidth: 600 }}
        >
          <Button
            variant="contained"
            size="large"
            startIcon={<PersonAdd />}
            fullWidth
            sx={{ 
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 'bold'
            }}
          >
            Create an Account
          </Button>
          
          <Button
            variant="outlined"
            size="large"
            startIcon={<Login />}
            fullWidth
            sx={{ 
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 'bold'
            }}
          >
            Login
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}