import React from "react";
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Stack,
  Link,
} from "@mui/material";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0f172a",
        py: 6,
        px: { xs: 4, md: 12 },
        textAlign: "left",
      }}
    >
      <Grid
        container
        spacing={6}
        justifyContent="center"
        alignItems="flex-start"
        sx={{ maxWidth: "1200px", mx: "auto" }}
      >
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              color: "#fff",
              fontWeight: 900,
            }}
          >
            Carry Ethiopia
          </Typography>
          <Typography variant="body2" color="white">
            Connecting travelers and businesses in Ethiopia for seamless delivery
            experiences. We are committed to providing efficient, safe, and
            reliable services across the country.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              color: "#fff",
              fontWeight: 900,
            }}
          >
            Quick Links
          </Typography>
          <List dense sx={{ padding: 0 }}>
            {["Home", "How it Works", "About Us", "Contact Us"].map((text, index) => (
              <ListItem key={index} disablePadding>
                <Link href="#" underline="hover" sx={{ color: "white" }}>
                  <ListItemText primary={text} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              color: "#fff",
              fontWeight: 900,
            }}
          >
            Contact Us
          </Typography>
          <List dense sx={{ padding: 0 }}>
            <ListItem disablePadding>
              <ListItemIcon sx={{ color: "#fff" }}>
                <FaMapMarkerAlt />
              </ListItemIcon>
              <ListItemText
                primary="Addis Ababa, Ethiopia"
                sx={{ color: "white" }}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon sx={{ color: "#fff" }}>
                <FaEnvelope />
              </ListItemIcon>
              <ListItemText
                primary="contact@carryethiopia.com"
                sx={{ color: "white" }}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon sx={{ color: "#fff" }}>
                <FaPhoneAlt />
              </ListItemIcon>
              <ListItemText primary="+251 911 234 567" sx={{ color: "white" }} />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Box mt={4} pt={2} borderTop="1px solid #ddd">
        <Stack
          direction="column"
          spacing={2}
          alignItems="center"
          sx={{ textAlign: "center" }}
        >
          <Typography variant="body2" sx={{ color: "white" }}>
            Carry Ethiopia © 2024 All rights reserved
          </Typography>
          <Stack direction="row" spacing={1}>
            <IconButton aria-label="Facebook" href="https://www.facebook.com/">
              <FaFacebook color="#fff" fontSize="medium" />
            </IconButton>
            <IconButton aria-label="Instagram" href="https://www.instagram.com/">
              <FaInstagram color="#fff" fontSize="medium" />
            </IconButton>
            <IconButton aria-label="Tiktok" href="https://www.tiktok.com/">
              <FaTiktok color="#fff" fontSize="medium" />
            </IconButton>
            <IconButton aria-label="Linkedin" href="https://www.linkedin.com/">
              <FaLinkedin color="#fff" fontSize="medium" />
            </IconButton>
            <IconButton aria-label="YouTube" href="https://www.youtube.com/">
              <FaYoutube color="#fff" fontSize="medium" />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
