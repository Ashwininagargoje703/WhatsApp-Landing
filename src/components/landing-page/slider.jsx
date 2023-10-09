import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";

const data = [
  {
    imgSrc:
      "https://i.ibb.co/YjB30PL/Whats-App-Image-2023-10-07-at-10-16-31-AM.jpg",
    h1: "24/7 Customer Support",
    text: " Swiftly resolve inquiries for enhanced satisfaction",
  },
  {
    imgSrc:
      "https://i.ibb.co/2hsTtV3/Whats-App-Image-2023-10-07-at-10-16-45-AM.jpg",
    h1: "Focused Marketing",
    text: "Send personalized, sales-driving messages Benefits",
  },
  {
    imgSrc:
      "https://i.ibb.co/8sCD0Qb/Whats-App-Image-2023-10-07-at-10-16-53-AM.jpg",
    h1: "E-Invoicing",
    text: "Send invoices via WhatsApp for prompt payments",
  },
];

const ThreeBoxRow = () => {
  return (
    <Grid container spacing={2}>
      {data.map((item, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Box p={2} minHeight={250}>
            <img
              src={item.imgSrc}
              alt={`Box ${index + 1}`}
              style={{ maxWidth: "100%", height: "300px" }}
            />
            <Typography
              fontSize={16}
              fontWeight={600}
              color={"rgba(72, 229, 130, 1)"}
              mt={1}
            >
              {item.h1}
            </Typography>
            <Typography variant="body2" mt={1}>
              {item.text}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ThreeBoxRow;