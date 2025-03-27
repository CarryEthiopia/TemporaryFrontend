// src/pages/LandingPage.jsx

import  { useState } from "react";
import Navbar from "../../components/Landing/Navbar";
import Footer from "../../components/Landing/Footer";
import Home from "../../components/Landing/Hero"; // Import the Home component
import About from "../../components/Landing/About/About"; // Import the About component
import Howitworks from "../../components/Landing/HowitWork/Howitwork";
import Question from "../../components/Landing/Question/Questions";

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="bg-blue-50">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Home /> {/* Use the Home component here */}
      <About /> {/* Use the About component here */}
      <Howitworks />
      {/* <WhatWeOffer />
      <Testimony /> */}
      <Question />
      {/* <Team /> */}
      {/* <Ready /> */}
      <Footer />
    </div>
  );
};

export default LandingPage;
