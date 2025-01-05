// src/components/History/SenderHistory/SenderHistory.jsx
import SenderProfile from "./SenderProfile";
import SenderStats from "./SenderStatus";
import RecentTransactions from "./RecentTransactions";
import Testimonials from "../shared/Testimonials";

const SenderHistory = () => {
  return (
    <div className="space-y-6">
      <SenderProfile />
      <SenderStats />
      <RecentTransactions />
      <Testimonials userType="sender" />
    </div>
  );
};

export default SenderHistory;
