import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listBandsStart } from "../../redux/band/band.actions";

import Band from "./components/band.component";
import Spinner from "../../components/spinner/spinner.component";

import "./bands-page.styles.scss";

const BandsPage = () => {
  const listBands = useSelector((state) => state.band.listBands);
  const loading = useSelector((state) => state.band.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (listBands !== null && listBands.length === 0) {
      dispatch(listBandsStart());
    }
  }, [listBands, dispatch]);

  return (
    <div className="bands-page">
      {loading && <Spinner />}
      <div className="bands-page-container">
        <h1>BANDS</h1>
        {listBands && listBands.map((band, i) => <Band {...band} key={i} />)}
      </div>
    </div>
  );
};

export default BandsPage;
