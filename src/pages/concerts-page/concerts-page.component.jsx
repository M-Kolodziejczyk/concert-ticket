import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listConcertsStart } from "../../redux/concert/concert.actions";

import Concert from "./components/concert.component";
import Spinner from "../../components/spinner/spinner.component";

import "./concerts-page.styles.scss";

const ConcertsPage = () => {
  const dispatch = useDispatch();
  const listConcerts = useSelector((state) => state.concert.listConcerts);
  const loading = useSelector((state) => state.concert.loading);

  useEffect(() => {
    if (listConcerts.length === 0) {
      dispatch(listConcertsStart());
    }
  }, [listConcerts, dispatch]);

  return (
    <div className="concerts-page">
      {loading && <Spinner />}
      <div className="concerts-page-container">
        <h1>Concerts</h1>
        {listConcerts &&
          listConcerts.map((concert, i) => <Concert {...concert} key={i} />)}
      </div>
    </div>
  );
};

export default ConcertsPage;
