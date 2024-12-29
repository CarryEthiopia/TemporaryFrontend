import Card from "../Cards"; // Import the new Card component
import { deliveredDeliveries } from "../../FetchedData";


const Delivered = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      {deliveredDeliveries.map((delivery, index) => (
        <Card key={index} {...delivery} type="delivered" />
      ))}
    </div>
  );
};

export default Delivered;
