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
    img: "https://i.ibb.co/KXJHQ9Y/Whats-App-Image-2023-10-11-at-3-41-20-PM-removebg-preview.png",
    title: "Tailored Solutions",
    content: "Customized to your unique needs.",
  },
  {
    img: "https://i.ibb.co/4YvxZT3/Whats-App-Image-2023-10-11-at-3-41-28-PM-removebg-preview-1.png",
    title: "Effortless Automation",
    content: "Free up time for what matters most",
  },
  {
    img: "https://i.ibb.co/B4fW8mK/Whats-App-Image-2023-10-11-at-3-41-36-PM-removebg-preview.png",
    title: "Personalized Engagement",
    content: "Boost customer/voter engagement.",
  },
  {
    img: "https://i.ibb.co/qR5cpHK/Whats-App-Image-2023-10-11-at-3-41-46-PM-removebg-preview.png",
    title: "Always Available",
    content: "24/7 access to info and assistance.",
  },
  {
    img: "https://i.ibb.co/TMMH03D/Whats-App-Image-2023-10-11-at-3-41-54-PM-removebg-preview.png",
    title: "Data-Driven Insights",
    content: "Make smarter decisions with valuable data.",
  },
];

const ContinuousSlider = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Container>
      <Typography
        variant={isMobile ? "h5" : "h4"}
        color={"#004c3d"}
        fontWeight={600}
        mt={2}
      >
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
              <Typography variant="h6" color={"#004c3d"} fontWeight={600}>
                {item.title}
              </Typography>
              <Typography variant="body2">{item.content}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <div
        style={{
          display: isMobile ? "grid" : "flex",
          justifyContent: "center",
          textAlign: "center",
          marginTop: isMobile ? "" : 20,
          gap: isMobile ? "20px" : 130,
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
              <Typography variant="h6" color={"#004c3d"} fontWeight={600}>
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
    //           <Typography variant="h6" color={"#004c3d"}>
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
    //           <Typography variant="h6" color={"#004c3d"}>
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
