import React, { useState, useEffect } from "react";
import {
  Home as HomeIcon,
  LocalShipping as LocalShippingIcon,
  AccountCircle as AccountCircleIcon,
  ExitToApp as ExitToAppIcon,
  Dashboard as DashboardIcon,
  Assessment as AssessmentIcon,
  FlightTakeoff as FlightTakeoffIcon, // Icon for Go To Sender
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Sidebar = ({ setActiveComponent }) => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    {
      id: "Dashboard",
      text: "Dashboard",
      icon: <DashboardIcon />,
      component: "Dashboard",
    },
    {
      id: "Delivery",
      text: "Deliveries",
      icon: <LocalShippingIcon />,
      component: "Delivery",
    },
    {
      id: "Reports",
      text: "Reports",
      icon: <AssessmentIcon />,
      component: "Reports",
    },
    {
      id: "Profile",
      text: "Profile",
      icon: <AccountCircleIcon />,
      component: "Profile",
    },
    {
      id: "Logout",
      text: "Logout",
      icon: <ExitToAppIcon />,
      onClick: () => navigate("/"),
    },
    {
      id: "GoToSender",
      text: "Go To Sender",
      icon: <FlightTakeoffIcon />,
      onClick: () => navigate("/home"),
    },
  ];

  const MenuItem = ({ item }) => {
    const handleClick = () => {
      if (item.onClick) {
        item.onClick();
      } else {
        setActiveComponent(item.component);
        setActiveItem(item.id);
      }
    };

    const isActive = activeItem === item.id;

    return (
      <div
        onClick={handleClick}
        className={`flex items-center cursor-pointer rounded-lg transition-all duration-200 
          ${isActive ? "bg-white shadow-sm" : "hover:bg-gray-50"} 
          ${isMobile ? "flex-col p-2" : "p-3 mb-2"} group`}
      >
        <div
          className={`${
            !isMobile && "mr-3"
          } transition-transform duration-200 group-hover:scale-110 ${
            isActive ? "text-black scale-110" : "text-gray-500"
          }`}
        >
          {item.icon}
        </div>
        <span
          className={`${isMobile ? "text-xs mt-1" : "text-sm"} font-medium ${
            isActive ? "text-black font-semibold" : "text-gray-500"
          }`}
        >
          {item.text}
        </span>
      </div>
    );
  };

  return (
    <div className="relative">
      <Navbar />

      {/* Desktop Sidebar */}
      {!isMobile && (
        <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white shadow-lg border-r border-gray-200">
          <div className="flex flex-col p-4 space-y-2">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-40">
          <div className="grid grid-cols-6 py-2 px-4">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
