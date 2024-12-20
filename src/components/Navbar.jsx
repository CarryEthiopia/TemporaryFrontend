import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/logo.png";

const Navbar = ({ activeSection, setActiveSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3 group">
          <img
            src={logo}
            alt="Carry"
            className="w-14 h-14 rounded-lg transform group-hover:scale-105 transition-all duration-300"
          />
          <span className="text-xl font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            Carry Ethiopia
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
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              } transition-colors duration-300`}
            >
              {section.replace("-", " ").toUpperCase()}
              <span
                className={`absolute bottom-[-2px] left-0 w-full h-[2px] bg-blue-600 transform origin-left transition-transform duration-300 ${
                  activeSection === section ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100`}
              ></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <CloseIcon fontSize="medium" />
            ) : (
              <MenuIcon fontSize="medium" />
            )}
          </button>
        </div>

        {/* Get Started Button */}
        <button className="hidden md:flex items-center px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transform hover:translate-y-[-2px] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Get Started
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg">
          <div className="flex flex-col space-y-3 p-6">
            {["home", "about", "how-it-works", "faqs"].map((section) => (
              <button
                key={section}
                onClick={() => handleNavigation(section)}
                className={`text-sm font-medium ${
                  activeSection === section
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                } transition-colors duration-300 text-left`}
              >
                {section.replace("-", " ").toUpperCase()}
              </button>
            ))}
            <button className="mt-4 w-full px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transform hover:translate-y-[-2px] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;