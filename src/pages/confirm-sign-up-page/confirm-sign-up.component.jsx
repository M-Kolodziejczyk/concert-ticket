import React from "react";
import { useSelector } from "react-redux";

import ConfirmSignUp from "../../components/confirm-sign-up/confirm-sign-up.component";
import ResendCode from "../../components/resend-code/resend-code.component";
import Spinner from "../../components/spinner/spinner.component";

import "./confirm-sign-up.styles.scss";

const ConfirmSignUpPage = () => {
  const userformLoading = useSelector((state) => state.user.formLoading);

  return (
    <div className="confirmPage">
      {userformLoading && <Spinner />}
      <ConfirmSignUp />
      <ResendCode />
    </div>
  );
};

export default ConfirmSignUpPage;
