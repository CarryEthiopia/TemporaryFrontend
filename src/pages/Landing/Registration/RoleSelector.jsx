import React from "react";

const RoleSelector = ({ onRoleSelect, selectedRole }) => {
  const roles = [
    {
      id: "sender",
      name: "Sender/Receiver",
      description: "Send or receive packages easily.",
    },
    {
      id: "traveler",
      name: "Traveler",
      description: "Deliver items, earn while traveling.",
    },
  ];

  const handleRoleSelect = (roleId) => {
    onRoleSelect(roleId);
  };

  return (
    <div className="max-w-3xl w-full p-6 space-y-8">
      {/* Welcome Message */}
      <div className="text-center">
        <h2 className="mt-6 text-3xl font-bold text-gray-900">
          Welcome to Carry
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Select your role to proceed with creating your account.
        </p>
      </div>

      {/* Role Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roles.map((role) => (
          <div
            key={role.id}
            role="button"
            aria-pressed={selectedRole === role.id}
            onClick={() => handleRoleSelect(role.id)}
            className={`relative border rounded-lg p-6 cursor-pointer transition-transform duration-300 shadow-md
              ${
                selectedRole === role.id
                  ? "border-blue-500 transform scale-105 shadow-xl bg-blue-50"
                  : "border-gray-200 hover:shadow-lg hover:transform hover:scale-105 bg-white"
              }`}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {role.name}
            </h3>
            <p className="text-gray-700 text-sm">{role.description}</p>
            {selectedRole === role.id && (
              <div className="absolute top-2 right-2 text-blue-500">✓</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoleSelector;