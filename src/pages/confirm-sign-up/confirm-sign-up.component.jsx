import React from "react";

import ConfirmSignUp from "../../components/confirm-sign-up/confirm-sign-up.component";
import ResendCode from "../../components/resend-code/resend-code.component";

import "./confirm-sign-up.styles.scss";

const ConfirmSignUpPage = () => {
  return (
    <div className="confirmPage">
      <ConfirmSignUp />
      <ResendCode />
    </div>
  );
};

export default ConfirmSignUpPage;
