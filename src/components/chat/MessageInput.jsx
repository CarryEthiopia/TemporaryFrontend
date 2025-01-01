// components/chat/MessageInput.jsx
import React, { useState } from 'react';
import { Send, AttachFile, EmojiEmotions } from '@mui/icons-material';

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="border-t p-4">
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <button
          type="button"
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <AttachFile className="text-gray-600 transform rotate-45" />
        </button>
        <button
          type="button"
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <EmojiEmotions className="text-gray-600" />
        </button>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 disabled:opacity-50"
          disabled={!message.trim()}
        >
          <Send />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;