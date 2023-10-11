import React from "react";
import { Box, Grid, Paper, Typography, useMediaQuery } from "@mui/material";

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

const SliderComponent = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const background = isMobile ? (
    <Grid container>
      <Grid item xs={12} md={6} mt={4}>
        <img
          src="https://i.ibb.co/YRTjk3p/Untitled-design-1-removebg-preview.png"
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
            <Typography fontSize={24} fontWeight={700} color={"#004c3d"} mt={1}>
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
      <Grid item xs={12} md={6}>
        <img
          src="https://i.ibb.co/YRTjk3p/Untitled-design-1-removebg-preview.png"
          alt="WhatsApp Bot Image"
          style={{ maxWidth: "100%" }}
        />
      </Grid>

      <Grid item xs={12} md={6} lg={3} mt={isMobile ? "" : 4}>
        {data.map((item, index) => (
          <Box mb={6} ml={-40}>
            <Typography fontSize={24} fontWeight={700} color={"#004c3d"} mt={1}>
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
  );
  return (
    <div
      style={{
        padding: "20px",

        backgroundSize: isMobile ? "80vw 60vh" : "80vw 110vh",
        backgroundPosition: "right top",
      }}
    >
      <Typography
        variant={isMobile ? "h5" : "h4"}
        fontWeight={600}
        mb={2}
        color={"#004c3d"}
      >
        For Retail Businesses
      </Typography>
      {background}
    </div>
  );
};

export default SliderComponent;
