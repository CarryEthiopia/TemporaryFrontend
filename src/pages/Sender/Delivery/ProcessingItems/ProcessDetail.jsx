import React from "react";
import DetailCards from "../DetailCards";

const ProcessDetail = ({ onBackToList }) => {
  // Placeholder delivery data for now
  const processDetailData = {
    travelerName: "John Doe",
    travelDestination: "Paris",
    deliveryId: "343YH3454",
    items: ["iPhone XR", "HP Laptop", "Hand Fan"],
    shippingDetails: "Shipped via UPS, tracking number: 1Z12345E0205271688",
    deliveryDate: "29/06/2023",
    status: "In-Process",
    statusColor: "text-yellow-500", // Customizable status color
  };

  // Placeholder function to simulate sending a message
  const handleMessageClick = () => {
    alert(`Message sent to ${processDetailData.travelerName}`);
  };

  return (
    <div className="bg-gray-100">
      <div className="flex-1 ml-16 lg:ml-44 mt-20 p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Processing Detail</h2>
          <button
            onClick={handleMessageClick}
            className="px-4 py-2 bg-orange-500 text-white rounded-md flex items-center"
          >
            <span className="mr-2">✉️</span> Message the Traveler
          </button>
        </div>

        {/* Back to List */}
        <div className="mb-4">
          <button
            onClick={onBackToList}
            className="flex items-center text-blue-500"
          >
            <span className="mr-2">←</span> Back to Delivery
          </button>
        </div>

        {/* Common Detail Cards Component */}
        <DetailCards deliveryData={processDetailData} />
      </div>
    </div>
  );
};

export default ProcessDetail;
