import React from "react";
import { FiSend } from "react-icons/fi"; // Feather Icons
import { FaPlaneDeparture } from "react-icons/fa"; // Font Awesome Icons

const RoleSelector = ({ onRoleSelect, selectedRole }) => {
  const roles = [
    {
      id: "sender",
      name: "Sender/Receiver",
      description: "Send or receive packages easily and securely.",
      icon: <FiSend className="h-8 w-8 text-blue-500" />, // Icon for Sender/Receiver
    },
    {
      id: "traveler",
      name: "Traveler",
      description: "Deliver items and earn rewards while traveling.",
      icon: <FaPlaneDeparture className="h-8 w-8 text-orange-500" />, // New icon for Traveler
    },
  ];

  const handleRoleSelect = (roleId) => {
    onRoleSelect(roleId);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Welcome Message */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Welcome to Carry
        </h2>
        <p className="text-sm sm:text-lg text-gray-600">
          Select your role to proceed and start connecting with others.
        </p>
      </div>

      {/* Role Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {roles.map((role) => (
          <div
            key={role.id}
            role="button"
            aria-pressed={selectedRole === role.id}
            onClick={() => handleRoleSelect(role.id)}
            className={`relative border rounded-2xl p-6 sm:p-8 cursor-pointer transition-transform duration-300 shadow-lg
              ${
                selectedRole === role.id
                  ? role.id === "traveler"
                    ? "border-orange-500 bg-blue-100 transform scale-105 shadow-xl"
                    : "border-blue-500 bg-blue-100 transform scale-105 shadow-xl"
                  : "border-gray-300 hover:border-blue-400 hover:shadow-xl hover:scale-105 bg-white"
              }`}
          >
            <div className="flex items-center">
              {role.icon}
              <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 ml-3">
                {role.name}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-gray-600 mt-4">
              {role.description}
            </p>
            {selectedRole === role.id && (
              <div className="absolute top-4 right-4 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoleSelector;
