import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ background: "linear-gradient(45deg, #e10909, #e60606a5)" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            sx={{ color: "#f44336", mr: 1 }}
          >
            <span style={{ fontSize: "36px" }}>🕷️</span>
          </IconButton>

          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            SpiderUi
          </Typography>

          <Button
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "#0f0f0f",
              "&:hover": {
                backgroundColor: "#2d2c2c",
              },
            }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;