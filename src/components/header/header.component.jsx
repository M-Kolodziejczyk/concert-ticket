import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signOutStart } from "../../redux/user/user.actions";

import { ReactComponent as Logo } from "../../assets/concert.svg";
import { ReactComponent as Cart } from "../../assets/shopping-cart.svg";

import "./header.styles.scss";

const Header = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);
  const cart = useSelector((state) => state.cart.cart);

  const handleSignOut = () => {
    dispatch(signOutStart());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light header">
      <div className="container-xl">
        <Link className="navbar-brand" to="/">
          <Logo className="logo" />
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbar">
          <div className="options__container">
            <Link to="/" className="options__link">
              Home
            </Link>
            <Link to="/concerts" className="options__link">
              Concerts
            </Link>
            <Link to="/bands" className="options__link">
              Bands
            </Link>
            <Link to="/artists" className="options__link">
              Artists
            </Link>
          </div>
          <div className="auth__container">
            {isLogged ? (
              <div className="user">
                <Link to="/cart" className="user__link">
                  <Cart className="cart-icon" />
                  <span className="cart-quantity">
                    <strong>{cart.length}</strong>
                  </span>
                </Link>
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
      </div>
    </nav>
  );
};

export default Header;
