import  { useState } from "react";
import {
  AccessTime,
  LocationOn,
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
FilterModal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // isOpen should be a boolean
  onClose: PropTypes.func.isRequired, // onClose should be a function
  filters: PropTypes.object.isRequired, // filters should be an object
  setFilters: PropTypes.func.isRequired, // setFilters should be a function
};

  if (!isOpen) return null;

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

const TravelersList = ({ travelers }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState("name");
  const [expandedTraveler, setExpandedTraveler] = useState(null);
  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    departure: "",
    destination: "",
    rating: 0,
  });

  const filteredAndSortedTravelers = travelers
    .filter((traveler) => {
      const matchesSearch =
        traveler.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        traveler.destination.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDestination =
        !filters.destination ||
        traveler.destination.includes(filters.destination);

      const matchesDeparture =
        !filters.departure || traveler.departure.includes(filters.departure);

      const matchesRating = traveler.rating >= filters.rating;

      const travelDate = new Date(traveler.flightTime);
      const matchesDateRange =
        (!filters.startDate || travelDate >= new Date(filters.startDate)) &&
        (!filters.endDate || travelDate <= new Date(filters.endDate));

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
          return new Date(a.flightTime) - new Date(b.flightTime);
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
  const toggleExpand = (travelerId) => {
    setExpandedTraveler(expandedTraveler === travelerId ? null : travelerId);
  };
  const [selectedTraveler, setSelectedTraveler] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleContactClick = (traveler) => {
    setSelectedTraveler(traveler);
    setIsChatOpen(true);
  };
  // Prop validation
  TravelersList.propTypes = {
    travelers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        destination: PropTypes.string.isRequired,
        departure: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        flightTime: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden pb-16">
      {/* Header and Search */}
      <div className="p-4 border-b">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <h2 className="text-lg font-semibold text-gray-800">
            Active Travelers
          </h2>
          <div className="flex space-x-2">
            <div className="relative flex-1 md:w-64">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search travelers..."
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
        {filteredAndSortedTravelers.map((traveler, index) => (
          <div
            key={index}
            className="p-4 hover:bg-gray-50 transition-colors duration-150"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* Traveler Info */}
              <div className="flex items-center space-x-3">
                <div className="relative flex-shrink-0">
                  <img
                    src={traveler.profileImage}
                    alt=""
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-green-500 border-2 border-white"></span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">
                    {traveler.name}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    {traveler.rating.toFixed(1)}
                  </div>
                </div>
              </div>

              {/* Travel Details */}
              <div className="flex flex-col space-y-1">
                <div className="flex items-center text-sm text-gray-600">
                  <AccessTime className="w-4 h-4 mr-2" />
                  {new Date(traveler.flightTime).toLocaleString()}
                </div>
                <div className="flex items-center text-sm text-gray-600 space-x-2">
                  <div className="flex items-center">
                    <LocationOn className="w-4 h-4 mr-1 text-blue-500" />
                    <span>{traveler.departure}</span>
                  </div>
                  <span className="text-gray-400 font-medium">to</span>
                  <div className="flex items-center">
                    <LocationOn className="w-4 h-4 mr-1 text-red-500" />
                    <span>{traveler.destination}</span>
                  </div>
                </div>
              </div>

              {/* Modified Actions with Dropdown */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => toggleExpand(traveler.id)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <KeyboardArrowDown
                    className={`transform transition-transform duration-300 ${
                      expandedTraveler === traveler.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <button
                  onClick={() => handleContactClick(traveler)}
                  className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            {selectedTraveler && (
              <ChatModal
                isOpen={isChatOpen}
                onClose={() => {
                  setIsChatOpen(false);
                  setSelectedTraveler(null);
                }}
                traveler={selectedTraveler}
              />
            )}
            {/* Expandable Content */}
            <div
              className={`
                overflow-hidden transition-all duration-300 mt-4
                ${
                  expandedTraveler === traveler.id
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
            >
              <div className="space-y-4 pl-16">
                <div className="flex items-center space-x-2">
                  <Badge className="text-gray-600" />
                  <span className="text-sm text-gray-700">
                    ID: {traveler.id}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <AccessTime className="text-orange-500" />
                  <span className="text-sm text-gray-600">
                    {new Date(traveler.flightTime).toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <LocationOn className="text-orange-500" />
                  <span className="text-sm text-gray-600">
                    From: {traveler.departure}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <LocationOn className="text-orange-500" />
                  <span className="text-sm text-gray-600">
                    To: {traveler.destination}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredAndSortedTravelers.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            <p className="text-lg font-medium">No travelers found</p>
            <p className="text-sm mt-1">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        filters={filters}
        setFilters={setFilters}
      />
    </div>
  );
};

export default TravelersList;
