import { Box, Typography, Button } from "@mui/material";

export default function Hero() {
  return (
    <Box sx={{ py: 8, textAlign: "center" }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Trusted Pharmaceutical Insights
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Browse drugs, clinical sessions & product updates by specialty
      </Typography>
      <Button variant="contained" size="large" sx={{ mt: 3 }}>
        Browse Products
      </Button>
    </Box>
  );
}
