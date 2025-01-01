import React from "react";

const Home = () => {
  return (
    <div className="pt-16 pl-64 h-screen bg-gray-100">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">Welcome, Traveler!</h1>
        <p className="mt-2 text-gray-600">
          Explore your upcoming trips and manage your profile here.
        </p>
        {/* Example Content */}
        <div className="mt-6 grid grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-lg font-semibold">Your Trips</h2>
            <p className="mt-2 text-sm text-gray-500">
              View your upcoming journeys.
            </p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-lg font-semibold">Messages</h2>
            <p className="mt-2 text-sm text-gray-500">
              Check messages from other travelers.
            </p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-lg font-semibold">Profile</h2>
            <p className="mt-2 text-sm text-gray-500">
              Update your profile and preferences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
