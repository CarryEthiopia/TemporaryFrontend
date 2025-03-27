import React, { useState } from "react";
import { motion } from "framer-motion";

const AccountDeletion = () => {
  const [formData, setFormData] = useState({
    phone: "",
    reason: "",
    confirmation: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.confirmation) {
      alert("You must confirm the deletion request.");
      return;
    }
    alert("Your account deletion request has been submitted.");
    // Handle form submission (send request to backend)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-100 py-12 px-6 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Account Deletion</h1>
        <p className="text-gray-700 mb-4">We're sorry to see you go. Please fill out the form below to request account deletion.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Phone Number</label>
            <input
              type="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-red-400"
              placeholder="Enter your phone"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Reason for Deletion</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-red-400"
              placeholder="Tell us why you're leaving (optional)"
              rows="4"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="confirmation"
              checked={formData.confirmation}
              onChange={handleChange}
              className="w-5 h-5 text-red-500"
            />
            <label className="text-gray-700">
              I confirm that I want to permanently delete my account.
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold text-lg shadow-lg transition-all duration-300"
          >
            Submit Request
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default AccountDeletion;
