import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, AlertTriangle, Trash2, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AccountDeletion = () => {
  const navigate = useNavigate();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [reason, setReason] = useState("");
  const [isDeleting, setIsDeleting] = useState(false); // State for loading/deleting

  const handleDeletion = async () => {
    // Implement backend functionality here
    setIsDeleting(true);
    // Simulate an asynchronous operation
    await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      // Make API call to delete account
      // await fetch('/api/delete-account', {
      //   method: 'DELETE',
      //   body: JSON.stringify({ reason: reason }),
      //   headers: {
      //     'Content-Type': 'application/json',
      //     // Include any authorization headers if needed
      //   },
      // });

      // If successful, navigate to a goodbye page or the landing page
      navigate("/"); // Or a "goodbye" page
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error("Error deleting account:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        {/* Back Navigation */}
        <motion.button
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-orange-500 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-red-700 mb-2">
            Delete Account
          </h1>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Are you sure you want to delete your account? This action is
            irreversible.
          </p>
        </motion.div>

        {/* Warning Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-red-50 rounded-xl shadow-md p-6 mb-6 border border-red-200"
        >
          <div className="flex items-center mb-4">
            <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
            <h2 className="text-lg font-semibold text-red-700">
              Important Notice
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Deleting your account will permanently remove all your data from our
            system. This includes your profile information, delivery history,
            and any saved preferences. Please be absolutely sure before
            proceeding.
          </p>
        </motion.div>

        {/* Reason for Deletion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="bg-white rounded-xl shadow-md p-6 mb-6"
        >
          <label
            htmlFor="reason"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Reason for Deletion (Optional):
          </label>
          <textarea
            id="reason"
            rows="3"
            className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Tell us why you're leaving..."
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          ></textarea>
        </motion.div>

        {/* Confirmation Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <label htmlFor="confirm" className="flex items-center">
              <input
                type="checkbox"
                id="confirm"
                className="mr-2 h-5 w-5 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                checked={confirmDelete}
                onChange={(e) => setConfirmDelete(e.target.checked)}
              />
              <span className="text-gray-700">
                I confirm that I want to permanently delete my account.
              </span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors duration-300"
            >
              Cancel
            </button>
            <button
              onClick={handleDeletion}
              disabled={!confirmDelete || isDeleting}
              className={`bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 ${
                !confirmDelete || isDeleting
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              {isDeleting ? (
                "Deleting..."
              ) : (
                <>
                  Delete Account{" "}
                  <Trash2 className="w-4 h-4 ml-2 inline-block" />
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AccountDeletion;


//The backend that this page expects create this kind of endpoint Baslael Boss 
//   const handleDeletion = async () => {
//     setIsDeleting(true);

//     try {
//       const token = localStorage.getItem("authToken"); // Assuming you store the token

//       const response = await fetch("/api/delete-account", {
//         // Replace with your API endpoint
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, // Example auth header
//         },
//         body: JSON.stringify({ reason: reason }),
//       });

//       if (!response.ok) {
//         // Handle specific error codes from the API
//         if (response.status === 401) {
//           // Unauthorized - Token expired or invalid
//           console.error("Unauthorized: Please log in again.");
//           // Optionally redirect to login page
//         } else {
//           const errorData = await response.json();
//           console.error("Error deleting account:", errorData);
//           // Display a user-friendly error message (e.g., from errorData.message)
//         }

//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       // Account deletion successful
//       localStorage.removeItem("authToken"); // Remove token
//       navigate("/"); // Redirect to landing page or "goodbye" page
//     } catch (error) {
//       console.error("Error during account deletion:", error);
//       // Display a general error message to the user
//       // setErrorMessage("An error occurred while deleting your account. Please try again later.");
//     } finally {
//       setIsDeleting(false);
//     }
//   };