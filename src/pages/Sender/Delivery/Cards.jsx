import React from "react";
import {
  Chat,
  ThumbUp,
  Verified,
  LocalShipping,
  Schedule,
  Info,
  LocationOn,
  Inventory,
} from "@mui/icons-material";

const StatusBadge = ({ status }) => (
  <div
    className={`
    px-3 py-1 rounded-full text-sm font-medium
    ${
      status === "process"
        ? "bg-blue-100 text-blue-800"
        : status === "delivered"
        ? "bg-green-100 text-green-800"
        : "bg-red-100 text-red-800"
    }
  `}
  >
    {status.charAt(0).toUpperCase() + status.slice(1)}
  </div>
);

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
  type,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {/* Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Section */}
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden ring-2 ring-offset-2 ring-orange-500">
              <img
                src="https://via.placeholder.com/56"
                alt="Traveler"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div
              className={`
              absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white
              transition-colors duration-300
              ${status === "active" ? "bg-green-500" : "bg-red-500"}
            `}
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center space-x-2 mb-1">
              <span className="font-bold text-gray-800 hover:text-orange-500 cursor-pointer transition-colors">
                {travelerName}
              </span>
              {isVerified && (
                <Verified className="text-blue-500 transition-transform hover:scale-110" />
              )}
            </div>
            <div className="flex items-center text-gray-600 text-sm space-x-2">
              <LocationOn className="text-orange-500" fontSize="small" />
              <span>{route}</span>
            </div>
            <div className="flex items-center text-gray-600 text-sm space-x-2">
              <Schedule className="text-orange-500" fontSize="small" />
              <span>{date}</span>
            </div>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center space-x-2 mb-2">
            <LocalShipping className="text-orange-500" />
            <span className="font-medium text-gray-700">ID: {deliveryId}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Inventory className="text-orange-500" />
            <div className="flex flex-wrap gap-2">
              {items.map((item, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600 hover:bg-orange-100 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col justify-center">
          <StatusBadge status={type} />

          {type === "delivered" && (
            <div className="mt-3 grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg">
                <LocalShipping className="text-orange-500" />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">Delivered</span>
                  <span className="font-semibold">{stats.delivered}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg">
                <ThumbUp className="text-orange-500" />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">Rating</span>
                  <span className="font-semibold">{stats.rating}%</span>
                </div>
              </div>
            </div>
          )}

          {type === "cancelled" && (
            <div className="mt-2 text-red-500 font-medium flex items-center space-x-2">
              <Info fontSize="small" />
              <span>Cancelled on: {cancelledOn}</span>
            </div>
          )}
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Chat className="text-orange-500 cursor-pointer hover:scale-110 transition-transform" />
          <span className="text-sm text-gray-600">Contact Traveler</span>
        </div>
        <button
          onClick={onViewDetail}
          className="px-6 py-2 bg-orange-500 text-white rounded-lg font-medium
            hover:bg-orange-600 active:bg-orange-700 
            transform transition-all duration-300
            hover:shadow-lg hover:-translate-y-0.5
            focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
