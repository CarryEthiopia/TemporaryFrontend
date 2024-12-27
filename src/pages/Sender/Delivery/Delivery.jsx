import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LocalShipping,
  Check,
  Cancel,
  Dashboard,
  Archive,
  Refresh,
  Search,
} from "@mui/icons-material";
import Delivered from "./DeliveredItems/Delivered";
import DeliveredDetail from "./DeliveredItems/DeliveredDetail";
import Process from "./ProcessingItems/Process";
import ProcessDetail from "./ProcessingItems/ProcessDetail";
import Cancelled from "./CancelledItems/Cancelled";
import CancelledDetail from "./CancelledItems/CancelledDetail";

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

const Delivery = () => {
  const [activeTab, setActiveTab] = useState("Processing");
  const [viewDetail, setViewDetail] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleViewDetail = () => {
    setViewDetail(true);
  };

  const handleBackToList = () => {
    setViewDetail(false);
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const renderDetailView = () => {
    switch (activeTab) {
      case "Processing":
        return <ProcessDetail onBackToList={handleBackToList} />;
      case "Delivered":
        return <DeliveredDetail onBackToList={handleBackToList} />;
      case "Cancelled":
        return <CancelledDetail onBackToList={handleBackToList} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Dashboard className="text-orange-500" />
                Delivery Management
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                Track and manage your deliveries efficiently
              </p>
            </div>

            {!viewDetail && (
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search deliveries..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleRefresh}
                  className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors duration-300"
                >
                  <Refresh
                    className={`text-gray-600 ${
                      isLoading ? "animate-spin" : ""
                    }`}
                  />
                </motion.button>
              </div>
            )}
          </div>
        </div>

        {/* Tab Navigation */}
        {!viewDetail && (
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
        )}

        {/* Main Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={viewDetail ? "detail" : "list"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            {!viewDetail ? (
              <>
                {activeTab === "Processing" && (
                  <Process onViewDetail={handleViewDetail} />
                )}
                {activeTab === "Delivered" && (
                  <Delivered onViewDetail={handleViewDetail} />
                )}
                {activeTab === "Cancelled" && (
                  <Cancelled onViewDetail={handleViewDetail} />
                )}
              </>
            ) : (
              renderDetailView()
            )}
          </motion.div>
        </AnimatePresence>
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
