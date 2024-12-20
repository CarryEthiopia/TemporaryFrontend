import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import BookIcon from "@mui/icons-material/Book"; // Example icon for books
import LocalMallIcon from "@mui/icons-material/LocalMall"; // Example icon for clothes
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi"; // Example icon for cosmetics
import LocalShippingIcon from "@mui/icons-material/LocalShipping"; // Example icon for package boxes
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import profile1 from "../assets/teamMember1.jpg"; // Path to your profile image
import profile2 from "../assets/teamMember2.jpg"; // Another profile image
import profile3 from "../assets/teamMember3.jpg"; // Another profile image
import profile4 from "../assets/teamMember1.jpg"; // Another profile image

const Testimony = () => {
  const testimonies = [
    {
      text: "Carry Ethiopia has revolutionized the way I send packages. Amazing service!",
      name: "Jane Doe",
      role: "Sender",
      icon: <LocalShippingIcon />, // Package icon for sender
      profileImage: profile1, // Replace with real image URL
    },
    {
      text: "As a traveler, I find it fulfilling to help others while traveling. Great experience!",
      name: "John Smith",
      role: "Traveler",
      icon: <BookIcon />, // Book icon for traveler
      profileImage: profile2, // Replace with real image URL
    },
    {
      text: "The platform is seamless, and the service is reliable. Highly recommend!",
      name: "Emily Brown",
      role: "Being Traveler and Sender",
      icon: <LocalMallIcon />, // Clothes icon for both
      profileImage: profile3, // Replace with real image URL
    },
    {
      text: "Using Carry Ethiopia made my trip more meaningful and cost-effective.",
      name: "Michael Green",
      role: "Traveler",
      icon: <SportsKabaddiIcon />, // Cosmetics icon for traveler
      profileImage: profile1, // Replace with real image URL
    },
  ];

  const commonStyles = {
    container: {
      backgroundColor: "#FFF",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
      padding: "20px",
      position: "relative",
      margin: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    icon: {
      position: "absolute",
      top: "10px",
      left: "10px",
      color: "#F66F1E",
      fontSize: "30px",
    },
    profileSection: {
      display: "flex",
      alignItems: "center",
      marginTop: "10px",
      justifyContent: "flex-start", // Align everything in a row
      gap: "10px", // Space between items
    },
    profileImage: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
    },
    nameRole: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    roleText: {
      fontSize: "14px",
      color: "#555",
    },
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Box
      sx={{ textAlign: "center", padding: "40px", backgroundColor: "#F5F5F5" }}
    >
      {/* Header Section */}
      <Typography variant="h4" gutterBottom>
        <span style={{ color: "#F66F1E" }}>What Our </span>
        <span style={{ color: "#2E2E2E" }}>Users Say</span>
      </Typography>
      <Box
        sx={{
          height: "3px",
          width: "100px",
          backgroundColor: "#2E2E2E",
          margin: "0 auto 20px",
        }}
      ></Box>

      {/* Testimony Section */}
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        arrows={false} // Disable manual navigation (arrows)
      >
        {testimonies.map((testimony, index) => (
          <Box key={index} sx={commonStyles.container}>
            {/* Quote Icon */}
            <FormatQuoteIcon sx={commonStyles.icon} />

            {/* Testimony Text */}
            <Typography
              variant="body1"
              sx={{ margin: "20px 0", color: "#333" }}
            >
              {testimony.text}
            </Typography>

            {/* Profile Section */}
            <Box sx={commonStyles.profileSection}>
              <Avatar
                src={testimony.profileImage}
                sx={commonStyles.profileImage}
              />
              <Box sx={commonStyles.nameRole}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  {testimony.name}
                </Typography>
                <Typography sx={commonStyles.roleText}>
                  {testimony.role}
                </Typography>
              </Box>
              <Box
                sx={{
                  marginLeft: "auto",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {testimony.icon}
              </Box>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Testimony;
