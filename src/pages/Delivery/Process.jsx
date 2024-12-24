import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

const Process = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const processData = [
    {
      travelerName: "John Doe",
      travelDestination: "Paris",
      deliveryId: "343YH3454",
      items: ["iPhone XR", "HP Laptop", "Hand Fan"],
    },
    {
      travelerName: "Jane Smith",
      travelDestination: "New York",
      deliveryId: "234AB789",
      items: ["MacBook Pro", "Wireless Headphones", "Smartwatch"],
    },
    {
      travelerName: "Alice Johnson",
      travelDestination: "Tokyo",
      deliveryId: "987GH456",
      items: ["Nintendo Switch", "Camera", "Travel Adapter"],
    },
  ];

  return (
    <div>
      {/* Loop through processData */}
      {processData.map((process, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-4 mb-4">
          <div className="flex items-center">
            {/* Profile Image */}
            <img
              src="https://via.placeholder.com/40"
              alt="Traveler"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">{process.travelerName}</p>
              <p className="text-sm text-gray-500">
                Traveling to: {process.travelDestination}
              </p>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="mt-4">
            <p className="font-medium">Delivery ID: {process.deliveryId}</p>
            <div className="flex items-center mt-2">
              <span className="text-green-500 text-sm mr-2">•</span>
              {process.items.map((item, index) => (
                <span key={index} className="text-green-500 text-sm mr-4">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* View Button */}
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => navigate("/process-detail")} // Navigate to ProcessDetail
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

export default Process;
