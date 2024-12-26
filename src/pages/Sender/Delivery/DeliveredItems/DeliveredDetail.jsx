import React from "react";
import DetailCards from "../DetailCards";

const DeliveredDetail = ({ onBackToList }) => {
  // Placeholder delivered data
  const deliveredDataList = [
    {
      travelerName: "John Doe",
      travelDestination: "Paris",
      deliveryId: "343YH3454",
      deliveredOn: "25/06/2023",
      items: ["iPhone XR", "HP Laptop", "Hand Fan"],
      shippingDetails: "Delivered via UPS, tracking number: 1Z12345E0205271688",
      deliveryDate: "26/06/2023",
      status: "Delivered",
      statusColor: "text-green-500", // Customizable status color
    },
    {
      travelerName: "Jane Smith",
      travelDestination: "New York",
      deliveryId: "234AB789",
      deliveredOn: "26/06/2023",
      items: ["MacBook Pro", "Wireless Headphones", "Smartwatch"],
      shippingDetails:
        "Delivered via FedEx, tracking number: 1Z12345E0205271699",
      deliveryDate: "27/06/2023",
      status: "Delivered",
      statusColor: "text-green-500", // Customizable status color
    },
    {
      travelerName: "Alice Johnson",
      travelDestination: "Tokyo",
      deliveryId: "987GH456",
      deliveredOn: "27/06/2023",
      items: ["Nintendo Switch", "Camera", "Travel Adapter"],
      shippingDetails: "Delivered via UPS, tracking number: 1Z12345E0205271700",
      deliveryDate: "28/06/2023",
      status: "Delivered",
      statusColor: "text-green-500", // Customizable status color
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="flex-1 ml-16 lg:ml-44 mt-20 p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Delivered Detail</h2>
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

        {/* Render Detail Cards for Each Delivered Data */}
        {deliveredDataList.map((delivery, index) => (
          <DetailCards key={index} deliveryData={delivery} />
        ))}
      </div>
    </div>
  );
};

export default DeliveredDetail;
