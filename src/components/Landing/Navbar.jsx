import  { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const { isLoggedIn } = useAppContext(); 

  const handleNavigation = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      navigate("/home");
    } else {
      navigate("/signup");
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-50 bg-[#0f172a] shadow-md px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3 group cursor-pointer">
          <img
            src={logo}
            alt="Carry"
            className="w-14 h-14 rounded-lg transform group-hover:scale-105 transition-transform duration-300"
          />
          <span className="text-xl font-semibold text-white group-hover:text-blue-600 transition-colors duration-300">
            CarryEthiopia
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {["home", "about", "how-it-works", "faqs"].map((section) => (
            <button
              key={section}
              onClick={() => handleNavigation(section)}
              className={`relative px-3 py-2 text-sm font-medium tracking-wide ${
                activeSection === section
                  ? "text-white after:content-[''] after:block after:h-0.5 after:bg-blue-600 after:animate-slide-in"
                  : "text-white hover:text-blue-600"
              } transition-all duration-300`}
              aria-label={section}
            >
              {section.replace("-", " ").toUpperCase()}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white hover:text-blue-600 transition-colors duration-300"
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
          >
            <MenuIcon fontSize="medium" />
          </button>
        </div>

        {/* Get Started Button */}
        <button
          onClick={handleButtonClick}
          className="hidden md:flex items-center px-5 py-2 text-sm font-medium text-black bg-white rounded-lg hover:bg-blue-700 hover:text-white transform hover:-translate-y-0.5 transition-all duration-300"
        >
          {isLoggedIn ? "Go to Home" : "Get Started"}
        </button>
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
        className={`fixed inset-y-0 right-0 w-[280px] bg-[#0f172a] shadow-lg transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <span className="text-lg font-semibold text-white">Menu</span>
            <button
              className="text-gray-400 hover:text-white transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
            >
              <CloseIcon fontSize="medium" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6">
            {["home", "about", "how-it-works", "faqs"].map((section) => (
              <button
                key={section}
                onClick={() => handleNavigation(section)}
                className={`block px-6 py-3 text-left text-sm font-medium ${
                  activeSection === section
                    ? "text-blue-500 bg-blue-500/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                } transition-colors duration-300`}
                aria-label={section}
              >
                {section.replace("-", " ").toUpperCase()}
              </button>
            ))}
          </div>

          <div className="p-6 border-t border-gray-700">
            <button
              onClick={() => {
                handleButtonClick();
                setMenuOpen(false);
              }}
              className="w-full px-4 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              {isLoggedIn ? "Go to Home" : "Get Started"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
