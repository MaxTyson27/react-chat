import { createAsyncThunk } from "@reduxjs/toolkit";
import { getChatList, getMessages } from "../../api/chat";
import { getMessageDataType, IChat, IMessage } from "./interface";
import { setActiceChat, setChats } from "./slice";

export const getChats = createAsyncThunk(
  "chat/getChatsData",
  async (_, thunkApi) => {

    const chatsPromise = await getChatList()
    const chatsData: IChat[] = chatsPromise.response
    const {id, title} = chatsData[0]
    const messagesPromise = await getMessages({id, title})
    const messages: IMessage[] = messagesPromise.response

    thunkApi.dispatch(setChats(chatsData))
    thunkApi.dispatch(setActiceChat({messages, title, id}))
  }
)

export const getMessagesData = createAsyncThunk(
  "chat/getMessagesData",
  async (params: getMessageDataType, thunkApi) => {
    const {title, id} = params
    const promise = await getMessages(params)
    const messages: IMessage[] = promise.response

    thunkApi.dispatch(setActiceChat({messages, title, id}))
  }
)
