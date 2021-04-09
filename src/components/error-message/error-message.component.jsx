import React from "react";

import "./error-message.styles.scss";

const ErrorMessage = ({ children }) => (
  <span className="error-message">{children}</span>
);

export default ErrorMessage;
