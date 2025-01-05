import { useState } from "react";
import SenderHistory from "./SenderHIstory/SenderHistory";
import TravelerHistory from "./TravelerHistory/TravelerHistory";
import HistoryToggle from "./HistoryToggle";

const History = () => {
  const [activeView, setActiveView] = useState("sender");

  return (
    <div className="p-4 md:p-6 bg-white rounded-lg mb-16 sm:mb-24 sm:pb-16 overflow-auto">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
        Travel History
      </h2>

      <HistoryToggle activeView={activeView} setActiveView={setActiveView} />

      <div className="mt-4 sm:mt-6">
        {activeView === "sender" ? <SenderHistory /> : <TravelerHistory />}
      </div>
    </div>
  );
};

export default History;
