import { setField } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { selectEmail, selectPassword } from "../../app/selectors";

import "../../styles/components/_form.scss";

export const Form = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  // const handleEmailChange = (evt) => {
  //   dispatch(setField("email", evt.target.value))
  // }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email)
    console.log(password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label for="username">
          Username
          <input type="text" id="username" />
        </label>
      </div>
      <div className="input-wrapper">
        <label for="password">
          Password
          <input type="password" id="password" />
        </label>
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label for="remember-me">
          Remember me
        </label>
      </div>
      <button type="submit" className="sign-in-button">
        Sign In
      </button>
    </form>
  );
};
