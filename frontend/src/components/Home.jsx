import {
  Container,
  Typography,
  Box,
  Button,
  Stack,
  TextField,
} from "@mui/material";
// import { PersonAdd, Login } from '@mui/icons-material';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const checkUserName = () => {
    if (localStorage.getItem("user_name")) {
      return(
        <Box>
          <Typography variant="h4" component="h1" gutterBottom color="white">
            Welcome, {localStorage.getItem("user_name", name)}
          </Typography>
        </Box>
      );
    } else {
      return (
        <Box
          display="flex"
          gap={1}
          sx={{ width: "100%", maxWidth: 400, mb: 2 }}
        >
          <TextField
            variant="outlined"
            placeholder="Enter your name"
            size="medium"
            onChange={handleNameChange}
            value={name}
            sx={{
              flex: 1,
              "& .MuiOutlinedInput-root": {
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              },
            }}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            size="medium"
            sx={{
              px: 3,
              fontWeight: "bold",
            }}
          >
            Submit
          </Button>
        </Box>
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localStorage.setItem("user_name", name)) navigate("/game");
  };

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
            fontWeight: "bold",
            color: "white",
            mb: 4,
          }}
        >
          Welcome to the Word Game
        </Typography>

        <Typography variant="h6" color="white" sx={{ mb: 3 }}>
          First things first, let's get you set up.
        </Typography>

        {checkUserName()}
      </Box>
    </Container>
  );
}

{
  /* <Stack 
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
        </Stack> */
}
