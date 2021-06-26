import React, { useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserStart } from "../../redux/user/user.actions";

import UserArtistPage from "../user-artist-page/user-artist.component";
import UserBandsPage from "../user-bands-page/user-bands-page.component";
import UserBandPage from "../user-band-page/user-band-page.component";
import UserConcertsPage from "../user-concerts-page/user-concerts-page.component";
import UserConcertPage from "../user-concert-page/user-concert-page.component";
import UserOrdersPage from "../user-orders-page/user-orders.component";
import UserOrderPage from "../user-order-page/user-order.component";
import UserInvitationsPage from "../user-invitations-page/user-invitations-page.component";
import UserDetailsPage from "../user-details-page/user-details-page.component";

import "./user-page.styles.scss";

const UserPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserStart());
  }, [dispatch]);

  return (
    <div className="user-page">
      <div className="user-page__nav">
        <Link className="link" to="/user">
          User
        </Link>
        <Link className="link" to="/user/artist">
          Artist
        </Link>
        <Link className="link" to="/user/bands">
          Bands
        </Link>
        <Link className="link" to="/user/concerts">
          Concerts
        </Link>
        <Link className="link" to="/user/invitations">
          Invitations
        </Link>
        <Link className="link" to="/user/orders">
          Orders
        </Link>
      </div>
      <div className="user-page__content">
        <Switch>
          <Route exact path="/user" component={UserDetailsPage} />
          <Route exact path="/user/artist" component={UserArtistPage} />
          <Route exact path="/user/bands" component={UserBandsPage} />
          <Route exact path="/user/bands/:id" component={UserBandPage} />
          <Route exact path="/user/concerts" component={UserConcertsPage} />
          <Route exact path="/user/concerts/:id" component={UserConcertPage} />
          <Route exact path="/user/orders" component={UserOrdersPage} />
          <Route exact path="/user/orders/:id" component={UserOrderPage} />
          <Route
            exact
            path="/user/invitations"
            component={UserInvitationsPage}
          />
        </Switch>
      </div>
    </div>
  );
};

export default UserPage;
