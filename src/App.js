import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
// import SignupPage from "./pages/sign-up/sign-up.component";
import ConfirmSignUpPage from "./pages/confirm-sign-up/confirm-sign-up.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signin" component={SignInSignUpPage} />
        <Route exact path="/confirm-account" component={ConfirmSignUpPage} />
      </Switch>
    </div>
  );
};

export default App;
