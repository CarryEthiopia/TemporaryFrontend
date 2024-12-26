import React from "react";
import { useNavigate } from "react-router-dom";
import { Chat, ThumbUp, Verified } from "@mui/icons-material";

const Delivered = ({ onViewDetail }) => {
  const navigate = useNavigate();

  const deliveredData = [
    {
      travelerName: "John Doe",
      isVerified: true,
      status: "active",
      route: "Dubai-Ethiopia",
      date: "17-11-2024",
      deliveryId: "343YH3454",
      items: ["iPhone XR", "HP Laptop", "Hand Fan"],
      stats: {
        delivered: 128,
        completion: 97,
        rating: 90
      }
    },
    {
      travelerName: "Jane Smith", 
      isVerified: false,
      status: "inactive",
      route: "Dubai-Kenya",
      date: "18-11-2024",
      deliveryId: "234AB789",
      items: ["MacBook Pro", "Wireless Headphones", "Smartwatch"],
      stats: {
        delivered: 85,
        completion: 92,
        rating: 88
      }
    },
    {
      travelerName: "Alice Johnson",
      isVerified: true,
      status: "active", 
      route: "Dubai-Nigeria",
      date: "19-11-2024",
      deliveryId: "987GH456",
      items: ["Nintendo Switch", "Camera", "Travel Adapter"],
      stats: {
        delivered: 156,
        completion: 95,
        rating: 93
      }
    },
  ];

  return (
    <div className="">
      {deliveredData.map((delivery, index) => (
        <div key={index} className=" shadow-lg rounded-lg p-4 mb-4">
          <div className="flex justify-between">
            {/* Left Section with Profile */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <img
                    src="https://via.placeholder.com/48"
                    alt="Traveler"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div 
                  className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white
                    ${delivery.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}
                />
              </div>

              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">{delivery.travelerName}</span>
                  {delivery.isVerified && (
                    <Verified className="text-blue-500" fontSize="small" />
                  )}
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Chat className="mr-1" fontSize="small" />
                  <span>{delivery.route} - {delivery.date}</span>
                </div>
              </div>
            </div>

            {/* Right Section with Stats */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <span className="text-gray-600">Delivered:</span>
                <span className="font-semibold">{delivery.stats.delivered}</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-gray-600">Completion:</span>
                <span className="font-semibold">{delivery.stats.completion}%</span>
              </div>
              <div className="flex items-center space-x-1">
                <ThumbUp className="text-green-500" fontSize="small" />
                <span className="font-semibold">{delivery.stats.rating}%</span>
              </div>
            </div>
          </div>

          {/* Delivery Details */}
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <p className="font-medium text-gray-600">ID: {delivery.deliveryId}</p>
            </div>
            <div className="flex items-center mt-2">
              {delivery.items.map((item, index) => (
                <span key={index} className="text-gray-500 text-sm mr-4">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* View Button */}
          <div className="mt-4 flex justify-end">
            <button
               onClick={onViewDetail}
              className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
            >
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Delivered;