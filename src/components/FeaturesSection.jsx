import { Box, Paper, Typography } from "@mui/material";

const features = [
  { label: "Speed", icon: "⚡" },
  { label: "Design", icon: "🎨" },
  { label: "Responsive", icon: "▦" },
];

export default function FeaturesSection() {
  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #00bfff 0%, #0070cc 100%)",
        py: 6,
        px: { xs: 2, md: 4 },
      }}
    >
      {/* Container */}
      <Box
        sx={{
          maxWidth: "100%",
          mx: "auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {features.map((f, i) => (
          <Paper
            key={i}
            elevation={6}
            sx={{
              flex: "1 1 250px", 
              textAlign: "center",
              p: 3,
              borderRadius: 3,
              background: "rgba(255,255,255,0.15)",
              color: "#fff",
              backdropFilter: "blur(10px)",
              transition: "0.3s",

              "&:hover": {
                transform: "translateY(-8px)",
                background: "rgba(255,255,255,0.25)",
              },
            }}
          >
            <Typography fontWeight={700} fontSize={22} mb={1}>
              {f.label} {f.icon}
            </Typography>

            <Typography fontSize={13} sx={{ opacity: 0.9 }}>
              Amazing experience with modern UI.
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
