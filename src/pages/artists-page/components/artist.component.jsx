import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getArtistImageStart } from "../../../redux/artist/artist.actions";

import { ReactComponent as Person } from "../../../assets/singer.svg";

import "./artist.styles.scss";

const Artist = (props) => {
  const { name, role, genre, identityId, id } = props;
  const dispatch = useDispatch();
  const artistImgUrl = useSelector((state) => state.artist.artistsImgUrl?.[id]);

  useEffect(() => {
    if (artistImgUrl !== null && !artistImgUrl && identityId) {
      dispatch(getArtistImageStart({ identityId, id }));
    }
  }, [dispatch, identityId, artistImgUrl, id]);

  return (
    <Link className="artists-page-artist" to={`/artists/${id}`}>
      <div className="artists-page-artist-container">
        <div className="image">
          {artistImgUrl ? (
            <img src={artistImgUrl} alt="artist img" />
          ) : (
            <Person className="altImg" />
          )}
        </div>
        <div className="description">
          <p>
            <strong>Name: </strong>
            {name}
          </p>
          <p>
            <strong>Role: </strong>
            {role}
          </p>
          <p>
            <strong>Genre: </strong>
            {genre}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Artist;
