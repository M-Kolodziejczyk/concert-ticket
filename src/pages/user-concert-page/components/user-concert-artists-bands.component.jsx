import React from "react";
import { useSelector } from "react-redux";

import "./user-concert-artists-bands.styles.scss";

const UserConcertArtistsBands = ({ concertId }) => {
  const bands = useSelector(
    (state) => state.concert.userConcerts[concertId].bands
  );

  return (
    <div className="user-concert-artists-bands">
      <div className="bands">
        <span className="title">Bands:</span>
        {bands.items.length > 0 &&
          bands.items.map((band) => (
            <div className="band" key={band.band.id}>
              <span className="name">
                <strong>Name: </strong>
                {band.band.name}
              </span>
              <span className="genre">
                <strong>Genre: </strong>
                {band.band.genre}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserConcertArtistsBands;
