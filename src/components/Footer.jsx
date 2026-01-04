import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ py: 3, textAlign: "center", mt: 6, bgcolor: "#eee" }}>
      <Typography variant="body2">
        © 2026 PharmaDocs | For Healthcare Professionals
      </Typography>
    </Box>
  );
}
