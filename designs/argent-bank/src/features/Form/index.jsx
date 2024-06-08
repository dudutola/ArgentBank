import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectEmail, selectPassword } from "../../app/selectors";
import { formSlice } from "./formSlice";
import { userSlice } from "../../pages/User/userSlice";

import "../../styles/components/_form.scss";

export const Form = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);
  const [error, setError] = useState(null);

  const handleEmailChange = (evt) => {
    dispatch(formSlice.actions.setField({field: "email", value: evt.target.value}));
  };

  const handlePasswordChange = (evt) => {
    dispatch(formSlice.actions.setField({field: "password", value: evt.target.value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // if (!response.ok) {
      //   throw new Error("Failed to sign in")
      // }
      const userData = await response.json();
      dispatch(userSlice.actions.setUserData(userData));

    } catch (error) {
      setError("Failed to sign in. Please try again.");
      console.log({error})
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">
          Username
          <input
            type="text"
            id="username"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">
          Remember me
        </label>
      </div>
      <button type="submit" className="sign-in-button">
        Sign In
      </button>
      {error && <div className="error-message">{error}</div>}
    </form>
  );
};
