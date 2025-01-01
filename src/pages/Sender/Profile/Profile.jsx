import React, { useState, useEffect } from "react";
import { Grid, Snackbar, Alert } from "@mui/material";
import { ProfileContainer } from "./common/StyledComponents";
import ProfileAvatar from "./Avatar/ProfileAvatar";
import ProfileInformation from "./Information/ProfileInformation";
import ProfileSettings from "./Settings/ProfileSettings";
import LoadingSpinner from "./common/LoadingSpinner";
import { profileData as initialProfileData } from "../FetchedData";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasChanges, setHasChanges] = useState(false);
  const [openSettingsDialog, setOpenSettingsDialog] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  useEffect(() => {
    fetchProfileData();
  }, []);

  // Function to fetch profile data - will be replaced with actual API call
  const fetchProfileData = async () => {
    try {
      // Simulate API call
      // Replace this with actual API call when backend is ready
      // const response = await axios.get('/api/profile');
      // const data = response.data;

      setProfile(initialProfileData);
      setSettings(initialProfileData.settings);
      setLoading(false);
    } catch (error) {
      setNotification({
        open: true,
        message: "Error loading profile data",
        severity: "error",
      });
      setLoading(false);
    }
  };

  const handleImageUpload = async (imageFile) => {
    try {
      setLoading(true);
      // Replace with actual API call when backend is ready
      // const formData = new FormData();
      // formData.append('image', imageFile);
      // await axios.post('/api/profile/image', formData);

      setNotification({
        open: true,
        message: "Profile image updated successfully",
        severity: "success",
      });
    } catch (error) {
      setNotification({
        open: true,
        message: "Error uploading image",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [field]: value,
    }));
    setHasChanges(true);
  };

  const handleSaveChanges = async () => {
    try {
      setLoading(true);
      // Replace with actual API call when backend is ready
      // await axios.put('/api/profile', profile);

      setHasChanges(false);
      setNotification({
        open: true,
        message: "Profile updated successfully",
        severity: "success",
      });
    } catch (error) {
      setNotification({
        open: true,
        message: "Error updating profile",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSettingsChange = async (newSettings) => {
    try {
      setLoading(true);
      // Replace with actual API call when backend is ready
      // await axios.put('/api/profile/settings', newSettings);

      setSettings(newSettings);
      setNotification({
        open: true,
        message: "Settings updated successfully",
        severity: "success",
      });
    } catch (error) {
      setNotification({
        open: true,
        message: "Error updating settings",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleNotificationClose = () => {
    setNotification((prev) => ({ ...prev, open: false }));
  };

  if (loading || !profile) {
    return <LoadingSpinner />;
  }

  return (
    <ProfileContainer>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <ProfileAvatar
            profileData={profile}
            handleImageUpload={handleImageUpload}
            openSettings={() => setOpenSettingsDialog(true)}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <ProfileInformation
            profileData={profile}
            handleInputChange={handleInputChange}
            handleSaveChanges={handleSaveChanges}
            loading={loading}
            hasChanges={hasChanges}
          />
        </Grid>
      </Grid>

      <ProfileSettings
        open={openSettingsDialog}
        onClose={() => setOpenSettingsDialog(false)}
        settings={settings}
        handleSettingsChange={handleSettingsChange}
      />

      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleNotificationClose}
      >
        <Alert
          onClose={handleNotificationClose}
          severity={notification.severity}
          sx={{ width: "100%" }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </ProfileContainer>
  );
};

export default Profile;
