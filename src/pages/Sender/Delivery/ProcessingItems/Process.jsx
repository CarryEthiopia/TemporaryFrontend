import React from "react";
import Card from "../Cards"; // Import the new Card component

const Process = ({ onViewDetail }) => {
  const processData = [
    {
      travelerName: "John Doe",
      travelDestination: "Paris",
      deliveryId: "343YH3454",
      items: ["iPhone XR", "HP Laptop", "Hand Fan"],
    },
    {
      travelerName: "Jane Smith",
      travelDestination: "New York",
      deliveryId: "234AB789",
      items: ["MacBook Pro", "Wireless Headphones", "Smartwatch"],
    },
    {
      travelerName: "Alice Johnson",
      travelDestination: "Tokyo",
      deliveryId: "987GH456",
      items: ["Nintendo Switch", "Camera", "Travel Adapter"],
    },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Loop through processData */}
      {processData.map((process, index) => (
        <Card
          key={index}
          travelerName={process.travelerName}
          travelDestination={process.travelDestination}
          deliveryId={process.deliveryId}
          items={process.items}
          type="process" // Set type to 'process'
          onViewDetail={onViewDetail}
        />
      ))}
    </div>
  );
};

export default Process;
