import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    email: '',
    password: '',
  },
  reducers: {
    setField(state, action) {
      state[action.payload.field] = action.payload.value;
    },
  },
});
