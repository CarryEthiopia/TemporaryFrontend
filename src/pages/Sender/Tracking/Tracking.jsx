// Tracking.jsx
import React, { useState } from "react";
import TrackingHeader from "./TrackingHeader";
import TrackingSearch from "./TrackingSearch";
import TrackingDetails from "./TrackingDetails";
import TrackingTimeline from "./TrackingTimeline";
import TrackingMap from "./TrackingMap";

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState(null);

  const handleTrackingSubmit = (number) => {
    // Simulate API call
    setTrackingNumber(number);
    // Mock data - replace with actual API call
    setTrackingData({
      status: "In Transit",
      estimatedDelivery: "2025-01-07",
      currentLocation: "Distribution Center",
      events: [
        {
          date: "2025-01-05",
          status: "In Transit",
          location: "Distribution Center",
        },
        {
          date: "2025-01-04",
          status: "Package Processed",
          location: "Sorting Facility",
        },
        {
          date: "2025-01-03",
          status: "Package Received",
          location: "Origin Facility",
        },
      ],
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TrackingHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <TrackingSearch onSubmit={handleTrackingSubmit} />

          {trackingData && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-8">
                <TrackingDetails
                  data={trackingData}
                  trackingNumber={trackingNumber}
                />
                <TrackingTimeline events={trackingData.events} />
              </div>
              <TrackingMap location={trackingData.currentLocation} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tracking;
