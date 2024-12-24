import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import Navbar from "../../components/Shared/Navbar"; // Adjust path as necessary
import Sidebar from "../../components/Shared/Sidebar"; // Adjust path as necessary

const CancelledDetail = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Placeholder cancelled delivery data for now
  const cancelledData = [
    {
      travelerName: "John Doe",
      travelDestination: "Paris",
      deliveryId: "343YH3454",
      cancelledOn: "25/06/2023", // Added "Cancelled On" date
      items: ["iPhone XR", "HP Laptop", "Hand Fan"],
      cancellationReason: "Customer request",
      expectedDeliveryDate: "26/06/2023",
    },
    {
      travelerName: "Jane Smith",
      travelDestination: "New York",
      deliveryId: "234AB789",
      cancelledOn: "26/06/2023", // Added "Cancelled On" date
      items: ["MacBook Pro", "Wireless Headphones", "Smartwatch"],
      cancellationReason: "Insufficient address details",
      expectedDeliveryDate: "27/06/2023",
    },
    {
      travelerName: "Alice Johnson",
      travelDestination: "Tokyo",
      deliveryId: "987GH456",
      cancelledOn: "27/06/2023", // Added "Cancelled On" date
      items: ["Nintendo Switch", "Camera", "Travel Adapter"],
      cancellationReason: "Out of stock",
      expectedDeliveryDate: "28/06/2023",
    },
  ];

  // Navigate back to Delivery page
  const handleBackClick = () => {
    navigate("/delivery"); // Use navigate instead of history.push
  };

  return (
    <div className="flex">
      {/* Sidebar and Navbar */}
      <Sidebar />
      <div className="flex-1 ml-16 mt-20 p-6">
        <Navbar />

        {/* Main Content */}
        <div className="p-6">
          {/* Back Arrow */}
          <button
            onClick={handleBackClick} // Use handleBackClick to navigate back
            className="flex items-center text-blue-500 mb-4"
          >
            <span className="mr-2">←</span> Back to Delivery
          </button>

          {/* Cancelled Delivery Details Section */}
          {cancelledData.map((delivery, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-lg mb-2">Cancelled Delivery</h3>

              <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                <div className="flex-1">
                  <p className="font-medium">Delivery ID:</p>
                  <p>{delivery.deliveryId}</p>
                </div>
                <div className="flex-1">
                  <p className="font-medium">Traveler Name:</p>
                  <p>{delivery.travelerName}</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                <div className="flex-1">
                  <p className="font-medium">Travel Destination:</p>
                  <p>{delivery.travelDestination}</p>
                </div>
                <div className="flex-1">
                  <p className="font-medium">Cancelled On:</p>
                  <p className="text-red-500">{delivery.cancelledOn}</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                <div className="flex-1">
                  <p className="font-medium">Items:</p>
                  {delivery.items.map((item, index) => (
                    <p key={index} className="text-sm text-gray-700">
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <p className="font-medium">Cancellation Reason:</p>
                <p>{delivery.cancellationReason}</p>
              </div>

              <div className="mt-4">
                <p className="font-medium">Expected Delivery Date:</p>
                <p>{delivery.expectedDeliveryDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CancelledDetail;
