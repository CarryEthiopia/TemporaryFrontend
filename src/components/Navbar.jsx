import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/logo.jpg";

const Navbar = ({ activeSection, setActiveSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close the menu on mobile
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 shadow-lg px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Carry"
            className="w-12 h-12 rounded-full transform hover:scale-110 transition duration-300"
          />
          <span className="text-2xl font-bold text-white hover:text-gray-200 transition">
            Carry Ethiopia
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {["home", "about", "how-it-works", "faqs"].map((section) => (
            <button
              key={section}
              onClick={() => handleNavigation(section)}
              className={`text-lg ${
                activeSection === section
                  ? "text-white font-semibold"
                  : "text-gray-200"
              } hover:text-white transition relative`}
            >
              {section.replace("-", " ").toUpperCase()}
              {activeSection === section && (
                <span className="absolute bottom-[-6px] left-0 w-full h-1 bg-white rounded-lg animate-pulse"></span>
              )}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden">
          <button className="text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <CloseIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </button>
        </div>

        {/* Get Started Button */}
        <button className="hidden md:block bg-white text-orange-600 px-6 py-2 rounded-lg hover:bg-orange-600 hover:text-white transition transform hover:scale-105">
          Get Started
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-orange-400 via-red-400 to-pink-500 shadow-lg absolute top-16 left-0 w-full px-6 py-4 flex flex-col space-y-4">
          {["home", "about", "how-it-works", "faqs"].map((section) => (
            <button
              key={section}
              onClick={() => handleNavigation(section)}
              className="text-lg text-white hover:text-gray-200 transition"
            >
              {section.replace("-", " ").toUpperCase()}
            </button>
          ))}
          <button className="bg-white text-orange-600 px-6 py-2 rounded-lg hover:bg-orange-600 hover:text-white transition transform hover:scale-105">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
