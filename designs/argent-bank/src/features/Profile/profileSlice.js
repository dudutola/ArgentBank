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
  },
});

export const { setUserProfile } = profileSlice.actions;
