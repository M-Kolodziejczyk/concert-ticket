import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import add from "date-fns/add";
import millisecondsToSeconds from "date-fns/millisecondsToSeconds";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import {
  getOrderStart,
  clearOrderResponse,
} from "../../redux/order/order.actions";

import CheckoutForm from "../../components/checkout-form/checkout-form.component";
import Spinner from "../../components/spinner/spinner.component";

import "./cart-payment-page.styles.scss";

const promise = loadStripe(
  "pk_test_51HwVilIT5kXxcCpHU34AGuIjYmXG9dBwhuLmA2nMOEs9qkqVNNXRDHHUJF22ctEawAZFUVsV6t6i1sgMHuzFnygD00jzGSqetL"
);

const CartPaymentPage = (props) => {
  const dispatch = useDispatch();
  const orderId = props.match.params.id;
  const userLoading = useSelector((state) => state.user.userLoading);
  const order = useSelector((state) => state.order.userOrders[orderId]);
  const orderResponse = useSelector((state) => state.order.createOrderResponse);
  const loading = useSelector((state) => state.order.processPaymentLoading);
  const status = useSelector((state) => state.order.processPaymentStatus);
  const [endTime, setEndTime] = useState("");
  const [isClearOrderResponseLoading, setIsClearOrderResponseLoading] =
    useState(false);

  useEffect(() => {
    if ((!order || order.id !== orderId) && !userLoading) {
      dispatch(getOrderStart(orderId));
    }
  }, [orderId, dispatch, order, userLoading]);

  useEffect(() => {
    if (order?.createdAt) {
      let date = new Date();
      let secondsLeft = add(new Date(order.createdAt), { minutes: 7 }) - date;
      setEndTime(millisecondsToSeconds(secondsLeft));
    }
  }, [order]);

  useEffect(() => {
    if (endTime > -1) {
      const timer = setTimeout(() => {
        setEndTime(endTime - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [endTime]);

  useEffect(() => {
    if (
      endTime < 0 &&
      !isClearOrderResponseLoading &&
      orderResponse?.body?.isTicketAvailable === true
    ) {
      setIsClearOrderResponseLoading(true);
      dispatch(clearOrderResponse());
    }
  }, [endTime, orderResponse, isClearOrderResponseLoading, dispatch]);

  return (
    <div className="cart-payment-page">
      {order && order.status === "PAID" ? (
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
                    <div className="ticket-header">
                      <p className="event">
                        <strong>Event: </strong>
                        {ticket.event}
                      </p>
                      <p className="type">
                        <strong>Type: </strong>
                        {ticket.type}
                      </p>
                    </div>
                    <div className="ticket-body">
                      <p className="venue">
                        <strong>Venue: </strong>
                        {ticket.venue}
                      </p>
                      <p className="price">
                        <strong>Price: </strong>
                        {ticket.price.toFixed(2)}$
                      </p>
                    </div>
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
              <div className="helper">
                <h2>To process payment type:</h2>
                <p>Credit card number: 4242 4242 4242 4242</p>
                <p>MM/RR: future expiry date e.g. 01/22</p>
                <p>CVC: any 3 numbers</p>
                <p>Postal code: any 5 numbers</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CartPaymentPage;

// useEffect(() => {
//   if (
//     (Object.keys(order).length === 0 || order.id !== orderId) &&
//     !userLoading
//   ) {
//     dispatch(getOrderStart(orderId));
//   }
// }, [orderId, dispatch, order]);
