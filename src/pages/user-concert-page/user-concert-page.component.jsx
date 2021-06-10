import React from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns";

import "./user-concert-page.styles.scss";

const UserConcertPage = ({ match }) => {
  const id = match.params.id;
  const concert = useSelector((state) => state.user.userConcerts[id]);
  const date = new Date(concert?.date);
  return (
    <div className="user-concert-page">
      {concert && (
        <div className="details">
          <p>Name: {concert.name}</p>
          <p>Date: {format(date, "MMMM dd yyyy")}</p>
          <p>Time: {format(date, "hh:mm a")}</p>
          <p>Venue: {concert.venue}</p>
          <p> Genres: {concert.genres}</p>
          {/* <div className="img-wrapper">
          {concertsImage[concert.id] && (
            <img src={concertsImage[concert.id]} alt="concert" />
            )}
          </div> */}
        </div>
      )}
    </div>
  );
};

export default UserConcertPage;
