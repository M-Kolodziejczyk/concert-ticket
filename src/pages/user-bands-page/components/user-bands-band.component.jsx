import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

import { ReactComponent as Edit } from "../../../assets/edit.svg";

import "./user-bands-band.styles.scss";

const UserBandsBand = ({ band }) => {
  return (
    <Link
      to={`/user/bands/${band.id}`}
      className="user-bands-band"
      key={band.id}
    >
      <p className="name">
        <strong>Name: </strong>
        {band.name}
      </p>
      <p className="genre">
        <strong>Genre: </strong>
        {band.genre}
      </p>
      <p className="date">
        <strong>Created: </strong>
        {format(new Date(band.createdAt), "dd MMM y")}{" "}
      </p>
      <Edit className="edit" />
    </Link>
  );
};

export default UserBandsBand;
