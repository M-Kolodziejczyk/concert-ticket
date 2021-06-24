import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import { updateUserConcertStart } from "../../../redux/concert/concert.actions";

import validate from "../../../validators/concert";
import useForm from "../../../hooks/useForm";

import FormInput from "../../../components/form-input/form-input.component";
import CustomButton from "../../../components/custom-button/custom-button.component";
import Spinner from "../../../components/spinner/spinner.component";

import "./user-concert-edit.styles.scss";

const UserConcertEdit = ({ concertId }) => {
  const loadingForm = useSelector((state) => state.concert.loadingForm);
  const isFormSuccess = useSelector((state) => state.concert.isFormSuccess);
  const successMessage = useSelector((state) => state.concert.successMessage);
  const errorMessage = useSelector((state) => state.concert.errorMessage);
  const userConcert = useSelector(
    (state) => state.concert.userConcerts[concertId]
  );

  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    handleChangeDate,
    handleInitialValues,
  } = useForm(
    {
      id: concertId,
      name: userConcert.name,
      date: new Date(userConcert.date),
      venue: userConcert.venue,
      genres: userConcert.genres,
      description: userConcert.description,
    },
    validate,
    updateUserConcertStart
  );

  useEffect(() => {
    if (isFormSuccess) {
      handleInitialValues({
        id: concertId,
        name: userConcert.name,
        date: new Date(userConcert.date),
        venue: userConcert.venue,
        genres: userConcert.genres,
        description: userConcert.description,
      });
    }

    // eslint-disable-next-line
  }, [isFormSuccess]);

  return (
    <div className="user-concert-edit">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#concertEditModal"
      >
        Edit Band
      </button>
      <div
        className="modal fade"
        id="concertEditModal"
        tabIndex="-1"
        aria-labelledby="bandModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          {loadingForm && <Spinner bright={true} />}
          {/* <Spinner /> */}
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
                <FormInput
                  name="description"
                  type="text"
                  label="Description"
                  handleChange={handleChange}
                  value={values.description}
                  error={errors.description}
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

                <div className="submit">
                  <CustomButton type="submit" name="submit">
                    Update
                  </CustomButton>
                </div>
                <div className="messages">
                  {successMessage.updateConcert && (
                    <span className="success">
                      {successMessage.updateConcert}
                    </span>
                  )}
                  {errorMessage.updateConcert && (
                    <span className="error">{errorMessage.updateConcert}</span>
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

export default UserConcertEdit;
