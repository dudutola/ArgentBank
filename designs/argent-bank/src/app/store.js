import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/userApi";
import { formSlice } from "../features/Form/formSlice";
import { loginSlice } from "../features/Login/loginSlice";

export const store = configureStore({
  reducer: {
    form: formSlice.reducer,
    user: loginSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
