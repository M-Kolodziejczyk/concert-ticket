import React from "react";
import { useSelector } from "react-redux";

import ForgotPassword from "../../components/forgot-password/forgot-password.component";
import NewPassword from "../../components/new-password/new-password.component";
import Spinner from "../../components/spinner/spinner.component";

import "./forgot-new-password.styles.scss";

const ForgotNewPasswordPage = () => {
  const userFormLoading = useSelector((state) => state.user.formLoading);
  return (
    <div className="forgot-new-password">
      {userFormLoading && <Spinner />}
      <ForgotPassword />
      <NewPassword />
    </div>
  );
};

export default ForgotNewPasswordPage;
