import React from "react";
import Steps from "./Steps"; // Import the Steps component

const Howitworks = () => {
  return (
    <div className="relative bg-white py-16 px-6 md:px-16 lg:px-32">
      {/* The color will cover the section at first, using the door opening animation */}
      <div className="absolute inset-0 bg-[#08094b] animate-open-door-animation z-10"></div>

      <div className="text-center space-y-6 z-20 relative">
        <h2 className="text-5xl font-bold text-gray-800">
          How it <span className="text-orange-600">Works</span>
        </h2>
        <div className="w-24 mx-auto mt-4 mb-6">
          <hr className="border-t-4 border-orange-600" />
        </div>
        <p className="text-lg text-orange-600">
          Follow these simple steps to start using our platform and get your
          deliveries managed in no time!
        </p>
      </div>

      {/* Steps Component */}
      <div className="mt-12 max-w-3xl mx-auto z-20 relative">
        <Steps />
      </div>
    </div>
  );
};

export default Howitworks;
