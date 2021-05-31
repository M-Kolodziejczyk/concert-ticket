import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signOutStart } from "../../redux/user/user.actions";

import { ReactComponent as Logo } from "../../assets/concert.svg";

import "./header.styles.scss";

const Header = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);

  const handleSignOut = () => {
    dispatch(signOutStart());
  };

  return (
    <div className="header">
      <Link className="logo__container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options__container">
        <Link to="/" className="options__link">
          Home
        </Link>
        <Link to="/concerts" className="options__link">
          Concerts
        </Link>
        <Link to="/artists" className="options__link">
          Artists
        </Link>
      </div>
      <div className="auth__container">
        {isLogged ? (
          <div className="user">
            <Link to="/user" className="user__link">
              Account
            </Link>
            <button onClick={handleSignOut} className="sign-out">
              Sign Out
            </button>
          </div>
        ) : (
          <Link to="/signin" className="sign-in">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
