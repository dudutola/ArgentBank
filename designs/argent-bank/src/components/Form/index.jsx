import "../../styles/components/_form.scss";

export const Form = () => {
  return (
    <form action="">
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
