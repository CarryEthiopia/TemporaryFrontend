import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  LocalShipping as LocalShippingIcon,
  AccountCircle as AccountCircleIcon,
  ExitToApp as ExitToAppIcon,
  Dashboard as DashboardIcon,
  Assessment as AssessmentIcon,
  FlightTakeoff as FlightTakeoffIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Sidebar = ({ TsetActiveComponent }) => {
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
      id: "TDashboard",
      text: "Dashboard",
      icon: <DashboardIcon />,
      component: "TDashboard",
    },
    {
      id: "TDelivery",
      text: "Deliveries",
      icon: <LocalShippingIcon />,
      component: "TDelivery",
    },
    {
      id: "TReports",
      text: "Reports",
      icon: <AssessmentIcon />,
      component: "TReports",
    },
    {
      id: "TProfile",
      text: "Profile",
      icon: <AccountCircleIcon />,
      component: "TProfile",
    },
    {
      id: "Logout",
      text: "Logout",
      icon: <ExitToAppIcon />,
      onClick: () => navigate("/"),
    },
    {
      id: "GoToSender",
      text: " Sender",
      icon: <FlightTakeoffIcon />,
      onClick: () => navigate("/home"),
      style: {
        backgroundColor: "#F0F4FF",
        border: "1px solid #2E5CFF",
        borderRadius: "8px",
        color: "#2E5CFF",
      },
    },
  ];

  const MenuItem = ({ item }) => {
    const handleClick = () => {
      if (item.onClick) {
        item.onClick();
      } else {
        TsetActiveComponent(item.component);
        setActiveItem(item.id);
      }
    };

    const isActive = activeItem === item.id;

    return (
      <div
        onClick={handleClick}
        className={`flex items-center cursor-pointer rounded-lg transition-all duration-200
        ${isActive ? "bg-white shadow-sm" : "hover:bg-gray-50"}
        ${isMobile ? "flex-col p-1.5" : "p-3 mb-2"} group`}
        style={item.style || {}}
      >
        <div
          className={`transition-transform duration-200
          group-hover:scale-110
          ${isActive ? "text-black scale-110" : "text-gray-500"}
          ${!isMobile && "mr-3"}`}
        >
          {React.cloneElement(item.icon, {
            sx: { fontSize: isMobile ? "1.25rem" : "1.5rem" },
          })}
        </div>
        <span
          className={`font-medium ${isMobile ? "text-[10px] mt-0.5" : "text-sm"}
          ${isActive ? "text-black font-semibold" : "text-gray-500"}`}
        >
          {item.text}
        </span>
      </div>
    );
  };

  MenuItem.propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
      component: PropTypes.string,
      onClick: PropTypes.func,
    }).isRequired,
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
          <div className="grid grid-cols-6 py-1.5 px-2">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div
        className={`transition-all duration-300 ${!isMobile ? "ml-64" : "ml-0"}
          ${isMobile ? "pb-16" : ""}`}
      >
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  TsetActiveComponent: PropTypes.func.isRequired,
};

export default Sidebar;
