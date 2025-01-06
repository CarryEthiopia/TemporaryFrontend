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
  KeyboardArrowDown,
} from "@mui/icons-material";
import PropTypes from "prop-types"; // Import PropTypes


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
// Prop validation for StatusBadge
StatusBadge.propTypes = {
  status: PropTypes.oneOf(["process", "delivered", "cancelled"]).isRequired,
};

const Card = ({
  travelerName,
  deliveryId,
  items,
  date,
  route,
  stats,
  isVerified,
  status,
  cancelledOn,
  type,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  // Prop validation for Card
  Card.propTypes = {
    travelerName: PropTypes.string.isRequired,
    travelDestination: PropTypes.string.isRequired,
    deliveryId: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    date: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
    isVerified: PropTypes.bool.isRequired,
    status: PropTypes.oneOf(["process", "delivered", "cancelled"]).isRequired,
    cancelledOn: PropTypes.string,
    type: PropTypes.string.isRequired,
  };

  return (
    <div className="bg-white rounded-xl p-4 mb-4 transform transition-all duration-300 hover:shadow-lg">
      {/* Mobile View */}
      <div className="block md:hidden">
        <div className="flex items-center justify-between mb-4">
          {/* Profile Section */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden ring-2 ring-offset-2 ring-#0f172a">
                <img
                  src="https://via.placeholder.com/48"
                  alt="Traveler"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className={`
                absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white
                ${status === "active" ? "bg-green-500" : "bg-red-500"}
              `}
              />
            </div>

            <div>
              <div className="flex items-center space-x-1">
                <span className="font-bold text-gray-800">{travelerName}</span>
                {isVerified && <Verified className="text-blue-500 w-4 h-4" />}
              </div>
              <StatusBadge status={type} />
            </div>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-500 p-1 hover:bg-gray-100 rounded-full"
          >
            <KeyboardArrowDown
              className={`transform transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Expandable Content */}
        <div
          className={`
          overflow-hidden transition-all duration-300
          ${isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
        >
          <div className="space-y-4 pt-2 border-t">
            {/* Delivery Info */}
            <div className="flex items-center space-x-2">
              <LocalShipping className="text-#0f172a" fontSize="small" />
              <span className="text-sm text-gray-700">ID: {deliveryId}</span>
            </div>

            <div className="flex items-center space-x-2">
              <LocationOn className="text-red-500" fontSize="small" />
              <span className="text-sm text-gray-600">{route}</span>
            </div>

            <div className="flex items-center space-x-2">
              <Schedule className="text-red-500" fontSize="small" />
              <span className="text-sm text-gray-600">{date}</span>
            </div>

            {/* Items */}
            <div className="flex items-center space-x-2">
              <Inventory className="text-#0f172a" fontSize="small" />
              <div className="flex flex-wrap gap-2">
                {items.map((item, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats for Delivered Items */}
            {type === "delivered" && (
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg">
                  <LocalShipping className="text-#0f172a" fontSize="small" />
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500">Delivered</span>
                    <span className="font-semibold">{stats.delivered}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg">
                  <ThumbUp className="text-green-500" fontSize="small" />
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500">Rating</span>
                    <span className="font-semibold">{stats.rating}%</span>
                  </div>
                </div>
              </div>
            )}

            {/* Cancelled Info */}
            {type === "cancelled" && (
              <div className="text-red-500 text-sm font-medium flex items-center space-x-2">
                <Info fontSize="small" />
                <span>Cancelled on: {cancelledOn}</span>
              </div>
            )}

            {/* Contact Button */}
            <div className="flex items-center space-x-2">
              <Chat className="text-#0f172a" fontSize="small" />
              <span className="text-sm text-gray-600">Contact Traveler</span>
            </div>
          </div>
        </div>

        {/* View Details Button - Always Visible */}
        <button
          className="w-full mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg font-medium
            hover:bg-orange-500 active:bg-orange
            transform transition-all duration-300
            hover:shadow-lg
            focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          <Chat className="text-white" fontSize="small" />
          Contact Sender
        </button>
      </div>

      {/* Desktop View - Original Card Layout */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between mb-4">
          {/* Profile Section */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden ring-2 ring-offset-2 ring-#0f172a">
                <img
                  src="https://via.placeholder.com/48"
                  alt="Traveler"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className={`
            absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white
            ${status === "active" ? "bg-green-500" : "bg-red-500"}
          `}
              />
            </div>

            <div>
              <div className="flex items-center space-x-1">
                <span className="font-bold text-gray-800">{travelerName}</span>
                {isVerified && <Verified className="text-blue-500 w-4 h-4" />}
              </div>
              <StatusBadge status={type} />
            </div>
          </div>

          {/* Expand Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-500 p-1 hover:bg-gray-100 rounded-full"
          >
            <KeyboardArrowDown
              className={`transform transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Expandable Content */}
        <div
          className={`
      overflow-hidden transition-all duration-300
      ${isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
    `}
        >
          <div className="space-y-4 pt-2 border-t">
            {/* Delivery Info */}
            <div className="flex items-center space-x-2">
              <LocalShipping className="text-#0f172a" fontSize="small" />
              <span className="text-sm text-gray-700">ID: {deliveryId}</span>
            </div>

            <div className="flex items-center space-x-2">
              <LocationOn className="text-orange-500" fontSize="small" />
              <span className="text-sm text-gray-600">{route}</span>
            </div>

            <div className="flex items-center space-x-2">
              <Schedule className="text-orange-500" fontSize="small" />
              <span className="text-sm text-gray-600">{date}</span>
            </div>

            {/* Items */}
            <div className="flex items-center space-x-2">
              <Inventory className="text-#0f172a" fontSize="small" />
              <div className="flex flex-wrap gap-2">
                {items.map((item, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats for Delivered Items */}
            {type === "delivered" && (
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg">
                  <LocalShipping className="text-#0f172a" fontSize="small" />
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500">Delivered</span>
                    <span className="font-semibold">{stats.delivered}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg">
                  <ThumbUp className="text-green-500" fontSize="small" />
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500">Rating</span>
                    <span className="font-semibold">{stats.rating}%</span>
                  </div>
                </div>
              </div>
            )}

            {/* Cancelled Info */}
            {type === "cancelled" && (
              <div className="text-red-500 text-sm font-medium flex items-center space-x-2">
                <Info fontSize="small" />
                <span>Cancelled on: {cancelledOn}</span>
              </div>
            )}

            {/* Contact Button */}
            <div className="flex items-center space-x-2">
              <Chat className="text-#0f172a" fontSize="small" />
              <span className="text-sm text-gray-600">Contact Sender</span>
            </div>
          </div>
        </div>
        {/* View Details Button - Always Visible */}
        <button
          className="w-full mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg font-medium
            hover:bg-orange-500 active:bg-[#0f172a]
            transform transition-all duration-300
            hover:shadow-lg
            focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          <Chat className="text-white" fontSize="small" />
          Contact Sender
        </button>
      </div>
    </div>
  );
};

export default Card;
