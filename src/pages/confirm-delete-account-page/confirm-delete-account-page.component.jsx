import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

import "./confirm-delete-account-page.styles.scss";

const ConfirmDeleteAccountPage = () => {
  let history = useHistory();
  const isAccountDeleted = useSelector((state) => state.user.isAccountDeleted);

  useEffect(() => {
    if (isAccountDeleted === false) {
      history.push("/");
    }
  }, [history, isAccountDeleted]);

  return (
    <div className="confirm-delete-account-page">
      <h1>your account has been deleted succesfully</h1>
    </div>
  );
};

export default ConfirmDeleteAccountPage;
