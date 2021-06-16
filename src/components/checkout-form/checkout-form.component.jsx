import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { processPaymentStart } from "../../redux/order/order.actions";

import CustomButon from "../../components/custom-button/custom-button.component";

import "./checkout-form.styles.scss";

const CheckoutForm = ({ clientSecret, orderID }) => {
  const dispatch = useDispatch();
  const elements = useElements();
  const stripe = useStripe();
  const [error, setError] = useState(null);

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const card = elements.getElement(CardElement);

    dispatch(
      processPaymentStart({
        orderID,
        clientSecret,
        card,
        stripe: stripe.confirmCardPayment,
      })
    );
  };

  return (
    <div className="checkout-form">
      <form id="payment-form" onSubmit={handleSubmit}>
        <CardElement
          id="card-element"
          options={cardStyle}
          onChange={handleChange}
          className="card-element"
        />
        <div className="button-container">
          <CustomButon id="submit">Pay now</CustomButon>
        </div>
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export const cardStyle = {
  style: {
    base: {
      color: "#32325d",
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#32325d",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

export default CheckoutForm;
