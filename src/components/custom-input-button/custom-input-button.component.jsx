import React from "react";
import "./custom-input-button.styles.scss";

const CustomInputButton = ({ handleChange, label, id, ...otherProps }) => {
  return (
    <div className="custom-input-button-group">
      <input
        className="file-input"
        type="file"
        id={id}
        onChange={handleChange}
        {...otherProps}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default CustomInputButton;
