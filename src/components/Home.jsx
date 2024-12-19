import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Import Material UI CheckCircle icon

const Home = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselContent = [
    {
      title: "Send Items Worldwide Via Trusted Travelers",
      description: "Discover a secure way to send your items globally.",
      boxes: [
        "Easy Item Pickup",
        "Flexible Scheduling",
        "Affordable Rates",
        "Real-Time Tracking",
      ],
      button: "Start Sending ->",
    },
    {
      title: "Travel and Help People Send Items Worldwide",
      description: "Earn rewards and help others while traveling.",
      boxes: [
        "Earn Extra Income",
        "Meet New People",
        "Flexible Routes",
        "Trusted by Millions",
      ],
      button: "Become a Traveler ->",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselContent.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const currentContent = carouselContent[carouselIndex];

  return (
    <div
      className="bg-gray-50 min-h-screen pt-20 px-6 md:px-16 lg:px-32"
      style={{ backgroundColor: "#dbe4ee" }}
    >
      {/* Top Dots Section */}
      <div className="flex items-center justify-center space-x-2 mb-10 shadow-sm shadow-gray-200 bg-white p-3 rounded-lg w-fit mx-auto">
        <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"></div>
        <p className="text-lg font-medium text-gray-800">Simple</p>
        <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
        <p className="text-lg font-medium text-gray-800">Secure</p>
        <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
        <p className="text-lg font-medium text-gray-800">Swift</p>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-start justify-between space-y-8 md:space-y-0">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-6 pr-6">
          {/* Title and Description */}
          <div className="text-center md:text-left space-y-3">
            <h1 className="text-3xl font-bold text-gray-800">
              {currentContent.title}
            </h1>
            <p className="text-gray-600">{currentContent.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence>
              {currentContent.boxes.map((text, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center p-4 bg-white shadow-sm rounded-lg space-x-4 transition-shadow hover:shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }} // Start with low opacity and slightly scaled down
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.6, // Smooth transition duration
                      ease: "easeOut", // Smoother easing
                    },
                  }} // Scale and fade in
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    transition: {
                      duration: 0.6, // Smooth exit transition
                      ease: "easeInOut", // Ease in and out for smoother exit
                    },
                  }} // Fade out and scale down
                >
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white">
                    <CheckCircleIcon className="text-white text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {text}
                  </h3>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Action Button */}
          <div className="flex flex-col items-center mt-8 space-y-2">
            <motion.button
              className="px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" }, // Smooth hover transition
              }}
            >
              {currentContent.button}
            </motion.button>

            {/* Horizontal Line and Dot */}
            <div className="flex items-center space-x-3">
              <div
                className={`h-1 w-10 rounded-full ${
                  carouselIndex === 0 ? "bg-orange-500" : "bg-gray-300"
                } transition-all duration-300 ease-out`}
              ></div>
              <div
                className={`w-3 h-3 rounded-full ${
                  carouselIndex === 1 ? "bg-orange-500" : "bg-gray-300"
                } transition-all duration-300 ease-out`}
              ></div>
            </div>
          </div>
        </div>

        {/* Right Section (Video) */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md lg:max-w-lg bg-gray-200 shadow-xl rounded-tl-3xl rounded-br-3xl overflow-hidden">
            {/* Embed YouTube Video (No Carousel Effect) */}
            <iframe
              className="w-full h-56 md:h-72 lg:h-96"
              src="https://www.youtube.com/embed/H7kLcUM1ln0?si=imE5POY8w9VnZaEB"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
