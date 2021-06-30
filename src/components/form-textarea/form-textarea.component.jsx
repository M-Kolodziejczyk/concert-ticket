import React from "react";

import "./form-textarea.styles.scss";

const FormTextarea = ({ handleChange, label, error, ...otherProps }) => (
  <div className="form-group">
    <textarea
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

export default FormTextarea;
