import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  Typography,
  Switch,
  Tabs,
  Tab,
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Notifications,
  Security,
  Palette,
  Language,
  Lock, // Replaced Privacy with Lock
  Help,
  DeleteForever,
  Email,
  Phone,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

const TabPanel = ({ children, value, index }) => (
  <div hidden={value !== index} style={{ padding: "20px 0" }}>
    {value === index && <Box>{children}</Box>}
  </div>
);

const ProfileSettings = ({ open, onClose, settings, handleSettingsChange }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "24px",
          boxShadow: "0 25px 50px -12px rgba(0,64,128,0.25)",
          overflow: "hidden",
        },
      }}
    >
      <DialogTitle
        sx={{
          background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
          color: "white",
          fontSize: "1.5rem",
          fontWeight: 600,
        }}
      >
        Settings
      </DialogTitle>
      <DialogContent sx={{ p: 0 }}>
        <Grid container>
          <Grid item xs={3}>
            <Tabs
              orientation="vertical"
              value={activeTab}
              onChange={handleTabChange}
              sx={{
                "& .MuiTab-root": {
                  minHeight: "64px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(79,172,254,0.1)",
                  },
                  "&.Mui-selected": {
                    color: "#4facfe",
                    fontWeight: 600,
                  },
                },
                "& .MuiTabs-indicator": {
                  background:
                    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                  borderRadius: "4px",
                },
              }}
            >
              <Tab icon={<Notifications />} label="Notifications" />
              <Tab icon={<Security />} label="Security" />
              <Tab icon={<Palette />} label="Appearance" />
              <Tab icon={<Language />} label="Language & Region" />
              <Tab icon={<Lock />} label="Privacy" /> {/* Fixed icon import */}
              <Tab icon={<Help />} label="Help & Support" />
            </Tabs>
          </Grid>
          <Grid item xs={9} sx={{ p: 3 }}>
            {/* Notifications Settings */}
            <TabPanel value={activeTab} index={0}>
              <Typography variant="h6" gutterBottom>
                Notification Preferences
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography>Email Notifications</Typography>
                    <Switch
                      checked={settings.emailNotifications}
                      onChange={() =>
                        handleSettingsChange("emailNotifications")
                      }
                    />
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mt={2}
                  >
                    <Typography>SMS Notifications</Typography>
                    <Switch
                      checked={settings.smsNotifications}
                      onChange={() => handleSettingsChange("smsNotifications")}
                    />
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mt={2}
                  >
                    <Typography>Push Notifications</Typography>
                    <Switch
                      checked={settings.pushNotifications}
                      onChange={() => handleSettingsChange("pushNotifications")}
                    />
                  </Box>
                </Grid>
              </Grid>
            </TabPanel>

            {/* Security Settings */}
            <TabPanel value={activeTab} index={1}>
              <Typography variant="h6" gutterBottom>
                Security Settings
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    type={showPassword ? "text" : "password"}
                    label="Current Password"
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type={showPassword ? "text" : "password"}
                    label="New Password"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography>Two-Factor Authentication</Typography>
                    <Switch
                      checked={settings.twoFactorAuth}
                      onChange={() => handleSettingsChange("twoFactorAuth")}
                    />
                  </Box>
                </Grid>
              </Grid>
            </TabPanel>

            {/* Appearance Settings */}
            <TabPanel value={activeTab} index={2}>
              <Typography variant="h6" gutterBottom>
                Appearance
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography>Dark Mode</Typography>
                    <Switch
                      checked={settings.darkMode}
                      onChange={() => handleSettingsChange("darkMode")}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Theme Color</InputLabel>
                    <Select
                      value={settings.themeColor || "blue"}
                      onChange={(e) =>
                        handleSettingsChange("themeColor", e.target.value)
                      }
                    >
                      <MenuItem value="blue">Blue</MenuItem>
                      <MenuItem value="purple">Purple</MenuItem>
                      <MenuItem value="green">Green</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </TabPanel>

            {/* Language & Region */}
            <TabPanel value={activeTab} index={3}>
              <Typography variant="h6" gutterBottom>
                Language & Region
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Language</InputLabel>
                    <Select
                      value={settings.language || "en"}
                      onChange={(e) =>
                        handleSettingsChange("language", e.target.value)
                      }
                    >
                      <MenuItem value="en">English</MenuItem>
                      <MenuItem value="es">Spanish</MenuItem>
                      <MenuItem value="fr">French</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Timezone</InputLabel>
                    <Select
                      value={settings.timezone || "UTC"}
                      onChange={(e) =>
                        handleSettingsChange("timezone", e.target.value)
                      }
                    >
                      <MenuItem value="UTC">UTC</MenuItem>
                      <MenuItem value="EST">EST</MenuItem>
                      <MenuItem value="PST">PST</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </TabPanel>

            {/* Privacy Settings */}
            <TabPanel value={activeTab} index={4}>
              <Typography variant="h6" gutterBottom>
                Privacy Settings
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography>Profile Visibility</Typography>
                    <Switch
                      checked={settings.profileVisibility}
                      onChange={() => handleSettingsChange("profileVisibility")}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography>Show Online Status</Typography>
                    <Switch
                      checked={settings.showOnlineStatus}
                      onChange={() => handleSettingsChange("showOnlineStatus")}
                    />
                  </Box>
                </Grid>
              </Grid>
            </TabPanel>

            {/* Help & Support */}
            <TabPanel value={activeTab} index={5}>
              <Typography variant="h6" gutterBottom>
                Help & Support
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    onClick={() => window.open("/faq", "_blank")}
                  >
                    FAQ
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    onClick={() => window.open("/contact-support", "_blank")}
                  >
                    Contact Support
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    fullWidth
                    startIcon={<DeleteForever />}
                  >
                    Delete Account
                  </Button>
                </Grid>
              </Grid>
            </TabPanel>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          sx={{
            color: "#2196F3",
            "&:hover": {
              backgroundColor: "rgba(33, 150, 243, 0.08)",
            },
          }}
        >
          Close
        </Button>
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(45deg, #2196F3, #21CBF3)",
            "&:hover": {
              boxShadow: "0 2px 10px rgba(33, 150, 243, 0.3)",
            },
          }}
        >
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProfileSettings;
