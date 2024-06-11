import { LoginResponse } from "../../features/LoginResponse";
import "../../styles/pages/_signin.scss";

export const Login = () => {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <LoginResponse />
      </section>
    </main>
  );
};
