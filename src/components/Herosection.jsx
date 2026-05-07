import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
function Herosection() {
  return (
    <Box
      sx={{
        position: "relative", 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        textAlign: "center",
        overflow: "hidden",

        backgroundImage: "url('6R.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#fff" }}
        >
          Welcome Hero <span style={{ fontSize: "32px" }}>🕸️</span>
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            background: "linear-gradient(45deg, #5db8f9, #ca06aca5)",
            mt: 2,
            "&:hover": { background: "linear-gradient(45deg, #5db8f9, #ca06aca5)", boxShadow: "0 4px 15px rgba(202, 6, 172, 0.5)" },

          }}

           
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
}
export default Herosection;