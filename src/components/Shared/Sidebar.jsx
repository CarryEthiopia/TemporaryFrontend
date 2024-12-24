import React from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MailIcon from "@mui/icons-material/Mail";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Sidebar = () => {
  const navigate = useNavigate(); // Hook for navigation

  const menuItems = [
    { text: "Home", icon: <HomeIcon fontSize="medium" />, path: "/home" },
    {
      text: "Delivery",
      icon: <LocalShippingIcon fontSize="medium" />,
      path: "/delivery", // This path will navigate to the Delivery page
    },
    {
      text: "Messages",
      icon: <MailIcon fontSize="medium" />,
      path: "/messages",
    },
    {
      text: "Profile",
      icon: <AccountCircleIcon fontSize="medium" />,
      path: "/profile",
    },
    {
      text: "Logout",
      icon: <ExitToAppIcon fontSize="medium" />,
      style: "text-red-500",
      path: "/logout", // You may implement logout functionality here
    },
  ];

  return (
    <div
      className="h-full shadow-lg flex flex-col justify-between py-6 px-4 fixed mt-20"
      style={{
        width: "64px", // Default for small screens (icon-only view)
        transition: "width 0.3s",
      }}
    >
      {/* Menu Items */}
      <div className="flex flex-col space-y-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-center lg:justify-start p-2 cursor-pointer hover:bg-gray-100 transition rounded-lg ${
              item.style || ""
            }`}
            onClick={() => navigate(item.path)} // Navigate to the respective path
          >
            {/* Icon */}
            <span className="text-gray-700">{item.icon}</span>
            {/* Text (hidden on small screens, visible on large screens) */}
            <span className="hidden lg:inline-block ml-3 text-gray-800 font-medium">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
