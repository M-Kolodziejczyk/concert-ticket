import React, { useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserStart } from "../../redux/user/user.actions";

import Artist from "./components/artist/artist.component";
import BandsTab from "./components/bands-tab/bands-tab.component";
import InvitationsTab from "./components/invitations-tab/invitations-tab.component";
import UserConcertsPage from "../user-concerts-page/user-concerts-page.component";
import UserConcertPage from "../user-concert-page/user-concert-page.component";

import "./user-page.styles.scss";

const UserPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(getUserStart());
  }, [dispatch]);

  return (
    <div className="user-page">
      <h1 className="heading">User Page</h1>
      <div className="d-flex align-items-start">
        <div className="nav flex-column nav-pills me-3">
          <Link to="/user">User</Link>
          <Link to="/user/artist">Artist</Link>
          <Link to="/user/bands">Bands</Link>
          <Link to="/user/concerts">Concerts</Link>
          <Link to="/user/invitations">Invitations</Link>
        </div>
        <div className="tab-content">
          <Switch>
            <Route exact path="/user">
              USER
            </Route>
            <Route
              exact
              path="/user/artist"
              component={Artist}
              state={{
                artistID: user.artistID,
              }}
            />
            <Route
              exact
              path="/user/bands"
              component={BandsTab}
              userId={user.id}
              bands={user.bands}
            />
            <Route exact path="/user/concerts" component={UserConcertsPage} />
            <Route
              exact
              path="/user/concerts/:id"
              component={UserConcertPage}
            />
            <Route
              exact
              path="/user/invitations"
              component={InvitationsTab}
              email={user.email}
              artistID={user.artistID}
              bands={user.bands}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
