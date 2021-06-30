import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";

import {
  getConcertStart,
  getConcertImageStart,
} from "../../redux/concert/concert.actions";
import { addTicketToCart } from "../../redux/cart/cart.actions";

import { ReactComponent as Cart } from "../../assets/shopping-cart.svg";
import { ReactComponent as Festival } from "../../assets/festival.svg";
import Spinner from "../../components/spinner/spinner.component";

import "./concert-page.styles.scss";

const ConcertPage = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const [error, setError] = useState({});
  const cart = useSelector((state) => state.cart.cart);
  const concert = useSelector((state) => state.concert.concerts?.[id]);
  const concertTickets = useSelector(
    (state) => state.concert.concerts?.[id]?.tickets?.items
  );
  const concertImage = useSelector(
    (state) => state.concert.concertsImage?.[id]
  );
  const loading = useSelector((state) => state.concert.loading);
  const loadingImg = useSelector((state) => state.concert.loadingImg);

  useEffect(() => {
    if (concert !== null && !concert) {
      dispatch(getConcertStart(id));
    }
  }, [concert, dispatch, id]);

  useEffect(() => {
    if (concertImage !== null && !concertImage && concert?.keyImage) {
      dispatch(getConcertImageStart(id));
    }
  }, [concertImage, concert, dispatch, id]);

  const addToCart = (ticket) => {
    let isInCart = cart.find((item) => item.id === ticket.id);

    if (!isInCart) {
      dispatch(addTicketToCart(ticket));
    } else {
      setError({
        ...error,
        [ticket.id]: "Ticket already added!",
      });
    }
  };

  return (
    <div className="concert-page">
      {loading && <Spinner />}
      <div className="concert-page-container">
        <div className="image-container">
          {concertImage && <img src={concertImage} alt="concert" />}
          {!concertImage && !loading && !loadingImg && <Festival />}
        </div>
        {concert && (
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
              {concert.date &&
                format(new Date(concert.date), "dd MMMM yyyy hh:mm a")}
            </p>
            <p>
              <strong>Description: </strong>
              {concert.description}
            </p>
          </div>
        )}
      </div>
      <div className="tickets-container">
        <h3>Tickets:</h3>
        {concertTickets &&
          concertTickets.map((ticket) => {
            return (
              <div key={ticket.id} className="ticket">
                <p className="desc">{ticket.description}</p>
                <p>
                  <strong>Type: </strong> {ticket.type}
                </p>
                <p>
                  <strong>Price:</strong> {ticket.price}
                </p>
                <button className="cart-btn" onClick={() => addToCart(ticket)}>
                  <Cart /> Add To Cart
                </button>
                {error[ticket.id] && (
                  <p className="error">{error[ticket.id]}</p>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ConcertPage;
