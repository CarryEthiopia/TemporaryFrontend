import { useState } from "react";
import { ArrowBack as ArrowBackIcon } from "@mui/icons-material"; // Import back icon
import SenderHistory from "./SenderHIstory/SenderHistory";
import TravelerHistory from "./TravelerHistory/TravelerHistory";
import HistoryToggle from "./HistoryToggle";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const History = () => {
  const [activeView, setActiveView] = useState("sender");
  const navigate = useNavigate();

  const goBack = () => navigate("/home");

  return (
    <div className="p-4 md:p-6 bg-white rounded-lg mb-16 md:mb-6">
      {/* Back Icon */}
      <div
        className="mb-6 flex items-center space-x-2 cursor-pointer"
        onClick={goBack}
      >
        <ArrowBackIcon className="text-gray-800" />
        <span className="text-gray-800 font-semibold">Back to Home</span>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-6">History</h2>

      <HistoryToggle activeView={activeView} setActiveView={setActiveView} />

      <div className="mt-6">
        {activeView === "sender" ? <SenderHistory /> : <TravelerHistory />}
      </div>
    </div>
  );
};

export default History;
