import { Container, Box, Typography } from '@mui/material';

export default function Asteroids() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', py: 5, px: 5 }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center',
          mt: 2 
        }}>
          <iframe 
            src="/asteroids/index.html"
            width="800"
            height="600"
            style={{ 
              border: '2px solid #1976d2', 
              borderRadius: '8px',
              backgroundColor: 'black'
            }}
            title="Asteroids Game"
          />
        </Box>
        <Typography 
          variant="body2" 
          sx={{ color: 'white', mt: 2 }}
        >
          Controls: Arrow keys to move, Space to shoot, P to pause, M to mute
        </Typography>
      </Box>
    </Container>
  );
}

