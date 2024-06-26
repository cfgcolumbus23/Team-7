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
          {/* {otherUser} in code block */}
          <h1 className='text-xl font-bold text-center text-black'>
            {otherUser}
          </h1>
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
                <br />
                {/* small font timestamp */}
                <span className='text-xs text-gray-500'>{time}</span>
              </h3>
            </div>
          ))}
        </div>
        <div className='flex items-center'>
          <form className='flex items-center' onSubmit={(e) => sendData(e)}>
            <input
              className={style.chat_input + ' ' + style.chat_border + 'h-15'}
              type='text'
              value={currentMsg}
              placeholder={username + ' | Type your message...'}
              onChange={(e) => setCurrentMsg(e.target.value)}
            />

            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-10 h-7'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ChatPage
