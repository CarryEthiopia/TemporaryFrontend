import React, { useEffect, useState } from "react";

const Steps = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
      } else {
        setAnimationDone(true);
      }
    }, 3000);

    return () => clearInterval(stepInterval);
  }, [currentStep]);

  useEffect(() => {
    if (animationDone) {
      setTimeout(() => {
        setCurrentStep(1);
        setAnimationDone(false);
      }, 5000);
    }
  }, [animationDone]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
        {/* Step 1 */}
        <div
          className={`flex-1 p-6 bg-white shadow-lg rounded-lg flex flex-col items-center space-y-4 transition-all duration-1000 ${
            currentStep >= 1 ? "opacity-100" : "opacity-0"
          } ${currentStep === 1 ? "h-full" : ""}`}
          style={{ minHeight: "250px" }} // Ensure a minimum height for the steps
        >
          <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center">
            1
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            Step 1: Submit Your Delivery Request
          </h3>
          <p className="text-gray-700">
            Provide details about your delivery needs and submit your request to
            get started.
          </p>
          
        </div>

        {/* Vertical line between steps (only for small screens) */}
        {currentStep >= 2 && (
          <div className="w-1 h-12 bg-orange-500 md:hidden"></div> // Ensure this line appears on small screens
        )}

        {/* Horizontal line between steps, visible only on large screens */}
        {currentStep >= 2 && (
          <div className="w-16 h-1 bg-orange-500 hidden md:block"></div>
        )}

        {/* Step 2 */}
        <div
          className={`flex-1 p-6 bg-white shadow-lg rounded-lg flex flex-col items-center space-y-4 transition-all duration-1000 ${
            currentStep >= 2 ? "opacity-100" : "opacity-0"
          } ${currentStep === 2 ? "h-full" : ""}`}
          style={{ minHeight: "250px" }}
        >
          <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center">
            2
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            Step 2: We Match You With a Traveler
          </h3>
          <p className="text-gray-700">
            We will connect you with a traveler who will carry your items
            securely to the destination.
          </p>

        </div>

        {/* Vertical line between steps (only for small screens) */}
        {currentStep >= 3 && (
          <div className="w-1 h-12 bg-orange-500 md:hidden"></div>
        )}

        {/* Horizontal line between steps, visible only on large screens */}
        {currentStep >= 3 && (
          <div className="w-16 h-1 bg-orange-500 hidden md:block"></div>
        )}

        {/* Step 3 */}
        <div
          className={`flex-1 p-6 bg-white shadow-lg rounded-lg flex flex-col items-center space-y-4 transition-all duration-1000 ${
            currentStep >= 3 ? "opacity-100" : "opacity-0"
          } ${currentStep === 3 ? "h-full" : ""}`}
          style={{ minHeight: "250px" }}
        >
          <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center">
            3
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            Step 3: Track & Receive Your Items
          </h3>
          <p className="text-gray-700">
            Track your items in real-time and receive them at your location with
            complete peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
