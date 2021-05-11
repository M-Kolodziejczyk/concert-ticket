import React from "react";

import Artist from "./components/artist/artist.component";

import "./user-page.styles.scss";

const UserPage = () => {
  return (
    <div className="user-page">
      <h1 className="heading">User Page</h1>
      <div className="d-flex align-items-start">
        <div
          className="nav flex-column nav-pills me-3"
          id="tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            className="nav-link active"
            id="user-tab"
            data-bs-toggle="pill"
            data-bs-target="#user"
            type="button"
            role="tab"
            aria-controls="user"
            aria-selected="true"
          >
            User
          </button>
          <button
            className="nav-link"
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-profile"
            type="button"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            Artist
          </button>
          <button
            className="nav-link"
            id="v-pills-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-messages"
            type="button"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            Bands
          </button>
          <button
            className="nav-link"
            id="v-pills-settings-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-settings"
            type="button"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            Concerts
          </button>
        </div>
        <div className="tab-content" id="tabContent">
          <div
            className="tab-pane fade"
            id="user"
            role="tabpanel"
            aria-labelledby="user-tab"
          >
            User Page
          </div>
          <div
            className="tab-pane fade show active"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            <Artist />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
          >
            Bands Page
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
          >
            Concert Page
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
