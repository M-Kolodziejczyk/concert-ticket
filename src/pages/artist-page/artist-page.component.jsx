import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
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
            <p>
              <strong>Name: </strong>
              {artist.name}
            </p>
            <p>
              <strong>Role: </strong>
              {artist.role}
            </p>
            <p>
              <strong>Genre: </strong>
              {artist.genre}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistPage;
