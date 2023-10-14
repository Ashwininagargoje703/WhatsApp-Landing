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
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const handleScroll = () => {
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
          section.classList.add("show");
        } else {
          section.classList.remove("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Box sx={{ position: "fixed", zIndex: 999999 }}>
        <SearchAppBar />
      </Box>
      <LandingPage />

      <section id="political" className="section fade-in">
        <PoliticalMain />
      </section>
      <section id="retail" className="section fade-in">
        <SliderComponent />
      </section>
      <section id="features" className="section fade-in">
        <ContinuousSlider />
      </section>
      <section id="contact" className="section fade-in">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
