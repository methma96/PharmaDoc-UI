import { Grid, Card, CardContent, Typography } from "@mui/material";

const categories = [
  "Dermatology",
  "Cardiology",
  "Neurology",
  "Endocrinology",
  "Pediatrics",
  "Oncology",
];

export default function CategoryGrid() {
  return (
    <Grid container spacing={3} sx={{ mt: 4 }}>
      {categories.map((cat) => (
        <Grid item xs={12} sm={6} md={4} key={cat}>
          <Card sx={{ cursor: "pointer", height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                {cat}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                View drugs & sessions
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
