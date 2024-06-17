import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginSlice } from "../../../features/Login/loginSlice";
// import Logo from "../../../../img/argentBankLogo.png";
import "../../../styles/components/_header.scss";

export const Header = () => {
  const token = useSelector((state) => state.login.token);
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.login.firstName);

  const handleLogout = () => {
    dispatch(loginSlice.actions.logout());
  };

  return (
    <nav className="main__nav">
      <Link to="/" className="main__nav--logo">
        <img alt="Argent Bank Logo" className="main__nav--logo-image" />
        {/* <h1 className="sr-only">Argent Bank</h1> */}
      </Link>
      <div>
        {token ? (
          <>
            <Link to="/profile" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {firstName}
            </Link>
            <Link to="/" className="main__nav--item" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
        ) : (
          <Link to="/login" className="main__nav--item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  )
};
