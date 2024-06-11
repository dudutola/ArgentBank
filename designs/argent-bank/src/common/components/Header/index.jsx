import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import Logo from "../../../../img/argentBankLogo.png";
import "../../../styles/components/_header.scss";
import { logout } from "../../../features/LoginResponse/loginSlice";
import { selectUser } from "../../../app/selectors";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const handleSignOut = () => {
    dispatch(logout());
    localStorage.removeItem("authToken");
    navigate("/");
  };


  return (
    <nav className="main__nav">
      <Link to="/" className="main__nav--logo">
        <img alt="Argent Bank Logo" className="main__nav--logo-image" />
        {/* <h1 className="sr-only">Argent Bank</h1> */}
      </Link>
      <div>
        {user ? (
            <Link to="/user" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
            </Link>
          ) : null}
          {user ? (
            <div className="main__nav--item" onClick={handleSignOut}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </div>
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
