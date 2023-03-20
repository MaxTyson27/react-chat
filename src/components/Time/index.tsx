import React, { FC } from 'react'
import { ITime } from './interface'
import './time.sass'

const Time: FC<ITime> = ({time}) => {

  const setDate = () => {
    const date = new Date(time).toLocaleTimeString()

    return `${date.substr(0,5)}`
  }

  return (
    <div className='time'>
      {setDate()}
    </div>
  )
}

export default Time
