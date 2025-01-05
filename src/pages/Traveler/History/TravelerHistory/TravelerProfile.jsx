// src/components/History/TravelerHistory/TravelerProfile.jsx
import {
  CheckCircle,
  FlightTakeoff,
  Verified,
  Star,
} from "@mui/icons-material";

const TravelerProfile = () => {
  const travelerData = {
    name: "Sarah Johnson",
    location: "London, UK",
    joinDate: "Dec 2023",
    isVerified: true,
    isPaymentVerified: true,
    rating: 4.9,
    languages: ["English", "French"],
    nextTrip: {
      from: "London",
      to: "New York",
      date: "Feb 15, 2024",
    },
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        {/* Profile Left Section */}
        <div className="flex items-start space-x-4">
          <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0">
            {/* Profile image placeholder */}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-xl font-semibold">{travelerData.name}</h3>
              {travelerData.isVerified && (
                <CheckCircle className="text-green-500 w-5 h-5" />
              )}
            </div>
            <p className="text-gray-600">{travelerData.location}</p>
            <div className="flex items-center space-x-2 mt-1">
              <Star className="text-yellow-400 w-5 h-5" />
              <span className="font-semibold">{travelerData.rating}</span>
              <span className="text-gray-500">(124 reviews)</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {travelerData.languages.map((lang) => (
                <span
                  key={lang}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Right Section */}
        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-2 text-green-600">
            <Verified className="w-5 h-5" />
            <span>Identity Verified</span>
          </div>
          <div className="flex items-center space-x-2 text-blue-600">
            <FlightTakeoff className="w-5 h-5" />
            <div className="text-sm">
              <p className="font-semibold">Next Trip:</p>
              <p>
                {travelerData.nextTrip.from} → {travelerData.nextTrip.to}
              </p>
              <p>{travelerData.nextTrip.date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelerProfile;
