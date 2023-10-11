import "./App.css";
import LandingPage from "./components/landing-page";
import Footer from "./components/footer";
import SearchAppBar from "./components/navbar";
import ContinuousSlider from "./components/landing-page/services-slider";
import Contact from "./components/landing-page/contact";
import SliderComponent from "./components/landing-page/slider";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Political from "./components/landing-page/Political/politicalSlider";
import PoliticalMain from "./components/landing-page/Political";

function App() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className="App">
      <Box sx={{ position: "fixed", zIndex: 999999 }}>
        <SearchAppBar />
      </Box>
      <LandingPage />

      <section id="political" className="section">
        <PoliticalMain />
        {/* Add content for Political Campaigns */}
      </section>
      <section id="retail" className="section">
        <SliderComponent />

        {/* Add content for Retail Businesses */}
      </section>
      <section id="features" className="section">
        {/* Add content for Features */}
        <ContinuousSlider />
      </section>
      <section id="contact" className="section">
        <Contact />
        {/* Add content for Contact */}
      </section>
      <Footer />
    </div>
  );
}

export default App;
