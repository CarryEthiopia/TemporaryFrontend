import React, { useState } from "react";
import { Avatar, Button, Input, Typography } from "@mui/material";

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [profileName, setProfileName] = useState("John Doe");
  const [username, setUsername] = useState("@john_doe");
  const [userId, setUserId] = useState("8473HG4U8");
  const [status, setStatus] = useState("On duty");
  const [aboutMe, setAboutMe] = useState(
    "I am a dedicated professional in tech."
  );
  const [hasChanges, setHasChanges] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "profileName":
        setProfileName(value);
        break;
      case "aboutMe":
        setAboutMe(value);
        break;
      default:
        break;
    }

    setHasChanges(true);
  };

  const handleSaveChanges = () => {
    console.log("Changes saved");
    setHasChanges(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 64px)", // Adjust height considering navbar height
        paddingLeft: "240px",
        marginTop:"50px", // Adjust padding for the sidebar width
        backgroundColor: "#f5f5f5", // Optional background color
      }}
    >
      <div className="max-w-4xl w-full bg-gray-200 rounded-lg shadow-lg p-6">
        <div className="flex flex-col items-start space-y-6">
          <div className="flex items-center space-x-4">
            <Avatar
              src={profileImage || "https://via.placeholder.com/150"}
              alt="Profile Picture"
              sx={{ width: 100, height: 100 }}
              className="border-2 border-gray-300"
            />
            <div className="flex flex-col items-start space-y-2">
              <Button
                variant="outlined"
                color="primary"
                onClick={() => alert("Change Profile Picture")}
                className="w-full"
              >
                Change Picture
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => alert("Delete Profile Picture")}
                className="w-full"
              >
                Delete Picture
              </Button>
            </div>
          </div>
          <div className="w-full">
            <div className="space-y-2">
              <Typography variant="h6" className="font-semibold">
                Profile Name
              </Typography>
              <Input
                name="profileName"
                value={profileName}
                onChange={handleInputChange}
                fullWidth
                className="bg-gray-100 p-3 rounded-lg"
              />
            </div>
            <div className="space-y-2 mt-4">
              <Typography variant="h6" className="font-semibold">
                Username
              </Typography>
              <Input
                name="username"
                value={username}
                onChange={handleInputChange}
                fullWidth
                className="bg-gray-100 p-3 rounded-lg"
                disabled
              />
            </div>
            <div className="space-y-2 mt-4">
              <Typography variant="h6" className="font-semibold">
                User ID
              </Typography>
              <Typography variant="body1" className="text-gray-700">
                {userId}
              </Typography>
            </div>
            <div className="space-y-2 mt-4">
              <Typography variant="h6" className="font-semibold">
                Status
              </Typography>
              <Typography variant="body1" className="text-gray-700">
                {status}
              </Typography>
            </div>
            <div className="space-y-2 mt-4">
              <Typography variant="h6" className="font-semibold">
                About Me
              </Typography>
              <Input
                name="aboutMe"
                value={aboutMe}
                onChange={handleInputChange}
                fullWidth
                multiline
                rows={4}
                className="bg-gray-100 p-3 rounded-lg"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end w-full">
            <Button
              variant="contained"
              color={hasChanges ? "primary" : "light"}
              onClick={handleSaveChanges}
              disabled={!hasChanges}
              className={`px-6 py-2 rounded-md text-white ${
                hasChanges ? "bg-blue-600" : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
