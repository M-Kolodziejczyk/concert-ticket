import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/concert.svg";

import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <Link to="/" className="logo-link">
          <Logo className="logo" /> Concert Ticket
        </Link>

        <div className="info">
          <a href="tel:48123123123" className="phone">
            +48 123 123 123
          </a>
          <a href="mailto:mail@mail.com" className="mail">
            mail@mail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
