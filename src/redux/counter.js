import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    profile: (state) => {
      state.value = 1
    },
    messaging: (state) => {
      state.value = 2
    },
    dashboard: (state, action) => {
      state.value = 0
    },
  },
})

// Action creators are generated for each case reducer function
export const { profile, messaging, dashboard } = counterSlice.actions

export default counterSlice.reducer