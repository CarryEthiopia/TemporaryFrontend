import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Add as AddIcon,
  LocalShipping,
  History,
  Timeline,
  TrendingUp,
  Stars,
  Search,
  LocationOn,
  AccessTime,
} from "@mui/icons-material";
import TravelersList from "./TravelersList";
import { dashboardStats, travelers } from "../../../Sender/FetchedData";
import SendPackageModal from "./SendPackageModal";


const StatCard = ({ icon: Icon, title, value, color }) => (
  <div className={`bg-white rounded-lg p-4 shadow-sm border-l-4 ${color}`}>
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <div
          className={`p-2 rounded-lg ${color
            .replace("border", "bg")
            .replace("-500", "-50")}`}
        >
          <Icon className={color.replace("border", "text")} />
        </div>
      </div>
      <div className="mt-2">
        <h3 className="text-xl font-bold text-gray-800">{value}</h3>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
  </div>
);

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

const Home = () => {
  const [stats, setStats] = useState(dashboardStats);

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
          Welcome back! Here's what's happening today.
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
          onClick={() => navigate("/history")}
          color="border-purple-500"
        />
        <ActionCard
          icon={Timeline}
          title="Track Deliveries"
          description="Monitor shipments"
          onClick={() => navigate("/tracking")}
          color="border-green-500"
        />
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard
          icon={LocalShipping}
          title="Total Deliveries"
          value={stats.deliveries.toLocaleString()}
          color="border-orange-500"
        />
        <StatCard
          icon={TrendingUp}
          title="Active Deliveries"
          value={stats.active}
          color="border-blue-500"
        />
        <StatCard
          icon={Stars}
          title="Success Rate"
          value={`${stats.success}%`}
          color="border-green-500"
        />
        <StatCard
          icon={Stars}
          title="Total Earnings"
          value={`$${stats.earnings.toLocaleString()}`}
          color="border-purple-500"
        />
      </div>
      <SendPackageModal isOpen={isModalOpen} onClose={closeModal} />
      <TravelersList travelers={travelers} />
    </div>
  );
};

export default Home;
