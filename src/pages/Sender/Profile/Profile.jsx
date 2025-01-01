import { Avatar, Box, Typography, Grid, Button, TextField, useMediaQuery, useTheme } from "@mui/material";
import { Edit, Security, Notifications, CreditCard, Storage, Delete } from "@mui/icons-material";

const ProfilePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { title: 'My Profile', icon: <Edit />, color: '#2196f3' },
    { title: 'Security', icon: <Security />, color: '#424242' },
    { title: 'Teams', icon: <Storage />, color: '#424242' },
    { title: 'Team Member', icon: <Storage />, color: '#424242' },
    { title: 'Notifications', icon: <Notifications />, color: '#424242' },
    { title: 'Billing', icon: <CreditCard />, color: '#424242' },
    { title: 'Data Export', icon: <Storage />, color: '#424242' },
    { title: 'Delete Account', icon: <Delete />, color: '#ff3d00' }
  ];

  const DesktopLayout = () => (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f5f5f5', paddingTop: '50px' }}>
      {/* Sidebar */}
      <Box sx={{ width: 280, bgcolor: 'white', p: 3, borderRight: '1px solid #e0e0e0' }}>
        <Typography variant="h6" sx={{ mb: 4, fontWeight: 600 }}>
          Account Settings
        </Typography>
        {menuItems.map((item, index) => (
          <Button
            key={index}
            startIcon={item.icon}
            sx={{
              width: '100%',
              justifyContent: 'flex-start',
              color: item.color,
              py: 1.5,
              mb: 1,
              textTransform: 'none',
              fontWeight: index === 0 ? 600 : 400,
              bgcolor: index === 0 ? '#f5f5f5' : 'transparent',
              '&:hover': {
                bgcolor: '#f5f5f5'
              }
            }}
          >
            {item.title}
          </Button>
        ))}
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, pt: 4 }}>
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          {/* Profile Header */}
          <Box sx={{ 
            bgcolor: 'white', 
            p: 3, 
            borderRadius: 2,
            mb: 3,
            display: 'flex',
            alignItems: 'center',
            gap: 3
          }}>
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
          <Box sx={{ bgcolor: 'white', p: 3, borderRadius: 2, mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Personal Information
              </Typography>
              <Button startIcon={<Edit />} sx={{ color: '#2196f3' }}>
                Edit
              </Button>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" color="text.secondary">First Name</Typography>
                <Typography>Rafiqur</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" color="text.secondary">Last Name</Typography>
                <Typography>Rahman</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" color="text.secondary">Email address</Typography>
                <Typography>rafiqurrahman51@gmail.com</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" color="text.secondary">Phone</Typography>
                <Typography>+09 345 346 46</Typography>
              </Grid>
            </Grid>
          </Box>

          {/* Address */}
          <Box sx={{ bgcolor: 'white', p: 3, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Address
              </Typography>
              <Button startIcon={<Edit />} sx={{ color: '#2196f3' }}>
                Edit
              </Button>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" color="text.secondary">Country</Typography>
                <Typography>United Kingdom</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" color="text.secondary">City/State</Typography>
                <Typography>Leeds, East London</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" color="text.secondary">Postal Code</Typography>
                <Typography>ERT 2354</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" color="text.secondary">TAX ID</Typography>
                <Typography>AS45645756</Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  const MobileLayout = () => (
    <Box sx={{ pt: 10, pb:10 }}>
      {/* Profile Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Avatar
          src="https://via.placeholder.com/100"
          sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
        />
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Rafiqur Rahman
        </Typography>
        <Typography color="text.secondary">Team Manager</Typography>
        <Typography color="text.secondary">Leeds, United Kingdom</Typography>
      </Box>

      {menuItems.map((item, index) => (
        <Box
          key={index}
          sx={{
            bgcolor: 'white',
            p: 3,
            mb: 2,
            borderRadius: 2,
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}
        >
          <Button
            fullWidth
            startIcon={item.icon}
            sx={{
              justifyContent: 'flex-start',
              color: item.color,
              textTransform: 'none',
              fontWeight: 500
            }}
          >
            {item.title}
          </Button>
        </Box>
      ))}
    </Box>
  );

  return isMobile ? <MobileLayout /> : <DesktopLayout />;
};

export default ProfilePage;