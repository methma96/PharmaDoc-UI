import { Card, CardContent, Typography, Box, Chip } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const sessions = [
  {
    id: 1,
    title: "Latest Cardiology Advances",
    date: "Jan 8, 2026",
    time: "2:00 PM",
    speaker: "Dr. Sarah Johnson",
  },
  {
    id: 2,
    title: "Pediatric Treatment Updates",
    date: "Jan 10, 2026",
    time: "3:30 PM",
    speaker: "Dr. Michael Chen",
  },
  {
    id: 3,
    title: "Oncology Case Studies",
    date: "Jan 12, 2026",
    time: "10:00 AM",
    speaker: "Dr. Emily Roberts",
  },
  {
    id: 4,
    title: "Dermatology Innovations",
    date: "Jan 15, 2026",
    time: "1:00 PM",
    speaker: "Dr. James Wilson",
  },
];

export default function PharmaceuticalSessions() {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
        Upcoming Sessions
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {sessions.map((session) => (
          <Card 
            key={session.id}
            sx={{
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: 3,
              }
            }}
          >
            <CardContent sx={{ pb: 1.5, "&:last-child": { pb: 1.5 } }}>
              <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 1 }}>
                {session.title}
              </Typography>
              
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 0.5 }}>
                <EventIcon sx={{ fontSize: "16px", color: "text.secondary" }} />
                <Typography variant="caption" color="text.secondary">
                  {session.date}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 1 }}>
                <AccessTimeIcon sx={{ fontSize: "16px", color: "text.secondary" }} />
                <Typography variant="caption" color="text.secondary">
                  {session.time}
                </Typography>
              </Box>

              <Chip
                label={session.speaker}
                size="small"
                variant="outlined"
              />
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
