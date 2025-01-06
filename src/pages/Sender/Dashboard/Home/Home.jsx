import { useState } from "react";
import { Add as AddIcon, History, Timeline } from "@mui/icons-material";
import PropTypes from "prop-types"; // Import PropTypes for validation
import TravelersList from "./TravelersList";
import { travelers } from "../../../Sender/FetchedData";
import SendPackageModal from "./SendPackageModal";
import HistoryComponent from "../../History/History"; // Import HistoryComponent
import TrackingComponent from "../../Tracking/Tracking"; // Import TrackingComponent

const ActionCard = ({ icon: Icon, title, description, onClick, color }) => (
  <div
    onClick={onClick}
    className={`bg-white rounded-lg p-4 shadow-sm border-l-4 ${color} cursor-pointer`}
  >
    <div className="flex items-center space-x-3">
      <div
        className={`p-3 rounded-lg ${color
          .replace("border", "bg")
          .replace("-500", "-50")}`}
      >
        <Icon className={color.replace("border", "text")} />
      </div>
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

ActionCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("default");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const renderContent = () => {
    switch (activeComponent) {
      case "history":
        return <HistoryComponent />;
      case "tracking":
        return <TrackingComponent />;
      default:
        return <TravelersList travelers={travelers} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full pt-10 px-4">
      {/* Header */}
      <div className="mt-10 mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-700">
          Dashboard Overview
        </h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Welcome back! Here&apos;s what&apos;s happening today.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <ActionCard
          icon={AddIcon}
          title="Send Package"
          description="Create new delivery"
          onClick={openModal}
          color="border-blue-500"
        />
        <ActionCard
          icon={History}
          title="View History"
          description="Check past deliveries"
          onClick={() => setActiveComponent("history")}
          color="border-purple-500"
        />
        <ActionCard
          icon={Timeline}
          title="Track Deliveries"
          description="Monitor shipments"
          onClick={() => setActiveComponent("tracking")}
          color="border-green-500"
        />
      </div>

      {/* Dynamic Content */}
      <div className="bg-white rounded-lg shadow-md p-4">{renderContent()}</div>

      {/* Modal */}
      <SendPackageModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Home;
