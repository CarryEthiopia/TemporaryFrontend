import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  NotificationsOutlined,
  Dashboard,
  People,
  Settings,
  AccountCircle,
  BusinessCenter,
  ExitToApp,
  NotificationsActive,
} from "@mui/icons-material";
import logo from "../../../assets/CLogo.jpeg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeText, setActiveText] = useState("Hi, Joshua 👋");
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: "New message from Team", time: "5m ago", unread: true },
    { id: 2, text: "Meeting at 3 PM", time: "1h ago", unread: true },
    { id: 3, text: "Task completed", time: "2h ago", unread: false },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    const toggleText = setInterval(() => {
      setActiveText((prev) =>
        prev === "Hi, Joshua 👋"
          ? "Welcome to Organization Portal"
          : "Hi, Joshua 👋"
      );
    }, 4000);

    return () => clearInterval(toggleText);
  }, []);

  const handleLogout = () => {
    // Add logout logic here
    navigate("/signin");
  };

  const menuItems = [
    { icon: <Dashboard />, text: "Dashboard", path: "/home" },
    { icon: <People />, text: "Profile", path: "/home" },
    { icon: <BusinessCenter />, text: "Delivery", path: "/home" },
    { icon: <Settings />, text: "Report", path: "/home" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-16 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="Organization Logo"
            className="w-10 h-10 rounded-lg transform hover:scale-105 transition-transform duration-300"
          />
          <span className="text-xl font-bold text-gray-800 hidden sm:block">
            Organization
          </span>
        </div>

        {/* Center Text */}
        <div className="text-center text-gray-700 font-medium transition-all duration-500 text-sm sm:text-base">
          {activeText}
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Notifications */}
          <div className="relative">
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              {notifications.some((n) => n.unread) ? (
                <NotificationsActive className="text-blue-600" />
              ) : (
                <NotificationsOutlined className="text-gray-600" />
              )}
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 border border-gray-200">
                <div className="px-4 py-2 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-800">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`px-4 py-3 hover:bg-gray-50 cursor-pointer ${
                        notification.unread ? "bg-blue-50" : ""
                      }`}
                    >
                      <div className="flex justify-between">
                        <p className="text-sm text-gray-800">
                          {notification.text}
                        </p>
                        <span className="text-xs text-gray-500">
                          {notification.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative group">
            <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300">
              <AccountCircle className="text-gray-600" />
              <span className="text-sm text-gray-700">Joshua</span>
            </button>

            {/* Profile Dropdown */}
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-200 hidden group-hover:block">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                  onClick={() => navigate(item.path)}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </button>
              ))}
              <div className="border-t border-gray-200 mt-2 pt-2">
                <button
                  className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center space-x-2"
                  onClick={handleLogout}
                >
                  <ExitToApp />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-72 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <span className="text-lg font-semibold text-gray-800">Menu</span>
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
            >
              <CloseIcon />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="w-full px-4 py-3 text-gray-700 hover:bg-gray-100 flex items-center space-x-3"
                onClick={() => {
                  navigate(item.path);
                  setMenuOpen(false);
                }}
              >
                {item.icon}
                <span>{item.text}</span>
              </button>
            ))}
          </div>

          <div className="border-t border-gray-200 p-4">
            <button
              className="w-full px-4 py-2 text-red-600 hover:bg-gray-100 rounded-lg flex items-center space-x-2"
              onClick={handleLogout}
            >
              <ExitToApp />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
