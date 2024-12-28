import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  Typography,
  Switch,
} from "@mui/material";

const ProfileSettings = ({ open, onClose, settings, handleSettingsChange }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <DialogTitle
        sx={{
          background: "linear-gradient(45deg, #2196F3, #21CBF3)",
          color: "white",
        }}
      >
        Settings
      </DialogTitle>
      <DialogContent>{/* ... Settings content as before ... */}</DialogContent>
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
      </DialogActions>
    </Dialog>
  );
};

export default ProfileSettings;
