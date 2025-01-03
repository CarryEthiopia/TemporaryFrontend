import { Box, Typography, Avatar, Container } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import PersonIcon from "@mui/icons-material/Person";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimony = () => {
  const testimonies = [
    {
      text: "Carry Ethiopia has transformed our international shipping experience. The platform's efficiency and reliability have made it an integral part of our business operations.",
      name: "Sarah Johnson",
      role: "Regular Sender",
      icon: <PersonIcon />,
      profileImage: "profile1",
      category: "Business Owner",
    },
    {
      text: "As a frequent traveler, I've found a meaningful way to contribute while offsetting my travel costs. The platform's user interface and support team are exceptional.",
      name: "David Chen",
      role: "Traveler",
      icon: <FlightTakeoffIcon />,
      profileImage: "profile2",
      category: "Frequent Flyer",
    },
    {
      text: "The dual perspective of being both a sender and carrier has shown me how well-designed this platform is. It's created a trusted community for international deliveries.",
      name: "Maria Garcia",
      role: "Sender & Carrier",
      icon: <SupervisorAccountIcon />,
      profileImage: "profile3",
      category: "Community Member",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Box sx={{ py: 10, backgroundColor: "#FAFAFA" }}>
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
            }}
          >
            <span style={{ color: "#000" }}>Customer </span>
            <span style={{ color: "#F66F1E" }}>Testimonials</span>
            <Box
              component="span"
              sx={{
                display: "block",
                width: "60px",
                height: "4px",
                backgroundColor: "#F66F1E",
                margin: "8px auto 0",
              }}
            ></Box>
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "text.secondary", maxWidth: "600px", mx: "auto" }}
          >
            Discover how Carry Ethiopia is revolutionizing international
            shipping through trusted connections
          </Typography>
        </Box>

        {/* Testimonials Carousel */}
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="transform 500ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {testimonies.map((testimony, index) => (
            <Box
              key={index}
              sx={{
                mx: 2,
                height: "100%",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "16px",
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Quote Icon */}
                <FormatQuoteIcon
                  sx={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    fontSize: 40,
                    color: "rgba(246, 111, 30, 0.1)",
                  }}
                />

                {/* Testimony Content */}
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 4,
                      color: "text.secondary",
                      lineHeight: 1.8,
                      fontStyle: "italic",
                    }}
                  >
                    &quot;{testimony.text}&quot;
                  </Typography>
                </Box>

                {/* Profile Section */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderTop: "1px solid rgba(0,0,0,0.08)",
                    pt: 3,
                  }}
                >
                  <Avatar
                    sx={{
                      width: 56,
                      height: 56,
                      bgcolor: "primary.main",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                  >
                    {testimony.icon}
                  </Avatar>
                  <Box sx={{ ml: 2 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, color: "text.primary" }}
                    >
                      {testimony.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "primary.main",
                        fontWeight: 500,
                      }}
                    >
                      {testimony.role}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary" }}
                    >
                      {testimony.category}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default Testimony;
