import React, { useState } from "react";
import { Box, Typography, TextField, MenuItem } from "@mui/material";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa"; // Import icons from react-icons
import LocationOnIcon from "@mui/icons-material/LocationOn"; // Location icon
import PublicIcon from "@mui/icons-material/Public"; // World icon
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmailIcon from "@mui/icons-material/Email"; // Email Icon
import PhoneIcon from "@mui/icons-material/Phone"; // Phone Icon

const Footer = () => {
  const [city, setCity] = useState("Addis Ababa"); // Default city name
  const [currency, setCurrency] = useState("LGS - NGN"); // Manage currency selection

  const cities = ["Addis Ababa", "Dire Dawa", "Mekelle"]; // Example cities
  const currencyOptions = ["LGS - NGN"]; // Example currency options

  return (
    <Box sx={{ backgroundColor: "#FAFAFA", py: 6 }}>
      {/* Footer Container */}
      <Box className="container mx-auto px-4 flex flex-wrap justify-between items-start">
        {/* Left Section: Carry Ethiopia */}
        <Box className="w-full lg:w-1/2">
          <Typography className="text-2xl font-bold text-orange-500">
            Carry Ethiopia
          </Typography>
          <Typography className="text-gray-500 mt-2">
            Carry Ethiopia is a leading company dedicated to connecting
            travelers and customers in Ethiopia for a seamless delivery
            experience. We are committed to providing efficient, safe, and
            reliable services across the country.
          </Typography>
        </Box>
      </Box>

      {/* Right Section: Quick Links and Contact Us */}
      <Box className="container mx-auto px-4 flex flex-wrap justify-between items-start mt-6">
        {/* Quick Links */}
        <Box className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <Typography className="text-2xl font-bold text-orange-500">
            Quick Links
          </Typography>
          <ul className="space-y-2 text-gray-500">
            <li className="hover:text-orange-600">Home</li>
            <li className="hover:text-orange-600">How it Works</li>
            <li className="hover:text-orange-600">About Us</li>
          </ul>
        </Box>

        {/* Contact Us */}
        <Box className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <Typography className="text-2xl font-bold text-orange-500">
            Contact Us
          </Typography>
          <ul className="space-y-2 text-gray-500">
            <li className="flex items-center space-x-2">
              <LocationOnIcon sx={{ color: "#F66F1E", fontSize: 28 }} />
              <Typography>Addis Ababa, Ethiopia</Typography>
            </li>
            <li className="flex items-center space-x-2">
              <EmailIcon sx={{ color: "#F66F1E", fontSize: 28 }} />
              <Typography>contact@carryethiopia.com</Typography>
            </li>
            <li className="flex items-center space-x-2">
              <PhoneIcon sx={{ color: "#F66F1E", fontSize: 28 }} />
              <Typography>+251 911 234 567</Typography>
            </li>
            <li className="flex items-center space-x-2">
              <PhoneIcon sx={{ color: "#F66F1E", fontSize: 28 }} />
              <Typography>+251 922 345 678</Typography>
            </li>
          </ul>
        </Box>
      </Box>

      {/* Social Media Icons */}
      <Box className="w-full lg:w-1/2 flex justify-start space-x-6 mt-6 lg:mt-0">
        <FaFacebook className="w-6 h-6 text-gray-500 hover:text-orange-600" />
        <FaInstagram className="w-6 h-6 text-gray-500 hover:text-orange-600" />
        <FaTiktok className="w-6 h-6 text-gray-500 hover:text-orange-600" />
        <FaLinkedin className="w-6 h-6 text-gray-500 hover:text-orange-600" />
        <FaYoutube className="w-6 h-6 text-gray-500 hover:text-orange-600" />
      </Box>

      {/* Bottom Center Text */}
      <Box
        sx={{ textAlign: "center", py: 4, mt: 4, backgroundColor: "#FAFAFA" }}
      >
        <Typography className="text-gray-500">
          &#169; 2024 CarryEthiopia All rights reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
