import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getConcertImageStart } from "../../../redux/concert/concert.actions";

import "./concert.styles.scss";

const Concert = (props) => {
  const { name, date, genres, keyImage, venue, id } = props;
  const dispatch = useDispatch();
  const concertsImage = useSelector((state) => state.concert.concertsImage);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!concertsImage[id] && keyImage) {
      dispatch(getConcertImageStart(id));
    }

    if (concertsImage[id]) {
      setImageUrl(concertsImage[id]);
    }
  }, [id, keyImage, dispatch, concertsImage]);

  return (
    <Link
      to={{
        pathname: `/concerts/${id}`,
        concert: { ...props, imageUrl: concertsImage[id] },
      }}
      className="concerts-page__concert-component"
    >
      <div className="container">
        <div className="image">
          {imageUrl ? <img src={imageUrl} alt="concert" /> : <p>No image</p>}
        </div>
        <div className="description">
          <h1>{name}</h1>
          <p>Genres: {genres}</p>
          <p>Venue: {venue}</p>
          <p>Date: {date}</p>
        </div>
      </div>
    </Link>
  );
};

export default Concert;
