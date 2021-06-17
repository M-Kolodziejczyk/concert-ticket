import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { createOrderStart } from "../../redux/order/order.actions";
import { clearCart } from "../../redux/cart/cart.actions";

import { ReactComponent as Delete } from "../../assets/delete.svg";
import CustomButon from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";
import Spinner from "../../components/spinner/spinner.component";

import "./cart-page.styles.scss";

const CartPage = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const cart = useSelector((state) => state.cart.cart);
  const order = useSelector((state) => state.order);
  const user = useSelector((state) => state.user);

  const handlePurchase = async (e) => {
    if (!fullName) {
      setFullNameError("Full Name is required!");
    } else if (fullName.length < 5) {
      setFullNameError("Full Name must contain at least 5 characters");
    } else {
      setFullNameError("");
      dispatch(
        createOrderStart({
          userName: user.currentUser.email,
          fullName: "Michal Kolo",
          tickets: cart.map((item) => ({ id: item.id, quantity: 1 })),
        })
      );
    }
  };

  const handleChange = (e) => {
    setFullName(e.target.value);
  };

  useEffect(() => {
    if (cart.length > 0) {
      setTotal(cart.reduce((accumulator, item) => accumulator + item.price, 0));
    }
  }, [cart]);

  useEffect(() => {
    if (!order.loading && order.createOrderResponse?.body?.isTicketAvailable) {
      dispatch(clearCart());
      history.push(`/cart/payment/${order.createOrderResponse.body.orderID}`);
    }
  }, [order, history, dispatch]);

  return (
    <div className="cart-page">
      {order.loading && <Spinner />}
      {cart.length > 0 ? (
        <div>
          <h2>Tickets:</h2>
          {cart.map((item) => (
            <div key={item.id} className="cart">
              <p>Event: {item.eventName}</p>
              <p>Type: {item.type}</p>
              <p>Price: {item.price}</p>
              <p>Venue: {item.venue}</p>
              <button className="delete-ticket">
                <Delete />
              </button>
            </div>
          ))}
          <FormInput
            name="fullName"
            type="text"
            label="Full Name"
            handleChange={handleChange}
            value={fullName}
            error={fullNameError}
          />
          <div className="summary">
            <p>
              <strong>Total Price: </strong>
              {total.toFixed(2)}$
            </p>
            <CustomButon onClick={handlePurchase}>Purchase</CustomButon>
            {/* <button onClick={handlePurchase}>Purchase</button> */}
          </div>
        </div>
      ) : (
        <h2>There is no tickets in your cart!</h2>
      )}
      <div className="error">
        {order.createOrderResponse?.body?.isTicketAvailable === false && (
          <h2>
            We are very sorry but tickets you're tying to buy are not available
            anymore.
          </h2>
        )}
      </div>
    </div>
  );
};

export default CartPage;
