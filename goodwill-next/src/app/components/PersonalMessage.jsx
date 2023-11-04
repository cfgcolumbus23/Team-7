"use client";
import React, { useState } from "react";

export default function PersonalMessage() {
  const currentUserIcon =
    "https://th.bing.com/th/id/OIP.cive38eqp7C2RKVt4xkzbQHaLH?pid=ImgDet&rs=1";
  const [message, setMessage] = useState("");
  const [userMessages, setUserMessages] = useState([
    "how are you!",
    "oh cool!",
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserMessages([...userMessages, message]);
    setMessage("");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-2/5 h-3/4 overflow-y-scroll overflow-hidden bg-goodwill-black rounded-md">
        <div className="w-11/12 text-black mx-auto">
          {userMessages.map((message, index) => (
            <Message key={index} message={message} userIcon={currentUserIcon} />
          ))}
        </div>

        <form
          className="flex gap-2 justify-center items-center"
          onChange={(e) => setMessage(e.target.value)}
          onSubmit={handleSubmit}
        >
          <input
            value={message}
            type="text"
            placeholder="Enter your message..."
            className="focus:outline-none p-3 rounded-lg rounded-r-none bg-white"
          />
          <button
            className="p-2 text-black bg-white font-bold rounded-xl h-12 rounded-l-none -ml-4 "
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

function Message({ message, userIcon }) {
  return (
    <div className="p-2 bg-gray-100 rounded-lg shadow-lg w-1/4 my-14">
      <div className="flex gap-3 items-center p-1 h-13 text-sm">
        <img
          src={userIcon}
          className="w-10 h-10 rounded-full"
          alt="User Icon"
        />
        <p>{message}</p>
      </div>
    </div>
  );
}
