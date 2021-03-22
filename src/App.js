import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import SignupPage from "./pages/sign-up/sign-up.component";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup" component={SignupPage} />
      </Switch>
    </div>
  );
};

export default App;
