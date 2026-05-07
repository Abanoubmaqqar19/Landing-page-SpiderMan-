import { Box, Typography, Button } from '@mui/material'
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
export default function Cta() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #e84393 0%, #9b3de8 50%, #3d4de8 100%)',
        py: 8,
        px: 2,
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" fontWeight={700} sx={{color : "white" }} mb={3} gutterBottom>
        Ready to build something awesome?
      </Typography>
      <Button
        variant="contained"
        sx={{
          bgcolor: '#111',
          color: '#fff',
          fontWeight: 700,
          letterSpacing: 1,
          px: 4,
          py: 1.5,
          borderRadius: '4px',
          fontSize: 14,
          boxShadow: 'none',
          '&:hover': { bgcolor: '#333', boxShadow: 'none' },
        }}

      >
        <typography component="span" sx={{  display: "inline-block", mt:2}}>
          JOIN NOW <RocketLaunchIcon fontSize="small" sx={{ ml: 1 }} />
        </typography>
      </Button>
    </Box>
  )
}
