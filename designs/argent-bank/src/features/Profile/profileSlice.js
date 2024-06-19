import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    firstName: '',
    lastName: '',
    userName: '',
  },
  reducers: {
    setUserProfile(state, action) {
      state.firstName = action.payload.body.firstName;
      state.lastName = action.payload.body.lastName;
      state.userName = action.payload.body.userName;
    },
    updateUsername(state, action) {
      state.userName = action.payload.userName;
    },
    clearUserProfile(state) {
      state.firstName = '';
      state.lastName = '';
      state.userName = '';
    },
  },
});

export const { setUserProfile, updateUsername, clearUserProfile } = profileSlice.actions;
