import { useState } from "react";
import {
  CalendarToday,
  Refresh,
  MenuBookOutlined,
  ArrowDropDown,
  Download,
  Share,
  Print,
  LocalShipping,
  TrendingUp,
  Stars,
} from "@mui/icons-material";
import { Button, Menu, MenuItem, IconButton, Tooltip } from "@mui/material";
import ReportBox from "./ReportBox";

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

const Report = () => {
  const [contentKey, setContentKey] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTime, setSelectedTime] = useState("All Time");
  const [isLoading, setIsLoading] = useState(false);

  const stats = {
    deliveries: 1523,
    active: 234,
    success: 92.5,
    earnings: 45832,
  };

  const handleRefresh = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate refresh delay
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
    <div className="min-h-screen bg-gray-50 transition-all duration-300 mt-10 pb-10">
      <div className="px-4 py-10">
        {/* Header Section */}
        <div className="bg-white shadow-sm p-4 mb-6">
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
      </div>
    </div>
  );
};

export default Report;