import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Button, TextField, useMediaQuery } from "@mui/material";

function LandingPage() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const backgroundImageUrl = isMobile
    ? "https://i.ibb.co/8c8tWTy/img-removebg-preview.png"
    : "https://i.ibb.co/BGDRVcj/Whats-App-Image-2023-10-07-at-6-34-39-PM-removebg-preview.png";

  const background = isMobile ? (
    <Grid container>
      <Grid item xs={12} md={6} mt={4}>
        <img
          src="https://i.ibb.co/C69nkN2/Whats-App-Image-2023-10-09-at-7-20-52-PM-removebg-preview.png"
          alt="WhatsApp Bot Image"
          style={{ maxWidth: "100%", zIndex: 999999999999 }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        style={{
          alignItems: "center",
          display: "flex",
        }}
      >
        <Box p={4}>
          <Typography
            variant="h5"
            fontWeight={600}
            color={"rgba(72, 229, 130, 1)"}
          >
            Elevate Your Campaign or Business with Custom WhatsApp Bots
          </Typography>
          <br />
        </Box>
      </Grid>

      {/* Right Side */}
    </Grid>
  ) : (
    <Grid container>
      {/* Left Side */}
      <Grid
        item
        xs={12}
        md={6}
        style={{
          alignItems: "center",
          display: "flex",
        }}
      >
        <Box p={4}>
          <Typography
            variant="h5"
            fontWeight={600}
            color={"rgba(72, 229, 130, 1)"}
          >
            Elevate Your Campaign or Business with Custom WhatsApp Bots
          </Typography>
          <br />
        </Box>
      </Grid>

      {/* Right Side */}
      <Grid item xs={12} md={6} mt={7}>
        <img
          src="https://i.ibb.co/b7zTYPT/Whats-App-Image-2023-10-06-at-9-52-40-PM-removebg-preview.png"
          alt="WhatsApp Bot Image"
          style={{ maxWidth: "100%" }}
        />
      </Grid>
    </Grid>
  );
  return (
    <div
      style={{
        padding: "20px",
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: isMobile ? "80vw 60vh" : "80vw 110vh",
        backgroundPosition: "right top",
      }}
    >
      {background}
      <br />
      <br />
    </div>
  );
}

export default LandingPage;
