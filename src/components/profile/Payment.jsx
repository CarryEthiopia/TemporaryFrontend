import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Divider,
  Card,
  CardContent,
  Chip,
  Alert,
  Collapse,
  IconButton,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import {
  CreditCard,
  PaymentRounded,
  LocalShipping,
  Schedule,
  Info,
  Close as CloseIcon,
  CheckCircleOutline,
  AccountBalanceWallet,
  Receipt,
} from "@mui/icons-material";

const Payment = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // Simulated package data that would come from the SendPackageModal
  const packageDetails = {
    category: "Electronics",
    weight: "2.5",
    dimensions: {
      length: "30",
      width: "20",
      height: "15",
    },
    value: "500",
    deliverySpeed: "express",
    organizationLevel: "individual",
    trackingNumber:
      "TRK" + Math.random().toString(36).substr(2, 9).toUpperCase(),
  };

  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardHolder: "",
    expiry: "",
    cvv: "",
  });

  const handleCardDetailsChange = (e) => {
    setCardDetails({
      ...cardDetails,
      [e.target.name]: e.target.value,
    });
  };

  const calculateTotal = () => {
    const basePrice = parseFloat(packageDetails.weight) * 10;
    const speedMultiplier =
      packageDetails.deliverySpeed === "express" ? 1.5 : 1;
    const insurancePrice = parseFloat(packageDetails.value) * 0.01;
    return (basePrice * speedMultiplier + insurancePrice).toFixed(2);
  };

  const handlePayment = async () => {
    setLoading(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setSuccess(true);
    setShowAlert(true);
  };

  const PaymentMethodCard = ({ title, icon, value }) => (
    <Paper
      elevation={paymentMethod === value ? 3 : 1}
      sx={{
        p: 2,
        cursor: "pointer",
        border:
          paymentMethod === value
            ? `2px solid ${theme.palette.primary.main}`
            : "1px solid #e0e0e0",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: 3,
        },
      }}
      onClick={() => setPaymentMethod(value)}
    >
      <Box display="flex" alignItems="center" gap={1}>
        {icon}
        <Typography variant="subtitle1">{title}</Typography>
      </Box>
    </Paper>
  );

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1200, margin: "0 auto" }}>
      <Collapse in={showAlert}>
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => setShowAlert(false)}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Payment processed successfully! Your tracking number is{" "}
          {packageDetails.trackingNumber}
        </Alert>
      </Collapse>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <Receipt /> Package Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" color="text.secondary">
                  Category
                </Typography>
                <Typography variant="body1">
                  {packageDetails.category}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" color="text.secondary">
                  Weight
                </Typography>
                <Typography variant="body1">
                  {packageDetails.weight} kg
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="text.secondary">
                  Dimensions
                </Typography>
                <Typography variant="body1">
                  {packageDetails.dimensions.length} ×{" "}
                  {packageDetails.dimensions.width} ×{" "}
                  {packageDetails.dimensions.height} cm
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Chip
                  icon={<Schedule />}
                  label={`${
                    packageDetails.deliverySpeed.charAt(0).toUpperCase() +
                    packageDetails.deliverySpeed.slice(1)
                  } Delivery`}
                  color="primary"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <PaymentRounded /> Payment Method
            </Typography>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={12} sm={6}>
                <PaymentMethodCard
                  title="Credit Card"
                  icon={
                    <CreditCard
                      color={
                        paymentMethod === "credit_card" ? "primary" : "action"
                      }
                    />
                  }
                  value="credit_card"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <PaymentMethodCard
                  title="Digital Wallet"
                  icon={
                    <AccountBalanceWallet
                      color={paymentMethod === "wallet" ? "primary" : "action"}
                    />
                  }
                  value="wallet"
                />
              </Grid>
            </Grid>

            {paymentMethod === "credit_card" && (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Card Number"
                    name="cardNumber"
                    value={cardDetails.cardNumber}
                    onChange={handleCardDetailsChange}
                    placeholder="1234 5678 9012 3456"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Card Holder Name"
                    name="cardHolder"
                    value={cardDetails.cardHolder}
                    onChange={handleCardDetailsChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    label="Expiry Date"
                    name="expiry"
                    value={cardDetails.expiry}
                    onChange={handleCardDetailsChange}
                    placeholder="MM/YY"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    label="CVV"
                    name="cvv"
                    value={cardDetails.cvv}
                    onChange={handleCardDetailsChange}
                    type="password"
                  />
                </Grid>
              </Grid>
            )}
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, position: "sticky", top: 20 }}>
            <Typography variant="h6" gutterBottom>
              Order Summary
            </Typography>
            <Box sx={{ my: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Typography color="text.secondary">Shipping Cost</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography align="right">
                    ${(parseFloat(packageDetails.weight) * 10).toFixed(2)}
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography color="text.secondary">Insurance</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography align="right">
                    ${(parseFloat(packageDetails.value) * 0.01).toFixed(2)}
                  </Typography>
                </Grid>
                {packageDetails.deliverySpeed === "express" && (
                  <>
                    <Grid item xs={8}>
                      <Typography color="text.secondary">
                        Express Fee
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography align="right">+50%</Typography>
                    </Grid>
                  </>
                )}
              </Grid>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography variant="h6">Total</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6" align="right">
                  ${calculateTotal()}
                </Typography>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              fullWidth
              size="large"
              sx={{ mt: 3 }}
              onClick={handlePayment}
              disabled={loading || success}
              startIcon={
                loading ? (
                  <CircularProgress size={20} />
                ) : success ? (
                  <CheckCircleOutline />
                ) : null
              }
            >
              {loading
                ? "Processing..."
                : success
                ? "Paid Successfully"
                : `Pay $${calculateTotal()}`}
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Payment;
