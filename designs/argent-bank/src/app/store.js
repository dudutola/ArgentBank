import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/userApi";
import { loginSlice } from "../features/Login/loginSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

const token = localStorage.getItem("token");

if (token) {
  store.dispatch(loginSlice.actions.setUserData({ body: { token }}));
}
