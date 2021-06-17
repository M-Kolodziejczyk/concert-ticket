import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

import "./user-orders-order.styles.scss";

const UserOrdersOrder = ({ order }) => {
  return (
    <Link
      to={{ pathname: `/user/orders/${order.id}`, order }}
      className="user-orders-order"
    >
      <span>{order.customer}</span>
      <span>{format(new Date(order.createdAt), "MMM d Y")}</span>
      <span>Total: {order.total}$</span>
      <span>Status: {order.status}</span>
    </Link>
  );
};

export default UserOrdersOrder;
