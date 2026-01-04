import { Container, Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryGrid from "../components/CategoryGrid";
import Footer from "../components/Footer";

export default function Categories() {
  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: "#f5f7fa", minHeight: "100vh" }}>
        <Container maxWidth="lg">
          <Hero />
          <CategoryGrid />
        </Container>
      </Box>
      <Footer />
    </>
  );
}
