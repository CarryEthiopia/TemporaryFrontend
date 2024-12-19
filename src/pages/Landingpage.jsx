import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Hero Section */}
      <section
        id="home"
        className="text-center py-20 bg-gradient-to-b from-white/70 via-gray-50 to-gray-100 shadow-md backdrop-blur-lg"
      >
        <h1 className="text-4xl font-bold text-gray-800">
          Connect Travelers & Package Senders Seamlessly
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Safely send packages with trusted travelers heading to your
          destination.
        </p>
        <button className="mt-6 px-8 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
          Get Started
        </button>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 bg-white/60 shadow-md backdrop-blur-lg rounded-md mx-6 md:mx-16 lg:mx-32"
      >
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
          About Us
        </h2>
        <p className="text-gray-600 text-center px-6 md:px-12">
          We connect travelers with people who need to send packages quickly and
          securely.
        </p>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-16 bg-white/60 shadow-md backdrop-blur-lg rounded-md mx-6 md:mx-16 lg:mx-32"
      >
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
          How It Works
        </h2>
        <p className="text-gray-600 text-center px-6 md:px-12">
          Post your package and find travelers heading to your destination.
        </p>
      </section>

      {/* FAQs Section */}
      <section
        id="faqs"
        className="py-16 bg-white/60 shadow-md backdrop-blur-lg rounded-md mx-6 md:mx-16 lg:mx-32"
      >
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
          FAQs
        </h2>
        <p className="text-gray-600 text-center px-6 md:px-12">
          Find answers to the most common questions.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
