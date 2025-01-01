import React from "react";
import { Typography, Button, Tooltip, Divider } from "@mui/material";
import Settings from "@mui/icons-material/Settings"; // Fixed import
import { StyledPaper, StyledAvatar } from "../common/StyledComponents";
import team1 from "../../../../assets/Member1.jpg"

const ProfileAvatar = ({ profileData, handleImageUpload, openSettings }) => {
  return (
    <StyledPaper
      sx={{
        background: "linear-gradient(145deg, #ffffff, #f5f8ff)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "120px",
          background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
          borderRadius: "24px 24px 0 0",
        },
      }}
    >
      <div style={{ textAlign: "center" }}>
        {/* Profile Image Upload */}
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="profile-image-upload"
          type="file"
          onChange={handleImageUpload}
        />
        <label htmlFor="profile-image-upload">
          <Tooltip title="Change Profile Picture" arrow>
            <StyledAvatar
              src={
               team1
              }
              alt={profileData?.profileName || "User Profile"}
            />
          </Tooltip>
        </label>

        {/* Profile Name */}
        <Typography
          variant="h5"
          sx={{
            mt: 2,
            fontWeight: 700,
            background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            letterSpacing: "0.5px",
          }}
        >
          {profileData?.profileName || "Your Name"}
        </Typography>

        {/* Username */}
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
          {profileData?.username || "@username"}
        </Typography>

        {/* Settings Button */}
        <Button
          variant="contained"
          startIcon={<Settings />}
          onClick={openSettings}
          sx={{
            background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            borderRadius: "12px",
            padding: "10px 24px",
            textTransform: "none",
            fontWeight: 600,
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-3px)",
              boxShadow: "0 10px 20px rgba(79,172,254,0.3)",
            },
          }}
        >
          Settings
        </Button>
      </div>

      {/* Divider */}
      <Divider sx={{ my: 3 }} />

      {/* Member Since Section */}
      <div>
        <Typography variant="subtitle2" color="textSecondary">
          Member since
        </Typography>
        <Typography variant="body1">
          {profileData?.joinDate || "Date not available"}
        </Typography>
      </div>
    </StyledPaper>
  );
};

export default ProfileAvatar;
