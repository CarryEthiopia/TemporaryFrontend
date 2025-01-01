// import React, { useState, useEffect } from "react";
// import { Grid, Snackbar, Alert } from "@mui/material";
// import { ProfileContainer } from "./StyledComponents";
// import ProfileAvatar from "./Avatar/ProfileAvatar";
// import ProfileInformation from "./Information/ProfileInformation";
// import ProfileSettings from "./Settings/ProfileSettings";
// import LoadingSpinner from "./common/LoadingSpinner";

// const Profile = () => {
//   // State
//   const [profileData, setProfileData] = useState({});
//   const [settings, setSettings] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [hasChanges, setHasChanges] = useState(false);
//   const [openSettingsDialog, setOpenSettingsDialog] = useState(false);
//   const [notification, setNotification] = useState({
//     open: false,
//     message: "",
//     severity: "info",
//   });

//   // Handlers
//   const handleImageUpload = (imageFile) => {
//     // Handle image upload logic
//   };

//   const handleInputChange = (field, value) => {
//     setProfileData((prevData) => ({
//       ...prevData,
//       [field]: value,
//     }));
//     setHasChanges(true);
//   };

//   const handleSaveChanges = () => {
//     // Save changes logic
//   };

//   const handleSettingsChange = (newSettings) => {
//     setSettings(newSettings);
//   };

//   useEffect(() => {
//     // Simulate loading and fetch profile data
//     setTimeout(() => {
//       setLoading(false);
//       setProfileData({
//         name: "John Doe",
//         email: "john.doe@example.com",
//       });
//       setSettings({
//         notifications: true,
//         theme: "light",
//       });
//     }, 1000);
//   }, []);

//   // Notification Close
//   const handleNotificationClose = () => {
//     setNotification((prev) => ({ ...prev, open: false }));
//   };

//   return (
//     <ProfileContainer>
//       {loading ? (
//         <LoadingSpinner />
//       ) : (
//         <Grid container spacing={3}>
//           {/* Avatar Section */}
//           <Grid item xs={12} md={4}>
//             <ProfileAvatar
//               profileData={profileData}
//               handleImageUpload={handleImageUpload}
//               openSettings={() => setOpenSettingsDialog(true)}
//             />
//           </Grid>

//           {/* Information Section */}
//           <Grid item xs={12} md={8}>
//             <ProfileInformation
//               profileData={profileData}
//               handleInputChange={handleInputChange}
//               handleSaveChanges={handleSaveChanges}
//               loading={loading}
//               hasChanges={hasChanges}
//             />
//           </Grid>
//         </Grid>
//       )}

//       {/* Settings Dialog */}
//       <ProfileSettings
//         open={openSettingsDialog}
//         onClose={() => setOpenSettingsDialog(false)}
//         settings={settings}
//         handleSettingsChange={handleSettingsChange}
//       />

//       {/* Notification Snackbar */}
//       <Snackbar
//         open={notification.open}
//         autoHideDuration={6000}
//         onClose={handleNotificationClose}
//       >
//         <Alert
//           onClose={handleNotificationClose}
//           severity={notification.severity}
//           sx={{ width: "100%" }}
//         >
//           {notification.message}
//         </Alert>
//       </Snackbar>
//     </ProfileContainer>
//   );
// };

// export default Profile;
