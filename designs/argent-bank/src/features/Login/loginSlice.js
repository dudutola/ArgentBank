import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    token: null,
  },
  reducers: {
    setUserData(state, action) {
      state.token = action.payload.body.token;
      localStorage.setItem('token', state.token);
    },
    logout(state) {
      state.token = null;
      localStorage.removeItem('token');
    },
  },
});

export const { setUserData, logout } = loginSlice.actions;
