import React from "react";
import "./custom-input-button.styles.scss";

const CustomInputButton = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="custom-input-button-group">
      <input
        className="file-input"
        type="file"
        id="file"
        onChange={handleChange}
        {...otherProps}
      />
      <label htmlFor="file">{label}</label>
    </div>
  );
};

export default CustomInputButton;
