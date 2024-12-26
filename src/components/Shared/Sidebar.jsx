import React, { useState } from "react";
import {
  Home as HomeIcon,
  LocalShipping as LocalShippingIcon,
  Mail as MailIcon,
  AccountCircle as AccountCircleIcon,
  ExitToApp as ExitToAppIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Assessment as AssessmentIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import Navbar from "./Navbar";

const Sidebar = ({ setActiveComponent }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const menuItems = [
    {
      section: "Main",
      items: [
        { text: "Dashboard", icon: <DashboardIcon />, component: "Dashboard" },
        { text: "Deliveries", icon: <LocalShippingIcon />, component: "Delivery" },
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
        },
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <div
      className={`fixed left-0 top-16 h-[calc(100vh-64px)] bg-white shadow-lg transition-all duration-300 ease-in-out flex flex-col ${
        isExpanded ? "w-64" : "w-20"
      }`}
    >
      <button
        className="absolute -right-3 top-8 bg-white rounded-full p-1 shadow-md hover:shadow-lg transition-all duration-300"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <ChevronLeftIcon className="text-gray-600" fontSize="small" />
        ) : (
          <ChevronRightIcon className="text-gray-600" fontSize="small" />
        )}
      </button>

      <div className="flex-1 overflow-y-auto overflow-x-hidden px-4 py-6">
        {menuItems.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            {isExpanded && (
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
                {section.section}
              </h3>
            )}
            {section.items.map((item, index) => (
              <div
                key={index}
                onClick={() =>
                  setActiveComponent(item.component)
                }
                className={`flex items-center cursor-pointer ${
                  isExpanded ? "px-4" : "px-2"
                } py-3 mb-1 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900`}
              >
                <div>{item.icon}</div>
                {isExpanded && <span className="ml-3">{item.text}</span>}
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
