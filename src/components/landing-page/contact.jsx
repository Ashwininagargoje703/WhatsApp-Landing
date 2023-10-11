import React from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

const Contact = () => {
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

  return (
    <>
      <Typography
        variant={isMobile ? "h5" : "h4"}
        color={"#004c3d"}
        fontWeight={600}
      >
        Contact Us
      </Typography>

      <Grid container>
        <Grid item xs={12} md={6} mt={4}>
          <img
            src="https://lotusschool.in/wp-content/uploads/2020/01/contactus-768x630.png"
            alt="WhatsApp Bot Image"
            style={{ maxWidth: "100%", maxHeight: "80%" }}
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
            marginTop: isMobile ? -30 : -100,
          }}
        >
          <Box p={4}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="User Name (Required)"
                variant="outlined"
                size="small"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                style={{
                  backgroundColor: "white",
                  width: isMobile ? 300 : 550,
                }}
              />
              <br />
              <br />
              <TextField
                label="Email  (Required)"
                variant="outlined"
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  backgroundColor: "white",
                  width: isMobile ? 300 : 550,
                }}
              />
              <br />
              <br />
              <TextField
                label="Phone Number  (Required)"
                variant="outlined"
                size="small"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                style={{
                  backgroundColor: "white",
                  width: isMobile ? 300 : 550,
                }}
              />
              <br />
              <br />
              <TextField
                label="Feedback"
                variant="outlined"
                size="small"
                multiline
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
                style={{
                  backgroundColor: "white",
                  width: isMobile ? "100%" : 550,
                }}
              />

              <div
                style={{
                  marginTop: "20px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    marginTop: "10px",
                    backgroundColor: "#004c3d",
                    color: "white",
                    textTransform: "none",
                    borderRadius: "19px",
                    pl: 10,
                    pr: 10,
                  }}
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
