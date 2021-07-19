import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getArtistStart,
  getArtistImageStart,
} from "../../redux/artist/artist.actions";

import { ReactComponent as Person } from "../../assets/singer.svg";

import "./artist-page.styles.scss";

const ArtistPage = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const artist = useSelector((state) => state.artist.artists?.[id]);
  const artistImgUrl = useSelector((state) => state.artist.artistsImgUrl?.[id]);

  useEffect(() => {
    if (artist !== null && !artist) {
      dispatch(getArtistStart(id));
    }
  }, [dispatch, artist, id]);

  useEffect(() => {
    if (!artistImgUrl && artist) {
      dispatch(getArtistImageStart({ identityId: artist.identityId, id }));
    }
  }, [dispatch, artistImgUrl, artist, id]);

  return (
    <div className="artist-page">
      <div className="artist-page-container">
        <div className="image">
          {artistImgUrl ? (
            <img src={artistImgUrl} alt="artist img" />
          ) : (
            <Person className="altImg" />
          )}
        </div>
        {artist && (
          <div className="artist-info">
            <p className="artist-name">
              <strong>{artist.name}</strong>
            </p>
            <p className="artist-role">
              <strong>Role: </strong>
              {artist.role}
            </p>
            <p className="artist-genre">
              <strong>Genre: </strong>
              {artist.genre}
            </p>
            <p className="artist-description">{artist.description}</p>
          </div>
        )}
      </div>

      {artist && artist.bands.items.length > 0 && (
        <div className="artist-bands-container">
          <h3>Bands:</h3>
          {artist.bands.items.map((band) => (
            <Link
              to={`/bands/${band.band.id}`}
              key={band.band.id}
              className="band"
            >
              <p>
                <strong>Name: </strong>
                {band.band.name}
              </p>
              <p>
                <strong>Genre: </strong>
                {band.band.genre}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArtistPage;
