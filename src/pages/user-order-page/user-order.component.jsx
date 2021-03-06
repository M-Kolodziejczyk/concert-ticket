import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";

import { getOrderStart } from "../../redux/order/order.actions";

import Spinner from "../../components/spinner/spinner.component";
import TicketGenerator from "../../components/ticket-generator/ticket-generatror.component";

import "./user.order.styles.scss";

const UserOrderPage = ({ match }) => {
  const dispatch = useDispatch();
  const orderId = match.params.id;
  const userOrder = useSelector((state) => state.order.userOrders?.[orderId]);
  const loading = useSelector((state) => state.order.loading);

  useEffect(() => {
    if (!userOrder) {
      dispatch(getOrderStart(orderId));
    }
  }, [dispatch, orderId, userOrder]);

  return (
    <div className="user-order-page">
      {loading && <Spinner />}
      {userOrder && (
        <div className="order-container">
          {userOrder.status === "NEW" && (
            <Link to={`/cart/payment/${userOrder.id}`} className="pay-link">
              {" "}
              Go to Pay
            </Link>
          )}
          <div className="details">
            <p>
              <strong>Name: </strong>
              {userOrder.customer}
            </p>
            <p>
              <strong>Date: </strong>
              {format(new Date(userOrder.createdAt), "d MMM Y")}
            </p>
            <p>
              <strong>Total: </strong>
              {userOrder.total.toFixed(2)}$
            </p>
            <p>
              <strong>Status: </strong>
              {userOrder.status}
            </p>
          </div>
          {userOrder.status === "PAID" && userOrder.tickets && (
            <div className="tickets-container">
              <h2>Tickets:</h2>

              {userOrder.tickets.items.map((ticket) => (
                <div className="ticket" key={ticket.id}>
                  <div className="ticket-header">
                    <p className="name">
                      <strong>Event: </strong>
                      {ticket.eventName}
                    </p>
                    <p>
                      <strong>Date: </strong>
                      {format(new Date(ticket.date), "MMM d Y")}
                    </p>
                    <p>
                      <strong>Venue: </strong>
                      {ticket.venue}
                    </p>
                  </div>
                  <div className="ticket-body">
                    <p className="type">
                      <strong>Type: </strong>
                      {ticket.type}
                    </p>
                    <p>
                      <strong>price: </strong>
                      {ticket.price.toFixed(2)}$
                    </p>
                    <div className="ticket-generator">
                      <strong>
                        <TicketGenerator ticket={ticket} />
                      </strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserOrderPage;
