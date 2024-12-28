import React from "react";
import { Typography, Button, Tooltip, Divider } from "@mui/material";
import Settings from "@mui/icons-material/Settings"; // Fixed import
import { StyledPaper, StyledAvatar } from "../common/StyledComponents";

const ProfileAvatar = ({ profileData, handleImageUpload, openSettings }) => {
  return (
    <StyledPaper>
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
                profileData?.profileImage || "https://via.placeholder.com/150"
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
            fontWeight: 600,
            background: "linear-gradient(45deg, #2196F3, #21CBF3)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
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
            background: "linear-gradient(45deg, #2196F3, #21CBF3)",
            transition: "transform 0.2s ease",
            "&:hover": {
              transform: "translateY(-2px)",
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
