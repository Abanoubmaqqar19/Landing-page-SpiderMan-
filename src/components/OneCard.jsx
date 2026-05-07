import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
function OneCard({ index }) {
  return (
    <>
      <Card
        sx={{
          width: "410px",

          transition: "0.4s",
          cursor: "pointer",
          borderRadius: "15px",
          border: "1px solid #670606",
          mx: 0,
          "&:hover": {
            transform: "translateY(-10px) scale(1.02)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
          },

          "&:hover .card-media": {
            transform: "scale(1.1)",
          },

          "&:hover .card-btn": {
            background: "linear-gradient(45deg, #ff0000, #ff6a00)",
          },
        }}
      >
        <CardMedia
          sx={{ height: 140, transition: "0.4s" }}
          image={`${index}R.jpg `}
          title="green iguana"
        />
        <Box
          sx={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(45deg, #0e144f, #040a65a5)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "white" }}
            >
              Spider Card {index}
            </Typography>
            <Typography variant="body2" sx={{ color: "white" }}>
              Create modern UI designs with hover animations
            </Typography>
          </CardContent>
          <CardActions sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Button
              size="medium"
              sx={{
                color: "white",
                width: "80%",
                background: "linear-gradient(45deg, #e71520, #f93302a5)",
                "&:hover": {
                  background: "linear-gradient(45deg, #b11717a5, #e71515)",
                },
              }}
            >
              Explore
            </Button>
          </CardActions>
        </Box>
      </Card>
    </>
  );
}

export default OneCard
