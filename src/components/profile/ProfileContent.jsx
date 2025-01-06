import  { useState } from "react";
import { Avatar, Box, Button, Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
import { Edit as EditIcon, CheckCircleOutline, Upload } from "@mui/icons-material";

const ProfileContent = () => {
  const [kycModalOpen, setKycModalOpen] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState({
    emailVerified: false,
    kycVerified: false,
  });

  const handleKycVerification = () => {
    // Example placeholder for backend call
    setVerificationStatus((prev) => ({ ...prev, kycVerified: true }));
    setKycModalOpen(false);
  };

  const handleEmailVerification = () => {
    // Example placeholder for backend email verification logic
    setVerificationStatus((prev) => ({ ...prev, emailVerified: true }));
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", pt: 10 }}>
      {/* Profile Header */}
      <Box
        sx={{
          bgcolor: "white",
          p: 3,
          borderRadius: 2,
          mb: 3,
          display: "flex",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Avatar
          src="https://via.placeholder.com/100"
          sx={{ width: 80, height: 80 }}
        />
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Rafiqur Rahman
          </Typography>
          <Typography color="text.secondary">Team Manager</Typography>
          <Typography color="text.secondary">Leeds, United Kingdom</Typography>
        </Box>
      </Box>

      {/* Personal Information */}
      <Box sx={{ bgcolor: "white", p: 3, borderRadius: 2, mb: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Personal Information
          </Typography>
          <Button startIcon={<EditIcon />} sx={{ color: "orange" }}>
            Edit
          </Button>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" color="text.secondary">
              First Name
            </Typography>
            <Typography>Rafiqur</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Last Name
            </Typography>
            <Typography>Rahman</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Email Address
            </Typography>
            <Typography>rafiqurrahman51@gmail.com</Typography>
            {verificationStatus.emailVerified ? (
              <Typography
                color="success.main"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <CheckCircleOutline fontSize="small" /> Verified
              </Typography>
            ) : (
              <Button
                variant="contained"
                size="small"
                onClick={handleEmailVerification}
                sx={{ mt: 1, textTransform: "none", backgroundColor: "orange" }}
              >
                Verify Email
              </Button>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Phone
            </Typography>
            <Typography>+09 345 346 46</Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Address Information */}
      <Box sx={{ bgcolor: "white", p: 3, borderRadius: 2, mb: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Address
          </Typography>
          <Button startIcon={<EditIcon />} sx={{ color: "orange" }}>
            Edit
          </Button>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Country
            </Typography>
            <Typography>United Kingdom</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" color="text.secondary">
              City/State
            </Typography>
            <Typography>Leeds, East London</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Postal Code
            </Typography>
            <Typography>ERT 2354</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" color="text.secondary">
              TAX ID
            </Typography>
            <Typography>AS45645756</Typography>
          </Grid>
        </Grid>
      </Box>

      {/* KYC Verification */}
      <Box sx={{ bgcolor: "white", p: 3, borderRadius: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            KYC Verification
          </Typography>
          {verificationStatus.kycVerified ? (
            <Typography
              color="success.main"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <CheckCircleOutline fontSize="small" /> Verified
            </Typography>
          ) : (
            <Button
              variant="contained"
              size="small"
              onClick={() => setKycModalOpen(true)}
              sx={{ textTransform: "none", backgroundColor: "orange" }}
            >
              Verify Now
            </Button>
          )}
        </Box>
      </Box>

      {/* KYC Verification Modal */}
      <Dialog
        open={kycModalOpen}
        onClose={() => setKycModalOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Upload Verification Document</DialogTitle>
        <DialogContent>
          <Typography mb={2}>
            Please upload your Passport or National ID for verification.
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            label="Document Name"
            sx={{ mb: 3 }}
          />
          <Button variant="outlined" startIcon={<Upload />} component="label">
            Upload File
            <input type="file" hidden />
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setKycModalOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button
            sx={{ backgroundColor: "orange" }}
            onClick={handleKycVerification}
            variant="contained"
          >
            Verify
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProfileContent;
