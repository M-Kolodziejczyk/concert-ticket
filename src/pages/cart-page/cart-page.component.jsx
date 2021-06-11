import React from "react";
import { useSelector } from "react-redux";

import "./cart-page.styles.scss";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="cart-page">
      <h2>Cart:</h2>
      {cart &&
        cart.map((item) => (
          <div key={item.id}>
            <p>Event: {item.eventName}</p>
            <p>Type: {item.type}</p>
            <p>Price: {item.price}</p>
            <p>Venue: {item.venue}</p>
          </div>
        ))}
    </div>
  );
};

export default CartPage;
