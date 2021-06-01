import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getArtistImageStart } from "../../../redux/artist/artist.actions";

import { ReactComponent as Person } from "../../../assets/singer.svg";

import "./artist.styles.scss";

const Artist = (props) => {
  const { name, role, genre, identityId, index, id } = props;
  const dispatch = useDispatch();
  const artistImageUrl = useSelector(
    (state) => state.artist.artists[index].url
  );

  useEffect(() => {
    if (!artistImageUrl && identityId) {
      dispatch(getArtistImageStart({ identityId, index }));
    }
  }, [dispatch, identityId, index, artistImageUrl]);

  return (
    <Link to={{ pathname: `/artists/${id}`, artist: props, artistImageUrl }}>
      <div className="artist">
        <div className="image">
          {artistImageUrl ? (
            <img src={artistImageUrl} alt="artist img" />
          ) : (
            <Person className="altImg" />
          )}
        </div>
        <div className="artist__info">
          <p>Name: {name}</p>
          <p>Role: {role}</p>
          <p>Genre: {genre}</p>
        </div>
      </div>
    </Link>
  );
};

export default Artist;
