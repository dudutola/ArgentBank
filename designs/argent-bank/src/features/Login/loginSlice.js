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
// {user ? (
//   <Link to="/user" className="main-nav-item">
//     <i className="fa fa-user-circle"></i>
//   </Link>
// ) : null}
// {user ? (
//   <div className="main__nav--item" onClick={handleSignOut}>
//     <i className="fa fa-sign-out"></i>
//     Sign Out
//   </div>
// ) : (
//   <Link to="/login" className="main__nav--item">
//     <i className="fa fa-user-circle"></i>
//     Sign In
//   </Link>
// )}
