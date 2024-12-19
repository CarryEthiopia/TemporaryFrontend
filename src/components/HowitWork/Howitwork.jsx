// src/components/HowitWorks/Howitworks.jsx
import React from "react";
import Steps from "./Steps"; // Import the Steps component

const Howitworks = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-16 lg:px-32">
      <div className="text-center space-y-6">
        <h2 className="text-5xl font-bold text-gray-800">
          How it <span className="text-orange-600">Works</span>
        </h2>
        <div className="w-24 mx-auto mt-4 mb-6">
          <hr className="border-t-4 border-orange-600" />
        </div>
        <p className="text-lg text-gray-600">
          Follow these simple steps to start using our platform and get your
          deliveries managed in no time!
        </p>
      </div>

      {/* Steps Component */}
      <div className="mt-12 max-w-3xl mx-auto">
        <Steps />
      </div>
    </div>
  );
};

export default Howitworks;
