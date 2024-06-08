import { configureStore } from "@reduxjs/toolkit";
import { formSlice } from "../features/Form/formSlice";
import { userSlice } from "../pages/User/userSlice";

// const SET_FIELD = "SET_FIELD";

// export const setField = (field, value) => ({
//   type: SET_FIELD,
//   payload: {field, value},
// });

// const initialState = {
//   email: '',
//   password: '',
// };

// const fieldsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_FIELD:
//       const {field, value} = action.payload;
//       return {...state, [field]: value };
//     default:
//       return state;
//   }
// };

// export const store = configureStore({
//   reducer: fieldsReducer,
// });

export const store = configureStore({
  reducer: {
    form: formSlice.reducer,
    user: userSlice.reducer,
  },
});
