import { Login } from "../../features/Login";
import "../../styles/pages/_signin.scss";

export const LoginForm = () => {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <Login />
      </section>
    </main>
  );
};
