import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { API } from "aws-amplify";

import { loadUserStart } from "./redux/user/user.actions";
import { createInviteNotificationStart } from "./redux/notification/notification.actions";
import * as subscriptions from "./api/subscriptions";

import PrivateRoute from "./components/private-route/private-route";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ForgotNewPasswordPage from "./pages/forgot-new-password/forgot-new-password.component";
import ConfirmSignUpPage from "./pages/confirm-sign-up/confirm-sign-up.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import UserPage from "./pages/user-page/user-page.component";
import ArtistsPage from "./pages/artists-page/artists-page.component";
import ArtistPage from "./pages/artist-page/artist-page.component";
import BandsPage from "./pages/bands-page/bands-page.component";
import BandPage from "./pages/band-page/band-page.component";
import ConcertsPage from "./pages/concerts-page/concerts-page.component";
import ConcertPage from "./pages/concert-page/concert-page.component";
import CartPage from "./pages/cart-page/cart-page.component";
import CartPaymentPage from "./pages/cart-payment/cart-payment.component";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const isLogged = user.isLogged;
  const email = user.currentUser?.email;

  useEffect(() => {
    dispatch(loadUserStart());
  }, [dispatch]);

  useEffect(() => {
    if (email) {
      const subs = API.graphql({
        query: subscriptions.onCreateInvitationByEmail,
        variables: {
          email,
        },
      }).subscribe({
        next: ({ provider, value }) =>
          dispatch(createInviteNotificationStart(value)),
        error: (error) => console.warn(error),
      });

      return () => subs.unsubscribe();
    }
  }, [email, dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signin">
          {isLogged ? <Redirect to="/" /> : <SignInSignUpPage />}
        </Route>
        <Route exact path="/confirm-account" component={ConfirmSignUpPage} />
        <Route
          exact
          path="/forgot-password"
          component={ForgotNewPasswordPage}
        />
        <Route exact path="/artists/" component={ArtistsPage} />
        <Route exact path="/artists/:id" component={ArtistPage} />
        <Route exact path="/bands" component={BandsPage} />
        <Route exact path="/bands/:id" component={BandPage} />
        <Route exact path="/concerts" component={ConcertsPage} />
        <Route exact path="/concerts/:id" component={ConcertPage} />
        <PrivateRoute path="/user" component={UserPage} />
        <PrivateRoute exact path="/cart" component={CartPage} />
        <PrivateRoute
          exact
          path="/cart/payment/:id"
          component={CartPaymentPage}
        />
      </Switch>
    </div>
  );
};

export default App;
