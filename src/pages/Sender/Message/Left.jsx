import React, { useState } from "react";
import { Avatar, Badge, IconButton, Typography } from "@mui/material";
import PushPinIcon from "@mui/icons-material/PushPin";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

const users = [
  {
    id: 1,
    name: "John Doe",
    info: "Info account",
    profileImg: "https://via.placeholder.com/50",
    online: true,
    lastMessage: "Hey, are you free later?",
    unreadMessages: 3,
    seen: false,
    pinned: true,
    typing: false,
  },
  {
    id: 2,
    name: "Jane Smith",
    info: "Info account",
    profileImg: "https://via.placeholder.com/50",
    online: false,
    lastMessage: "See you at the meeting.",
    unreadMessages: 0,
    seen: true,
    pinned: false,
    typing: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    info: "Info account",
    profileImg: "https://via.placeholder.com/50",
    online: true,
    lastMessage: "Sure, I'll be there in 10 minutes.",
    unreadMessages: 2,
    seen: false,
    pinned: false,
    typing: true,
  },
];

const Left = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedUser, setSelectedUser] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleUserClick = (userId) => {
    const user = users.find((user) => user.id === userId);
    setSelectedUser(user);
  };

  const filteredUsers =
    activeTab === "Unread"
      ? users.filter((user) => user.unreadMessages > 0 && !user.seen)
      : users;

  return (
    <div className="flex justify-center items-center h-[calc(100vh-64px)] ml-[240px] mr-[20px] bg-gray-100  mt-[30px]">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl h-full p-6 overflow-hidden">
        <div>
          {/* Profile Section */}
          <div className="flex items-center gap-4 mb-6">
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <span className="bg-green-500 h-3 w-3 rounded-full" />
              }
            >
              <Avatar src="https://via.placeholder.com/50" alt="User Profile" />
            </Badge>
            <div className="flex flex-col">
              <Typography
                variant="h6"
                className="font-bold cursor-pointer"
                onClick={() => console.log("Navigate to User Info")}
              >
                User Name
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                className="text-gray-500 cursor-pointer"
                onClick={() => console.log("Navigate to User Info")}
              >
                Info account
              </Typography>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-4 border-b-2 pb-2">
            {["All", "Unread"].map((tab) => (
              <div
                key={tab}
                className={`cursor-pointer pb-2 ${
                  activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500"
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* Pinned Messages Section */}
          <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow mb-4">
            <Typography variant="body1" className="font-semibold">
              Pinned Messages
            </Typography>
            <IconButton>
              <PushPinIcon />
            </IconButton>
          </div>

          {/* User List */}
          <div className="space-y-4">
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between bg-white p-3 rounded-lg shadow cursor-pointer"
                onClick={() => handleUserClick(user.id)}
              >
                <div className="flex items-center gap-4">
                  <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    badgeContent={
                      user.online && (
                        <span className="bg-green-500 h-3 w-3 rounded-full" />
                      )
                    }
                  >
                    <Avatar src={user.profileImg} alt={user.name} />
                  </Badge>
                  <div>
                    <Typography variant="body1" className="font-semibold">
                      {user.name}
                    </Typography>
                    <div className="flex items-center text-gray-500">
                      <Typography
                        variant="body2"
                        className={`truncate ${
                          user.unreadMessages > 0 ? "font-semibold" : ""
                        }`}
                      >
                        {user.lastMessage}
                      </Typography>
                      {user.seen && (
                        <DoneAllIcon
                          className="text-blue-500 ml-2"
                          fontSize="small"
                        />
                      )}
                      {user.typing && (
                        <Typography variant="body2" color="textSecondary">
                          <span className="text-blue-500">typing...</span>
                        </Typography>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {user.pinned && <PushPinIcon className="text-gray-400" />}
                  {user.unreadMessages > 0 && (
                    <Badge
                      color="primary"
                      badgeContent={user.unreadMessages}
                      className="text-sm"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side (Chat Area) */}
        {selectedUser && (
          <div className="fixed right-0 top-0 h-full w-[350px] bg-white p-4 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <Avatar src={selectedUser.profileImg} alt={selectedUser.name} />
                <div>
                  <Typography variant="h6" className="font-semibold">
                    {selectedUser.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {selectedUser.online ? "Online" : "Last seen 5 minutes ago"}
                  </Typography>
                </div>
              </div>
              <div className="flex gap-2">
                <IconButton>
                  <ChatBubbleIcon />
                </IconButton>
                <IconButton>
                  <PushPinIcon />
                </IconButton>
              </div>
            </div>

            {/* Chat Messages */}
            <div
              className="overflow-y-scroll mb-4"
              style={{ height: "calc(100% - 150px)" }}
            >
              <div className="flex gap-4 mb-3">
                <Avatar src={selectedUser.profileImg} alt={selectedUser.name} />
                <div className="bg-gray-200 p-2 rounded-lg max-w-[70%]">
                  <Typography variant="body2">
                    {selectedUser.lastMessage}
                  </Typography>
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="flex gap-4 items-center">
              <input
                type="text"
                placeholder="Type a message..."
                className="border p-2 rounded-lg w-full"
              />
              <IconButton>
                <PushPinIcon />
              </IconButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Left;
