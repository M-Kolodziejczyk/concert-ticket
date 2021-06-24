import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import {
  createConcertStart,
  getUserConcertsStart,
} from "../../redux/concert/concert.actions";

import validate from "../../validators/concert";
import useForm from "../../hooks/useForm";

import Spinner from "../../components/spinner/spinner.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";
import UserConcertsConcert from "./components/user-concerts-concert.component";

import "./user-concerts-page.styles.scss";
import "react-datepicker/dist/react-datepicker.css";

const UserConcertsPage = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.user.email);
  const userLoading = useSelector((state) => state.user.getUserLoading);
  const loading = useSelector((state) => state.concert.loading);
  const loadingForm = useSelector((state) => state.concert.loadingForm);
  const successMessage = useSelector((state) => state.concert.successMessage);
  const errorMessage = useSelector((state) => state.concert.errorMessage);
  const userListConcerts = useSelector(
    (state) => state.concert.userListConcerts
  );
  const isUserConcertsEmpty = useSelector(
    (state) => state.concert.isUserConcertsEmpty
  );
  const { handleChange, handleSubmit, values, errors, handleChangeDate } =
    useForm(
      { name: "", description: "", date: new Date(), venue: "", genres: "" },
      validate,
      createConcertStart
    );

  useEffect(() => {
    if (userName && (userListConcerts.length === 0) & !isUserConcertsEmpty) {
      dispatch(getUserConcertsStart(userName));
    }
  }, [userName, userListConcerts, dispatch, isUserConcertsEmpty]);

  return (
    <div className="user-concerts-page">
      {(loading || userLoading) && <Spinner />}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#concertModal"
      >
        Create Concert
      </button>
      <div className="concert-wrapper">
        <h3>Concerts created by you</h3>
        <div className="concert-container">
          {userListConcerts.length > 0 &&
            userListConcerts.map((concert) => (
              <UserConcertsConcert key={concert.id} {...concert} />
            ))}
        </div>
      </div>
      <div
        className="modal fade"
        id="concertModal"
        tabIndex="-1"
        aria-labelledby="concertModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          {loadingForm && <Spinner />}
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="concertModalLabel">
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
                  name="description"
                  type="text"
                  label="Description"
                  handleChange={handleChange}
                  value={values.description}
                  error={errors.description}
                />
                <FormInput
                  name="venue"
                  type="text"
                  label="Venue"
                  handleChange={handleChange}
                  value={values.venue}
                  error={errors.venue}
                />
                <FormInput
                  name="genres"
                  type="text"
                  label="Genres"
                  handleChange={handleChange}
                  value={values.genres}
                  error={errors.genres}
                />
                <DatePicker
                  selected={values.date}
                  onChange={(e) => handleChangeDate(e, "date")}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="time"
                  dateFormat="MMMM d, yyyy hh:mm aa"
                />

                <div className="form__button">
                  <CustomButton type="submit" name="submit">
                    Create
                  </CustomButton>
                </div>
                <div className="messages">
                  {successMessage.createConcert && (
                    <span className="success">
                      {successMessage.createConcert}
                    </span>
                  )}
                  {errorMessage.createConcert && (
                    <span className="error">{errorMessage.createConcert}</span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserConcertsPage;
