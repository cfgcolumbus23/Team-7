"use client";
import styles from "./page.module.css";
import { io } from "socket.io-client";
import { useState } from "react";
import ChatPage from "./chat";
import { matchUserstoRoom } from "./id";

/**
 * Renders the Home page component.
 * @returns {JSX.Element} The Home page component.
 */
export default function Home() {
  const [showChat, setShowChat] = useState(false);
  const [userName, setUserName] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [otherUser, setOtherUser] = useState("");
  const [roomId, setRoomId] = useState("");

  var socket;
  socket = io(
    "http://localhost:3001",
    { transports: ["websocket"] },
    { "force new connection": true }
  );

  /**
   * Handles the join button click event.
   * Emits a 'join_room' event to the server with the user names.
   * Sets the room ID and shows the spinner.
   * After 1 second, shows the chat and hides the spinner.
   */
  const handleJoin = () => {
    if (userName !== "" && otherUser !== "") {
      socket.emit("join_room", userName, otherUser);
      setRoomId(matchUserstoRoom(userName, otherUser).id);
      setShowSpinner(true);
      setTimeout(() => {
        setShowChat(true);
        setShowSpinner(false);
      }, 1);
    } else {
      alert(
        "Please fill in your username and the username of the person you want to chat with"
      );
    }
  };

  return (
    <div>
      <div
        className={styles.main_div}
        style={{ display: showChat ? "none" : "" }}
      >
        <input
          className={styles.main_input}
          type="text"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
          disabled={showSpinner}
        />
        <input
          className={styles.main_input}
          type="text"
          placeholder="other user"
          onChange={(e) => setOtherUser(e.target.value)}
          disabled={showSpinner}
        />
        <button className={styles.main_button} onClick={() => handleJoin()}>
          {!showSpinner ? (
            "Join"
          ) : (
            <div className={styles.loading_spinner}></div>
          )}
        </button>
      </div>
      <div style={{ display: !showChat ? "none" : "" }}>
        <ChatPage
          socket={socket}
          roomId={roomId}
          username={userName}
          otherUser={otherUser}
        />
      </div>
    </div>
  );
}
