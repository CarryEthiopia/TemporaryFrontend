import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import Navbar from "../../Shared/Navbar"; // Assuming Navbar is already created
import Sidebar from "../../Shared/Sidebar"; // Assuming Sidebar is already created

const DeliveredDetail = ({ onBackToList }) => {
  const navigate = useNavigate(); // Initialize navigate function

  // Placeholder delivered data
  const deliveredData = [
    {
      travelerName: "John Doe",
      travelDestination: "Paris",
      deliveryId: "343YH3454",
      deliveredOn: "25/06/2023", // Delivered date
      items: ["iPhone XR", "HP Laptop", "Hand Fan"],
      shippingDetails: "Delivered via UPS, tracking number: 1Z12345E0205271688",
      expectedDeliveryDate: "26/06/2023",
    },
    {
      travelerName: "Jane Smith",
      travelDestination: "New York",
      deliveryId: "234AB789",
      deliveredOn: "26/06/2023", // Delivered date
      items: ["MacBook Pro", "Wireless Headphones", "Smartwatch"],
      shippingDetails:
        "Delivered via FedEx, tracking number: 1Z12345E0205271699",
      expectedDeliveryDate: "27/06/2023",
    },
    {
      travelerName: "Alice Johnson",
      travelDestination: "Tokyo",
      deliveryId: "987GH456",
      deliveredOn: "27/06/2023", // Delivered date
      items: ["Nintendo Switch", "Camera", "Travel Adapter"],
      shippingDetails: "Delivered via UPS, tracking number: 1Z12345E0205271700",
      expectedDeliveryDate: "28/06/2023",
    },
  ];

  return (
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Delivered Detail</h2>
      </div>
      {/* Back Arrow */}
      <div className="mb-4">
        <button
          onClick={onBackToList} // Use handleBackClick to navigate back
          className="flex items-center text-blue-500"
        >
          <span className="mr-2">←</span> Back to Delivery
        </button>
      </div>
      {/* Delivery Tracking and Details Section */}
      {deliveredData.map((delivery, index) => (
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
              <p className="font-medium">Delivered On:</p>
              <p className="text-green-500">{delivery.deliveredOn}</p>
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
  );
};

export default DeliveredDetail;
