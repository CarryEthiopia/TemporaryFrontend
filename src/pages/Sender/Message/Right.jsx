import React, { useState } from "react";
import { Avatar, Badge, IconButton, Typography, Divider } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import CallIcon from "@mui/icons-material/Call";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const messages = [
  {
    id: 1,
    sender: "John Doe",
    text: "Hey, are you free later?",
    timestamp: "10:30 AM",
    isSender: true,
  },
  {
    id: 2,
    sender: "Jane Smith",
    text: "I'm free after 3 PM.",
    timestamp: "10:35 AM",
    isSender: false,
  },
  {
    id: 3,
    sender: "John Doe",
    text: "Let's meet at the cafe.",
    timestamp: "10:40 AM",
    isSender: true,
  },
];

const Right = ({ sender, isTyping, isOnline }) => {
  return (
    <div className="flex-1 bg-gray-50 p-4 shadow-lg">
      {/* Top Section: Profile, Status, and Icons */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              isOnline ? (
                <span className="bg-green-500 h-3 w-3 rounded-full" />
              ) : null
            }
          >
            <Avatar src="https://via.placeholder.com/50" alt={sender.name} />
          </Badge>
          <div>
            <Typography variant="h6" className="font-semibold">
              {sender.name}
            </Typography>
            <Typography variant="body2" className="text-gray-500">
              {isTyping
                ? `${sender.name} is typing...`
                : isOnline
                ? "Online"
                : "Last seen at 10:00 AM"}
            </Typography>
          </div>
        </div>
        <div className="flex gap-2">
          <IconButton>
            <MicIcon />
          </IconButton>
          <IconButton>
            <CallIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <Divider />

      {/* Chat Messages */}
      <div className="space-y-4 mb-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.isSender ? "justify-end" : "justify-start"
            } mb-4`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.isSender ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
            >
              <Typography variant="body2">{message.text}</Typography>
              <Typography
                variant="body2"
                className="text-gray-500 text-xs mt-1"
              >
                {message.timestamp}
              </Typography>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input Field */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full p-3 rounded-lg border border-gray-300"
        />
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Right;
