import React from "react";
import {
  FaBox,
  FaUser,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaShippingFast,
  FaList,
} from "react-icons/fa";

const DetailCards = ({
  title,
  buttonLabel,
  onButtonClick,
  onBack,
  deliveryData,
  statusKey,
}) => {
  const deliveries = Array.isArray(deliveryData)
    ? deliveryData
    : [deliveryData];

  const getStatusColor = (status) => {
    const statusColors = {
      Pending: "text-yellow-500",
      "In Transit": "text-blue-500",
      Delivered: "text-green-500",
      Cancelled: "text-red-500",
      Failed: "text-red-500",
    };
    return statusColors[status] || "text-gray-500";
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
          </div>

          {buttonLabel && (
            <button
              onClick={onButtonClick}
              className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md shadow-md transition-all"
            >
              {buttonLabel}
            </button>
          )}
        </div>

        {/* Delivery Cards */}
        <div className="space-y-6">
          {deliveries.map((delivery, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
            >
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-lg font-bold flex items-center gap-2 text-gray-800">
                  <FaBox className="text-orange-500" />
                  Delivery Tracking #{delivery.deliveryId}
                </h3>
              </div>

              {/* Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Traveler Info */}
                <div>
                  <p className="text-sm text-gray-500">Traveler Name</p>
                  <p className="font-medium text-gray-800">
                    {delivery.travelerName}
                  </p>
                  <p className="mt-4 text-sm text-gray-500">
                    Travel Destination
                  </p>
                  <p className="font-medium text-gray-800">
                    {delivery.travelDestination}
                  </p>
                </div>

                {/* Status & Date */}
                <div>
                  <p className="text-sm text-gray-500">
                    {statusKey || "Status"}
                  </p>
                  <p
                    className={`font-medium ${getStatusColor(delivery.status)}`}
                  >
                    {delivery.status}
                  </p>
                  <p className="mt-4 text-sm text-gray-500">
                    Expected Delivery
                  </p>
                  <p className="font-medium text-gray-800">
                    {delivery.expectedDeliveryDate}
                  </p>
                </div>
              </div>

              {/* Items */}
              <div className="mt-6">
                <h4 className="text-gray-800 font-semibold mb-2">Items</h4>
                <ul className="list-disc list-inside text-gray-700">
                  {delivery.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Shipping Details */}
              <div className="mt-6">
                <h4 className="text-gray-800 font-semibold mb-2">
                  Shipping Details
                </h4>
                <p className="text-gray-700">{delivery.shippingDetails}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailCards;
