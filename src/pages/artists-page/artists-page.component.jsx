import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listArtistsStart } from "../../redux/artist/artist.actions";

import Artist from "./components/artist.component";

import "./artists-page.style.scss";

const ArtistsPage = () => {
  const artists = useSelector((state) => state.artist.artists);
  const dispatch = useDispatch();

  useEffect(() => {
    if (artists.length === 0) {
      dispatch(listArtistsStart());
    }
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div className="artists-page">
      <div className="artists-page-container">
        <h1>Artists</h1>
        {artists &&
          artists.map((artist, i) => (
            <Artist key={artist.id} {...artist} index={i} />
          ))}
      </div>
    </div>
  );
};

export default ArtistsPage;
