import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { addBandToConcertStart } from "../../../redux/concert/concert.actions";
import { getUserBandsStart } from "../../../redux/band/band.actions";

import validate from "../../../validators/add-band-to-concert";
import useForm from "../../../hooks/useForm";
import CustomButton from "../../../components/custom-button/custom-button.component";
import Spinner from "../../../components/spinner/spinner.component";

import "./user-concert-add-band.styles.scss";

const UserConcertAddBand = () => {
  let params = useParams();
  const dispatch = useDispatch();
  const [bands, setBands] = useState([]);
  const userName = useSelector((state) => state.user.user.email);
  const userBands = useSelector((state) => state.band.userListBands);
  const loadingForm = useSelector((state) => state.concert.loadingForm);
  const concertBands = useSelector(
    (state) => state.concert.userConcerts[params.id].bands.items
  );
  const isUserBandsEmpty = useSelector((state) => state.band.isUserBandsEmpty);
  const successMessage = useSelector((state) => state.concert.successMessage);
  const errorMessage = useSelector((state) => state.concert.errorMessage);

  const { handleChange, handleSubmit, values, errors } = useForm(
    { concertId: params.id, bandId: "" },
    validate,
    addBandToConcertStart
  );

  useEffect(() => {
    if (userName && userBands.length === 0 && !isUserBandsEmpty) {
      dispatch(getUserBandsStart(userName));
    }
  }, [userName, userBands, dispatch, isUserBandsEmpty]);

  useEffect(() => {
    setBands(checkIfUserBandsInConcert(userBands, concertBands));
  }, [userBands, concertBands]);

  function checkIfUserBandsInConcert(userBands, concertBands) {
    let concertBandsId = concertBands.map((band) => band.band.id);
    return userBands.filter((band) => !concertBandsId.includes(band.id));
  }

  return (
    <div className="user-concert-add-band">
      {loadingForm && <Spinner />}
      {bands.length > 0 && (
        <form onSubmit={handleSubmit} className="add-band-form">
          <select
            className="form-select"
            aria-label="Default select band"
            value={values.bandId}
            onChange={handleChange}
            name="bandId"
          >
            <option value="selected">Select band</option>
            {bands.length > 0 &&
              bands.map((band) => (
                <option key={band.id} value={band.id}>
                  {band.name}
                </option>
              ))}
          </select>
          {errors.bandId && <p>{errors.bandId}</p>}
          <div className="form__button">
            <CustomButton type="submit" name="submit">
              Add Band to Concert
            </CustomButton>
          </div>
          <div className="messages">
            {successMessage.addBandToConcert && (
              <span className="success">{successMessage.addBandToConcert}</span>
            )}
            {errorMessage.addBandToConcert && (
              <span className="error">{errorMessage.addBandToConcert}</span>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default UserConcertAddBand;
