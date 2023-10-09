import React, { useState } from "react";
import { Typography, Container, Grid, useMediaQuery } from "@mui/material";

const Footer = () => {
  // State variables for form fields

  // ... (rest of your code)
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <footer
      style={{
        backgroundColor: "rgba(199, 255, 220, 1)",
        color: "rgba(0, 0, 0, 1)",
        padding: "5px 0",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent={"space-between"}>
          <Grid
            item
            xs={12}
            sm={3}
            mt={2}
            style={{
              textAlign: isMobile ? "center" : "left",
              justifyContent: "center",
            }}
          >
            <Typography gutterBottom>Case Studies</Typography>
            <Typography gutterBottom>Blog</Typography>
            <Typography gutterBottom>Testimonials</Typography>
            {/* Add links to your case studies and blog */}
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            style={{
              marginBottom: "20px",
              textAlign: isMobile ? "center" : "left",

              justifyContent: "center",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Call to Action
            </Typography>
            <Typography>
              Schedule a complimentary consultation today to explore how our
              WhatsApp bot development can cater to your specific needs.
            </Typography>
            {/* Add links to your case studies and blog */}
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
