import React from "react";
import { CircularProgress, Box } from "@mui/material";

const LoadingSpinner = ({ size = 40, message = "Loading..." }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "200px",
    }}
  >
    <CircularProgress size={size} />
    {message && (
      <Box
        sx={{
          marginTop: 2,
          color: "#6c757d", // Neutral text color
          fontSize: "1rem",
          textAlign: "center",
        }}
      >
        {message}
      </Box>
    )}
  </Box>
);

export default LoadingSpinner;
