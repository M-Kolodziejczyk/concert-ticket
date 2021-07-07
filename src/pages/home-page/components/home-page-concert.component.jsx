import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";

import { getConcertImageStart } from "../../../redux/concert/concert.actions";

import { ReactComponent as Festival } from "../../../assets//festival.svg";

import "./home-page-concert.styles.scss";

const HomePageConcert = (props) => {
  const { name, date, keyImage, venue, id } = props;
  const dispatch = useDispatch();
  const concertImage = useSelector(
    (state) => state.concert.concertsImage?.[id]
  );
  const loading = useSelector((state) => state.concert.loading);
  const loadingImg = useSelector((state) => state.concert.loadingImg);

  useEffect(() => {
    if (concertImage !== null && !concertImage && keyImage) {
      dispatch(getConcertImageStart(id));
    }
  }, [concertImage, keyImage, dispatch, id]);

  return (
    <Link to={`/concerts/${id}`} className="home-page-concert">
      <div className="concert-container">
        <div className="image">
          {concertImage && <img src={concertImage} alt="concert" />}
          {!concertImage && !loading && !loadingImg && <Festival />}
        </div>
        <div className="description">
          <p>
            {venue} - {format(new Date(date), "dd MMMM yyyy")}
          </p>
          <p className="event-name">
            <strong>{name}</strong>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HomePageConcert;
