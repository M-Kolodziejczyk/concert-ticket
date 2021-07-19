import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";

import { getBandImageStart, getBandStart } from "../../redux/band/band.actions";
import { ReactComponent as BandImg } from "../../assets/band.svg";

import Spinner from "../../components/spinner/spinner.component";

import "./band-page.styles.scss";

const BandPage = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const loading = useSelector((state) => state.band.loading);
  const band = useSelector((state) => state.band.bands?.[id]);
  const bandsImage = useSelector((state) => state.band.bandsImage);

  useEffect(() => {
    if (band !== null && !band) {
      dispatch(getBandStart(id));
    }
  }, [band, dispatch, id]);

  useEffect(() => {
    if (!bandsImage[id] && band?.keyImage) {
      dispatch(getBandImageStart(id));
    }
  }, [dispatch, bandsImage, band, id]);

  console.log("band: ", band);

  return (
    <div className="band-page">
      {loading && <Spinner />}
      <div className="band-page-container">
        <div className="image-container">
          {bandsImage[id] && !loading && (
            <img src={bandsImage[id]} alt="Band" />
          )}
          {!bandsImage[id] && !loading && <BandImg />}
        </div>

        {band && (
          <div className="description-container">
            <h1>{band.name}</h1>
            <p>
              <strong>Genre: </strong>
              {band.genre}
            </p>
            <p className="description">
              <strong>Description: </strong>
              {band.description}
            </p>
          </div>
        )}
        {band?.concerts && (
          <div className="concert-container">
            <h3>Concerts:</h3>
            {band.concerts.items.map((concert) => (
              <Link
                to={`/concerts/${concert.concert.id}`}
                key={concert.id}
                className="concert-link"
              >
                <p>
                  <strong>Event name: </strong>
                  {concert.concert.name}
                </p>
                <div className="date-time">
                  <p>
                    <strong>Date: </strong>
                    {format(
                      new Date(concert.concert.date),
                      "dd MMMM yyyy - hh:mm aa"
                    )}
                  </p>
                  <p>
                    <strong>Venue: </strong>
                    {concert.concert.venue}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BandPage;
