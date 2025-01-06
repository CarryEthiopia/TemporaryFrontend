// src/components/History/TravelerHistory/TravelerHistory.jsx
import TravelerProfile from "./TravelerProfile";
import TravelerStats from "./TravelerStatus";
import DeliveryHistory from "./DeliveryHistory";
import TravelerReviews from "./TravelerReviews";

const TravelerHistory = () => {
  return (
    <div className="space-y-6">
      <TravelerProfile />
      <TravelerStats />
      <DeliveryHistory />
      <TravelerReviews />
    </div>
  );
};

export default TravelerHistory;
