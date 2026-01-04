import { Card, CardContent, CardMedia, Typography, Box, Grid } from "@mui/material";

const drugAds = [
  {
    id: 1,
    name: "Aspirin Plus",
    category: "Cardiology",
    description: "Advanced pain relief with heart protection benefits.",
    image: "https://via.placeholder.com/400x200?text=Aspirin+Plus",
    date: "Jan 3, 2026",
  },
  {
    id: 2,
    name: "NeuroCalm",
    category: "Neurology",
    description: "Effective migraine and headache relief medication.",
    image: "https://via.placeholder.com/400x200?text=NeuroCalm",
    date: "Jan 2, 2026",
  },
  {
    id: 3,
    name: "DermaShield",
    category: "Dermatology",
    description: "Professional-grade skin care treatment solution.",
    image: "https://via.placeholder.com/400x200?text=DermaShield",
    date: "Jan 1, 2026",
  },
  {
    id: 4,
    name: "CardioMax",
    category: "Cardiology",
    description: "Next-generation cardiovascular health supplement.",
    image: "https://via.placeholder.com/400x200?text=CardioMax",
    date: "Dec 31, 2025",
  },
  {
    id: 5,
    name: "EndoBalance",
    category: "Endocrinology",
    description: "Hormone regulation and metabolic support therapy.",
    image: "https://via.placeholder.com/400x200?text=EndoBalance",
    date: "Dec 30, 2025",
  },
];

export default function NewsFeed() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Typography variant="h5" fontWeight="bold">
        Drug Updates & Advertisements
      </Typography>
      {drugAds.map((ad) => (
        <Card 
          key={ad.id} 
          sx={{ 
            cursor: "pointer",
            transition: "transform 0.2s, box-shadow 0.2s",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: 4,
            }
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={ad.image}
            alt={ad.name}
          />
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  {ad.name}
                </Typography>
                <Typography variant="caption" color="primary" sx={{ fontWeight: "bold" }}>
                  {ad.category}
                </Typography>
              </Box>
              <Typography variant="caption" color="text.secondary">
                {ad.date}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              {ad.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
