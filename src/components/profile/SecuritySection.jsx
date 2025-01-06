import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Paper,
  Grid,
  IconButton,
  Tooltip,
  Alert,
  Fade,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Security,
  PhonelinkLock,
  History,
  Password,
} from "@mui/icons-material";

const SecuritySection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [showPassword, setShowPassword] = useState(false);
  const [enable2FA, setEnable2FA] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handlePasswordToggle = () => setShowPassword((prev) => !prev);
  const handle2FAToggle = (event) => setEnable2FA(event.target.checked);

  const handleSave = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const SecurityCard = ({ title, icon, children }) => (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 2,
        border: `1px solid ${theme.palette.divider}`,
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: theme.shadows[4],
        },
      }}
    >
      <Box display="flex" alignItems="center" mb={2}>
        {icon}
        <Typography variant="h6" ml={1}>
          {title}
        </Typography>
      </Box>
      {children}
    </Paper>
  );

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, pt: { xs: 8, md: 10 } }}>
      <Fade in={showAlert}>
        <Alert
          severity="success"
          sx={{
            position: "fixed",
            top: 20,
            right: 20,
            zIndex: 9999,
          }}
        >
          Security settings updated successfully!
        </Alert>
      </Fade>

      <Box mb={4}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Security Settings
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Enhance your account security with these advanced protection features
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <SecurityCard
            title="Password Management"
            icon={<Password color="primary" />}
          >
            <Grid container spacing={2}>
              {["Current Password", "New Password", "Confirm New Password"].map(
                (label) => (
                  <Grid item xs={12} key={label}>
                    <TextField
                      label={label}
                      type={showPassword ? "text" : "password"}
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        endAdornment: (
                          <Tooltip title={showPassword ? "Hide" : "Show"}>
                            <IconButton
                              edge="end"
                              onClick={handlePasswordToggle}
                              size="small"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </Tooltip>
                        ),
                      }}
                    />
                  </Grid>
                )
              )}
            </Grid>
          </SecurityCard>
        </Grid>

        <Grid item xs={12} md={6}>
          <SecurityCard
            title="Two-Factor Authentication"
            icon={<PhonelinkLock color="primary" />}
          >
            <Typography variant="body2" paragraph>
              Secure your account with an additional verification step during
              login.
            </Typography>
            <FormControlLabel
              control={
                <Checkbox checked={enable2FA} onChange={handle2FAToggle} />
              }
              label="Enable 2FA"
            />
            {enable2FA && (
              <Fade in={enable2FA}>
                <Box mt={2}>
                  <Typography variant="body2" paragraph>
                    Choose your preferred 2FA method:
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<Security />}
                      >
                        Authenticator App
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<PhonelinkLock />}
                      >
                        SMS Verification
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Fade>
            )}
          </SecurityCard>
        </Grid>

        <Grid item xs={12}>
          <SecurityCard
            title="Login History"
            icon={<History color="primary" />}
          >
            <Typography variant="body2" paragraph>
              Monitor recent login activities to ensure account safety
            </Typography>
            <Grid container spacing={2}>
              {[1, 2, 3].map((i) => (
                <Grid item xs={12} key={i}>
                  <Paper
                    variant="outlined"
                    sx={{ p: 2, backgroundColor: "background.default" }}
                  >
                    <Grid container alignItems="center" spacing={2}>
                      <Grid item xs={12} sm={4}>
                        <Typography variant="body2" color="text.secondary">
                          {new Date(
                            Date.now() - i * 24 * 60 * 60 * 1000
                          ).toLocaleDateString()}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <Typography variant="body2">
                          Chrome on Windows
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <Typography variant="body2" color="success.main">
                          Successful login
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </SecurityCard>
        </Grid>
      </Grid>

      <Box mt={4}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth={isMobile}
          sx={{
            py: 1.5,
             backgroundColor:"orange",
            px: 4,
            borderRadius: 2,
            textTransform: "none",
            float: isMobile ? "none" : "right",
          }}
          onClick={handleSave}
        >
          Save Security Settings
        </Button>
      </Box>
    </Box>
  );
};

export default SecuritySection;
