import React, { useState, useEffect } from "react";
import first from "../assets/first.png";
import middle from "../assets/middle.png";
import last from "../assets/last.png";



const Ready = () => {
  // State to track the current image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of image sources
  const images = [first, middle, last];

  // Automatically change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-orange-50 py-16 text-center relative">
      <div className="mb-10">
        <h2
          className="text-4xl font-bold mb-7"
          style={{
            background: "linear-gradient(45deg, #2B2B2B 30%, #F66F1E 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Ready to Send Your Items or Earn While Travelling?
        </h2>

        <button className="bg-orange-600 text-white py-3 px-6 rounded-full text-lg transition-all duration-300 hover:bg-orange-500 mb-36">
          Get Started &gt;
        </button>
      </div>

      {/* Images for large screens */}
      <div className="hidden md:flex justify-center gap-12 mt-24">
        {/* Increased the margin-top value here */}
        <div className="w-72 h-72 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src={first}
            alt="Image 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-72 h-64 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl -mt-12">
          <img
            src={middle}
            alt="Image 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-72 h-72 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src={last}
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Carousel for small screens */}
      <div className="md:hidden relative w-full mt-24">
        {/* Increased the margin-top value here as well */}
        {/* Current image displayed */}
        <div className="w-full h-72 overflow-hidden rounded-lg shadow-lg mx-auto">
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className={`w-full ${
              currentImageIndex === 1 ? "h-64" : "h-72"
            } object-cover transition-all duration-500 ease-in-out`}
          />
        </div>
        {/* Dots below the carousel */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, index) => (
            <div
              key={index}
              className={`${
                currentImageIndex === index
                  ? "w-6 h-2 bg-orange-600 rounded-full"
                  : "w-6 h-2 bg-gray-400 rounded-full"
              } transition-all duration-300`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ready;
