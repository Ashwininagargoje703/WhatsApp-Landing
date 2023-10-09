import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import SliderComponent from "./slider";
import ContinuousSlider from "./services-slider";
import Political from "./political-c";

function LandingPage() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [feedback, setFeedback] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare the data to be sent to the API
    const requestData = {
      user_name: userName,
      user_email: email,
      user_phone: phoneNumber,
      user_feedback: feedback,
    };
    // Make a POST request to the API
    fetch("https://appointment-email-nl6iavcada-uc.a.run.app/whatsapp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from the API:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors here
      });

    // Clear the form fields
    setUserName("");
    setEmail("");
    setPhoneNumber("");
    setFeedback("");
  };

  const isMobile = useMediaQuery("(max-width: 600px)");
  const backgroundImageUrl = isMobile
    ? "https://i.ibb.co/8c8tWTy/img-removebg-preview.png"
    : "https://i.ibb.co/BGDRVcj/Whats-App-Image-2023-10-07-at-6-34-39-PM-removebg-preview.png";

  const background = isMobile ? (
    <Grid container>
      <Grid item xs={12} md={6}>
        <img
          src="https://i.ibb.co/C69nkN2/Whats-App-Image-2023-10-09-at-7-20-52-PM-removebg-preview.png"
          alt="WhatsApp Bot Image"
          style={{ maxWidth: "100%" }}
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
      <Grid item xs={12} md={6}>
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
      <br />

      <Typography variant="h5" fontWeight={600}>
        Use Cases For Political Campaigns
      </Typography>
      <br />
      <br />

      <Political />
      <br />
      <br />

      <Typography variant="h5" fontWeight={600}>
        For Retail Businesses
      </Typography>
      <br />
      <br />
      <br />

      <SliderComponent />
      <br />
      <br />

      <ContinuousSlider />
      <br />

      <br />

      <Grid item xs={12} sm={3} style={{ marginBottom: "20px" }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="User Name"
            variant="outlined"
            size="small"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            style={{
              backgroundColor: "white",
            }}
            sx={{
              minWidth: 300,
            }}
          />
          <br />
          <br />
          <TextField
            label="Email"
            variant="outlined"
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              backgroundColor: "white",
            }}
            sx={{
              minWidth: 300,
            }}
          />
          <br />
          <br />
          <TextField
            label="Phone Number"
            variant="outlined"
            size="small"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            style={{
              backgroundColor: "white",
            }}
            sx={{
              minWidth: 300,
            }}
          />
          <br />
          <br />
          <TextField
            label="Feedback"
            variant="outlined"
            size="small"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
            style={{
              backgroundColor: "white",
            }}
            sx={{
              minWidth: 300,
            }}
          />

          <div>
            <Button
              variant="contained"
              style={{
                marginTop: "10px",
                backgroundColor: "rgba(72, 229, 130, 1)",
                color: "white",
              }}
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </Grid>

      <Typography fontSize={14} fontWeight={600}>
        Reach out to us today to discover more about our tailored WhatsApp bot
        development services and how they can propel you toward your objectives.
      </Typography>
    </div>
  );
}

export default LandingPage;
