import React from "react";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DescriptionIcon from "@mui/icons-material/Description";
import BalanceIcon from "@mui/icons-material/Balance";
import CountUp from "react-countup";

const ReportBox = () => {
  const reports = [
    {
      id: 1,
      backgroundColor: "bg-black text-white",
      icon: <DescriptionIcon fontSize="large" />,
      title: "Total Income of Travelers",
      amount: 104284.19,
      percentage: 15.5,
      percentageBg: "bg-green-100 text-green-500",
      increaseText: "Increased 15.5% from last month",
      iconColor: "text-white", // Color for MoreVertIcon in black box
    },
    {
      id: 2,
      backgroundColor: "bg-white text-black",
      icon: <DescriptionIcon fontSize="large" />,
      title: "Total Expenses in this platform",
      amount: 14391.83,
      percentage: 8.5,
      percentageBg: "bg-red-100 text-red-500",
      increaseText: "Increased 8.5% from last month",
    },
    {
      id: 3,
      backgroundColor: "bg-white text-black",
      icon: <BalanceIcon fontSize="large" />,
      title: "Total Travelers",
      amount: 10837,
      percentage: 10.837,
      percentageBg: "bg-blue-100 text-blue-500",
      increaseText: "Increased 10.837% from last month",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {reports.map((report) => (
        <div
          key={report.id}
          className={`p-4 rounded-lg shadow-md flex flex-col justify-between ${report.backgroundColor}`}
        >
          {/* Top Section with Icon and Settings */}
          <div className="flex justify-between items-start mb-4">
            <div>{report.icon}</div>
            <IconButton
              size="small"
              className={`text-gray-400 ${
                report.backgroundColor === "bg-black text-white"
                  ? "text-white"
                  : ""
              }`}
            >
              <MoreVertIcon />
            </IconButton>
          </div>

          {/* Middle Section with Title and Amount */}
          <div className="mb-4">
            <h3 className="text-sm">{report.title}</h3>
            <h2 className="text-2xl font-bold">
              <CountUp
                end={report.amount}
                duration={2}
                separator=","
                decimals={report.id === 1 || report.id === 2 ? 2 : 0}
                prefix={report.id === 1 || report.id === 2 ? "$" : ""}
              />
            </h2>
          </div>

          {/* Bottom Section with Percentage and Text */}
          <div className="flex justify-between items-center">
            <div
              className={`p-2 rounded-full text-xs font-semibold ${report.percentageBg}`}
            >
              +{report.percentage}%
            </div>
            <p className="text-xs">{report.increaseText}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReportBox;
