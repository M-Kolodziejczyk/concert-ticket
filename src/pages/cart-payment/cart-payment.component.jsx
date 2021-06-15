import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { getOrderStart } from "../../redux/order/order.actions";

import CheckoutForm from "../../components/checkout-form/checkout-form.component";

import "./cart-payment.styles.scss";

const promise = loadStripe(
  "pk_test_51HwVilIT5kXxcCpHU34AGuIjYmXG9dBwhuLmA2nMOEs9qkqVNNXRDHHUJF22ctEawAZFUVsV6t6i1sgMHuzFnygD00jzGSqetL"
);

const CartPaymentPage = (props) => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order.order);
  const orderId = props.match.params.id;

  useEffect(() => {
    if (Object.keys(order).length === 0 || order.id !== orderId) {
      dispatch(getOrderStart(orderId));
    }
  }, [orderId, dispatch, order]);

  return (
    <div className="cart-payment-page">
      <h1>Complete Payment:</h1>
      <div className="ticket-container">
        {order?.tickets?.items.map((ticket) => (
          <div key={ticket.id}>
            <p>
              <strong>Event: </strong>
              {ticket.ticket.eventName}
            </p>
            <p>
              <strong>Type: </strong>
              {ticket.ticket.type}
            </p>
            <p>
              <strong>Price: </strong>
              {ticket.ticket.price}
            </p>
            <p>
              <strong>Venue: </strong>
              {ticket.ticket.venue}
            </p>
          </div>
        ))}
      </div>
      <div className="summary">
        <p>
          <strong>Total price: </strong>
          {order?.total}$
        </p>
        <Elements stripe={promise}>
          <CheckoutForm
            clientSecret={order?.stripeIntentID}
            orderID={orderId}
          />
        </Elements>
      </div>
    </div>
  );
};

export default CartPaymentPage;
