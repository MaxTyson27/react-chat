import chat from './chat/slice';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    chat
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch