import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listArtistsStart } from "../../redux/artist/artist.actions";

import "./artists-page.style.scss";

const ArtistsPage = () => {
  const artists = useSelector((state) => state.artist.artists);
  const dispatch = useDispatch();
  console.log("Artists", artists);

  useEffect(() => {
    if (artists.length === 0) {
      dispatch(listArtistsStart());
    }
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div>
      <h1>Artists</h1>
      {artists &&
        artists.map((artist) => (
          <div key={artist.id}>
            <p>Name: {artist.name}</p>
            <p>Genre: {artist.genre}</p>
          </div>
        ))}
    </div>
  );
};

export default ArtistsPage;
