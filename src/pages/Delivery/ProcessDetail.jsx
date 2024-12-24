import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import Navbar from "../../components/Shared/Navbar"; // Assuming Navbar is already created
import Sidebar from "../../components/Shared/Sidebar"; // Assuming Sidebar is already created

const ProcessDetail = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Placeholder delivery data for now
  const processDetailData = {
    travelerName: "John Doe",
    travelDestination: "Paris",
    deliveryId: "343YH3454",
    items: ["iPhone XR", "HP Laptop", "Hand Fan"],
    shippingDetails: "Shipped via UPS, tracking number: 1Z12345E0205271688",
    deliveryDate: "29/06/2023",
    status: "In-Process",
  };

  // Navigate back to Delivery page
  const handleBackClick = () => {
    navigate("/delivery"); // Use navigate instead of history.push
  };

  // Placeholder function to simulate sending a message
  const handleMessageClick = () => {
    alert(`Message sent to ${processDetailData.travelerName}`);
  };

  return (
    <div>
      {/* Sidebar and Navbar */}
      <Sidebar />
      <div className="flex-1 ml-16 mt-20 p-6">
        <Navbar />

        {/* Processing Detail Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Processing Detail</h2>

          {/* Message Button */}
          <button
            onClick={handleMessageClick}
            className="px-4 py-2 bg-orange-500 text-white rounded-md flex items-center"
          >
            <span className="mr-2">✉️</span> Message the Traveler
          </button>
        </div>

        {/* Back Arrow */}
        <div className="mb-4">
          <button
            onClick={handleBackClick} // Use handleBackClick to navigate back
            className="flex items-center text-blue-500"
          >
            <span className="mr-2">←</span> Back to Delivery
          </button>
        </div>

        {/* Delivery Tracking and Details Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-lg mb-2">Delivery Tracking</h3>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1 mb-4 md:mb-0">
              <p className="font-medium">Delivery ID:</p>
              <p>{processDetailData.deliveryId}</p>
            </div>
            <div className="flex-1">
              <p className="font-medium">Traveler Name:</p>
              <p>{processDetailData.travelerName}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1 mb-4 md:mb-0">
              <p className="font-medium">Travel Destination:</p>
              <p>{processDetailData.travelDestination}</p>
            </div>
            <div className="flex-1">
              <p className="font-medium">Status:</p>
              <p className="text-yellow-500">{processDetailData.status}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1 mb-4 md:mb-0">
              <p className="font-medium">Items:</p>
              {processDetailData.items.map((item, index) => (
                <p key={index} className="text-sm text-gray-700">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="font-medium">Shipping Details:</p>
            <p>{processDetailData.shippingDetails}</p>
          </div>

          <div className="mt-4">
            <p className="font-medium">Expected Delivery Date:</p>
            <p>{processDetailData.deliveryDate}</p>
          </div>
        </div>

        {/* Shipping Details Box */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold text-lg mb-4">Shipping Details</h3>
          <p>
            <strong>Carrier:</strong> UPS
          </p>
          <p>
            <strong>Tracking Number:</strong> 1Z12345E0205271688
          </p>
          <p>
            <strong>Shipping Status:</strong> In Transit
          </p>
          <p>
            <strong>Estimated Delivery Date:</strong> 30/06/2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessDetail;
