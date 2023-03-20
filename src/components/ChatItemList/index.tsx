import React, { FC, useEffect, useState } from 'react'
import { clsx } from 'clsx';
import { IChat } from '../../redux/chat/interface'
import { Avatar } from '../Avatar'
import './chatItem.sass'
import { getMessagesData } from '../../redux/chat/asyncActions';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import Time from '../Time';
import { selectActiveChat } from '../../redux/chat/selectors';


const ChatItemList: FC<IChat> = ({avatar, last_message, title, id, created_at}) => {

  const [message, setMessage] = useState('')
  const dispatch = useDispatch<AppDispatch>()
  const {id : activeChatId} = useSelector(selectActiveChat)


  useEffect(() => {
    const str = last_message.message
    let slicedStr = str.slice(0,33)

    if(slicedStr.length < str.length) {
      slicedStr += '...'
      setMessage(slicedStr)
    }

  }, [])

  const selectChat = () => {
    dispatch(getMessagesData({id, title}))
  }

  return (
    <div 
      onClick={selectChat} 
      style={{background: activeChatId === id ? 'rgba(64, 126, 201, 0.08)' : ''}} 
      className={clsx('chat-item')}>
      <Avatar src={avatar}/>
      <div className="chat-item_box">
        <div className="chat-item_name">
          <h5 className="chat-item_name-text">
            {title}
          </h5>
          <Time time={created_at}/>
        </div>
        <p className="chat-item_message">
          {message}
        </p>
      </div>
      <span className="chat-item_time"></span>
    </div>
  )
}

export default ChatItemList
