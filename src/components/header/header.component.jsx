import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/concert.svg";

import "./header.styles.scss";

const Header = () => (
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
    </div>
    <div className="auth__container">
      <div className="auth__link">
        <Link to="/signin">Signin</Link>
      </div>
    </div>
  </div>
);

export default Header;
