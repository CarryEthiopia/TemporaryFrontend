// src/components/History/SenderHistory/SenderProfile.jsx
import { CheckCircle } from "@mui/icons-material";

const SenderProfile = () => {
  const senderData = {
    name: "John Doe",
    location: "New York, USA",
    joinDate: "Jan 2024",
    isVerified: true,
    isPaymentVerified: true,
    rating: 4.8,
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-gray-200">
            {/* Profile image placeholder */}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-semibold">{senderData.name}</h3>
              {senderData.isVerified && (
                <CheckCircle className="text-green-500 w-5 h-5" />
              )}
            </div>
            <p className="text-gray-600 text-sm">{senderData.location}</p>
            <p className="text-gray-500 text-sm">
              Member since {senderData.joinDate}
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
            Sender
          </div>
          <div className="mt-2 flex items-center justify-end space-x-1">
            <span className="text-xl font-bold text-gray-800">
              {senderData.rating}
            </span>
            <span className="text-yellow-500">★</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SenderProfile;
