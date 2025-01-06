import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import ChatMessages from "./ChatMessages";

const ChatModal = ({ isOpen, onClose, traveler }) => {
  const [messages, setMessages] = useState([
    // Sample messages for demonstration
    {
      id: 1,
      sender: "traveler",
      text: "Hello! How can I help you?",
      timestamp: new Date(Date.now() - 3600000),
    },
    {
      id: 2,
      sender: "user",
      text: "Hi! I have a package to send.",
      timestamp: new Date(Date.now() - 1800000),
    },
  ]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl h-[600px] flex flex-col">
        <ChatHeader traveler={traveler} onClose={onClose} />
        <ChatMessages messages={messages} />
        <MessageInput
          onSendMessage={(message) =>
            setMessages((prev) => [
              ...prev,
              {
                id: prev.length + 1,
                sender: "user",
                text: message,
                timestamp: new Date(),
              },
            ])
          }
        />
      </div>
    </div>
  );
};

// Define PropTypes for the component
ChatModal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // isOpen is a required boolean
  onClose: PropTypes.func.isRequired, // onClose is a required function
  traveler: PropTypes.shape({
    profileImage: PropTypes.string.isRequired, // profileImage is a required string
    name: PropTypes.string.isRequired, // name is a required string
    destination: PropTypes.string.isRequired, // destination is a required string
    flightTime: PropTypes.oneOfType([
      PropTypes.instanceOf(Date), // Can be a Date object
      PropTypes.string, // Or a string representing a date
    ]).isRequired, // flightTime is required
  }).isRequired, // traveler is a required object with the above structure
};

export default ChatModal;
