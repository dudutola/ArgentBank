import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    token: null,
    firstName: '',
    lastName: '',
  },
  reducers: {
    setUserData(state, action) {
      state.token = action.payload.body.token;
    },
    logout(state) {
      state.token = null;
    },
    setUserProfile(state, action) {
      state.firstName = action.payload.body.firstName;
      state.lastName = action.payload.body.lastName;
    },
  },
});

export const { setUserData, logout, setUserProfile } = loginSlice.actions;
