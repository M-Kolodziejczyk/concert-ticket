import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  createBandStart,
  getUserBandsStart,
} from "../../redux/band/band.actions";
import validate from "../../validators/band";

import useForm from "../../hooks/useForm.js";

import UserBandsBand from "./components/user-bands-band.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";
import Spinner from "../../components/spinner/spinner.component";

import "./user-bands-page.styles.scss";

const UserBandsPage = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.user.email);
  const bands = useSelector((state) => state.band.userBands);
  const loading = useSelector((state) => state.band.loading);
  const userLoading = useSelector((state) => state.user.getUserLoading);
  const isUserBandsEmpty = useSelector((state) => state.band.isUserBandsEmpty);

  const { handleChange, handleSubmit, values, errors } = useForm(
    { name: "", genre: "" },
    validate,
    createBandStart
  );

  useEffect(() => {
    if (userName && Object.keys(bands).length === 0 && !isUserBandsEmpty) {
      dispatch(getUserBandsStart(userName));
    }
  }, [userName, bands, dispatch, isUserBandsEmpty]);

  return (
    <div className="user-bands-page">
      {(loading || userLoading) && <Spinner />}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#bandModal"
      >
        Create Band
      </button>

      <div className="band-wrapper">
        <h2>Bands Created By you</h2>
        <div className="band-container">
          {bands &&
            Object.keys(bands).map((id) => (
              <UserBandsBand band={bands[id]} id={id} key={id} />
            ))}
        </div>
      </div>

      <div
        className="modal fade"
        id="bandModal"
        tabIndex="-1"
        aria-labelledby="bandModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="bandModalLabel">
                Create Band
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <FormInput
                  name="name"
                  type="text"
                  label="Name"
                  handleChange={handleChange}
                  value={values.name}
                  error={errors.name}
                />
                <FormInput
                  name="genre"
                  type="text"
                  label="Genre"
                  handleChange={handleChange}
                  value={values.genre}
                  error={errors.genre}
                />
                <div className="form__button">
                  <CustomButton type="submit" name="submit">
                    Create
                  </CustomButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBandsPage;
