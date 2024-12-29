import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  NotificationsOutlined,
  AccountCircle,
  NotificationsActive,
} from "@mui/icons-material";
import logo from "../../../assets/CLogo.jpeg";
import { notificationsData } from "../../Sender/FetchedData";

const Navbar = () => {
  const [activeText, setActiveText] = useState("Hi, Joshua 👋");
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications] = useState(notificationsData);

  const navigate = useNavigate();

  useEffect(() => {
    const toggleText = setInterval(() => {
      setActiveText((prev) =>
        prev === "Hi, Hojiwak 👋"
          ? "Welcome to Organization Portal"
          : "Hi, Hojiwak 👋"
      );
    }, 4000);

    return () => clearInterval(toggleText);
  }, []);

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

          {/* Profile Icon Only */}
          <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300">
            <AccountCircle className="text-gray-600" />
            <span className="text-sm text-gray-700">Joshua</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
