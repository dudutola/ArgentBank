import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSlice } from "./loginSlice";
import { useLoginUserMutation } from "../../services/userApi";
import "../../styles/components/_login.scss";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();
  const [email, setEmail ] = useState("");
  const [password, setPassword] = useState("");
  const [customError, setCustomError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await loginUser({ email, password }).unwrap();
      dispatch(loginSlice.actions.setUserData(userData));
      setCustomError(null);
      navigate('/profile');
    } catch (error){
      setCustomError("Failed to sign in. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">
          Username
          <input
            type="text"
            id="username"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
            onChange={(event) => setPassword(event.target.value)}
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
        {isLoading ? "Loading..." : "Sign In"}
      </button>
      {(isError || customError) && (
        <div className="error-message">
          {customError ? customError : `Error: ${error?.data?.message || error.message}`}
        </div>
      )}
    </form>
  );
};
