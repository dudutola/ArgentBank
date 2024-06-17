import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    token: null,
  },
  reducers: {
    setUserData(state, action) {
      state.token = action.payload.body.token;
    },
    logout(state) {
      state.token = null;
    },
  },
});

export const { setUserData, logout } = loginSlice.actions;
