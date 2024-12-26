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
  const [activeTab, setActiveTab] = useState("Processing");
  const [viewDetail, setViewDetail] = useState(false);

  const handleViewDetail = () => {
    setViewDetail(true);
  };

  const handleBackToList = () => {
    setViewDetail(false);
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
    <div className="flex min-h-screen bg-white pt-10 px-3 sm:px-4">
      <div className="flex-1">
        <div className="ml-6 sm:p-4 max-w-full mx-auto">
          <h1 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
            Delivery Management
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 mb-5">
            Track and manage your deliveries
          </p>

          {/* Tab Navigation */}
          {!viewDetail && (
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-4 mb-6">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={classNames(
                    "cursor-pointer rounded-lg p-3 shadow-sm",
                    {
                      "bg-gray-100 border border-gray-200": activeTab !== tab.id,
                      [`bg-${tab.color}-50 border-${tab.color}-500`]: activeTab === tab.id,
                    }
                  )}
                >
                  <div className="flex items-center space-x-2">
                    <div
                      className={classNames(
                        "p-2 rounded",
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
                        className={classNames("font-semibold text-sm", {
                          "text-gray-800": activeTab !== tab.id,
                          [`text-${tab.color}-600`]: activeTab === tab.id,
                        })}
                      >
                        {tab.label}
                      </h3>
                      <p className="text-xs text-gray-500">23 shipments</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Main Content Area */}
          <div className="bg-white rounded-lg shadow-md p-3 sm:p-4">
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
