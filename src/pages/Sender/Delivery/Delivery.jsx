import { useState } from "react";
import { motion } from "framer-motion";
import { LocalShipping, Check, Cancel, Dashboard } from "@mui/icons-material";
import Delivered from "./DeliveredItems/Delivered";
import Process from "./ProcessingItems/Process";
import Cancelled from "./CancelledItems/Cancelled";

import PropTypes from "prop-types"; // Import PropTypes

const TabButton = ({ tab, isActive, onClick, count }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`
      cursor-pointer rounded-xl p-4 transition-all duration-300
      ${
        isActive
          ? `bg-${tab.color}-50 border-2 border-${tab.color}-500 shadow-lg shadow-${tab.color}-100/50`
          : "bg-white border-2 border-gray-100 hover:border-gray-200"
      }
    `}
  >
    <div className="flex items-center space-x-3">
      <div
        className={`
        p-3 rounded-lg transition-colors duration-300
        ${
          isActive
            ? `bg-${tab.color}-100 text-${tab.color}-600`
            : "bg-gray-50 text-gray-400 group-hover:bg-gray-100"
        }
      `}
      >
        {tab.icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3
            className={`
            font-semibold transition-colors duration-300
            ${isActive ? `text-${tab.color}-600` : "text-gray-700"}
          `}
          >
            {tab.label}
          </h3>
          <span
            className={`
            px-2 py-1 rounded-full text-xs font-medium
            ${
              isActive
                ? `bg-${tab.color}-100 text-${tab.color}-600`
                : "bg-gray-100 text-gray-600"
            }
          `}
          >
            {count}
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-1">{tab.description}</p>
      </div>
    </div>
  </motion.div>
);
// Prop validation for TabButton
TabButton.propTypes = {
  tab: PropTypes.shape({
    color: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

const Delivery = () => {
  const [activeTab, setActiveTab] = useState("Processing");

  return (
    <div className="min-h-screen bg-gray-50 mt-10">
      <div className="mx-auto px-4 py-8 sm:px-4 lg:px-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between flex-col sm:flex-row">
            <div>
              <h1 className="text-2xl font-bold text-gray-700 flex items-center gap-2">
                <Dashboard className="text-orange-500" />
                Delivery Management
              </h1>
              <p className="mt-2 text-sm text-gray-500">
                Track and manage your deliveries efficiently
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              tab={tab}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              count={tab.count}
            />
          ))}
        </div>

        {/* Main Content Area */}
        <div className="pb-14">
          {activeTab === "Processing" && <Process />}
          {activeTab === "Delivered" && <Delivered />}
          {activeTab === "Cancelled" && <Cancelled />}
        </div>
      </div>
    </div>
  );
};

const tabs = [
  {
    id: "Processing",
    label: "Processing",
    icon: <LocalShipping />,
    color: "blue",
    count: 12,
    description: "Shipments in transit",
  },
  {
    id: "Delivered",
    label: "Delivered",
    icon: <Check />,
    color: "green",
    count: 45,
    description: "Successfully completed",
  },
  {
    id: "Cancelled",
    label: "Cancelled",
    icon: <Cancel />,
    color: "red",
    count: 3,
    description: "Cancelled shipments",
  },
];

export default Delivery;
