import React from "react";
import { createBandStart } from "../../../../redux/band/band.actions";
import validate from "../../../../validators/band";

import useForm from "../../../../hooks/useForm.js";

import CustomButton from "../../../../components/custom-button/custom-button.component";
import FormInput from "../../../../components/form-input/form-input.component";
// import ErrorMessage from "../../../../components/error-message/error-message.component";

import Band from "../band/band.component";

import "./bands-tab.styles.scss";

const BandsTab = ({ userId, bands }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    { name: "", genre: "", userID: userId },
    validate,
    createBandStart
  );

  return (
    <div className="band-tab">
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
            bands.items.map((band) => (
              <Band band={band} id={band.id} key={band.id} />
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
                Create Band{" "}
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

export default BandsTab;