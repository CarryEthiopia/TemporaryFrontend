import Card from "../Cards"; // Import the new Card component
import { processDeliveries } from "../../FetchedData";


const Process = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      {processDeliveries.map((process, index) => (
        <Card key={index} {...process} type="process" />
      ))}
    </div>
  );
};
export default Process;
