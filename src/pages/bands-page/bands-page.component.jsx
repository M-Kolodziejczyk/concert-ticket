import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listBandsStart } from "../../redux/band/band.actions";

import Band from "./components/band.component";

import "./bands-page.styles.scss";

const BandsPage = () => {
  const bands = useSelector((state) => state.band.bands);
  const dispatch = useDispatch();

  useEffect(() => {
    if (bands.length === 0) {
      dispatch(listBandsStart());
    }

    // eslint-disable-next-line
  }, []);

  return (
    <div className="bands-page">
      <div className="bands-page-container">
        <h1>BANDS</h1>
        {bands && bands.map((band, i) => <Band {...band} key={i} />)}
      </div>
    </div>
  );
};

export default BandsPage;
