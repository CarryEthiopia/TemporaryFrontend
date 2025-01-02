import React, { useState } from "react";
import { IconButton, Tooltip, Zoom } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DescriptionIcon from "@mui/icons-material/Description";
import BalanceIcon from "@mui/icons-material/Balance";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import CountUp from "react-countup";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const ReportBox = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeReport, setActiveReport] = useState(null);

  const reports = [
    {
      id: 1,
      backgroundColor: "bg-gradient-to-br from-gray-900 to-black",
      hoverBackground: "hover:from-black hover:to-gray-900",
      icon: <DescriptionIcon fontSize="large" />,
      title: "Total Income of Travelers",
      subtitle: "Monthly revenue from all travelers",
      amount: 104284.19,
      percentage: 15.5,
      trend: "up",
      percentageBg: "bg-green-100 text-green-500",
      increaseText: "Increased from last month",
      iconColor: "text-white",
      menuOptions: ["Download Report", "Share Stats", "View Details"],
    },
    {
      id: 2,
      backgroundColor: "bg-gradient-to-br from-white to-gray-50",
      hoverBackground: "hover:from-gray-50 hover:to-white",
      icon: <DescriptionIcon fontSize="large" />,
      title: "Total Expenses in Platform",
      subtitle: "Monthly platform expenses",
      amount: 14391.83,
      percentage: 8.5,
      trend: "up",
      percentageBg: "bg-red-100 text-red-500",
      increaseText: "Increased from last month",
      menuOptions: ["View Breakdown", "Export Data", "Settings"],
    },
    {
      id: 3,
      backgroundColor: "bg-gradient-to-br from-white to-gray-50",
      hoverBackground: "hover:from-gray-50 hover:to-white",
      icon: <BalanceIcon fontSize="large" />,
      title: "Total Travelers",
      subtitle: "Active users this month",
      amount: 10837,
      percentage: 10.837,
      trend: "up",
      percentageBg: "bg-blue-100 text-blue-500",
      increaseText: "Increased from last month",
      menuOptions: ["View Details", "Export List", "Analyze Trends"],
    },
  ];

  const handleClick = (event, reportId) => {
    setAnchorEl(event.currentTarget);
    setActiveReport(reportId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActiveReport(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 pr-4">
      {reports.map((report) => (
        <div
          key={report.id}
          className={`p-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-102 hover:shadow-xl
            ${report.backgroundColor} ${report.hoverBackground}
            ${
              report.backgroundColor.includes("black")
                ? "text-white"
                : "text-gray-800"
            }`}
        >
          {/* Top Section */}
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 rounded-lg bg-opacity-10 bg-white">
              <Tooltip
                title={report.title}
                TransitionComponent={Zoom}
                placement="top"
              >
                <div className="text-3xl">{report.icon}</div>
              </Tooltip>
            </div>
            <IconButton
              size="small"
              onClick={(e) => handleClick(e, report.id)}
              className={`hover:bg-opacity-10 hover:bg-white ${
                report.backgroundColor.includes("black")
                  ? "text-white"
                  : "text-gray-500"
              }`}
            >
              <MoreVertIcon />
            </IconButton>
          </div>

          {/* Middle Section */}
          <div className="mb-4 space-y-2">
            <div className="hidden md:block">
              <h3 className="text-sm font-medium opacity-80">
                {report.subtitle}
              </h3>
              <h2 className="text-base font-semibold">{report.title}</h2>
            </div>
            <div className="flex items-baseline gap-2">
              <h2 className="text-xl md:text-2xl font-bold">
                <CountUp
                  end={report.amount}
                  duration={2}
                  separator=","
                  decimals={report.id === 1 || report.id === 2 ? 2 : 0}
                  prefix={report.id === 1 || report.id === 2 ? "$" : ""}
                />
              </h2>
              <Tooltip title="Trend" placement="right">
                <div
                  className={`${
                    report.trend === "up" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {report.trend === "up" ? (
                    <TrendingUpIcon fontSize="small" />
                  ) : (
                    <TrendingDownIcon fontSize="small" />
                  )}
                </div>
              </Tooltip>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
            <div
              className={`px-3 py-1 rounded-full text-xs font-semibold ${report.percentageBg}`}
            >
              +{report.percentage}%
            </div>
            <p className="text-xs opacity-75">{report.increaseText}</p>
          </div>
        </div>
      ))}

      {/* Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          className: "shadow-lg rounded-lg",
        }}
      >
        {activeReport &&
          reports
            .find((r) => r.id === activeReport)
            ?.menuOptions.map((option, index) => (
              <MenuItem
                key={index}
                onClick={handleClose}
                className="text-sm hover:bg-gray-50"
              >
                {option}
              </MenuItem>
            ))}
      </Menu>
    </div>
  );
};

export default ReportBox;
