import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import add from "date-fns/add";
import millisecondsToSeconds from "date-fns/millisecondsToSeconds";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { getOrderStart } from "../../redux/order/order.actions";

import CheckoutForm from "../../components/checkout-form/checkout-form.component";
import Spinner from "../../components/spinner/spinner.component";

import "./cart-payment.styles.scss";

const promise = loadStripe(
  "pk_test_51HwVilIT5kXxcCpHU34AGuIjYmXG9dBwhuLmA2nMOEs9qkqVNNXRDHHUJF22ctEawAZFUVsV6t6i1sgMHuzFnygD00jzGSqetL"
);

const CartPaymentPage = (props) => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order.order);
  const loading = useSelector((state) => state.order.processPaymentLoading);
  const status = useSelector((state) => state.order.processPaymentStatus);
  const orderId = props.match.params.id;
  const [endTime, setEndTime] = useState("");

  useEffect(() => {
    if (Object.keys(order).length === 0 || order.id !== orderId) {
      dispatch(getOrderStart(orderId));
    }
  }, [orderId, dispatch, order]);

  useEffect(() => {
    if (order?.createdAt) {
      let date = new Date();
      let secondsLeft = add(new Date(order.createdAt), { minutes: 7 }) - date;
      setEndTime(millisecondsToSeconds(secondsLeft));
    }
  }, [order]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEndTime(endTime - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [endTime]);

  return (
    <div className="cart-payment-page">
      {order.status === "PAID" ? (
        <h1>Your order is already paid!</h1>
      ) : (
        <>
          {!loading && status === "SUCCESS" ? (
            <p className="success">
              Thank you. Your account has been charged and your transaction is
              successful.
            </p>
          ) : (
            <div>
              {loading && <Spinner />}
              <h1>Complete Payment</h1>
              {endTime > 0 && !loading && status !== "SUCCESS" && (
                <p className="timer">
                  You must complete your payment in:{" "}
                  <span>
                    {Math.floor(endTime / 60)}:{endTime % 60 < 10 && "0"}
                    {endTime % 60}
                  </span>
                </p>
              )}
              {endTime < 0 && !loading && status !== "SUCCESS" && (
                <p className="timer">Your purchase will be canceled</p>
              )}
              <h2>Your tickets: </h2>
              <div className="ticket-container">
                {order?.tickets?.items.map((ticket) => (
                  <div className="ticket" key={ticket.id}>
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
                <p className="total">
                  Total price:
                  <strong> {order?.total?.toFixed(2)}$</strong>
                </p>
                {(endTime > 0 || loading) && (
                  <Elements stripe={promise}>
                    <CheckoutForm
                      clientSecret={order?.stripeIntentID}
                      orderID={orderId}
                    />
                  </Elements>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CartPaymentPage;
