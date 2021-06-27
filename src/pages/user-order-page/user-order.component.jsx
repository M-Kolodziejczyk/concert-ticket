import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";

import { getOrderStart, clearOrder } from "../../redux/order/order.actions";

import Spinner from "../../components/spinner/spinner.component";
import TicketGenerator from "../../components/ticket-generator/ticket-generatror.component";

import "./user.order.styles.scss";

const UserOrderPage = ({ match }) => {
  const dispatch = useDispatch();
  const id = match.params.id;
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState({});
  const orderSelector = useSelector((state) => state.order.order);
  const savedOrder = useSelector((state) => state.order.savedOrders[id]);

  useEffect(() => {
    if (!savedOrder) {
      dispatch(getOrderStart(id));
    } else {
      setOrder(savedOrder);
      setIsLoading(false);
    }
  }, [savedOrder, dispatch, id]);

  useEffect(() => {
    if (Object.keys(orderSelector).length > 0) {
      setOrder(orderSelector);
      setIsLoading(false);
    }
  }, [orderSelector]);

  useEffect(() => {
    return () => {
      dispatch(clearOrder());
    };

    // eslint-disable-next-line
  }, []);

  return (
    <div className="user-order-page">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="order-container">
          <div className="details">
            <p>
              <strong>Name: </strong>
              {order.customer}
            </p>
            <p>
              <strong>Date: </strong>
              {format(new Date(order.createdAt), "d MMM Y")}
            </p>
            <p>
              <strong>Total: </strong>
              {order.total}$
            </p>
            <p>
              <strong>Status: </strong>
              {order.status}
            </p>
          </div>
          {order.status === "NEW" && (
            <Link to={`/cart/payment/${order.id}`}> Go to Pay</Link>
          )}
          <div className="tickets-container">
            <h2>Tickets</h2>
            {order.tickets &&
              order.tickets.items.map((ticket) => (
                <div className="ticket" key={ticket.id}>
                  <div className="ticket-header">
                    <p className="name">
                      <strong>Event: </strong>
                      {ticket.ticket.eventName}
                    </p>
                    <p>
                      <strong>Date: </strong>
                      {format(new Date(ticket.ticket.date), "MMM d Y")}
                    </p>
                    <p>
                      <strong>Venue: </strong>
                      {ticket.ticket.venue}
                    </p>
                  </div>
                  <div className="ticket-body">
                    <p className="type">
                      <strong>Type: </strong>
                      {ticket.ticket.type}
                    </p>
                    <p>
                      <strong>price: </strong>
                      {ticket.ticket.price}
                    </p>
                    <div className="ticket-generator">
                      <TicketGenerator ticket={ticket} />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserOrderPage;
