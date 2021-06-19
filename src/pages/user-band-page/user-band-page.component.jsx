import React from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns";

import Spinner from "../../components/spinner/spinner.component";

import "./user-band-page.styles.scss";

const UserBandPage = ({ match }) => {
  const bandId = match.params.id;
  const userBands = useSelector((state) => state.band.userBands);
  const bandLoading = useSelector((state) => state.band.loading);
  const userLoading = useSelector((state) => state.user.getUserLoading);

  if (userBands[bandId]) {
  }

  return (
    <div className="user-band-page">
      {(bandLoading || userLoading) && <Spinner />}
      {userBands[bandId] && (
        <div className="container">
          <div className="band">
            <p>Name: {userBands[bandId].name}</p>
            <p>Genre: {userBands[bandId].name}</p>
            <p>
              Created:{" "}
              {format(new Date(userBands[bandId].createdAt), "dd MMM y")}{" "}
            </p>
          </div>
          <div className="members">
            <h4>Band members:</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserBandPage;
