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
  },
});

export const { setUserData } = loginSlice.actions;
