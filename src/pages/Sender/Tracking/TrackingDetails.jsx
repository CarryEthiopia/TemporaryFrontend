// components/TrackingDetails.jsx
import React from "react";

const TrackingDetails = ({ data, trackingNumber }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="border-b pb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Shipment Details
        </h2>
        <p className="text-sm text-gray-500">
          Tracking Number: {trackingNumber}
        </p>
      </div>

      <div className="mt-4 space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium text-gray-500">Status</p>
            <p className="mt-1 text-lg font-semibold text-indigo-600">
              {data.status}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">
              Estimated Delivery
            </p>
            <p className="mt-1 text-lg font-semibold text-gray-800">
              {data.estimatedDelivery}
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500">Current Location</p>
          <p className="mt-1 text-lg font-semibold text-gray-800">
            {data.currentLocation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrackingDetails;
