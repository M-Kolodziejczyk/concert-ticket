import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  updateConcert,
  getConcertStart,
} from "../../redux/concert/concert.actions";

import "./concert-page.styles.scss";

const ConcertPage = ({ location }) => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const [concert, setConcert] = useState(location.concert || {});
  const concertSelector = useSelector((state) => state.concert.concert);

  useEffect(() => {
    if (
      (Object.keys(concertSelector).length === 0 &&
        Object.keys(concert).length > 0) ||
      (Object.keys(concertSelector).length > 0 &&
        Object.keys(concert).length > 0 &&
        concertSelector.id !== id)
    ) {
      dispatch(updateConcert(concert));
    } else if (
      Object.keys(concertSelector).length > 0 &&
      Object.keys(concert).length === 0
    ) {
      setConcert(concertSelector);
    } else if (
      Object.keys(concertSelector).length === 0 &&
      Object.keys(concert).length === 0
    ) {
      dispatch(getConcertStart(id));
    }
  }, [concertSelector, concert, id, dispatch]);

  return (
    <div className="concert-page">
      <div className="image-container">
        {concert.imageUrl && <img src={concert.imageUrl} alt="Band" />}
      </div>
      <div className="description-container">
        <h1>{concert.name}</h1>
        <p>
          <strong>Genres: </strong>
          {concert.genres}
        </p>
        <p>
          <strong>Venue: </strong>
          {concert.venue}
        </p>
        <p>
          <strong>Date: </strong>
          {concert.date}
        </p>
        <p>
          <strong>Description: </strong>Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Tenetur eaque reiciendis fugiat. Perferendis,
          similique. Deleniti animi nam praesentium est quam fuga consequatur?
          Deleniti laboriosam rerum, alias aliquam provident perferendis quo.
        </p>
      </div>
    </div>
  );
};

export default ConcertPage;
