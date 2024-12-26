import React from "react";

const Status = ({ travelers }) => {
  return (
    <div className="mt-12 p-6 bg-white rounded-lg shadow-lg ml-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Updates</h2>

      {/* Search bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by destination..."
          className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-orange-500"
        />
      </div>

      {/* Table-like layout for travelers */}
      <div className="grid gap-6">
        {/* Table header */}
        <div className="hidden md:grid grid-cols-3 gap-4 text-gray-700 font-semibold text-lg border-b border-gray-200 pb-2">
          <div>Available Traveler</div>
          <div>Destination</div>
          <div>Flight Time</div>
        </div>

        {/* Traveler details */}
        {travelers.map((traveler, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-4 border border-gray-200 rounded-lg shadow-sm"
          >
            {/* Available Traveler */}
            <div className="flex items-center space-x-3">
              <img
                src={traveler.profileImage}
                alt={traveler.name}
                className="w-10 h-10 rounded-full"
              />
              <span className="font-medium text-gray-800">{traveler.name}</span>
            </div>

            {/* Destination */}
            <div className="text-gray-600">{traveler.destination}</div>

            {/* Flight Time */}
            <div className="text-gray-600">{traveler.flightTime}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Status;
