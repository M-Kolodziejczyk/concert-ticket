import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getBandImageStart } from "../../../redux/band/band.actions";
import { ReactComponent as BandImg } from "../../../assets/band.svg";

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
      className="bands-page-band"
      to={{
        pathname: `/bands/${id}`,
        band: { ...props, imageUrl: bandsImage[id] },
        bandImageUrl: bandsImage[id],
      }}
    >
      <div className="bands-page-band-container">
        <div className="image">
          {bandsImage[id] ? (
            <img src={bandsImage[id]} alt="band" />
          ) : (
            <BandImg />
          )}
        </div>
        <div className="description">
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
      </div>
    </Link>
  );
};

export default Band;
