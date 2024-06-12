import { Link } from "react-router-dom";
// import Logo from "../../../../img/argentBankLogo.png";
import "../../../styles/components/_header.scss";

export const Header = () => {

  return (
    <nav className="main__nav">
      <Link to="/" className="main__nav--logo">
        <img alt="Argent Bank Logo" className="main__nav--logo-image" />
        {/* <h1 className="sr-only">Argent Bank</h1> */}
      </Link>
      <div>
      <Link to="/login" className="main__nav--item">
        <i className="fa fa-user-circle"></i>
        Sign In
      </Link>
      </div>
    </nav>
  )
};
