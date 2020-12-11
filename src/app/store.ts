import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import counterReducer from '../features/counter/counterSlice'
import customCounterReducer from '../features/customCounter/customCounterSlice'

export const store = configureStore({
  // 重要：createSliceの「name」: reducer名
  reducer: {
    counter: counterReducer,
    customCounter: customCounterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
