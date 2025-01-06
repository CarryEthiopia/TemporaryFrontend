import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Tab,
  Tabs,
  Alert,
  IconButton,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import {
  AccountBalance,
  Payment as PaymentIcon,
  LocalShipping,
  AccessTime,
  Person,
  Verified,
  AccountBalanceWallet,
  Money,
  Schedule,
  Description,
  Category,
  Close as CloseIcon,
} from "@mui/icons-material";

const GetPaid = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [currentTab, setCurrentTab] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // Simulated delivery data that would come from TravelPlaceModal
  const deliveryDetails = {
    category: "Electronics",
    weight: "2.5",
    dimensions: {
      length: "30",
      width: "20",
      height: "15",
    },
    deliverySpeed: "express",
    organizationLevel: "individual",
    status: "In Progress",
    earnings: "250.00",
    deliveryId: "DEL" + Math.random().toString(36).substr(2, 9).toUpperCase(),
  };

  const [bankDetails, setBankDetails] = useState({
    accountName: "",
    accountNumber: "",
    bankName: "",
    routingNumber: "",
  });

  const handleBankDetailsChange = (e) => {
    setBankDetails({
      ...bankDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleWithdraw = async () => {
    setLoading(true);
    // Simulate withdrawal processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setShowAlert(true);
  };

  const DeliveryCard = ({ delivery }) => (
    <Card sx={{ mb: 2, border: `1px solid ${theme.palette.divider}` }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <Category color="primary" />
              <Typography variant="subtitle1">
                {delivery.category} Delivery
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              ID: {delivery.deliveryId}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box textAlign="right">
              <Typography variant="h6" color="primary">
                ${delivery.earnings}
              </Typography>
              <Chip
                size="small"
                label={delivery.status}
                color="success"
                variant="outlined"
              />
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Typography variant="body2" color="text.secondary">
              Weight: {delivery.weight} kg
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body2" color="text.secondary">
              Dimensions: {delivery.dimensions.length} ×{" "}
              {delivery.dimensions.width} × {delivery.dimensions.height} cm
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body2" color="text.secondary">
              Speed: {delivery.deliverySpeed}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1200, margin: "0 auto" }}>
      {showAlert && (
        <Alert
          severity="success"
          action={
            <IconButton size="small" onClick={() => setShowAlert(false)}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 3 }}
        >
          Withdrawal request processed successfully!
        </Alert>
      )}

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <Money /> Earnings Overview
            </Typography>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={12} sm={4}>
                <Card
                  sx={{
                    bgcolor: theme.palette.primary.light,
                    color: "white",
                    p: 2,
                  }}
                >
                  <Typography variant="subtitle2">Available Balance</Typography>
                  <Typography variant="h4">
                    ${deliveryDetails.earnings}
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card
                  sx={{
                    bgcolor: theme.palette.success.light,
                    color: "white",
                    p: 2,
                  }}
                >
                  <Typography variant="subtitle2">Total Earnings</Typography>
                  <Typography variant="h4">$1,250.00</Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card
                  sx={{
                    bgcolor: theme.palette.info.light,
                    color: "white",
                    p: 2,
                  }}
                >
                  <Typography variant="subtitle2">Pending Payments</Typography>
                  <Typography variant="h4">$180.00</Typography>
                </Card>
              </Grid>
            </Grid>

            <Typography variant="h6" gutterBottom>
              Recent Deliveries
            </Typography>
            <DeliveryCard delivery={deliveryDetails} />
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <AccountBalance /> Withdrawal Method
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Account Holder Name"
                  name="accountName"
                  value={bankDetails.accountName}
                  onChange={handleBankDetailsChange}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Bank Name"
                  name="bankName"
                  value={bankDetails.bankName}
                  onChange={handleBankDetailsChange}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Account Number"
                  name="accountNumber"
                  value={bankDetails.accountNumber}
                  onChange={handleBankDetailsChange}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Routing Number"
                  name="routingNumber"
                  value={bankDetails.routingNumber}
                  onChange={handleBankDetailsChange}
                  margin="normal"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, position: "sticky", top: 20 }}>
            <Typography variant="h6" gutterBottom>
              Withdrawal Summary
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Available Balance"
                  secondary={`$${deliveryDetails.earnings}`}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Withdrawal Fee" secondary="$0.00" />
              </ListItem>
              <Divider sx={{ my: 2 }} />
              <ListItem>
                <ListItemText
                  primary={<Typography variant="h6">Total Amount</Typography>}
                  secondary={
                    <Typography variant="h6" color="primary">
                      ${deliveryDetails.earnings}
                    </Typography>
                  }
                />
              </ListItem>
            </List>
            <Button
              variant="contained"
              fullWidth
              size="large"
              onClick={handleWithdraw}
              disabled={loading}
              startIcon={loading ? <CircularProgress size={20} /> : null}
              sx={{ mt: 2 }}
            >
              {loading ? "Processing..." : "Withdraw Funds"}
            </Button>
            <Typography
              variant="body2"
              color="text.secondary"
              align="center"
              sx={{ mt: 2 }}
            >
              Withdrawals are typically processed within 1-3 business days
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GetPaid;
