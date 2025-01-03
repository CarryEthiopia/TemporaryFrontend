import  { useState } from "react";
import { Add as AddIcon, History} from "@mui/icons-material";
import SendersList from "./SenderList";
import {  senders } from "../../FetchedData";
import SendPackageModal from "./TravelPlaceModal";
import PropTypes from "prop-types";  // Import PropTypes for validation
import { useNavigate } from "react-router-dom";  // Import useNavigate for navigation



const ActionCard = ({ icon: Icon, title, description, onClick, color }) => (
  <div
    onClick={onClick}
    className={`bg-white rounded-lg p-4 shadow-sm border-l-4 ${color}`}
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
 
  const navigate = useNavigate(); // Initialize useNavigate

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-50 w-full pt-10 px-4">
      {/* Header */}
      <div className="mt-10 mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Dashboard Overview
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Welcome back! Where are you Traveling for.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <ActionCard
          icon={AddIcon}
          title="Be Traveler"
          description="Travel and Get Birr"
          onClick={openModal}
          color="border-blue-500"
        />
        <ActionCard
          icon={History}
          title="View History"
          description="Check past Travelers"
          onClick={() => navigate("/history")}
          color="border-purple-500"
        />
      </div>
      <SendPackageModal isOpen={isModalOpen} onClose={closeModal} />
      <SendersList senders={senders} />
    </div>
  );
};

export default Home;
