// ContinuousSlider.js
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Container,
  Paper,
  Box,
  useMediaQuery,
} from "@mui/material";

const Data = [
  {
    img: "https://i.ibb.co/9VscJ0v/Whats-App-Image-2023-10-07-at-7-20-46-PM.jpg",
    title: "Tailored Solutions",
    content: "Customized to your unique needs.",
  },
  {
    img: "https://i.ibb.co/dcC2Wzz/Whats-App-Image-2023-10-07-at-7-22-13-PM.jpg",
    title: "Effortless Automation",
    content: "Free up time for what matters most",
  },
  {
    img: "https://i.ibb.co/myMdN4L/Whats-App-Image-2023-10-07-at-7-22-18-PM.jpg",
    title: "Personalized Engagement",
    content: "Boost customer/voter engagement.",
  },
  {
    img: "https://i.ibb.co/W5dyVHw/Whats-App-Image-2023-10-07-at-7-22-25-PM.jpg",
    title: "Always Available",
    content: "24/7 access to info and assistance.",
  },
  {
    img: "https://i.ibb.co/T0ZXyM6/Whats-App-Image-2023-10-07-at-7-22-30-PM.jpg",
    title: "Data-Driven Insights",
    content: "Make smarter decisions with valuable data.",
  },
];

const ContinuousSlider = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Container>
      <Typography variant="h5" fontWeight={600} mt={2}>
        Features of our WhatsApp Bot Services
      </Typography>
      <br />
      <br />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "" : "repeat(3, 1fr)",
          gap: "16px",
        }}
      >
        {Data.slice(0, 3).map((item, index) => (
          <Card
            key={index}
            sx={{
              boxShadow: "none",
              border: "none",
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />
            <CardContent>
              <Typography variant="h6" color={"rgba(72, 229, 130, 1)"}>
                {item.title}
              </Typography>
              <Typography variant="body2">{item.content}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "" : "repeat(2, 1fr)",
          justifyContent: "center",
          textAlign: "center",
          gap: "16px",
          marginTop: 20,
        }}
      >
        {Data.slice(3).map((item, index) => (
          <Card
            key={index}
            sx={{
              boxShadow: "none",
              border: "none",
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />
            <CardContent>
              <Typography variant="h6" color={"rgba(72, 229, 130, 1)"}>
                {item.title}
              </Typography>
              <Typography variant="body2">{item.content}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>

    // <Container>
    //   <Typography variant="h5" fontWeight={600} mt={2}>
    //     Features of our WhatsApp Bot Services
    //   </Typography>
    //   <br />
    //   <br />

    //   <div
    //     style={{
    //       display: "grid",
    //       gap: "16px",
    //     }}
    //   >
    //     {Data.slice(0, 3).map((item, index) => (
    //       <Card
    //         key={index}
    //         sx={{
    //           boxShadow: "none",
    //           border: "none",
    //         }}
    //       >
    //         <img
    //           src={item.img}
    //           alt={item.title}
    //           style={{ maxWidth: "100px", maxHeight: "100px" }}
    //         />
    //         <CardContent>
    //           <Typography variant="h6" color={"rgba(72, 229, 130, 1)"}>
    //             {item.title}
    //           </Typography>
    //           <Typography variant="body2">{item.content}</Typography>
    //         </CardContent>
    //       </Card>
    //     ))}
    //   </div>
    //   <div
    //     style={{
    //       display: "grid",
    //       gap: "16px",
    //       marginTop: 20,
    //     }}
    //   >
    //     {Data.slice(3).map((item, index) => (
    //       <Card
    //         key={index}
    //         sx={{
    //           boxShadow: "none",
    //           border: "none",
    //         }}
    //       >
    //         <img
    //           src={item.img}
    //           alt={item.title}
    //           style={{ maxWidth: "100px", maxHeight: "100px" }}
    //         />
    //         <CardContent>
    //           <Typography variant="h6" color={"rgba(72, 229, 130, 1)"}>
    //             {item.title}
    //           </Typography>
    //           <Typography variant="body2">{item.content}</Typography>
    //         </CardContent>
    //       </Card>
    //     ))}
    //   </div>
    // </Container>
  );
};

export default ContinuousSlider;
