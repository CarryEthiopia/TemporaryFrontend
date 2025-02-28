import React, { useState, useEffect } from "react";
import { Menu, X, Wallet } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.png"; // Import the logo
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useAppContext } from "../../contexts/AppContext"; //Import useAppContext

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { isLoggedIn } = useAppContext(); // Get isLoggedIn from context
  const navigate = useNavigate(); //Initialize useNavigate

  const handleNavigation = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const handleButtonClick = () => {
    if (isLoggedIn) {
      navigate("/home");
    } else {
      navigate("/signup");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

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
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = ["home", "about", "how-it-works", "faqs"];

  const buttonText = isLoggedIn ? "Go to Home" : "Top Up Wallet";

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/60 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-gradient-to-b from-black/20 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer "
          >
            <img
              src={logo}
              alt="DamaDash Logo"
              style={{height:35 }}
            />
            {/* Use the imported logo */}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item}
                whileHover={{ y: -2 }}
                onClick={() => handleNavigation(item)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? activeSection === item
                      ? "text-gray-900 font-semibold"
                      : "text-gray-700 hover:text-gray-900"
                    : activeSection === item
                    ? "text-orange-300 font-semibold"
                    : "text-black hover:text-white" // Change text to black when on top
                }`}
              >
                {item.replace("-", " ").toUpperCase()}
                {activeSection === item && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
              </motion.button>
            ))}

            <motion.button
              onClick={handleButtonClick}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-2.5 bg-orange-500 text-white rounded-full font-medium shadow-lg hover:bg-orange-600 transition-colors"
              style={{
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
            >
              <Wallet size={18} />
              <span>{buttonText}</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2"
          >
            <Menu className={scrolled ? "text-gray-900" : "text-white"} />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl md:hidden"
            >
              <div className="p-5 flex justify-between items-center border-b border-gray-200">
                <span className="font-semibold text-gray-900">Menu</span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMenuOpen(false)}
                >
                  <X className="text-gray-500" />
                </motion.button>
              </div>

              <div className="py-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleNavigation(item)}
                    className={`w-full px-5 py-3 text-left text-sm font-medium transition-colors ${
                      activeSection === item
                        ? "text-orange-600 bg-orange-50"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                    }`}
                  >
                    {item.replace("-", " ").toUpperCase()}
                  </motion.button>
                ))}

                <div className="px-5 pt-4">
                  <motion.button
                    onClick={handleButtonClick}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-orange-500 text-white rounded-full font-medium shadow-lg hover:bg-orange-600 transition-colors"
                  >
                    <Wallet size={18} />
                    <span>{buttonText}</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
