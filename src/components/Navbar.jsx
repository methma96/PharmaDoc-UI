import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  // TODO: Replace with actual authentication state
  const isAuthenticated = true;

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography 
          variant="h6" 
          sx={{ flexGrow: 1, cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          PharmaDocs
        </Typography>
        
        {isAuthenticated ? (
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate("/categories")}>
              Categories
            </Button>
            <Button color="inherit" onClick={() => navigate("/profile")}>
              Profile
            </Button>
          </Box>
        ) : (
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Register</Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
