import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getBandImageStart } from "../../../redux/band/band.actions";

import "./band.styles.scss";

const Band = (props) => {
  const { name, genre, id, keyImage } = props;
  const dispatch = useDispatch();
  const bandsImage = useSelector((state) => state.band.bandsImage);

  useEffect(() => {
    if (!bandsImage[id] && keyImage) {
      dispatch(getBandImageStart(id));
    }

    // eslint-disable-next-line
  }, []);

  return (
    <Link
      to={{
        pathname: `/bands/${id}`,
        band: props,
        bandImageUrl: bandsImage[id],
      }}
    >
      <div className="band">
        <div className="image">
          {bandsImage[id] ? (
            <img src={bandsImage[id]} alt="band" />
          ) : (
            <p>no Image</p>
          )}
        </div>
        <p>
          <strong>Name: </strong>
          {name}
        </p>
        <p>
          <strong>Genre: </strong>
          {genre}
        </p>
        <p>
          <strong>Description: </strong>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim sequi
          libero expedita quos, sapiente dolorem odio ipsam nemo praesentium
          corporis tempora fugiat veritatis est ad officia optio, accusamus
          officiis cupiditate.
        </p>
      </div>
    </Link>
  );
};

export default Band;
