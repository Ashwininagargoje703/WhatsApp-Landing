import React from "react";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
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

  return (
    <Grid
      item
      xs={12}
      sm={3}
      style={{
        marginBottom: "20px",
        justifyContent: "center",
        textAlign: "center",
        zIndex: 0,
      }}
    >
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
  );
};

export default Contact;
