// src/components/About.jsx

import React from "react";
import Our from "./Our"; // Import the Our component

const About = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-16 lg:px-32">
      {/* About Us Section */}
      <div className="text-center space-y-6">
        <h2 className="text-5xl font-bold text-gray-800">
          <span className="text-blue-800">About</span>{" "}
          <span className="text-orange-600">Us</span>
        </h2>
        <div className="w-24 mx-auto mt-4 mb-6">
          {/* Orange colored horizontal line */}
          <hr className="border-t-4 border-orange-600" />
        </div>

        {/* Animated Text Below */}
        <p className="text-lg space-y-4">
          <span className="inline-block animate-letter-change">
            Welcome to our platform!{" "}
          </span>
          <span className="inline-block animate-letter-change">
            We are dedicated to making shipping simple, secure, and efficient
            for everyone.
          </span>
        </p>
      </div>

      {/* Use the Our component */}
      <Our />

      {/* Optional: Add team member section, images, or other info */}
      <div className="mt-16 text-center">
        <button className="px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default About;
