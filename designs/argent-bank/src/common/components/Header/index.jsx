import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginSlice } from "../../../features/Login/loginSlice";
import { clearUserProfile } from "../../../features/Profile/profileSlice";
import Logo from "../../../img/argentBankLogo.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import "../../../styles/components/_header.scss";

export const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const userName = useSelector((state) => state.profile.userName);

  const handleLogout = () => {
    dispatch(loginSlice.actions.logout());
    dispatch(clearUserProfile());
  };

  return (
    <nav className="main__nav">
      <Link to="/" className="main__nav--logo">
        <img src={Logo} alt="Argent Bank Logo" className="main__nav--logo-image" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {token ? (
          <>
            <Link to="/profile" className="main__nav--item">
              <FontAwesomeIcon icon={faUserCircle} className="fa-icon" />
              {userName}
            </Link>
            <Link to="/" className="main__nav--item" onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} className="fa-icon sign-out" />
              Sign Out
            </Link>
          </>
        ) : (
          <Link to="/login" className="main__nav--item">
            <FontAwesomeIcon icon={faUserCircle} className="fa-icon" />
            Sign In
          </Link>
        )}
      </div>
    </nav>
  )
};
