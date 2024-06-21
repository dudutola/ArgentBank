import { Link } from "react-router-dom";
import "../../styles/pages/_error.scss";

export const Error = () => {
  return (
    <main className="main bg-dark error">
      <div>
        <span className="digit">4</span>
        <span className="digit">0</span>
        <span className="digit">4</span>
      </div>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="back">Go back to Home</Link>
    </main>
  );
};
