import { Box, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import NewsFeed from "../components/NewsFeed";
import PharmaceuticalSessions from "../components/PharmaceuticalSessions";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: "#f5f7fa", minHeight: "100vh", py: 3, px: 2, width: "100%" }}>
        <Box sx={{ display: "flex", gap: 3, width: "100%" }}>
          {/* Left Column - News Feed */}
          <Box sx={{ flex: 1 }}>
            <NewsFeed />
          </Box>

          {/* Right Column - Pharmaceutical Sessions */}
          <Box sx={{ width: "320px", flexShrink: 0 }}>
            <PharmaceuticalSessions />
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
