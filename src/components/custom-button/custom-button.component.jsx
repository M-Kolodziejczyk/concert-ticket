import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleBtn, ...otherProps }) => (
  <button
    className={`custom-button ${isGoogleBtn ? "google-btn" : ""}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
