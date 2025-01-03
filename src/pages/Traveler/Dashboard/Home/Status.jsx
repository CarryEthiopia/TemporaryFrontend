import  { useState } from "react";
import {
  FaSearch,
  FaPlane,
  FaClock,
  FaMapMarkerAlt,
  FaCalendar,
  FaTicketAlt,
} from "react-icons/fa";
import PropTypes from "prop-types"; // Import PropTypes


const Status = ({ senders }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSender, setSelectedSender] = useState(null);

  const filteredSender = senders.filter((sender) =>
    sender.destination.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <FaPlane className="inline-block" />
            Sender Updates
          </h2>
        </div>

        {/* Search Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by destination..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 ease-in-out"
            />
          </div>
        </div>

        {/* Table Header */}
        <div className="hidden lg:grid grid-cols-5 gap-4 p-6 bg-gray-50 text-gray-700 font-semibold">
          <div>Sender</div>
          <div>Destination</div>
          <div>Sending Time</div>
          <div>Status</div>
          <div>Actions</div>
        </div>

        {/* Travelers List */}
        <div className="divide-y divide-gray-200">
          {filteredSender.map((sender, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-5 gap-4 p-6 hover:bg-gray-50 transition duration-150 ease-in-out cursor-pointer ${
                selectedSender === sender ? "bg-orange-50" : ""
              }`}
              onClick={() => setSelectedSender(sender)}
            >
              {/* sender Info */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={sender.profileImage}
                    alt={sender.name}
                    className="w-12 h-12 rounded-full border-2 border-orange-500"
                  />
                  <span
                    className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full ${
                      sender.status === "online"
                        ? "bg-green-500"
                        : "bg-gray-400"
                    } border-2 border-white`}
                  ></span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">
                    {sender.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    #{sender.bookingId}
                  </div>
                </div>
              </div>

              {/* Destination */}
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-orange-500" />
                <span>{sender.destination}</span>
              </div>

              {/* Flight Time */}
              <div className="flex items-center space-x-2">
                <FaClock className="text-orange-500" />
                <div>
                  <div>{sender.flightTime}</div>
                  <div className="text-sm text-gray-500">{sender.date}</div>
                </div>
              </div>

              {/* Status */}
              <div>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    sender.flightStatus === "On Time"
                      ? "bg-green-100 text-green-800"
                      : sender.flightStatus === "Delayed"
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {sender.flightStatus}
                </span>
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <button className="inline-flex items-center px-3 py-2 border border-orange-500 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white transition duration-150 ease-in-out">
                  <FaTicketAlt className="mr-2" />
                  View Ticket
                </button>
                <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition duration-150 ease-in-out">
                  <FaCalendar className="mr-2" />
                  Reschedule
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredSender.length === 0 && (
          <div className="p-12 text-center text-gray-500">
            <FaPlane className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No sender found
            </h3>
            <p>Try adjusting your search terms</p>
          </div>
        )}
      </div>
    </div>
  );
};
Status.propTypes = {
  senders: PropTypes.arrayOf(
    PropTypes.shape({
      profileImage: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      bookingId: PropTypes.string.isRequired,
      destination: PropTypes.string.isRequired,
      flightTime: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      flightStatus: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Status;
