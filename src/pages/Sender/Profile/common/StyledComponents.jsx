import React from "react";
import { styled } from "@mui/system";
import { Paper, Avatar, Input } from "@mui/material";

export const ProfileContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(3),
  transition: "all 0.3s ease",
  minHeight: "calc(100vh - 64px)",
  backgroundColor: "#f8f9fa",
  backgroundImage: "linear-gradient(to bottom right, #f8f9fa, #e9ecef)",
  "@media (max-width: 600px)": {
    padding: theme.spacing(2),
  },
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: "16px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(10px)",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 6px 25px rgba(0, 0, 0, 0.1)",
  },
  "@media (max-width: 600px)": {
    padding: theme.spacing(2),
  },
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  border: "4px solid #fff",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
  },
}));

export const StyledInput = styled(Input)(({ theme }) => ({
  backgroundColor: "#f8f9fa",
  padding: "8px 12px",
  borderRadius: "8px",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#eaecef",
  },
  "&.Mui-focused": {
    backgroundColor: "#fff",
    boxShadow: "0 0 0 2px #bbdefb",
  },
}));

// Optionally add a default export for React import convenience
const StyledComponents = {
  ProfileContainer,
  StyledPaper,
  StyledAvatar,
  StyledInput,
};

export default StyledComponents;
