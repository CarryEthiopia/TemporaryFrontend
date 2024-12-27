import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Add as AddIcon,
  LocalShipping,
  History,
  Timeline,
  TrendingUp,
  Stars,
  EmojiEvents,
} from "@mui/icons-material";
import Status from "./Status";

const StatCard = ({ icon: Icon, title, value, description, color }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300
      border-b-4 ${color}`}
  >
    <div className="flex items-center justify-between mb-4">
      <div
        className={`p-3 rounded-lg bg-opacity-20 ${color.replace(
          "border",
          "bg"
        )}`}
      >
        <Icon
          className={color.replace("border", "text").replace("-500", "-600")}
        />
      </div>
      <Stars className="text-yellow-400" />
    </div>
    <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
    <p className="text-sm font-medium text-gray-600 mt-1">{title}</p>
    {description && <p className="text-xs text-gray-500 mt-2">{description}</p>}
  </motion.div>
);

const ActionCard = ({ icon: Icon, title, description, onClick, color }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300
      cursor-pointer border-b-4 ${color}`}
  >
    <div
      className={`p-4 rounded-lg bg-opacity-20 ${color.replace(
        "border",
        "bg"
      )} mb-4`}
    >
      <Icon
        className={`${color
          .replace("border", "text")
          .replace("-500", "-600")} text-4xl`}
      />
    </div>
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className="text-sm text-gray-600 mt-2">{description}</p>
  </motion.div>
);

const Home = () => {
  const [count, setCount] = useState(0);
  const [stats, setStats] = useState({
    activeDeliveries: 0,
    successRate: 0,
    totalEarnings: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const target = 50000;
    if (count < target) {
      const interval = setInterval(() => {
        setCount((prev) => Math.min(prev + 500, target));
      }, 50);
      return () => clearInterval(interval);
    }
  }, [count]);

  useEffect(() => {
    // Animate other stats
    const animateStats = () => {
      setStats({
        activeDeliveries: 247,
        successRate: 98,
        totalEarnings: 125000,
      });
    };

    const timeout = setTimeout(animateStats, 500);
    return () => clearTimeout(timeout);
  }, []);

  const travelers = [
    {
      profileImage: "https://via.placeholder.com/40",
      name: "Baslael Workineh",
      destination: "Addis Ababa to Mekele",
      flightTime: "12/24/2024, 3:45 PM",
      rating: 4.8,
      deliveries: 156,
    },
    {
      profileImage: "https://via.placeholder.com/40",
      name: "Jane Doe",
      destination: "Addis Ababa to Bahir Dar",
      flightTime: "12/25/2024, 1:30 PM",
      rating: 4.9,
      deliveries: 234,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50 p-6 lg:p-8 mt-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Dashboard Overview
          </h1>
          <p className="text-gray-600 mt-2">
            Welcome back! Here's what's happening today.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <ActionCard
            icon={AddIcon}
            title="Send a Package"
            description="Create a new delivery request"
            onClick={() => navigate("/request")}
            color="border-blue-500"
          />
          <ActionCard
            icon={History}
            title="View History"
            description="Check past deliveries and analytics"
            onClick={() => navigate("/history")}
            color="border-purple-500"
          />
          <ActionCard
            icon={Timeline}
            title="Track Deliveries"
            description="Monitor active shipments"
            onClick={() => navigate("/tracking")}
            color="border-green-500"
          />
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={LocalShipping}
            title="Total Deliveries"
            value={count.toLocaleString()}
            description="Successfully completed deliveries"
            color="border-orange-500"
          />
          <StatCard
            icon={TrendingUp}
            title="Active Deliveries"
            value={stats.activeDeliveries}
            description="Currently in transit"
            color="border-blue-500"
          />
          <StatCard
            icon={Stars}
            title="Success Rate"
            value={`${stats.successRate}%`}
            description="Average completion rate"
            color="border-green-500"
          />
          <StatCard
            icon={EmojiEvents}
            title="Total Earnings"
            value={`$${stats.totalEarnings.toLocaleString()}`}
            description="Platform-wide earnings"
            color="border-purple-500"
          />
        </div>

        {/* Status Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Active Travelers
          </h2>
          <Status travelers={travelers} />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
