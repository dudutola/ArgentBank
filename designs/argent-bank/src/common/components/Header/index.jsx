import { Link } from "react-router-dom";
// import Logo from "../../../../img/argentBankLogo.png";
import "../../../styles/components/header.css";

export const Header = () => {
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img alt="Argent Bank Logo" className="main-nav-logo-image" />
        {/* <h1 className="sr-only">Argent Bank</h1> */}
      </Link>
      <div>
        <Link className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  )
};
