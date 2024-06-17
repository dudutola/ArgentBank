import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/userApi";
import { loginSlice } from "../features/Login/loginSlice";

import { profileSlice } from "../features/Profile/profileSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,

    profile: profileSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

const token = localStorage.getItem("token");

if (token) {
  store.dispatch(loginSlice.actions.setUserData({ body: { token }}));
}
