import { useEffect, useRef } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import ChatMessage from "./ChatMessage";

const ChatMessages = ({ messages }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

// Define PropTypes for the component
ChatMessages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // id is required and can be string or number
      sender: PropTypes.string.isRequired, // sender is a string, required
      text: PropTypes.string.isRequired, // text is a string, required
      timestamp: PropTypes.oneOfType([
        PropTypes.instanceOf(Date), // Can be a Date object
        PropTypes.string, // Or a string representing a date
      ]).isRequired, // timestamp is required
    })
  ).isRequired, // messages is an array of objects, required
};

export default ChatMessages;
