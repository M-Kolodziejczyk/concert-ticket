import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  updateConcert,
  getConcertStart,
} from "../../redux/concert/concert.actions";
import { addTicketToCart } from "../../redux/cart/cart.actions";
import { getTicketsByConcertIdStart } from "../../redux/ticket/ticket.actions";

import { ReactComponent as Cart } from "../../assets/shopping-cart.svg";

import "./concert-page.styles.scss";

const ConcertPage = ({ location }) => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const [concert, setConcert] = useState(location.concert || {});
  const concertSelector = useSelector((state) => state.concert.concert);
  const concertTickets = useSelector(
    (state) => state.ticket.concertTickets[id]
  );

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

  useEffect(() => {
    if (!concertTickets) {
      dispatch(getTicketsByConcertIdStart(id));
    }
  }, [dispatch, concertTickets, id]);

  const addToCart = (ticket) => {
    dispatch(addTicketToCart(ticket));
  };

  return (
    <div className="concert-page">
      <div className="container">
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
            <strong>Description: </strong>Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Tenetur eaque reiciendis fugiat.
            Perferendis, similique. Deleniti animi nam praesentium est quam fuga
            consequatur? Deleniti laboriosam rerum, alias aliquam provident
            perferendis quo.
          </p>
        </div>
      </div>
      <div className="tickets-container">
        <h3>Tickets:</h3>
        {concertTickets &&
          concertTickets.map((ticket) => (
            <div key={ticket.id} className="ticket">
              <p>{ticket.description}</p>
              <p>Ticket type: {ticket.type}</p>
              <p>Price: {ticket.price}</p>
              <button className="cart-btn" onClick={() => addToCart(ticket)}>
                <Cart /> Add To Cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ConcertPage;
