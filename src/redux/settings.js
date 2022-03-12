import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1,
}

export const parameterSlice = createSlice({
  name: 'parameter',
  initialState,
  reducers: {
    editProfile: (state) => {
      state.value = 1
    },
    settings: (state) => {
      state.value = 2
    },
    logout: (state) => {
      state.value = 3
    },
  },
})

// Action creators are generated for each case reducer function
export const { editProfile, settings, logout } = parameterSlice.actions

export default parameterSlice.reducer