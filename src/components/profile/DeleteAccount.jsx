import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";

const DeleteAccount = () => {
  const [open, setOpen] = useState(false);
  const [confirmationText, setConfirmationText] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    if (confirmationText === "DELETE" && checkboxChecked) {
      // Perform the delete account action here
      console.log("Account deleted");
      setOpen(false);
    } else {
      alert("Please confirm by typing DELETE and checking the box.");
    }
  };

  return (
    <Box
      sx={{
        p: 3,
        mt: 8, // Adjust the margin-top to fit below the navbar
        bgcolor: "white",
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      <Typography
        variant="h6"
        sx={{ mb: 2, color: "#D32F2F", fontWeight: 600 }}
      >
        Delete Account
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Deleting your account is permanent and cannot be undone. All your data
        will be permanently erased, and this action is irreversible.
      </Typography>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={handleOpen}
        sx={{
          color: "#D32F2F",
          borderColor: "#D32F2F",
          textTransform: "none",
          "&:hover": {
            bgcolor: "rgba(211, 47, 47, 0.1)",
          },
        }}
      >
        Delete Account
      </Button>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ color: "#D32F2F" }}>
          Confirm Account Deletion
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Are you sure you want to delete your account? This action cannot be
            undone.
          </Typography>
          <TextField
            label="Type DELETE to confirm"
            variant="outlined"
            fullWidth
            value={confirmationText}
            onChange={(e) => setConfirmationText(e.target.value)}
            sx={{ mb: 2 }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checkboxChecked}
                onChange={(e) => setCheckboxChecked(e.target.checked)}
                sx={{ color: "#D32F2F" }}
              />
            }
            label="I understand that this action is permanent"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: "#424242" }}>
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            sx={{
              bgcolor: "#D32F2F",
              color: "white",
              "&:hover": { bgcolor: "#B71C1C" },
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DeleteAccount;
