import Card from "../Cards"; // Import the new Card component

const Delivered = () => {
  const deliveredData = [
    {
      travelerName: "John Doe",
      isVerified: true,
      status: "active",
      route: "Dubai-Ethiopia",
      date: "17-11-2024",
      deliveryId: "343YH3454",
      items: ["iPhone XR", "HP Laptop", "Hand Fan"],
      stats: {
        delivered: 128,
        completion: 97,
        rating: 90,
      },
    },
    {
      travelerName: "Jane Smith",
      isVerified: false,
      status: "inactive",
      route: "Dubai-Kenya",
      date: "18-11-2024",
      deliveryId: "234AB789",
      items: ["MacBook Pro", "Wireless Headphones", "Smartwatch"],
      stats: {
        delivered: 85,
        completion: 92,
        rating: 88,
      },
    },
    {
      travelerName: "Alice Johnson",
      isVerified: true,
      status: "active",
      route: "Dubai-Nigeria",
      date: "19-11-2024",
      deliveryId: "987GH456",
      items: ["Nintendo Switch", "Camera", "Travel Adapter"],
      stats: {
        delivered: 156,
        completion: 95,
        rating: 93,
      },
    },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Loop through deliveredData */}
      {deliveredData.map((delivery, index) => (
        <Card
          key={index}
          travelerName={delivery.travelerName}
          travelDestination={delivery.route}
          deliveryId={delivery.deliveryId}
          items={delivery.items}
          date={delivery.date}
          stats={delivery.stats}
          route={delivery.route}
          isVerified={delivery.isVerified}
          status={delivery.status}
          type="delivered"
        />
      ))}
    </div>
  );
};

export default Delivered;
