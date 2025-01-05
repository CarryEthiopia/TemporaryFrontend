// components/TrackingSearch.jsx
import React, { useState } from "react";

const TrackingSearch = ({ onSubmit }) => {
  const [tracking, setTracking] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(tracking);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="tracking"
            className="block text-sm font-medium text-gray-700"
          >
            Tracking Number
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              type="text"
              id="tracking"
              value={tracking}
              onChange={(e) => setTracking(e.target.value)}
              className="flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter tracking number"
            />
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Track
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TrackingSearch;
