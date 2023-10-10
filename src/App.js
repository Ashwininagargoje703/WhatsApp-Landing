import "./App.css";
import LandingPage from "./components/landing-page";
import Footer from "./components/footer";
import SearchAppBar from "./components/navbar";
import Political from "./components/landing-page/political-c";
import ContinuousSlider from "./components/landing-page/services-slider";
import Contact from "./components/landing-page/contact";
import SliderComponent from "./components/landing-page/slider";
import { Link, Element } from "react-scroll";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Box sx={{ position: "fixed" }}>
        <SearchAppBar />
      </Box>
      <LandingPage />

      <section id="political" className="section">
        <Political />
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
