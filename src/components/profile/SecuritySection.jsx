import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Divider,
} from "@mui/material";

const SecuritySection = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [enable2FA, setEnable2FA] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword((prev) => !prev);
  };

  const handle2FAToggle = (event) => {
    setEnable2FA(event.target.checked);
  };

  return (
    <Box sx={{ padding: 3, pt: 10 }}>
      <Typography variant="h5" gutterBottom>
        Security Settings
      </Typography>
      <Typography variant="body1" paragraph>
        Manage your account&apos;s security features to ensure a safe and secure
        experience.
      </Typography>

      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h6" gutterBottom>
          Change Password
        </Typography>
        <TextField
          label="Current Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="New Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Confirm New Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <FormControlLabel
          control={
            <Checkbox checked={showPassword} onChange={handlePasswordToggle} />
          }
          label="Show Passwords"
        />
      </Box>

      <Divider sx={{ marginY: 2 }} />

      <Box>
        <Typography variant="h6" gutterBottom>
          Two-Factor Authentication
        </Typography>
        <Typography variant="body2" paragraph>
          Add an extra layer of security to your account by enabling two-factor
          authentication.
        </Typography>
        <FormControlLabel
          control={<Checkbox checked={enable2FA} onChange={handle2FAToggle} />}
          label="Enable Two-Factor Authentication"
        />
        {enable2FA && (
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="body2">
              You&apos;ll receive a verification code via SMS or authentication
              app. Follow the setup instructions to complete enabling 2FA.
            </Typography>
            <Button variant="outlined" sx={{ marginTop: 1 }}>
              Setup 2FA
            </Button>
          </Box>
        )}
      </Box>

      <Box sx={{ marginTop: 3 }}>
        <Button variant="contained" color="primary" fullWidth>
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default SecuritySection;
