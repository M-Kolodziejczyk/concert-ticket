import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getConcertImageStart } from "../../../redux/concert/concert.actions";

import { ReactComponent as Band } from "../../../assets/band.svg";

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
      className="concerts-page-concert"
    >
      <div className="concert-container">
        <div className="image">
          {imageUrl ? <img src={imageUrl} alt="concert" /> : <Band />}
        </div>
        <div className="description">
          <p className="event-name">{name}</p>
          <p>
            <strong>Genres: </strong>
            {genres}
          </p>
          <p>
            <strong>Venue: </strong>
            {venue}
          </p>
          <p>
            <strong>Date: </strong>
            {date}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Concert;
