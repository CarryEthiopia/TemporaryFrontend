import React from "react";
import {
  Grid,
  Typography,
  Button,
  Divider,
  CircularProgress,
  Paper,
  Box,
  Chip,
  TextField,
} from "@mui/material";
import {
  Save,
  Email,
  Phone,
  LocationOn,
  Work,
  Language,
  AccessTime,
  Verified,
} from "@mui/icons-material";
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
        {/* Basic Information */}
        <Grid item xs={12}>
          <Paper elevation={0} sx={{ p: 2, bgcolor: "background.default" }}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              Basic Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Full Name"
                  value={profileData.fullName || ""}
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Display Name"
                  value={profileData.displayName || ""}
                  onChange={(e) =>
                    handleInputChange("displayName", e.target.value)
                  }
                  fullWidth
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12}>
          <Paper elevation={0} sx={{ p: 2, bgcolor: "background.default" }}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              Contact Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  value={profileData.email || ""}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  fullWidth
                  variant="outlined"
                  InputProps={{
                    startAdornment: <Email color="action" sx={{ mr: 1 }} />,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone"
                  value={profileData.phone || ""}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  fullWidth
                  variant="outlined"
                  InputProps={{
                    startAdornment: <Phone color="action" sx={{ mr: 1 }} />,
                  }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Location Information */}
        <Grid item xs={12}>
          <Paper elevation={0} sx={{ p: 2, bgcolor: "background.default" }}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              Location Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Country"
                  value={profileData.country || ""}
                  onChange={(e) => handleInputChange("country", e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="City"
                  value={profileData.city || ""}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Professional Information */}
        <Grid item xs={12}>
          <Paper elevation={0} sx={{ p: 2, bgcolor: "background.default" }}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              Professional Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Bio"
                  value={profileData.bio || ""}
                  onChange={(e) => handleInputChange("bio", e.target.value)}
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Occupation"
                  value={profileData.occupation || ""}
                  onChange={(e) =>
                    handleInputChange("occupation", e.target.value)
                  }
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Company"
                  value={profileData.company || ""}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Account Statistics */}
        <Grid item xs={12}>
          <Paper elevation={0} sx={{ p: 2, bgcolor: "background.default" }}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              Account Statistics
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Box textAlign="center">
                  <Typography variant="h6">
                    {profileData.totalDeliveries || 0}
                  </Typography>
                  <Typography color="textSecondary">
                    Total Deliveries
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box textAlign="center">
                  <Typography variant="h6">
                    {profileData.rating || "0.0"}
                  </Typography>
                  <Typography color="textSecondary">Rating</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box textAlign="center">
                  <Typography variant="h6">
                    {profileData.memberSince || "2024"}
                  </Typography>
                  <Typography color="textSecondary">Member Since</Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Verification Status */}
        <Grid item xs={12}>
          <Paper elevation={0} sx={{ p: 2, bgcolor: "background.default" }}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              Verification Status
            </Typography>
            <Box display="flex" gap={1} flexWrap="wrap">
              <Chip
                icon={<Verified />}
                label="Email Verified"
                color={profileData.emailVerified ? "success" : "default"}
              />
              <Chip
                icon={<Verified />}
                label="Phone Verified"
                color={profileData.phoneVerified ? "success" : "default"}
              />
              <Chip
                icon={<Verified />}
                label="ID Verified"
                color={profileData.idVerified ? "success" : "default"}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          disabled={!hasChanges || loading}
          onClick={handleSaveChanges}
          startIcon={loading ? <CircularProgress size={20} /> : <Save />}
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
