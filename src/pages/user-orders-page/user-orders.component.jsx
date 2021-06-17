import React from "react";
import { useSelector } from "react-redux";

import UserOrdersOrder from "./component/user-orders-order.component";
import Spinner from "../../components/spinner/spinner.component";

import "./user-orders.styles.scss";

const UserOrdersPage = () => {
  const orders = useSelector((state) => state.user.user.ordersByDate);

  return (
    <div className="user-orders-page">
      <h1>User Orders</h1>
      <div className="orders-container">
        {orders ? (
          orders.items.map((order) => (
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
