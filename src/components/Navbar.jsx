import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = ({ activeSection, setActiveSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-50 bg-[#0f172a] shadow-sm px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3 group">
          <img
            src={logo}
            alt="Carry"
            className="w-14 h-14 rounded-lg transform group-hover:scale-105 transition-all duration-300"
          />
          <span className="text-xl font-medium text-white group-hover:text-blue-600 transition-colors duration-300">
            CarryEthiopia
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {["home", "about", "how-it-works", "faqs"].map((section) => (
            <button
              key={section}
              onClick={() => handleNavigation(section)}
              className={`relative px-2 py-1 text-sm font-medium tracking-wide ${
                activeSection === section
                  ? "text-white"
                  : "text-white hover:text-blue-600"
              } transition-colors duration-300`}
            >
              {section.replace("-", " ").toUpperCase()}
              <span
                className={`absolute bottom-[-2px] left-0 w-full h-[2px] bg-blue-600 transform origin-left transition-transform duration-300 ${
                  activeSection === section ? "scale-x-100" : "scale-x-0"
                }`}
              ></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {!menuOpen && (
            <button
              className="text-white hover:text-blue-600 transition-colors duration-300"
              onClick={() => setMenuOpen(true)}
            >
              <MenuIcon fontSize="medium" />
            </button>
          )}
        </div>

        {/* Get Started Button */}
        <button
          onClick={() => navigate("/signin")}
          className="hidden md:flex items-center px-5 py-2 text-sm font-medium text-black bg-white rounded-lg hover:bg-blue-700 hover:text-white transform hover:translate-y-[-2px] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Get Started
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-[280px] bg-[#0f172a] shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <span className="text-lg font-semibold text-white">Menu</span>
            <button
              className="text-gray-400 hover:text-white transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              <CloseIcon fontSize="medium" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto py-6">
            <div className="flex flex-col space-y-1">
              {["home", "about", "how-it-works", "faqs"].map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavigation(section)}
                  className={`px-6 py-3 text-left text-sm font-medium ${
                    activeSection === section
                      ? "text-blue-500 bg-blue-500/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  } transition-all duration-300`}
                >
                  {section.replace("-", " ").toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="p-6 border-t border-gray-700">
            <button
              onClick={() => {
                navigate("/signin");
                setMenuOpen(false);
              }}
              className="w-full px-4 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0f172a]"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;