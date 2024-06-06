import { Form } from "../../common/components/Form";

export const SignIn = () => {
  return (
    <main classNameName="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <Form />
      </section>
    </main>
  );
};
