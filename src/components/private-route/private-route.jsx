import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Spinner from "../spinner/spinner.component";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userLoading = useSelector((state) => state.user.userLoading);
  const isLogged = useSelector((state) => state.user.isLogged);
  const isAccountDeleted = useSelector((state) => state.user.isAccountDeleted);

  if (userLoading) {
    return <Spinner />;
  } else {
    if (isLogged === true) {
      return <Route {...rest} render={(props) => <Component {...props} />} />;
    } else if (isLogged === false && isAccountDeleted === true) {
      return <Redirect to="/user-deleted" />;
    } else {
      return <Redirect to="/signin" />;
    }
  }
};

export default PrivateRoute;
