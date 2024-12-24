// components/Delivery.jsx
import React, { useState } from "react";
import Navbar from "../../components/Shared/Navbar";
import Sidebar from "../../components/Shared/Sidebar";
import Process from "./Process"; // Importing the Process component
import Delivered from "./Delivered"; // Importing the Delivered component
import Cancelled from "./Cancelled"; // Importing the Cancelled component

const Delivery = () => {
  const [activeTab, setActiveTab] = useState("Processing");

  return (
    <div className="flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 ml-16 mt-20 p-6">
        {/* Navbar */}
        <Navbar />

        <div className="mt-6 ml-20">
          {/* Status Section */}
          <div className="flex space-x-6 mb-4">
            <button
              className={`px-4 py-2 font-semibold ${
                activeTab === "Processing"
                  ? "bg-orange-500 text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setActiveTab("Processing")}
            >
              Processing
            </button>
            <button
              className={`px-4 py-2 font-semibold ${
                activeTab === "Delivered"
                  ? "bg-orange-500 text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setActiveTab("Delivered")}
            >
              Delivered
            </button>
            <button
              className={`px-4 py-2 font-semibold ${
                activeTab === "Cancelled"
                  ? "bg-orange-500 text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setActiveTab("Cancelled")}
            >
              Cancelled
            </button>
          </div>

          {/* Content Based on Active Tab */}
          {activeTab === "Processing" && <Process />}
          {activeTab === "Delivered" && <Delivered />}
          {activeTab === "Cancelled" && <Cancelled />}
        </div>
      </div>
    </div>
  );
};

export default Delivery;
