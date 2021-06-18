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
        <div className="container">
          <div className="order-container">
            <span>{order.customer}</span>
            <span>{format(new Date(order.createdAt), "MMM d Y")}</span>
            <span>Total: {order.total}$</span>
            <span>Status: {order.status}</span>
          </div>
          {order.status === "NEW" && (
            <Link to={`/cart/payment/${order.id}`}> Go to Pay</Link>
          )}
          <div className="tickets-container">
            <h2>Tickets</h2>
            {order.tickets &&
              order.tickets.items.map((ticket) => (
                <div className="ticket" key={ticket.id}>
                  <span>Event: {ticket.ticket.eventName}</span>
                  <span>
                    Date: {format(new Date(ticket.ticket.date), "MMM d Y")}
                  </span>
                  <span>Venue: {ticket.ticket.venue}</span>
                  <span>Type: {ticket.ticket.type}</span>
                  <span>price: {ticket.ticket.price}</span>
                  <TicketGenerator ticket={ticket} />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserOrderPage;
