// components/chat/ChatHeader.jsx
import PropTypes from "prop-types"; // Import PropTypes
import { Close, MoreVert } from "@mui/icons-material";

const ChatHeader = ({ traveler, onClose }) => (
  <div className="p-4 border-b flex items-center justify-between">
    <div className="flex items-center space-x-3">
      <div className="relative">
        <img
          src={traveler.profileImage}
          alt={traveler.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{traveler.name}</h3>
        <p className="text-sm text-gray-500">
          {traveler.destination} •{" "}
          {new Date(traveler.flightTime).toLocaleDateString()}
        </p>
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <MoreVert className="text-gray-600" />
      </button>
      <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
        <Close className="text-gray-600" />
      </button>
    </div>
  </div>
);

// Define PropTypes for the component
ChatHeader.propTypes = {
  traveler: PropTypes.shape({
    profileImage: PropTypes.string.isRequired, // Image URL, required
    name: PropTypes.string.isRequired, // Traveler's name, required
    destination: PropTypes.string.isRequired, // Destination, required
    flightTime: PropTypes.oneOfType([
      PropTypes.string, // Can be a string
      PropTypes.instanceOf(Date), // Or a Date object
    ]).isRequired,
  }).isRequired, // Entire traveler object is required
  onClose: PropTypes.func.isRequired, // onClose callback, required
};

export default ChatHeader;
