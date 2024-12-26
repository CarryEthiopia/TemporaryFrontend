import React, { useState } from "react";
import { Button } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import RefreshIcon from "@mui/icons-material/Refresh";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EditIcon from "@mui/icons-material/Edit";
import ReportBox from "./ReportBox";
import ReportTable from "./ReportTable"; // Import the ReportTable component

const Report = () => {
  const [contentKey, setContentKey] = useState(0); // Key to force re-render content

  const handleRefresh = () => {
    setContentKey((prevKey) => prevKey + 1); // Increment key to refresh content
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">
      {/* Leave space for Nav and Sidebars */}
      <div className="mb-6">{/* NavBar space (adjust gap as needed) */}</div>

      {/* Sidebar and Content Section */}
      <div
        className="grid 
          grid-cols-[10px_minmax(auto,_1fr)] 
          lg:grid-cols-[220px_minmax(auto,_1fr)] 
          gap-8 
          lg:gap-16"
      >
        {/* Sidebar */}
        <div className="h-screen">{/* Sidebar space left empty */}</div>

        {/* Main Content */}
        <div>
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CalendarTodayIcon className="text-blue-500" />
              <span className="text-gray-700 font-medium text-lg">
                20 - 24 January 2023
              </span>
            </div>
            <Button
              variant="outlined"
              className="flex items-center space-x-2 text-gray-600 border-gray-300 hover:bg-gray-100"
              onClick={handleRefresh}
            >
              <RefreshIcon />
              <span>Refresh</span>
            </Button>
          </div>

          {/* Horizontal Divider */}
          <hr className="my-4 border-gray-300" />

          {/* Dashboard Overview Section */}
          <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <MenuBookIcon className="text-gray-500" />
                <EditIcon className="text-gray-500 ml-2" />{" "}
                {/* Adjusted margin for spacing */}
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Dashboard Overview
              </h2>
            </div>
            <p className="text-gray-600 text-sm">
              Welcome Back to Carry Ethiopia Dashboard
            </p>
          </div>

          {/* Report Boxes Section */}
          <ReportBox key={contentKey} />

          {/* Recent Activity Section */}
          <div className="flex items-center justify-between mt-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Recent Activity
            </h3>
            <div className="flex items-center space-x-2">
              <MenuBookIcon className="text-gray-500" />
              <EditIcon className="text-gray-500" />
            </div>
          </div>

          {/* Report Table Section */}
          <ReportTable />
        </div>
      </div>
    </div>
  );
};

export default Report;
