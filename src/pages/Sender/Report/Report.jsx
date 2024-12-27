import React, { useState } from "react";
import {
  CalendarToday,
  Refresh,
  MenuBookOutlined,
  ArrowDropDown,
  Download,
  Share,
  Print,
} from "@mui/icons-material";
import { Button, Menu, MenuItem, IconButton, Tooltip } from "@mui/material";
import ReportBox from "./ReportBox";
import ReportTable from "./ReportTable";

const Report = () => {
  const [contentKey, setContentKey] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTime, setSelectedTime] = useState("All Time");
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = async () => {
    setIsLoading(true);
    // Simulate refresh delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setContentKey((prev) => prev + 1);
    setIsLoading(false);
  };

  const timeOptions = [
    { label: "Today", value: "today" },
    { label: "Yesterday", value: "yesterday" },
    { label: "Last 7 Days", value: "week" },
    { label: "Last 30 Days", value: "month" },
    { label: "All Time", value: "all" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 transition-all duration-300 mt-10">
      <div className="p-4 sm:p-6 lg:p-8 ml-4 sm:ml-20 lg:ml-64">
        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-start sm:items-center space-x-3">
              <CalendarToday className="text-blue-600" />
              <div className="flex flex-col text-sm">
                <span className="text-gray-500">Report Period</span>
                <span className="font-semibold text-gray-800">
                  20 - 24 January 2023
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Tooltip title="Download Report">
                <IconButton className="hover:bg-blue-50">
                  <Download className="text-blue-600" />
                </IconButton>
              </Tooltip>

              <Tooltip title="Share Report">
                <IconButton className="hover:bg-blue-50">
                  <Share className="text-blue-600" />
                </IconButton>
              </Tooltip>

              <Tooltip title="Print Report">
                <IconButton className="hover:bg-blue-50">
                  <Print className="text-blue-600" />
                </IconButton>
              </Tooltip>

              <Button
                variant="contained"
                startIcon={
                  <Refresh className={isLoading ? "animate-spin" : ""} />
                }
                onClick={handleRefresh}
                disabled={isLoading}
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-md text-sm"
              >
                {isLoading ? "Refreshing..." : "Refresh"}
              </Button>
            </div>
          </div>
        </div>
        {/* Dashboard Overview */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center space-x-3">
              <MenuBookOutlined className="text-blue-600" />
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                  Dashboard Overview
                </h2>
                <p className="text-sm text-gray-500">
                  Welcome back to Carry Ethiopia Dashboard
                </p>
              </div>
            </div>

            <Button
              endIcon={<ArrowDropDown />}
              onClick={(e) => setAnchorEl(e.currentTarget)}
              className="text-gray-700 hover:bg-gray-50 text-sm"
            >
              {selectedTime}
            </Button>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              className="mt-2"
            >
              {timeOptions.map((option) => (
                <MenuItem
                  key={option.value}
                  onClick={() => {
                    setSelectedTime(option.label);
                    setAnchorEl(null);
                  }}
                  className="hover:bg-gray-50"
                >
                  {option.label}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>
        {/* Report Boxes */}
        <ReportBox key={contentKey} />
        {/* Report Table */}
        <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
              Recent Activity
            </h3>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-gray-500">Filter by:</span>
              <Button
                endIcon={<ArrowDropDown />}
                onClick={(e) => setAnchorEl(e.currentTarget)}
                className="text-blue-600"
              >
                {selectedTime}
              </Button>
            </div>
          </div>
          <ReportTable />
        </div>
      </div>
    </div>
  );
};

export default Report;
