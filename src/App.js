import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadUserStart } from "./redux/user/user.actions";

import PrivateRoute from "./components/private-route/private-route";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ForgotNewPasswordPage from "./pages/forgot-new-password/forgot-new-password.component";
import ConfirmSignUpPage from "./pages/confirm-sign-up/confirm-sign-up.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import UserPage from "./pages/user-page/user-page.component";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserStart());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signin" component={SignInSignUpPage} />
        <Route exact path="/confirm-account" component={ConfirmSignUpPage} />
        <Route
          exact
          path="/forgot-password"
          component={ForgotNewPasswordPage}
        />

        <PrivateRoute exact path="/user" component={UserPage} />
      </Switch>
    </div>
  );
};

export default App;
