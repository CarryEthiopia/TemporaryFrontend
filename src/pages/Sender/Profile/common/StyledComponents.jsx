import React from "react";
import { styled } from "@mui/system";
import { Paper, Avatar, Input } from "@mui/material";

// StyledComponents.js updates
export const ProfileContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(3),
  transition: "all 0.3s ease",
  minHeight: "calc(100vh - 64px)",
  background: "linear-gradient(135deg, #f6f9fc 0%, #eef2f7 100%)",
  "@media (max-width: 600px)": {
    padding: theme.spacing(2),
  },
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: "24px",
  boxShadow: "0 10px 40px -10px rgba(0,64,128,0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  background: "rgba(255, 255, 255, 0.9)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.2)",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 20px 40px -15px rgba(0,64,128,0.15)",
  },
  "@media (max-width: 600px)": {
    padding: theme.spacing(2),
  },
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 150,
  height: 150,
  border: "4px solid #fff",
  boxShadow: "0 10px 25px rgba(0,64,128,0.15)",
  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.08) rotate(5deg)",
    boxShadow: "0 15px 35px rgba(0,64,128,0.2)",
  },
}));

export const StyledInput = styled(Input)(({ theme }) => ({
  backgroundColor: "#f8f9fc",
  padding: "12px 16px",
  borderRadius: "12px",
  transition: "all 0.3s ease",
  border: "2px solid transparent",
  "&:hover": {
    backgroundColor: "#eef2f7",
  },
  "&.Mui-focused": {
    backgroundColor: "#fff",
    borderColor: theme.palette.primary.main,
    boxShadow: "0 0 0 4px rgba(33,150,243,0.15)",
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
