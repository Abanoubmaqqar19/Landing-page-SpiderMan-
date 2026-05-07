import OneCard from "./OneCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function CardCont() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#12101a",
        py: 5,
        
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          width: "100%",
          mx: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <OneCard index={i} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CardCont;
