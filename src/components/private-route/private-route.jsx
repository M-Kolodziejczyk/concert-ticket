import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userLoading = useSelector((state) => state.user.userLoading);
  const isLogged = useSelector((state) => state.user.isLogged);
  if (userLoading) {
    return <h1>LOADING</h1>; /// temporary!!
  } else {
    if (isLogged === true) {
      return <Route {...rest} render={(props) => <Component {...props} />} />;
    }
    return <Redirect to="/signin" />;
  }
};

export default PrivateRoute;
