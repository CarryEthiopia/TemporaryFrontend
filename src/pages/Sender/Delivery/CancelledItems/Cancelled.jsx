import Card from "../Cards"; // Import the new Card component
import { cancelledDeliveries } from "../../FetchedData";


const Cancelled = () => {
  return (
    <div className="space-y-4 lg:space-y-6">
      {cancelledDeliveries.map((delivery, index) => (
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
