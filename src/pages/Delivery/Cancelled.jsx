import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const Cancelled = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const cancelledData = [
    {
      travelerName: "John Doe",
      travelDestination: "Paris",
      deliveryId: "343YH3454",
      cancelledOn: "25/06/2023", // Added "Cancelled On" date
      items: ["iPhone XR", "HP Laptop", "Hand Fan"],
    },
    {
      travelerName: "Jane Smith",
      travelDestination: "New York",
      deliveryId: "234AB789",
      cancelledOn: "26/06/2023", // Added "Cancelled On" date
      items: ["MacBook Pro", "Wireless Headphones", "Smartwatch"],
    },
    {
      travelerName: "Alice Johnson",
      travelDestination: "Tokyo",
      deliveryId: "987GH456",
      cancelledOn: "27/06/2023", // Added "Cancelled On" date
      items: ["Nintendo Switch", "Camera", "Travel Adapter"],
    },
  ];

  // Function to handle navigation
//   const handleViewClick = (deliveryId) => {
//     navigate("/cancelled-detail"); // Navigate to the CancelledDetail page with the deliveryId
//   };

  return (
    <div>
      {/* Loop through cancelledData */}
      {cancelledData.map((delivery, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-4 mb-4">
          <div className="flex items-center">
            {/* Profile Image */}
            <img
              src="https://via.placeholder.com/40"
              alt="Traveler"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">{delivery.travelerName}</p>
              <p className="text-sm text-gray-500">
                Traveling to: {delivery.travelDestination}
              </p>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <p className="font-medium">Delivery ID: {delivery.deliveryId}</p>
              <p className="text-red-500 font-medium">
                Cancelled on: {delivery.cancelledOn}
              </p>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-red-500 text-sm mr-2">•</span>
              {delivery.items.map((item, index) => (
                <span key={index} className="text-red-500 text-sm mr-4">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* View Button */}
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => navigate("/cancelled-detail")} // Add onClick to navigate
              className="px-4 py-2 bg-orange-500 text-white rounded-md"
            >
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cancelled;
