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

const Footer = () => {
  const [city, setCity] = useState("Addis Ababa"); // Default city name
  const [currency, setCurrency] = useState("LGS - NGN"); // Manage currency selection

  const cities = ["Addis Ababa", "Dire Dawa", "Mekelle"]; // Example cities with airports
  const currencyOptions = ["LGS - NGN"]; // Example currency options

  return (
    <Box sx={{ backgroundColor: "#FAFAFA", py: 6 }}>
      {/* Footer Container */}
      <Box className="container mx-auto px-4 flex flex-wrap justify-between items-start">
        {/* Left Section: About Carry Ethiopia and Explore Lists */}
        <Box className="w-full lg:w-1/2 flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0">
          {/* About Carry Ethiopia */}
          <Box>
            <Typography className="text-2xl font-bold text-orange-500">
              About Carry Ethiopia
            </Typography>
            <ul className="space-y-2 text-gray-500">
              <li className="hover:text-orange-600">About Us</li>
              <li className="hover:text-orange-600">Resource & Policies</li>
              <li className="hover:text-orange-600">Careers</li>
              <li className="hover:text-orange-600">Content Integrity</li>
              <li className="hover:text-orange-600">Terms of Use</li>
              <li className="hover:text-orange-600">Privacy & Cookies</li>
            </ul>
          </Box>

          {/* Explore */}
          <Box>
            <Typography className="text-2xl font-bold text-orange-500">
              Explore
            </Typography>
            <ul className="space-y-2 text-gray-500">
              <li className="hover:text-orange-600">Write a Review</li>
              <li className="hover:text-orange-600">Join Our Community</li>
              <li className="hover:text-orange-600">Help Center</li>
            </ul>
          </Box>
        </Box>

        {/* Right Section: Input Fields */}
        <Box className="w-full lg:w-1/2 flex justify-end mt-6 lg:mt-0">
          <Box className="w-full lg:w-3/4 bg-white p-4 rounded-lg shadow-md flex flex-col space-y-6">
            {/* Location Input Field */}
            <Box className="flex items-center space-x-3">
              <LocationOnIcon sx={{ color: "#F66F1E", fontSize: 28 }} />
              <TextField
                variant="outlined"
                placeholder="Enter City"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 10,
                  },
                }}
                value={city}
                onChange={(e) => setCity(e.target.value)}
                select
                SelectProps={{
                  IconComponent: ExpandMoreIcon,
                  MenuProps: {
                    PaperProps: {
                      sx: {
                        borderRadius: 10,
                      },
                    },
                  },
                }}
              >
                {cities.map((city, index) => (
                  <MenuItem key={index} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            {/* Currency Input Field */}
            <Box className="flex items-center space-x-3">
              <PublicIcon sx={{ color: "#F66F1E", fontSize: 28 }} />
              <TextField
                variant="outlined"
                placeholder="Enter Currency"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 10,
                  },
                }}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                select
                SelectProps={{
                  IconComponent: ExpandMoreIcon,
                  MenuProps: {
                    PaperProps: {
                      sx: {
                        borderRadius: 10,
                      },
                    },
                  },
                }}
              >
                {currencyOptions.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Footer: Social Media Icons at Bottom Left */}
      <Box className="py-6">
        <Box className="container mx-auto flex justify-between items-start space-y-6 lg:space-y-0 lg:flex-row">
          {/* Social Media Icons */}
          <Box className="flex space-x-6">
            <FaFacebook className="w-8 h-8 text-gray-500 hover:text-orange-600" />
            <FaInstagram className="w-8 h-8 text-gray-500 hover:text-orange-600" />
            <FaTiktok className="w-8 h-8 text-gray-500 hover:text-orange-600" />
            <FaLinkedin className="w-8 h-8 text-gray-500 hover:text-orange-600" />
            <FaYoutube className="w-8 h-8 text-gray-500 hover:text-orange-600" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
