// src/pages/LandingPage.jsx

import React, { useState } from "react";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import Home from "../components/Home"; // Import the Home component
import About from "../components/About/About"; // Import the About component
import Howitworks from "../components/HowitWork/Howitwork";
import WhatWeOffer from "../components/WhatWeOffer";
import Team from "../components/Team";
import Testimony from "../components/Testimony";

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Home /> {/* Use the Home component here */}
      <Howitworks />
      <WhatWeOffer />
      <Team />
      <About /> {/* Use the About component here */}
      <Testimony/>
      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;
