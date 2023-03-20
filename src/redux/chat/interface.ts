type LastMessageType = {
  created_at: number
  message: string
  user_id: string
  user_name: string
  user_surname: string
  you: boolean
}

export type getMessageDataType = {
  id: string,
  title: string
}

export type activeChatType = {
  title: string
  id: string
  messages: IMessage[]
}

export interface IMessage {
  id: string,
  created_at: number,
  user: {
    id: string,
    name: string,
    surname: string,
    avatar: string,
    you: boolean,
  }
  message: string
  is_new: boolean
}


export interface IChat {
  id: string,
  count_unread: number,
  created_at: number,
  avatar: string,
  last_message: LastMessageType
  private?: boolean
  title: string
}

export interface IChatState {
  chats: IChat[],
  activeChat: activeChatType
}