import React from "react";
import {
  createBandStart,
  createInvitationStart,
} from "../../../../redux/band/band.actions";
import validate from "../../../../validators/band";
import validateInvite from "../../../../validators/send-invite";
import useForm from "../../../../hooks/useForm.js";

import CustomButton from "../../../../components/custom-button/custom-button.component";
import FormInput from "../../../../components/form-input/form-input.component";
import SendInvitation from "../../../../components/send-invitation/send-invitation.component";
// import ErrorMessage from "../../../../components/error-message/error-message.component";

import "./band.styles.scss";

const Band = ({ userId, bands }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    { name: "", genre: "", userID: userId },
    validate,
    createBandStart
  );

  console.log(bands);

  return (
    <div className="band">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Create Band
      </button>

      <div className="band-container">
        <h2>Bands Created By you</h2>
        <div className="band-createdBands">
          {bands &&
            bands.items.map((band) => (
              <div key={band.id}>
                <p>{band.name}</p>
                <p>{band.genre}</p>

                <SendInvitation
                  authorEmail={band.userName}
                  senderTableElementID={band.id}
                  senderTableElementName={band.name}
                  senderTable="band"
                  currentInvitations={band.invitations || []}
                  callback={createInvitationStart}
                  validate={validateInvite}
                />
                {band?.invitations &&
                  band.invitations.map((invitation, i) => (
                    <div key={i}>
                      <div>
                        <p>Email: {JSON.parse(invitation).email}</p>
                        <p>Status: {JSON.parse(invitation).status}</p>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
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

export default Band;
