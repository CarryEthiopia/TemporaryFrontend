// components/TrackingHeader.jsx
import React from "react";

const TrackingHeader = () => {
  return (
    <header className="bg-indigo-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-2xl font-bold text-white">Package Tracking</h1>
        <p className="mt-2 text-indigo-100">
          Track your shipment status in real-time
        </p>
      </div>
    </header>
  );
};

export default TrackingHeader;
