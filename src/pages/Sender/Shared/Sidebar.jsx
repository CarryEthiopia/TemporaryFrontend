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
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Sidebar = ({ setActiveComponent }) => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 640);
  const [activeItem, setActiveItem] = useState(null);

  const handleLogout = () => {
    navigate("/");
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    {
      section: "Main",
      items: [
        {
          text: "Dashboard",
          icon: <DashboardIcon />,
          component: "Dashboard",
          color: "text-blue-600",
        },
        {
          text: "Deliveries",
          icon: <LocalShippingIcon />,
          component: "Delivery",
          color: "text-green-600",
        },
      ],
    },
    {
      section: "Communication",
      items: [
        {
          text: "Messages",
          icon: <MailIcon />,
          component: "Messages",
          color: "text-purple-600",
        },
        {
          text: "Team",
          icon: <PeopleIcon />,
          component: "Team",
          color: "text-indigo-600",
        },
      ],
    },
    {
      section: "Analytics",
      items: [
        {
          text: "Reports",
          icon: <AssessmentIcon />,
          component: "Reports",
          color: "text-orange-600",
        },
        {
          text: "Statistics",
          icon: <HomeIcon />,
          component: "Statistics",
          color: "text-yellow-600",
        },
      ],
    },
    {
      section: "Account",
      items: [
        {
          text: "Profile",
          icon: <AccountCircleIcon />,
          component: "Profile",
          color: "text-cyan-600",
        },
        {
          text: "Settings",
          icon: <SettingsIcon />,
          component: "Settings",
          color: "text-gray-600",
        },
        {
          text: "Logout",
          icon: <ExitToAppIcon />,
          component: "Logout",
          color: "text-red-600",
          onClick: handleLogout,
        },
      ],
    },
  ];

  return (
    <div className="relative">
      <Navbar />
      <div
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white shadow-xl transition-all duration-300 ease-in-out flex flex-col border-r border-gray-200 ${
          isCollapsed ? "w-20" : "w-64"
        }`}
      >
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute -right-3 top-4 bg-white rounded-full p-1 shadow-md border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
        >
          {isCollapsed ? (
            <MenuIcon className="text-gray-600 w-5 h-5" />
          ) : (
            <ChevronLeftIcon className="text-gray-600 w-5 h-5" />
          )}
        </button>

        <div className="flex-1 overflow-y-auto overflow-x-hidden px-4 py-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {menuItems.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-8">
              {!isCollapsed && (
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
                  {section.section}
                </h3>
              )}
              {section.items.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    if (item.onClick) {
                      item.onClick();
                    } else {
                      setActiveComponent(item.component);
                      setActiveItem(item.component);
                    }
                  }}
                  className={`flex items-center cursor-pointer p-3 mb-2 rounded-lg transition-all duration-200 ease-in-out
                    ${
                      activeItem === item.component
                        ? "bg-gray-100 shadow-sm"
                        : "hover:bg-gray-50"
                    }
                    ${item.color}
                    ${item.text === "Logout" ? "mt-4" : ""}
                    group
                  `}
                >
                  <div
                    className={`
                    ${!isCollapsed ? "mr-3" : "mx-auto"}
                    transition-transform duration-200 ease-in-out
                    group-hover:scale-110
                    ${
                      activeItem === item.component ? "transform scale-110" : ""
                    }
                  `}
                  >
                    {item.icon}
                  </div>
                  {!isCollapsed && (
                    <span
                      className={`font-medium truncate transition-colors duration-200
                      ${activeItem === item.component ? "font-semibold" : ""}
                    `}
                    >
                      {item.text}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Margin right for content */}
      <div
        className={`${
          isCollapsed ? "ml-20" : "ml-64"
        } transition-all duration-300 ease-in-out`}
      >
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default Sidebar;
