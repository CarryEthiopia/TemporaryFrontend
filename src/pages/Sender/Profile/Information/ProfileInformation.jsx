import React from "react";
import {
  Grid,
  Typography,
  Button,
  Divider,
  CircularProgress,
} from "@mui/material";
import Save from "@mui/icons-material/Save"; // Correct import of Save icon
import { StyledPaper, StyledInput } from "../common/StyledComponents";

const ProfileInformation = ({
  profileData,
  handleInputChange,
  handleSaveChanges,
  loading,
  hasChanges,
}) => {
  return (
    <StyledPaper>
      <Typography
        variant="h6"
        sx={{
          mb: 3,
          background: "linear-gradient(45deg, #2196F3, #21CBF3)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Profile Information
      </Typography>

      <Grid container spacing={3}>
        {/* Replace with your input fields */}
        <Grid item xs={12}>
          <StyledInput
            label="Name"
            value={profileData.name || ""}
            onChange={(e) => handleInputChange("name", e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <StyledInput
            label="Email"
            value={profileData.email || ""}
            onChange={(e) => handleInputChange("email", e.target.value)}
            fullWidth
          />
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          disabled={!hasChanges || loading}
          onClick={handleSaveChanges}
          startIcon={loading ? <CircularProgress size={20} /> : <Save />} // Updated icon usage
          sx={{
            background: "linear-gradient(45deg, #2196F3, #21CBF3)",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 4px 15px rgba(33, 150, 243, 0.3)",
            },
            "&:disabled": {
              background: "#ccc",
            },
          }}
        >
          {loading ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </StyledPaper>
  );
};

export default ProfileInformation;
