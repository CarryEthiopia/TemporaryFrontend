// src/pages/LandingPage.jsx

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Hero"; // Import the Home component
import About from "../components/About/About"; // Import the About component
import Howitworks from "../components/HowitWork/Howitwork";
import WhatWeOffer from "../components/WhatWeOffer";
import Team from "../components/Team";
import Testimony from "../components/Testimony";
import Question from "../components/Question/Questions";
import Ready from "../components/Ready";

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Home /> {/* Use the Home component here */}
      <About /> {/* Use the About component here */}
      <Howitworks />
      <WhatWeOffer />
      <Testimony />
      <Question />
      <Team />
      {/* <Ready /> */}
      <Footer />
    </div>
  );
};

export default LandingPage;
