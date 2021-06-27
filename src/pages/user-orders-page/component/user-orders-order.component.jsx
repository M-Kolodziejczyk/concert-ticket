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
      <p>
        <strong>Name: </strong>
        {order.customer}
      </p>
      <p>
        <strong>Date: </strong>
        {format(new Date(order.createdAt), "d MMM Y")}
      </p>
      <p>
        <strong>Total: </strong>
        {order.total}$
      </p>
      <p>
        <strong>Status: </strong>
        {order.status}
      </p>
    </Link>
  );
};

export default UserOrdersOrder;
