import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
    token: null,
  },
  reducers: {
    setUserData(state, action) {
      state.userData = action.payload;
    },
  },
});
