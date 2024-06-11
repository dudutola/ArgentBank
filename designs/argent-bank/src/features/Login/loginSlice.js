import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    email: '',
    password: '',
  },
  reducers: {
    setField(state, action) {
      state[action.payload.field] = action.payload.value;
    },
    setUserData(state, action) {
      state.user = action.payload;
    },
  },
});
