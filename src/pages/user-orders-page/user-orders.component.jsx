import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { listUserOrdersByDateStart } from "../../redux/order/order.actions";

import UserOrdersOrder from "./component/user-orders-order.component";
import Spinner from "../../components/spinner/spinner.component";

import "./user-orders.styles.scss";

const UserOrdersPage = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.user.email);
  const listUserOrders = useSelector((state) => state.order.listUserOrders);

  useEffect(() => {
    if (listUserOrders !== null && listUserOrders.length === 0 && userName) {
      dispatch(listUserOrdersByDateStart(userName));
    }
  }, [listUserOrders, dispatch, userName]);

  return (
    <div className="user-orders-page">
      <h1>User Orders</h1>
      <div className="orders-container">
        {listUserOrders?.items ? (
          listUserOrders.items.map((order) => (
            <UserOrdersOrder key={order.id} order={order} />
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default UserOrdersPage;
