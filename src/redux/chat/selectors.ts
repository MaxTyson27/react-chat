import { RootState } from "../store";

export const selectChat = (state: RootState) => state.chat
export const selectActiveChat = (state: RootState) => state.chat.activeChat