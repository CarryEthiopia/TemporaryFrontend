// components/Navbar.jsx
import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeText, setActiveText] = useState("Hi, Joshua 👋");

  const navigate = useNavigate();

  useEffect(() => {
    const toggleText = setInterval(() => {
      setActiveText((prev) =>
        prev === "Hi, Joshua 👋" ? "Welcome here to be Sender" : "Hi, Joshua 👋"
      );
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(toggleText);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-50 bg-white shadow-md px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <img
            src={logo}
            alt="Carry"
            className="w-14 h-14 rounded-lg transform transition-transform duration-300"
          />
        </div>

        {/* Center Text */}
        <div className="text-center absolute inset-x-0 top-5 text-black text-lg font-semibold transition-all duration-500">
          {activeText}
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <span className="cursor-pointer">🔔</span>
          <img
            src="profile-picture-url"
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-black hover:text-gray-700 transition-colors duration-300"
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
          >
            <MenuIcon fontSize="medium" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        className={`fixed inset-y-0 right-0 w-[280px] bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-300">
            <span className="text-lg font-semibold text-black">Menu</span>
            <button
              className="text-gray-400 hover:text-black transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
            >
              <CloseIcon fontSize="medium" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6">
            {/* Add navigation links here if needed */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
