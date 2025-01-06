// src/components/History/HistoryToggle.jsx
const HistoryToggle = ({ activeView, setActiveView }) => {
  return (
    <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg w-full max-w-md">
      <button
        onClick={() => setActiveView("sender")}
        className={`flex-1 py-2 px-4 rounded-md transition-all ${
          activeView === "sender"
            ? "bg-white shadow-sm text-blue-600"
            : "text-gray-600 hover:bg-gray-200"
        }`}
      >
        Sender History
      </button>
      <button
        onClick={() => setActiveView("traveler")}
        className={`flex-1 py-2 px-4 rounded-md transition-all ${
          activeView === "traveler"
            ? "bg-white shadow-sm text-blue-600"
            : "text-gray-600 hover:bg-gray-200"
        }`}
      >
        Traveler History
      </button>
    </div>
  );
};

export default HistoryToggle;
