import React, { FC } from 'react'
import { IMessage } from '../../redux/chat/interface'
import './message.sass'
import {clsx} from 'clsx'
import Time from '../Time'

const Message: FC<IMessage> = ({user, message, created_at}) => {

  const {avatar, name, surname, you} = user
  return (
    <div className={clsx(`message`, you && 'main')}>
      {you ?  '' : <img src={avatar} alt={name} />}
      <div className='message_inner'>
        <h4 className='message_name'>
          {you ? '' : `${name} ${surname}`}
        </h4>
        <div className="message_box">
          <p className='message_text'>
            {message}
          </p>
          <Time time={created_at}/>
        </div>
      </div>
      
    </div>
  )
}

export default Message
