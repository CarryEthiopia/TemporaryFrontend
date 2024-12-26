import React, { useState } from "react";
import {
  Home as HomeIcon,
  LocalShipping as LocalShippingIcon,
  Mail as MailIcon,
  AccountCircle as AccountCircleIcon,
  ExitToApp as ExitToAppIcon,
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Assessment as AssessmentIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "./Navbar";

const Sidebar = ({ setActiveComponent }) => {
  const navigate = useNavigate(); // Initialize navigate

  const handleLogout = () => {
    navigate("/"); // Navigate to the landing page
  };

  const menuItems = [
    {
      section: "Main",
      items: [
        { text: "Dashboard", icon: <DashboardIcon />, component: "Dashboard" },
        {
          text: "Deliveries",
          icon: <LocalShippingIcon />,
          component: "Delivery",
        },
      ],
    },
    {
      section: "Communication",
      items: [
        { text: "Messages", icon: <MailIcon />, component: "Messages" },
        { text: "Team", icon: <PeopleIcon />, component: "Team" },
      ],
    },
    {
      section: "Analytics",
      items: [
        { text: "Reports", icon: <AssessmentIcon />, component: "Reports" },
        { text: "Statistics", icon: <HomeIcon />, component: "Statistics" },
      ],
    },
    {
      section: "Account",
      items: [
        { text: "Profile", icon: <AccountCircleIcon />, component: "Profile" },
        { text: "Settings", icon: <SettingsIcon />, component: "Settings" },
        {
          text: "Logout",
          icon: <ExitToAppIcon />,
          component: "Logout",
          className: "text-red-500 hover:bg-red-50",
          onClick: handleLogout, // Add onClick handler for Logout
        },
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <div
        className="fixed left-0 top-16 h-full bg-white shadow-lg transition-all duration-300 ease-in-out flex flex-col sm:w-20 md:w-64" // Sidebar width based on screen size
      >
        <div className="flex-1 overflow-y-auto overflow-x-hidden px-4 py-6">
          {menuItems.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-6">
              {/* Render section title only if expanded */}
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4 hidden sm:block">
                {section.section}
              </h3>
              {section.items.map((item, index) => (
                <div
                  key={index}
                  onClick={() =>
                    item.text === "Logout"
                      ? handleLogout() // Call handleLogout for Logout
                      : setActiveComponent(item.component)
                  }
                  className={`flex items-center cursor-pointer py-3 mb-1 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900`}
                >
                  <div>{item.icon}</div>
                  {/* Show text if screen is medium or larger */}
                  <span className={`ml-3 hidden sm:block`}>{item.text}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
