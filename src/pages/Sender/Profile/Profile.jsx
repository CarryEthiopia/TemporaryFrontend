import { Box, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
import { Edit as EditIcon, Security as SecurityIcon, Storage as StorageIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useState } from "react";
import SecuritySection from "../../../components/profile/SecuritySection";
import ProfileContent from "../../../components/profile/ProfileContent";

const ProfilePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = [
    { title: "My Profile", icon: <EditIcon />, component: <ProfileContent />},
    { title: "Security", icon: <SecurityIcon />, component: <SecuritySection /> },
    { title: "Billing", icon: <StorageIcon />, component: null },
    { title: "Data Export", icon: <StorageIcon />, component: null },
    { title: "Delete Account", icon: <DeleteIcon />, component: null },
  ];

  const [activeSection, setActiveSection] = useState(menuItems[0].component);

  const Sidebar = () => (
    <Box sx={{ width: 280, bgcolor: "white", p: 3, pt:10, borderRight: "1px solid #e0e0e0" }}>
      <Typography variant="h6" sx={{ mb: 4, fontWeight: 600 }}>
        Account Settings
      </Typography>
      {menuItems.map((item, index) => (
        <Button
          key={index}
          startIcon={item.icon}
          onClick={() => setActiveSection(item.component)}
          sx={{
            width: "100%",
            justifyContent: "flex-start",
            color: index === 0 ? "#2196f3" : "#424242",
            py: 1.5,
            mb: 1,
            textTransform: "none",
            fontWeight: 400,
            bgcolor: activeSection === item.component ? "#f5f5f5" : "transparent",
            "&:hover": {
              bgcolor: "#f5f5f5",
            },
          }}
        >
          {item.title}
        </Button>
      ))}
    </Box>
  );

  const MobileAccordion = () => (
    <Box sx={{pt:8, pb:8}}>
      {menuItems.map((item, index) => (
        <Box
          key={index}
          sx={{
            bgcolor: "white",
            mb: 2,
            p: 3,
            borderRadius: 2,
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <Button
            fullWidth
            startIcon={item.icon}
            onClick={() => setActiveSection(item.component)}
            sx={{
              justifyContent: "flex-start",
              color: "#424242",
              textTransform: "none",
              fontWeight: 500,
            }}
          >
            {item.title}
          </Button>
          {activeSection === item.component && (
            <Box sx={{ mt: 2 }}>{item.component}</Box>
          )}
        </Box>
      ))}
    </Box>
  );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f5f5f5" }}>
      {!isMobile && <Sidebar />}
      <Box sx={{ flex: 1, p: 3 }}>
        {isMobile ? <MobileAccordion /> : activeSection || <Typography>Select a section.</Typography>}
      </Box>
    </Box>
  );
};

export default ProfilePage;
