import React, { useState, useEffect } from "react";
import Navbar from "../../components/Shared/Navbar";
import Sidebar from "../../components/Shared/Sidebar";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import Status from "./Status";

const Home = () => {
  const [count, setCount] = useState(0);
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

  // Mock traveler data
  const travelers = [
    {
      profileImage: "https://via.placeholder.com/40",
      name: "Baslael Workineh",
      destination: "Addis Ababa to Mekele",
      flightTime: "12/24/2024, 3:45 PM",
    },
    {
      profileImage: "https://via.placeholder.com/40",
      name: "Jane Doe",
      destination: "Addis Ababa to Bahir Dar",
      flightTime: "12/25/2024, 1:30 PM",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <div className="flex-1 bg-gray-100 p-6 lg:ml-64">
          {/* Boxes Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 mt-10 ml-20">
            {/* Box 1 */}
            <div
              className="bg-white rounded-lg shadow-lg p-6 text-center cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => navigate("/deliver")}
            >
              <AddIcon className="text-orange-500" style={{ fontSize: 50 }} />
              <p className="mt-4 font-semibold text-gray-700">
                I have a package to deliver
              </p>
            </div>
            {/* Box 2 */}
            <div
              className="bg-white rounded-lg shadow-lg p-6 text-center cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => navigate("/history")}
            >
              <p className="text-lg font-bold text-gray-700">History</p>
              <p className="mt-2 text-sm text-gray-500">
                Our travelers and their achievements
              </p>
            </div>
            {/* Box 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <p className="text-4xl font-bold text-orange-500">{count}</p>
              <p className="mt-4 font-semibold text-gray-700">
                Packages delivered
              </p>
            </div>
          </div>

          {/* Status Section */}
          <Status travelers={travelers} />
        </div>
      </div>
    </div>
  );
};

export default Home;
