import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getBandImageStart } from "../../../redux/band/band.actions";
import { ReactComponent as BandImg } from "../../../assets/band.svg";

import "./band.styles.scss";

const Band = (props) => {
  const { name, genre, id, keyImage, description } = props;
  const dispatch = useDispatch();
  const bandsImage = useSelector((state) => state.band.bandsImage);

  useEffect(() => {
    if (!bandsImage[id] && keyImage) {
      dispatch(getBandImageStart(id));
    }

    // eslint-disable-next-line
  }, []);

  return (
    <Link className="bands-page-band" to={`/bands/${id}`}>
      <div className="bands-page-band-container">
        <div className="image">
          {bandsImage[id] ? (
            <img src={bandsImage[id]} alt="band" />
          ) : (
            <BandImg />
          )}
        </div>
        <div className="details-container">
          <p>
            <strong>Name: </strong>
            {name}
          </p>
          <p>
            <strong>Genre: </strong>
            {genre}
          </p>
          <p className="description">
            <strong>Description: </strong>
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Band;
