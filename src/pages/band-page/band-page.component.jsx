import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { updateBand, getBandStart } from "../../redux/band/band.actions";

import "./band-page.styles.scss";

const BandPage = ({ location }) => {
  console.log("Props: ", location);
  const dispatch = useDispatch();
  let { id } = useParams();
  const [band, setBand] = useState(location.band || {});
  const bandSelector = useSelector((state) => state.band.band);

  useEffect(() => {
    if (
      (Object.keys(bandSelector).length === 0 &&
        Object.keys(band).length > 0) ||
      (Object.keys(bandSelector).length > 0 &&
        Object.keys(band).length > 0 &&
        bandSelector.id !== id)
    ) {
      dispatch(updateBand(band));
    } else if (
      Object.keys(bandSelector).length > 0 &&
      Object.keys(band).length === 0
    ) {
      setBand(bandSelector);
    } else if (
      Object.keys(bandSelector).length === 0 &&
      Object.keys(band).length === 0
    ) {
      dispatch(getBandStart(id));
    }
  }, [bandSelector, id, band, dispatch]);

  return (
    <div className="band-page">
      <div className="image-container">
        {band.imageUrl && <img src={band.imageUrl} alt="Band" />}
      </div>
      <div className="description-container">
        <h1>{band.name}</h1>
        <h2>Genre: {band.genre}</h2>
        <p>
          <strong>Description: </strong>Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Facere recusandae, doloribus facilis veniam
          voluptatem nam itaque rerum magnam consequatur, blanditiis quam quae
          minima iusto aspernatur necessitatibus, cumque odit repellat
          molestias!
        </p>
      </div>
    </div>
  );
};

export default BandPage;
