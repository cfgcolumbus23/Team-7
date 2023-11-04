'use client'
import React, { useEffect, useState } from 'react'
import style from './chat.module.css'

/**
 * A component that renders a chat page.
 * @param {Object} props - The props object.
 * @param {Object} props.socket - The socket object.
 * @param {string} props.username - The username of the current user.
 * @param {string} props.otherUser - The username of the other user.
 * @param {string} props.roomId - The ID of the chat room.
 * @returns {JSX.Element} - A JSX element representing the chat page.
 */
const ChatPage = ({ socket, username, otherUser, roomId }) => {
  const [currentMsg, setCurrentMsg] = useState('')
  const [chat, setChat] = useState([])

  const sendData = async (e) => {
    e.preventDefault()
    if (currentMsg !== '') {
      const msgData = {
        roomId,
        user: username,
        msg: currentMsg,
        time:
          new Date(Date.now()).getHours() +
          ':' +
          new Date(Date.now()).getMinutes(),
      }
      console.log(msgData)
      await socket.emit('send_msg', msgData)
      setCurrentMsg('')
    }
  }

  useEffect(() => {
    socket.on('receive_msg', (data) => {
      console.log(data)
      setChat((pre) => [...pre, data])
    })
  }, [socket])

  return (
    <div className={style.chat_div}>
      <div className={style.chat_border}>
        <div style={{ marginBottom: '1rem' }}>
          <p>{otherUser}</p>
        </div>
        <div>
          {chat.map(({ roomId, user, msg, time }, key) => (
            <div
              key={key}
              className={
                user == username
                  ? style.chatProfileRight
                  : style.chatProfileLeft
              }
            >
              <span
                className={style.chatProfileSpan}
                style={{ textAlign: user == username ? 'right' : 'left' }}
              >
                {user.charAt(0)}
              </span>
              <h3 style={{ textAlign: user == username ? 'right' : 'left' }}>
                {msg}
              </h3>
            </div>
          ))}
        </div>
        <div>
          <form onSubmit={(e) => sendData(e)}>
            <input
              className={style.chat_input}
              type='text'
              value={currentMsg}
              placeholder='Type your message..'
              onChange={(e) => setCurrentMsg(e.target.value)}
            />
            <button className={style.chat_button}>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ChatPage
