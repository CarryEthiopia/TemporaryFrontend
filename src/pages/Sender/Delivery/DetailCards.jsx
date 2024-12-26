import React from "react";

const DetailCards = ({
  title,
  buttonLabel,
  onButtonClick,
  onBack,
  deliveryData,
  statusKey,
}) => {
  // Ensure deliveryData is an array for consistent processing
  const deliveries = Array.isArray(deliveryData)
    ? deliveryData
    : [deliveryData];

  return (
    <div className="bg-gray-100">
      <div className="flex-1 ml-16 lg:ml-44 mt-20 p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          {buttonLabel && (
            <button
              onClick={onButtonClick}
              className="px-4 py-2 bg-orange-500 text-white rounded-md flex items-center"
            >
              <span className="mr-2">✉️</span> {buttonLabel}
            </button>
          )}
        </div>
       

        {/* Delivery Details Section */}
        {deliveries.map((delivery, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-lg mb-2">Delivery Tracking</h3>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1 mb-4 md:mb-0">
                <p className="font-medium">Delivery ID:</p>
                <p>{delivery.deliveryId}</p>
              </div>
              <div className="flex-1">
                <p className="font-medium">Traveler Name:</p>
                <p>{delivery.travelerName}</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1 mb-4 md:mb-0">
                <p className="font-medium">Travel Destination:</p>
                <p>{delivery.travelDestination}</p>
              </div>
              <div className="flex-1">
                <p className="font-medium">{statusKey || "Status"}:</p>
                <p className={`text-${delivery.statusColor}`}>
                  {delivery.status}
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1 mb-4 md:mb-0">
                <p className="font-medium">Items:</p>
                {delivery.items.map((item, index) => (
                  <p key={index} className="text-sm text-gray-700">
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <p className="font-medium">Shipping Details:</p>
              <p>{delivery.shippingDetails}</p>
            </div>

            <div className="mt-4">
              <p className="font-medium">Expected Delivery Date:</p>
              <p>{delivery.expectedDeliveryDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailCards;
