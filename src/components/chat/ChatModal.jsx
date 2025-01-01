// components/chat/ChatModal.jsx
import React, { useState } from 'react';
import { Close, Send, AttachFile, EmojiEmotions } from '@mui/icons-material';
import ChatMessage from './ChatMessage';
import ChatHeader from './ChatHeader';
import MessageInput from './MessageInput';
import ChatMessages from './ChatMessages';

const ChatModal = ({ isOpen, onClose, traveler }) => {
  const [messages, setMessages] = useState([
    // Sample messages for demonstration
    {
      id: 1,
      sender: 'traveler',
      text: 'Hello! How can I help you?',
      timestamp: new Date(Date.now() - 3600000),
    },
    {
      id: 2,
      sender: 'user',
      text: 'Hi! I have a package to send.',
      timestamp: new Date(Date.now() - 1800000),
    },
  ]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl h-[600px] flex flex-col">
        <ChatHeader traveler={traveler} onClose={onClose} />
        <ChatMessages messages={messages} />
        <MessageInput onSendMessage={message => 
          setMessages(prev => [...prev, {
            id: prev.length + 1,
            sender: 'user',
            text: message,
            timestamp: new Date(),
          }])
        } />
      </div>
    </div>
  );
};

export default ChatModal;