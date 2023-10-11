import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import Political from "./politicalSlider";

const data = [
  {
    imgSrc:
      "https://i.ibb.co/2t9HhLX/Whats-App-Image-2023-10-07-at-10-26-18-AM.jpg",
    h1: "Engage Voters",
    text: " Send personalized updates and vital info directly to voters.",
  },
  {
    imgSrc:
      "https://i.ibb.co/zJ9LFzH/Whats-App-Image-2023-10-07-at-10-26-28-AM.jpg",
    h1: "Real-time Polling",
    text: " Gain insights into voter sentiment instantly",
  },
  {
    imgSrc:
      "https://i.ibb.co/1QdqSfy/Whats-App-Image-2023-10-07-at-10-27-10-AM.jpg",
    h1: "Effortless Campaign Management",
    text: "Automate tasks like voter registration and event RSVPs.",
  },
  {
    imgSrc:
      "https://i.ibb.co/HhQKZTk/Whats-App-Image-2023-10-07-at-10-27-24-AM-removebg-preview.png",
    h1: "Empower Party Workers",
    text: "Enhance party worker capabilities with advanced features. For Retail Businesses",
  },
];

function PoliticalMain() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const background = isMobile ? (
    <Grid container>
      <Grid item xs={12} md={6} mt={4}>
        <img
          src="https://i.ibb.co/7Q6PH8m/Untitled-design-3-removebg-preview.png"
          alt="WhatsApp Bot Image"
          style={{ maxWidth: "100%" }}
        />

        {data.map((item, index) => (
          <Box
            mb={6}
            sx={{
              minWidth: isMobile ? "" : 500,
            }}
          >
            <Typography fontSize={24} fontWeight={700} color={"white"} mt={1}>
              {item.h1}
            </Typography>
            <Typography
              variant="body2"
              mt={1}
              sx={{
                textAlign: "center",
                justifyContent: "center",
                fontSize: 16,
              }}
            >
              {item.text}
            </Typography>
          </Box>
        ))}
      </Grid>
    </Grid>
  ) : (
    <Grid container justifyContent={"space-between"} display={"flex"}>
      <Grid item xs={12} md={6} lg={3}>
        {data.map((item, index) => (
          <Box mb={6} ml={5} minWidth={500}>
            <Typography fontSize={24} fontWeight={700} color={"white"} mt={1}>
              {item.h1}
            </Typography>
            <Typography
              variant="body2"
              mt={1}
              sx={{
                textAlign: "center",
                justifyContent: "center",
                fontSize: 16,
              }}
            >
              {item.text}
            </Typography>
          </Box>
        ))}
      </Grid>

      <Grid item xs={12} md={6}>
        <img
          src="https://i.ibb.co/7Q6PH8m/Untitled-design-3-removebg-preview.png"
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
        backgroundColor: "#004c3d",
        color: "white",
        backgroundSize: isMobile ? "80vw 60vh" : "80vw 110vh",
        backgroundPosition: "right top",
      }}
    >
      <Typography variant={isMobile ? "h5" : "h4"} fontWeight={600} mb={2}>
        Use Cases For Political Campaigns
      </Typography>
      {background}
    </div>
  );
}

export default PoliticalMain;
