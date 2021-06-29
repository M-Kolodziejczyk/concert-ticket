import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getArtistStart } from "../../redux/artist/artist.actions";

import { ReactComponent as Person } from "../../assets/singer.svg";

import "./artist-page.styles.scss";

const ArtistPage = (props) => {
  const { artistImageUrl } = props.location;
  const dispatch = useDispatch();
  let { id } = useParams();
  const [artist, setArtist] = useState({});
  const [imageUrl, setImageUrl] = useState(artistImageUrl);
  const artistSelector = useSelector((state) => state.artist.artist);

  useEffect(() => {
    if (Object.keys(artistSelector).length > 0) {
      setArtist(artistSelector);
      setImageUrl(artistSelector.imageUrl);
    }
  }, [artistSelector]);

  useEffect(() => {
    if (props.location.artist) {
      setArtist(props.location.artist);
    } else {
      dispatch(getArtistStart(id));
    }
  }, [props.location.artist, id, dispatch]);

  return (
    <div className="artist-page">
      <div className="artist-page-container">
        <div className="image">
          {imageUrl ? (
            <img src={imageUrl} alt="artist img" />
          ) : (
            <Person className="altImg" />
          )}
        </div>
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
      </div>
    </div>
  );
};

export default ArtistPage;
