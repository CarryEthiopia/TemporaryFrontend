import React from "react";
import { Chat, ThumbUp, Verified } from "@mui/icons-material";

const Card = ({
  travelerName,
  travelDestination,
  deliveryId,
  items,
  date,
  route,
  stats,
  isVerified,
  status,
  cancelledOn,
  onViewDetail,
  type, // 'process', 'delivered', 'cancelled'
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Section with Profile */}
        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
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
                ${status === "active" ? "bg-green-500" : "bg-red-500"}`}
            />
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold">{travelerName}</span>
              {isVerified && (
                <Verified className="text-blue-500" fontSize="small" />
              )}
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Chat className="mr-1" fontSize="small" />
              <span>
                {route} - {date}
              </span>
            </div>
          </div>
        </div>

        {/* Right Section with Stats (Only for delivered type) */}
        {type === "delivered" && (
          <div className="mt-4 sm:mt-0 lg:flex lg:space-x-4">
            <div className="flex items-center space-x-1">
              <span className="text-gray-600">Delivered:</span>
              <span className="font-semibold">{stats.delivered}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-gray-600">Completion:</span>
              <span className="font-semibold">{stats.completion}%</span>
            </div>
            <div className="flex items-center space-x-1">
              <ThumbUp className="text-green-500" fontSize="small" />
              <span className="font-semibold">{stats.rating}%</span>
            </div>
          </div>
        )}
      </div>

      {/* Delivery Details */}
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <p className="font-medium text-gray-600">ID: {deliveryId}</p>
          {type === "cancelled" && (
            <p className="text-red-500 font-medium">
              Cancelled on: {cancelledOn}
            </p>
          )}
        </div>
        <div className="flex flex-wrap items-center mt-2">
          {items.map((item, index) => (
            <span key={index} className="text-gray-500 text-sm mr-4 mb-2">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* View Button */}
      <div className="mt-4 flex justify-end">
        <button
          onClick={onViewDetail} // Add onClick to navigate
          className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default Card;
