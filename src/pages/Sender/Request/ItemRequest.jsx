import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import Sidebar from "../Shared/Sidebar";

const ItemRequest = () => {
  const navigate = useNavigate();

  // Function to handle navigation to the Home page
  const handleBackClick = () => {
    navigate("/home");
  };

  return (
    <Sidebar>
      <div className="p-6 flex flex-col items-start space-y-6">
        {/* Logo and Back Button */}
        <div className="flex flex-col items-start space-y-3">
          <img src={logo} alt="Carry Ethiopia Logo" className="w-24 h-24" />
          <button
            onClick={handleBackClick}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>

        {/* Fill out your item details */}
        <div className="flex items-center space-x-3">
          <span className="text-xl font-semibold">
            Fill out your Item Details
          </span>
        </div>

        {/* Input Fields with Labels Above */}
        <div className="grid grid-cols-2 gap-4 w-full">
          <div>
            <label className="text-sm text-gray-600">Package Detail</label>
            <input type="text" className="p-3 border rounded w-full" />
          </div>

          <div>
            <label className="text-sm text-gray-600">Package Name</label>
            <input type="text" className="p-3 border rounded w-full" />
          </div>

          <div>
            <label className="text-sm text-gray-600">Item Description</label>
            <input type="text" className="p-3 border rounded w-full" />
          </div>

          <div>
            <label className="text-sm text-gray-600">Package Value</label>
            <input type="number" className="p-3 border rounded w-full" />
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="text-sm text-gray-600">Quantity in Kg</label>
              <input type="number" className="p-3 border rounded w-full" />
            </div>
            <div className="w-1/2">
              <label className="text-sm text-gray-600">Price</label>
              <div className="relative">
                <input
                  type="number"
                  className="p-3 border rounded w-full pl-8"
                />
                <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600">
                  $
                </span>
              </div>
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600">
              Address Sending From
            </label>
            <input type="text" className="p-3 border rounded w-full" />
          </div>

          <div>
            <label className="text-sm text-gray-600">
              Address Delivered To
            </label>
            <input type="text" className="p-3 border rounded w-full" />
          </div>

          <div>
            <label className="text-sm text-gray-600">Name of Receiver</label>
            <input type="text" className="p-3 border rounded w-full" />
          </div>

          <div>
            <label className="text-sm text-gray-600">
              Phone Number of Receiver
            </label>
            <input type="tel" className="p-3 border rounded w-full" />
          </div>
        </div>

        {/* File Input moved to the left and resized */}
        <div className="flex flex-col items-start space-y-2 w-full">
          <div className="w-1/2 border-dashed border-2 border-gray-300 p-4 flex flex-col items-start space-y-2">
            <span className="text-center">Drag and drop file here</span>
            <span>or</span>
            <button className="text-blue-500">
              Choose file
              <input
                type="file"
                accept=".xls,.txt,.png,.jpeg,.gif"
                className="hidden"
              />
            </button>
          </div>
          <span className="text-sm text-gray-500">
            XLS, TXT, PNG, JPEG, GIF
          </span>
        </div>

        {/* Connect with Traveler Button */}
        <button className="mt-6 bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600">
          Connect with a Traveler
        </button>
      </div>
      <div>hi</div>
    </Sidebar>
    
  );
};

export default ItemRequest;
