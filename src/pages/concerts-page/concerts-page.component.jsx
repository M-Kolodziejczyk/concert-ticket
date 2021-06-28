import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listConcertsStart } from "../../redux/concert/concert.actions";

import Concert from "./components/concert.component";

import "./concerts-page.styles.scss";

const ConcertsPage = () => {
  const concerts = useSelector((state) => state.concert.concerts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (concerts.length === 0) {
      dispatch(listConcertsStart());
    }
  }, [concerts, dispatch]);

  return (
    <div className="concerts-page">
      <div className="concerts-page-container">
        <h1>Concerts</h1>
        {concerts &&
          concerts.map((concert, i) => <Concert {...concert} key={i} />)}
      </div>
    </div>
  );
};

export default ConcertsPage;
