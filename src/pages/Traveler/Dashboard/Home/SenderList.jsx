import  { useState } from "react";
import {
  FilterList,
  Close,
  Star,
  Search,
  KeyboardArrowDown,
  Badge,
} from "@mui/icons-material";
import ChatModal from "../../../../components/chat/ChatModal";
import PropTypes from "prop-types"; // Import PropTypes


const FilterModal = ({ isOpen, onClose, filters, setFilters }) => {
  const [tempFilters, setTempFilters] = useState(filters);

  const applyFilters = () => {
    setFilters(tempFilters);
    onClose();
  };

  if (!isOpen) return null;
FilterModal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // isOpen should be a boolean
  onClose: PropTypes.func.isRequired, // onClose should be a function
  filters: PropTypes.object.isRequired, // filters should be an object
  setFilters: PropTypes.func.isRequired, // setFilters should be a function
};
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">Filter Travelers</h3>
          <button onClick={onClose} className="p-1">
            <Close />
          </button>
        </div>

        <div className="p-4 space-y-4">
          {/* Date Range */}
          <div>
            <label className="block text-sm font-medium mb-2">Date Range</label>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                className="border rounded-lg p-2 w-full"
                value={tempFilters.startDate}
                onChange={(e) =>
                  setTempFilters({ ...tempFilters, startDate: e.target.value })
                }
              />
              <input
                type="date"
                className="border rounded-lg p-2 w-full"
                value={tempFilters.endDate}
                onChange={(e) =>
                  setTempFilters({ ...tempFilters, endDate: e.target.value })
                }
              />
            </div>
          </div>

          {/* Destination */}
          <div>
            <label className="block text-sm font-medium mb-2">Departure</label>
            <select
              className="border rounded-lg p-2 w-full"
              value={tempFilters.departure}
              onChange={(e) =>
                setTempFilters({ ...tempFilters, departure: e.target.value })
              }
            >
              <option value="">All Departures</option>
              <option value="Addis Ababa">Addis Ababa</option>
              <option value="Mekele">Mekele</option>
              <option value="Bahir Dar">Bahir Dar</option>
            </select>

            <label className="block text-sm font-medium mb-2">
              Destination
            </label>
            <select
              className="border rounded-lg p-2 w-full"
              value={tempFilters.destination}
              onChange={(e) =>
                setTempFilters({ ...tempFilters, destination: e.target.value })
              }
            >
              <option value="">All Destinations</option>
              <option value="Addis Ababa">Addis Ababa</option>
              <option value="Mekele">Mekele</option>
              <option value="Bahir Dar">Bahir Dar</option>
            </select>
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Minimum Rating
            </label>
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  className={`p-2 rounded-lg ${
                    tempFilters.rating >= rating
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() =>
                    setTempFilters({ ...tempFilters, rating: rating })
                  }
                >
                  {rating}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 border-t flex space-x-3">
          <button
            onClick={() => {
              setTempFilters({
                startDate: "",
                endDate: "",
                destination: "",
                rating: 0,
              });
            }}
            className="flex-1 px-4 py-2 border rounded-lg"
          >
            Reset
          </button>
          <button
            onClick={applyFilters}
            className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

const SenderList = ({ Senders }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState("name");
  const [expandedSender, setExpandedSender] = useState(null);
  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    departure: "",
    destination: "",
    rating: 0,
  });
  // Prop validation
  SenderList.propTypes = {
    Senders: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        destination: PropTypes.string.isRequired,
        departure: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        flightTime: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  const filteredAndSortedSenders = (Senders || [])
    .filter((Sender) => {
      const matchesSearch =
        Sender.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        Sender.destination.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDestination =
        !filters.destination ||
        Sender.destination.includes(filters.destination);

      const matchesDeparture =
        !filters.departure || Sender.departure.includes(filters.departure);

      const matchesRating = Sender.rating >= filters.rating;

      const sendingDate = new Date(Sender.sendingTime);
      const matchesDateRange =
        (!filters.startDate || sendingDate >= new Date(filters.startDate)) &&
        (!filters.endDate || sendingDate <= new Date(filters.endDate));

      return (
        matchesSearch &&
        matchesDeparture &&
        matchesDestination &&
        matchesRating &&
        matchesDateRange
      );
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "date":
          return new Date(a.sendingTime) - new Date(b.sendingTime);
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const toggleExpand = (SenderId) => {
    setExpandedSender(expandedSender === SenderId ? null : SenderId);
  };
  const [SelectedSender, setSelectedSender] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleContactClick = (Sender) => {
    setSelectedSender(Sender);
    setIsChatOpen(true);
  };

  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden pb-16">
      {/* Header and Search */}
      <div className="p-4 border-b">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <h2 className="text-lg font-semibold text-gray-800">
            Active Senders
          </h2>
          <div className="flex space-x-2">
            <div className="relative flex-1 md:w-64">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search Senders..."
                className="w-full px-4 py-2 border rounded-lg pl-10 pr-4"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <button
              onClick={() => setIsFilterModalOpen(true)}
              className="p-2 border rounded-lg hover:bg-gray-50"
            >
              <FilterList />
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="p-2 border rounded-lg hover:bg-gray-50"
            >
              <option value="name">Sort by Name</option>
              <option value="date">Sort by Date</option>
              <option value="rating">Sort by Rating</option>
            </select>
          </div>
        </div>
      </div>

      {/* Modified Travelers List */}
      <div className="divide-y divide-gray-100">
        {filteredAndSortedSenders.map((Sender, index) => (
          <div
            key={index}
            className="p-4 hover:bg-gray-50 transition-colors duration-150"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* Traveler Info */}
              <div className="flex items-center space-x-3">
                <div className="relative flex-shrink-0">
                  <img
                    src={Sender.profileImage}
                    alt=""
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-green-500 border-2 border-white"></span>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold">{Sender.name}</h3>
                  <p className="text-sm text-gray-500">{Sender.destination}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge color="primary" />
                <p className="text-sm font-semibold text-gray-600">
                  {Sender.rating} <Star fontSize="small" />
                </p>
                <button
                  onClick={() => handleContactClick(Sender)}
                  className="px-4 py-2 text-sm text-white bg-green-500 rounded-lg"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Sender Details */}
            <div
              className={`${
                expandedSender === Sender.id ? "block" : "hidden"
              } mt-4`}
            >
              <div className="text-sm text-gray-600">{Sender.details}</div>
            </div>

            {/* Expand Button */}
            <div className="mt-2 text-sm text-gray-500 cursor-pointer">
              <button onClick={() => toggleExpand(Sender.id)}>
                {expandedSender === Sender.id ? (
                  <span>Show less</span>
                ) : (
                  <span>Show more</span>
                )}
                <KeyboardArrowDown fontSize="small" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Modal */}
      {isChatOpen && SelectedSender && (
        <ChatModal
          Sender={SelectedSender}
          onClose={() => setIsChatOpen(false)}
        />
      )}

      {/* Filter Modal */}
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        filters={filters}
        setFilters={setFilters}
      />
    </div>
  );
};

export default SenderList;
