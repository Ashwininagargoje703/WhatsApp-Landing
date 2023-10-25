import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import main from "../../assest/main.png";

function LandingPage() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const backgroundImageUrl = isMobile ? "" : "";

  const background = isMobile ? (
    <Grid container>
      <Grid item xs={12} md={6} mt={4}>
        <img
          src="https://i.ibb.co/fNYcx88/Whats-App-Image-2023-10-11-at-11-34-50-AM-removebg-preview.png"
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
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box p={4}>
          <Typography
            variant="h5"
            fontWeight={600}
            color={"#004c3d"}
            fontSize={32}
          >
            Custom WhatsApp Bots + Chat GPT
          </Typography>
          <br />

          <Typography fontSize={18}>
            We craft robust and user-friendly WhatsApp bots designed to connect
            with your audience, streamline operations, and drive tangible
            results.
          </Typography>

          <br />

          <Button
            sx={{
              backgroundColor: "#004c3d",
              color: "white",
              textTransform: "none",
              borderRadius: "19px",
              p: 1,
              pl: 4,
              pr: 4,
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Grid>

      {/* Right Side */}
    </Grid>
  ) : (
    <Grid container>
      <Grid
        item
        xs={12}
        md={6}
        mt={7}
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignSelf: "center",
        }}
      >
        <Box p={4}>
          <Typography
            variant="h5"
            fontWeight={600}
            color={"#004c3d"}
            fontSize={42}
          >
            Custom WhatsApp Bots + Chat GPT
          </Typography>
          <br />

          <Typography fontSize={18}>
            We craft robust and user-friendly WhatsApp bots designed to connect
            with your audience, streamline operations, and drive tangible
            results.
          </Typography>

          <br />

          <Button
            sx={{
              backgroundColor: "#004c3d",
              color: "white",
              textTransform: "none",
              borderRadius: "19px",
              p: 1,
              pl: 4,
              pr: 4,
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Grid>

      {/* Right Side */}
      <Grid item xs={12} md={6} mt={7}>
        <img
          src={main}
          alt="WhatsApp Bot Image"
          style={{ maxWidth: "100%", height: 400 }}
        />
      </Grid>
    </Grid>
  );
  return (
    <div
      style={{
        padding: "20px",
        PaddingBottom: 0,
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
