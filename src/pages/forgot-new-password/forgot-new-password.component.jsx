import React from "react";

import ForgotPassword from "../../components/forgot-password/forgot-password.component";
import NewPassword from "../../components/new-password/new-password.component";

import "./forgot-new-password.styles.scss";

const ForgotNewPasswordPage = () => {
  return (
    <div className="forgot-new-password">
      <ForgotPassword />
      <NewPassword />
    </div>
  );
};

export default ForgotNewPasswordPage;
