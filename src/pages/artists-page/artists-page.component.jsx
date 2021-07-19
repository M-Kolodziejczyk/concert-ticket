import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listArtistsStart } from "../../redux/artist/artist.actions";

import Artist from "./components/artist.component";

import "./artists-page.style.scss";

const ArtistsPage = () => {
  const listArtists = useSelector((state) => state.artist.listArtists);
  const dispatch = useDispatch();

  useEffect(() => {
    if (listArtists !== null && listArtists.length === 0) {
      dispatch(listArtistsStart());
    }
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div className="artists-page">
      <div className="artist-page-header">
        <h1>Artists</h1>
      </div>
      <div className="artists-page-container">
        {listArtists &&
          listArtists.map((artist, i) => (
            <Artist key={artist.id} {...artist} />
          ))}
      </div>
    </div>
  );
};

export default ArtistsPage;
