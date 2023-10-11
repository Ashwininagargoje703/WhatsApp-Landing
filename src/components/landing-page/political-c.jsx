import React from "react";
import { Box, Grid, Paper, Typography, useMediaQuery } from "@mui/material";

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

const Political = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <>
      <Typography variant="h4" color={"#004c3d"} fontWeight={600}>
        Use Cases For Political Campaigns
      </Typography>
      <br />
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={12} md={6} lg={3} key={index}>
            <Box p={2}>
              <img
                src={item.imgSrc}
                alt={`Box ${index + 1}`}
                style={{ maxWidth: "100%", height: "300px" }}
              />
              <Typography
                fontSize={16}
                fontWeight={700}
                color={"#004c3d"}
                mt={1}
              >
                {item.h1}
              </Typography>
              <Typography
                variant="body2"
                mt={1}
                sx={{
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                {item.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Political;
