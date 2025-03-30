import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  UserX,
  ArrowLeft,
  Phone,
  MessageSquare,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const AccountDeletion = () => {
  const [formData, setFormData] = useState({
    phone: "",
    reason: "",
    confirmation: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.confirmation) {
      alert("Please confirm the account deletion request.");
      return;
    }
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    alert("Your account deletion request has been submitted.");
  };

  const consequences = [
    "All your data will be permanently deleted",
    "You'll lose access to your account history",
    "Active subscriptions will be cancelled",
    "This action cannot be undone",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 py-12 px-4 lg:px-16">
      <Helmet>
        <title>Account Deletion | DamaDash</title>
        <meta
          name="description"
          content="You can request to have your DamaDash account permanently deleted. "
        />
        <link rel="canonical" href="https://www.damadash.com/account-deletion" />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl border border-orange-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-orange-100 p-3 rounded-full">
              <UserX className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Delete Account
              </h1>
              <p className="text-gray-600 mt-1">We're sorry to see you go</p>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
              <h2 className="text-lg font-semibold text-gray-800">
                Please Note
              </h2>
            </div>
            <ul className="space-y-3">
              {consequences.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <XCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
                <Phone className="w-5 h-5 text-orange-600" />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200"
                placeholder="Enter your registered phone number"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-orange-600" />
                Reason for Leaving
              </label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200"
                placeholder="Help us improve by sharing your reason (optional)"
                rows="4"
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="confirmation"
                  checked={formData.confirmation}
                  onChange={handleChange}
                  className="w-5 h-5 mt-1 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                />
                <span className="text-gray-700 leading-tight">
                  I understand that this action is permanent and cannot be
                  undone. All my data will be permanently deleted from the
                  platform.
                </span>
              </label>
            </div>

            <div className="flex gap-4 pt-4">
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold text-lg transition-all duration-200 flex-1"
              >
                Cancel
              </motion.button>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold text-lg transition-all duration-200 flex-1 flex items-center justify-center gap-2 ${
                  isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Processing...
                  </>
                ) : (
                  "Delete Account"
                )}
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AccountDeletion;
