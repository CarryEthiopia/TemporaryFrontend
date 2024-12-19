import React from "react";
import { CheckCircle } from "@mui/icons-material"; // MUI CheckCircle icon
import person from "../assets/person.jpeg"; // Your image for the circular section
import backgroundImage from "../assets/person2.jpeg"; // Your background image

const WhatWeOffer = () => {
  return (
    <div
      className="py-12 px-6 bg-cover bg-center shadow-lg mt-12"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use the imported background image here
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center bg-opacity-60 bg-black">
        {/* Left Section */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-3xl font-semibold text-white">What We Offer</h2>
          <ul className="space-y-4">
            {/* Offer 1 */}
            <li className="flex items-center justify-center lg:justify-start space-x-4">
              <div className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center rounded-md">
                <CheckCircle />
              </div>
              <p className="text-xl text-white">
                Secure Deliveries - Verified Travelers and encrypted payments.
              </p>
            </li>
            {/* Offer 2 */}
            <li className="flex items-center justify-center lg:justify-start space-x-4">
              <div className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-md">
                <CheckCircle />
              </div>
              <p className="text-xl text-white">
                Transparent Pricing - No Hidden fees, clear quotes, and
                weight-based costs.
              </p>
            </li>
            {/* Offer 3 */}
            <li className="flex items-center justify-center lg:justify-start space-x-4">
              <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-md">
                <CheckCircle />
              </div>
              <p className="text-xl text-white">
                Global Coverage - Connecting You with travelers worldwide
              </p>
            </li>
          </ul>
        </div>

        {/* Horizontal Divider Line */}
        <div className="hidden lg:block w-1 bg-gray-500 h-full mx-12"></div>

        {/* Right Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center items-center">
          <div className="relative w-72 h-72 bg-white rounded-full shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-60"></div>
            <img
              src={person}
              alt="Offer Image"
              className="w-full h-full object-cover object-center rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
