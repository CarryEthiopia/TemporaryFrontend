import PropTypes from "prop-types"; // Import PropTypes

const ChatMessage = ({ message }) => {
  const isUser = message.sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[70%] break-words rounded-lg px-4 py-2 ${
          isUser
            ? "bg-blue-500 text-white rounded-br-none"
            : "bg-gray-100 text-gray-900 rounded-bl-none"
        }`}
      >
        <p className="text-sm">{message.text}</p>
        <p
          className={`text-xs mt-1 ${
            isUser ? "text-blue-100" : "text-gray-500"
          }`}
        >
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
};

// Define PropTypes for the component
ChatMessage.propTypes = {
  message: PropTypes.shape({
    sender: PropTypes.string.isRequired, // Sender is a string, required
    text: PropTypes.string.isRequired, // Message text is a string, required
    timestamp: PropTypes.oneOfType([
      PropTypes.instanceOf(Date), // Can be a Date object
      PropTypes.string, // Or a string representing a date
    ]).isRequired, // Timestamp is required
  }).isRequired, // Entire message object is required
};

export default ChatMessage;
