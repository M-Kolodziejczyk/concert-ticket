import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, error, ...otherProps }) => (
  <div className="form-group">
    <input
      className={`form-input ${error ? "error" : ""}`}
      onChange={handleChange}
      {...otherProps}
    />
    {label ? (
      <label
        className={`${otherProps.value.length ? "shrink" : ""} form-label ${
          error ? "error" : ""
        }`}
      >
        {error ? error : label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
