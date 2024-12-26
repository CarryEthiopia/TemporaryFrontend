import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import RefreshIcon from "@mui/icons-material/Refresh";
import MenuBookEditIcon from "@mui/icons-material/MenuBookOutlined"; // Replace with a writing book icon if available
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // Dropdown icon
import ReportBox from "./ReportBox";
import ReportTable from "./ReportTable";

const Report = () => {
  const [contentKey, setContentKey] = useState(0); // Key to force re-render content
  const [anchorEl, setAnchorEl] = useState(null); // Anchor element for dropdown menu
  const [selectedTime, setSelectedTime] = useState("All Time"); // Selected time option

  const handleRefresh = () => {
    setContentKey((prevKey) => prevKey + 1); // Increment key to refresh content
  };

  const handleDropdownClick = (event) => {
    setAnchorEl(event.currentTarget); // Open dropdown menu
  };

  const handleMenuItemClick = (option) => {
    setSelectedTime(option); // Update selected time
    setAnchorEl(null); // Close dropdown menu
  };

  const handleClose = () => {
    setAnchorEl(null); // Close dropdown menu
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">
      {/* Leave space for Nav and Sidebars */}
      <div className="mb-6">{/* NavBar space (adjust gap as needed) */}</div>

      {/* Sidebar and Content Section */}
      <div
        className="grid 
          grid-cols-1 
          lg:grid-cols-[220px_1fr] 
          gap-8
          lg:gap-16"
      >
        {/* Sidebar */}
        <div className="hidden lg:block h-screen">{/* Sidebar content */}</div>

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
            <div className="flex items-center space-x-3">
              <MenuBookEditIcon className="text-gray-500" />
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
            <div className="flex items-center space-x-3">
              <MenuBookEditIcon className="text-gray-500" />
              <h3 className="text-xl font-semibold text-gray-800">
                Recent Activity
              </h3>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-700">Date time:</span>
              <Button
                variant="text"
                className="text-blue-500 flex items-center"
                onClick={handleDropdownClick}
              >
                {selectedTime}
                <ArrowDropDownIcon />
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {[
                  "Today",
                  "Yesterday",
                  "Last 7 Days",
                  "Last 30 Days",
                  "All Time",
                ].map((option) => (
                  <MenuItem
                    key={option}
                    onClick={() => handleMenuItemClick(option)}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
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
