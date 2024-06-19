import "../../styles/pages/_home.scss";
import iconChat from "../../img/icon-chat.webp";
import iconMoney from "../../img/icon-money.webp";
import iconSecurity from "../../img/icon-security.webp";

export const Home = () => {
  return (
    <main>
      <div className="hero">
        <section className="hero__content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <div className="feature__item">
          <img src={iconChat} alt="Chat Icon" className="feature__icon" />
          <h3 className="feature__item--title">You are our #1 priority</h3>
          <p>
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </div>
        <div className="feature__item">
          <img
            src={iconMoney}
            alt="Chat Icon"
            className="feature__icon"
          />
          <h3 className="feature__item--title">More savings means higher rates</h3>
          <p>
            The more you save with us, the higher your interest rate will be!
          </p>
        </div>
        <div className="feature__item">
          <img
            src={iconSecurity}
            alt="Chat Icon"
            className="feature__icon"
          />
          <h3 className="feature__item--title">Security you can trust</h3>
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </div>
      </section>
    </main>
  )
};
