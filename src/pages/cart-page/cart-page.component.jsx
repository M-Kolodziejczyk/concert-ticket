import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { createOrderStart } from "../../redux/order/order.actions";

import "./cart-page.styles.scss";

const CartPage = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const cart = useSelector((state) => state.cart.cart);
  const order = useSelector((state) => state.order);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (cart.length > 0) {
      setTotal(
        cart.reduce(
          (accumulator, item) => accumulator + parseFloat(item.price),
          0
        )
      );
    }
  }, [cart]);

  const handlePurchase = async (e) => {
    dispatch(
      createOrderStart({
        userName: user.currentUser.email,
        fullName: "Michal Kolo",
        tickets: cart.map((item) => ({ id: item.id, quantity: 1 })),
      })
    );
  };

  useEffect(() => {
    if (!order.loading && order.createOrderResponse?.body?.isTicketAvailable) {
      history.push(`/cart/payment/${order.createOrderResponse.body.orderID}`);
    }
  }, [order, history]);

  return (
    <div className="cart-page">
      {order.loading ? (
        <h2>Loading....</h2>
      ) : (
        <div>
          <h2>Cart:</h2>
          {cart &&
            cart.map((item) => (
              <div key={item.id} className="cart">
                <p>Event: {item.eventName}</p>
                <p>Type: {item.type}</p>
                <p>Price: {item.price}</p>
                <p>Venue: {item.venue}</p>
              </div>
            ))}

          <div className="summary"></div>
          <p>
            <strong>Total Price: </strong>
            {total}
          </p>
          <button onClick={handlePurchase}>Purchase</button>
          {/* <Elements stripe={promise}>
        <CheckoutForm callback={createOrderStart} />
      </Elements> */}
          {order.createOrderResponse?.body?.isTicketAvailable === false && (
            <h2>No tickets Available</h2>
          )}
        </div>
      )}
    </div>
  );
};

export default CartPage;
