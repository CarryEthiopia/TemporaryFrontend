import Card from "../Cards"; // Import the new Card component

const Cancelled = () => {
  const cancelledData = [
    {
      travelerName: "John Doe",
      travelDestination: "Paris",
      deliveryId: "343YH3454",
      cancelledOn: "25/06/2023",
      items: ["iPhone XR", "HP Laptop", "Hand Fan"],
    },
    {
      travelerName: "Jane Smith",
      travelDestination: "New York",
      deliveryId: "234AB789",
      cancelledOn: "26/06/2023",
      items: ["MacBook Pro", "Wireless Headphones", "Smartwatch"],
    },
    {
      travelerName: "Alice Johnson",
      travelDestination: "Tokyo",
      deliveryId: "987GH456",
      cancelledOn: "27/06/2023",
      items: ["Nintendo Switch", "Camera", "Travel Adapter"],
    },
  ];

  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Loop through cancelledData */}
      {cancelledData.map((delivery, index) => (
        <Card
          key={index}
          travelerName={delivery.travelerName}
          travelDestination={delivery.travelDestination}
          deliveryId={delivery.deliveryId}
          items={delivery.items}
          cancelledOn={delivery.cancelledOn}
          type="cancelled"
        />
      ))}
    </div>
  );
};

export default Cancelled;
