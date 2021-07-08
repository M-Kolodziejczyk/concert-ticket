import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listConcertsWithLimitStart } from "../../redux/concert/concert.actions";

import Spinner from "../../components/spinner/spinner.component";
import HomePageConcert from "./components/home-page-concert.component";

import "./home-page.styles.scss";

const HomePage = () => {
  const dispatch = useDispatch();
  const listConcertsLimit = useSelector(
    (state) => state.concert.listConcertsLimit
  );
  const loading = useSelector((state) => state.concert.loading);
  const successMessage = useSelector((state) => state.concert.successMessage);

  useEffect(() => {
    if (
      listConcertsLimit.length === 0 &&
      listConcertsLimit !== null &&
      !successMessage.listConcertsLimit
    ) {
      dispatch(listConcertsWithLimitStart(4));
    }
  }, [listConcertsLimit, dispatch, successMessage]);

  return (
    <div className="home-page">
      {loading && <Spinner />}
      <div className="img-container">
        <h1>Concert tickets</h1>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
          itaque, corrupti praesentium et quas laboriosam natus dignissimos,
          aliquam vitae rem reiciendis delectus incidunt illum placeat, eos
          consectetur quo enim aliquid. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Consequatur tenetur voluptates temporibus culpa
          nostrum sunt rem iste, sed maiores, id cupiditate laudantium numquam
          ad.
        </p>
      </div>

      <div className="concerts-container">
        <h2>Comming concerts:</h2>
        <div className="wrapper">
          {listConcertsLimit &&
            listConcertsLimit.map((concert) => (
              <HomePageConcert key={concert.id} {...concert} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
