import React from "react";
import { useSelector } from "react-redux";

import { removeBandFromConcertStart } from "../../../redux/concert/concert.actions";
import DeleteModal from "../../../components/delete-modal/delete-modal.component";

import "./user-concert-artists-bands.styles.scss";

const UserConcertArtistsBands = ({ concertId }) => {
  const bands = useSelector(
    (state) => state.concert.userConcerts[concertId].bands
  );
  const successMessage = useSelector((state) => state.concert.successMessage);
  const errorMessage = useSelector((state) => state.concert.errorMessage);

  return (
    <div className="user-concert-artists-bands">
      <div className="bands">
        <span className="title">Bands:</span>
        {bands.items.length > 0 &&
          bands.items.map((band) => (
            <div className="band" key={band.band.id}>
              <div className="band-wrapper">
                <span className="name">
                  <strong>Name: </strong>
                  {band.band.name}
                </span>
                <span className="genre">
                  <strong>Genre: </strong>
                  {band.band.genre}
                </span>
              </div>
              <div className="delete-container">
                <DeleteModal
                  title={`Are you sure you want to delete ${band.band.name}`}
                  deleteConfirm="Delete"
                  id={band.id}
                  callback={removeBandFromConcertStart}
                  successMessage={successMessage.removeBand}
                  errorMessage={errorMessage.removeBand}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserConcertArtistsBands;
