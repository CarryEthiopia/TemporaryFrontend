// src/components/Home.jsx

import React, { useState, useEffect } from "react";
import city from "../assets/city.jpeg"; // Import your image

const Home = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselMessages = [
    {
      title: "Sender Items Worldwide Via Trusted Travelers",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      button: "Start Sending ->",
    },
    {
      title: "Travel and Help People Send Items Worldwide",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      button: "Become a Traveler ->",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex(
        (prevIndex) => (prevIndex + 1) % carouselMessages.length
      );
    }, 5000); // Change message every 5 seconds
    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Small dot and text */}
      <div className="flex items-center justify-center space-x-2 mb-10">
        <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"></div>
        <p className="text-lg font-medium text-gray-800">
          Simple. Secure. Swift.
        </p>
      </div>

      {/* Hero Section with Two Parts */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-20 bg-white shadow-md rounded-lg mx-6 md:mx-16 lg:mx-32">
        {/* Left Section */}
        <div className="flex flex-col w-full md:w-1/2 space-y-6">
          <div className="text-center md:text-left space-y-3">
            <h1 className="text-3xl font-bold text-gray-800">
              {carouselMessages[carouselIndex].title}
            </h1>
            <p className="text-gray-600">
              {carouselMessages[carouselIndex].description}
            </p>
          </div>

          {/* Boxes Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((_, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-xl"
              >
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white mb-3">
                  <i className="fas fa-check"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Safe & Secure Delivery
                </h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
              </div>
            ))}
            {[3, 4].map((_, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-xl"
              >
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white mb-3">
                  <i className="fas fa-check"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Verified Traveler
                </h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex items-center justify-center mt-8">
            <button className="px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
              {carouselMessages[carouselIndex].button}
            </button>
            <div className="w-2 h-2 rounded-full bg-gray-500 mx-3"></div>
            <div className="h-1 w-16 bg-gray-300"></div>
          </div>
        </div>

        {/* Right Section (Video) */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className="relative w-full h-64 md:h-full bg-gray-200 rounded-lg">
            {/* Placeholder for Video */}
            <div className="absolute inset-0 bg-gray-400 flex items-center justify-center text-white font-bold">
              Video Placeholder
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
