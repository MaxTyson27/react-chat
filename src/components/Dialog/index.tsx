import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { selectActiveChat } from '../../redux/chat/selectors'
import Header from '../Header'
import Input from '../Input'
import Message from '../Message'
import cn from './Dialog.module.sass'

const Dialog: FC = () => {
  const {title, messages} = useSelector(selectActiveChat)


  return (
    <div className={cn.root}>
      <Header title={title}/>
      <div className={cn.inner}>
        {messages.map((message) => {
          return <Message {...message} key={message.id}/>
        })}
      </div>
      <Input/>
    </div>
  )
}

export default Dialog
