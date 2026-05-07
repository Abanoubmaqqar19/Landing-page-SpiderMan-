import { Box, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CopyrightIcon from "@mui/icons-material/Copyright";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#111", py: 2.5, textAlign: "center" }}>
      <Typography sx={{ fontSize: 16, color: "#cdc4c4" }}>
        <CopyrightIcon fontSize="small" /> 2026 SpiderUI — Built with{" "}
        <Box component="span" sx={{ color: "#e8392a" }}>
          <FavoriteIcon fontSize="small" />
        </Box>{" "}
        using MUI
      </Typography>
    </Box>
  );
}
