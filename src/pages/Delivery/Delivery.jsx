import React, { useState } from "react";
import Delivered from "./DeliveredItems/Delivered";
import DeliveredDetail from "./DeliveredItems/DeliveredDetail";
import Process from "./ProcessingItems/Process";
import ProcessDetail from "./ProcessingItems/ProcessDetail";
import Cancelled from "./CancelledItems/Cancelled";
import CancelledDetail from "./CancelledItems/CancelledDetail";
import classNames from "classnames";
import { LocalShipping, Check, Cancel } from "@mui/icons-material";

const Delivery = () => {
  const [activeTab, setActiveTab] = useState("Processing"); // Track current tab
  const [viewDetail, setViewDetail] = useState(false); // Toggle between list and detail view

  // Handle transitions between list and detail views
  const handleViewDetail = () => {
    setViewDetail(true);
  };

  const handleBackToList = () => {
    setViewDetail(false);
  };

  // Render detail view dynamically based on activeTab
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
    <div className="flex min-h-screen bg-white pt-14">
      <div className="flex-1">
        <div className="p-6 max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Delivery Management</h1>
          <p className="text-gray-600 mb-8">Track and manage all your deliveries</p>

          {/* Tab Navigation */}
          {!viewDetail && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={classNames(
                    "cursor-pointer rounded-xl p-4 shadow-sm",
                    {
                      "bg-gray-100 border-2 border-gray-200": activeTab !== tab.id,
                      [`bg-${tab.color}-50 border-${tab.color}-500`]: activeTab === tab.id,
                    }
                  )}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={classNames(
                        "p-3 rounded-lg",
                        {
                          "bg-gray-200 text-gray-600": activeTab !== tab.id,
                          [`bg-${tab.color}-100 text-${tab.color}-600`]: activeTab === tab.id,
                        }
                      )}
                    >
                      {tab.icon}
                    </div>
                    <div>
                      <h3
                        className={classNames("font-semibold", {
                          "text-gray-800": activeTab !== tab.id,
                          [`text-${tab.color}-600`]: activeTab === tab.id,
                        })}
                      >
                        {tab.label}
                      </h3>
                      <p className="text-sm text-gray-500">23 shipments</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Main Content Area */}
          <div className="bg-white rounded-xl shadow-md p-6">
            {!viewDetail ? (
              <>
                {activeTab === "Processing" && <Process onViewDetail={handleViewDetail} />}
                {activeTab === "Delivered" && <Delivered onViewDetail={handleViewDetail} />}
                {activeTab === "Cancelled" && <Cancelled onViewDetail={handleViewDetail} />}
              </>
            ) : (
              renderDetailView()
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const tabs = [
  { id: "Processing", label: "Processing", icon: <LocalShipping />, color: "blue" },
  { id: "Delivered", label: "Delivered", icon: <Check />, color: "green" },
  { id: "Cancelled", label: "Cancelled", icon: <Cancel />, color: "red" },
];

export default Delivery;
