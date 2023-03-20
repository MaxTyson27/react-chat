import { activeChatType, IChat, IChatState } from './interface';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState: IChatState = {
  chats: [],
  activeChat: {
    title: '',
    id: '',
    messages: []
  }
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChats(state, action: PayloadAction<IChat[]>) {
      state.chats = action.payload
    },
    setActiceChat(state, action: PayloadAction<activeChatType>) {
      state.activeChat.messages = action.payload.messages
      state.activeChat.title = action.payload.title
      state.activeChat.id = action.payload.id
    }
  },
})


export const {setChats, setActiceChat} = chatSlice.actions

export default chatSlice.reducer