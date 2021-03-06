import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";

import { getConcertImageStart } from "../../../redux/concert/concert.actions";

import "./user-concerts-concert.styles.scss";

const UserConcertsConcert = (concert) => {
  const dispatch = useDispatch();
  const concertsImage = useSelector((state) => state.concert.concertsImage);
  const date = new Date(concert.date);

  useEffect(() => {
    if (!concertsImage[concert.id] && concert.keyImage) {
      dispatch(getConcertImageStart(concert.id));
    }

    // eslint-disable-next-line
  }, [dispatch, concert.id]);

  return (
    <Link
      to={{ pathname: `/user/concerts/${concert.id}`, concert }}
      className="user-concert"
    >
      <div className="img-wrapper">
        {concertsImage[concert.id] && (
          <img src={concertsImage[concert.id]} alt="concert" />
        )}
      </div>
      <div className="details">
        <p>
          <strong>Name: </strong>
          {concert.name}
        </p>
        <p>
          <strong>Date: </strong>
          {format(date, "MMMM dd yyyy")}
        </p>
        <p>
          <strong>Time: </strong>
          {format(date, "hh:mm a")}
        </p>
        <p>
          <strong>Venue: </strong>
          {concert.venue}
        </p>
        <p>
          <strong>Genres: </strong>
          {concert.genres}
        </p>
      </div>
    </Link>
  );
};

export default UserConcertsConcert;
