// import React, { useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Box, Card, Grid, Typography } from "@mui/material";

// const data = [
//   {
//     imgSrc:
//       "https://i.ibb.co/2t9HhLX/Whats-App-Image-2023-10-07-at-10-26-18-AM.jpg",
//     h1: "Engage Voters",
//     text: " Send personalized updates and vital info directly to voters.",
//   },
//   {
//     imgSrc:
//       "https://i.ibb.co/zJ9LFzH/Whats-App-Image-2023-10-07-at-10-26-28-AM.jpg",
//     h1: "Real-time Polling",
//     text: " Gain insights into voter sentiment instantly",
//   },
//   {
//     imgSrc:
//       "https://i.ibb.co/1QdqSfy/Whats-App-Image-2023-10-07-at-10-27-10-AM.jpg",
//     h1: "Effortless Campaign Management",
//     text: "Automate tasks like voter registration and event RSVPs.",
//   },
//   {
//     imgSrc:
//       "https://i.ibb.co/HhQKZTk/Whats-App-Image-2023-10-07-at-10-27-24-AM-removebg-preview.png",
//     h1: "Empower Party Workers",
//     text: "Enhance party worker capabilities with advanced features. For Retail Businesses",
//   },
// ];

// function Political(props) {
//   let sliderRef = useRef(null);

//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   };
//   return (
//     <Box width={"90vw"} ml={8}>
//       <Typography variant="h4" color={"#004c3d"} fontWeight={600} mt={2} mb={6}>
//         Use Cases For Political Campaigns
//       </Typography>
//       <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
//         {data.map((item, index) => (
//           <Card
//             item
//             key={index}
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//               maxWidth: 400,
//               height: 450,

//               boxShadow: "0 0 10px D9D9D9",
//               p: 2,
//             }}
//           >
//             <img
//               src={item?.imgSrc}
//               alt="img"
//               style={{
//                 maxWidth: "300px",
//                 maxHeight: "300px",
//                 display: "block",
//                 margin: "0 auto", // Center the image horizontally
//               }}
//             />
//             <Typography fontSize={22} fontWeight={700} color={"#004c3d"} mt={1}>
//               {item.h1}
//             </Typography>
//             <Typography
//               variant="body2"
//               mt={1}
//               sx={{
//                 textAlign: "center",
//                 fontSize: 16,
//               }}
//             >
//               {item.text}
//             </Typography>
//           </Card>
//         ))}
//       </Slider>
//     </Box>
//   );
// }
// export default Political;
