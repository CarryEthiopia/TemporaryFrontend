import React from "react";
import DetailCards from "../DetailCards";

const CancelledDetail = ({ onBackToList }) => {
  // Placeholder cancelled delivery data for now
  const cancelledDataList = [
    {
      travelerName: "John Doe",
      travelDestination: "Paris",
      deliveryId: "343YH3454",
      cancelledOn: "25/06/2023", // Added "Cancelled On" date
      items: ["iPhone XR", "HP Laptop", "Hand Fan"],
      cancellationReason: "Customer request",
      expectedDeliveryDate: "26/06/2023",
      status: "Cancelled",
      statusColor: "text-red-500", // Customizable status color
    },
    {
      travelerName: "Jane Smith",
      travelDestination: "New York",
      deliveryId: "234AB789",
      cancelledOn: "26/06/2023", // Added "Cancelled On" date
      items: ["MacBook Pro", "Wireless Headphones", "Smartwatch"],
      cancellationReason: "Insufficient address details",
      expectedDeliveryDate: "27/06/2023",
      status: "Cancelled",
      statusColor: "text-red-500", // Customizable status color
    },
    {
      travelerName: "Alice Johnson",
      travelDestination: "Tokyo",
      deliveryId: "987GH456",
      cancelledOn: "27/06/2023", // Added "Cancelled On" date
      items: ["Nintendo Switch", "Camera", "Travel Adapter"],
      cancellationReason: "Out of stock",
      expectedDeliveryDate: "28/06/2023",
      status: "Cancelled",
      statusColor: "text-red-500", // Customizable status color
    },
  ];

  return (
    <div className="bg-white">
      <div className="flex-1 ml-16 lg:ml-44 mt-20 p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Cancelled Details</h2>
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

        {/* Render Detail Cards for Each Cancelled Data */}
        {cancelledDataList.map((delivery, index) => (
          <DetailCards
            key={index}
            deliveryData={{
              ...delivery,
              additionalDetails: [
                { label: "Cancelled On", value: delivery.cancelledOn },
                {
                  label: "Cancellation Reason",
                  value: delivery.cancellationReason,
                },
                {
                  label: "Expected Delivery Date",
                  value: delivery.expectedDeliveryDate,
                },
              ],
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CancelledDetail;
