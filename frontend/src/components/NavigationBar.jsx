import { useState } from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home,
  Games,
  Leaderboard,
  Settings,
} from "@mui/icons-material";

const NavigationBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        {/* Logo/Brand */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          Word Game
        </Typography>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <Link to="/">
            <Button
              color="inherit"
              startIcon={<Home />}
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Home
            </Button>
          </Link>
          <Link to="/game">
            <Button
              color="inherit"
              startIcon={<Games />}
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Play Game
            </Button>
          </Link>
          <Button
            color="inherit"
            startIcon={<Leaderboard />}
            sx={{
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            Leaderboard
          </Button>
          <Button
            color="inherit"
            startIcon={<Settings />}
            sx={{
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            Settings
          </Button>
        </Box>

        {/* Mobile Menu */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls={open ? "mobile-menu" : undefined}
            aria-haspopup="true"
            onClick={handleMenuClick}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="mobile-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            MenuListProps={{
              "aria-labelledby": "menu-button",
            }}
            sx={{
              "& .MuiPaper-root": {
                backgroundColor: "#1976d2",
                color: "white",
              },
            }}
          >
            <MenuItem onClick={handleMenuClose}>
              <Home sx={{ mr: 1 }} />
              Home
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Games sx={{ mr: 1 }} />
              Play Game
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Leaderboard sx={{ mr: 1 }} />
              Leaderboard
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Settings sx={{ mr: 1 }} />
              Settings
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
