import { configureStore } from '@reduxjs/toolkit'
import foodReducer from './Features/foodSlicers'

export const store = configureStore({
  reducer: {
    foods:foodReducer
  },
})