import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getChats } from '../../redux/chat/asyncActions'
import { IChat } from '../../redux/chat/interface'
import { selectChat } from '../../redux/chat/selectors'
import { AppDispatch } from '../../redux/store'
import ChatItemList from '../ChatItemList'
import cn from './Chats.module.sass'


const Chats: FC = () => {

  const {chats} = useSelector(selectChat)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getChats())
  }, [])

  return (
    <div className={cn.root}>
      <h3 className={`${cn.title} title`}>
        All chats
      </h3>
      {chats.map((chat: IChat) => {
        return <ChatItemList {...chat} key={chat.id} />
      })}
    </div>
  )
}

export default Chats
