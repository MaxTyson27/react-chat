import React, { FC } from 'react'
import chatIcons from '../../images/icons/chat.svg'
import { IHeaderProps } from './interface'
import cn from './Header.module.sass'

const Header: FC<IHeaderProps> = ({title}) => {

  return (
    <header className={cn.root}>
      <img src={chatIcons} alt="chat icon" />
      <h3 className="title">
        {title ? title : 'Выберите Чат...'}
      </h3>
    </header>
  )
}

export default Header
