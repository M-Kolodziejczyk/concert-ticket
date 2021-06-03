import React from "react";
import { createConcertStart } from "../../../../redux/concert/concert.actions";

import validate from "../../../../validators/concert";
import useForm from "../../../../hooks/useForm";

import CustomButton from "../../../../components/custom-button/custom-button.component";
import FormInput from "../../../../components/form-input/form-input.component";

const ConcertsTab = ({ userId, concerts }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    { name: "", date: "", venue: "", genres: "", userID: userId },
    validate,
    createConcertStart
  );

  return (
    <div className="concert-tab">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#concertModal"
      >
        Create Concert
      </button>
      <h3>Concertss</h3>
      <div
        className="modal fade"
        id="concertModal"
        tabIndex="-1"
        aria-labelledby="concertModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
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

export default ConcertsTab;
