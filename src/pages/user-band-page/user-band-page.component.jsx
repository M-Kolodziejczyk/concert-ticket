import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { format } from "date-fns";
import {
  getBandImageStart,
  createInvitationStart,
  uploadBandImageStart,
  updateUserBandStart,
  getUserBandStart,
} from "../../redux/band/band.actions";

import validateInvite from "../../validators/send-invite";
import validateEditBand from "../../validators/band";
import useFileForm from "../../hooks/useFileForm";
import useForm from "../../hooks/useForm";

import Spinner from "../../components/spinner/spinner.component";
import SendInvitation from "../../components/send-invitation/send-invitation.component";
import CustomInputButton from "../../components/custom-input-button/custom-input-button.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";

import "./user-band-page.styles.scss";

const UserBandPage = ({ match }) => {
  const dispatch = useDispatch();
  const bandId = match.params.id;
  const userBand = useSelector((state) => state.band.userBands[bandId]);
  const bandLoading = useSelector((state) => state.band.loading);
  const userLoading = useSelector((state) => state.user.getUserLoading);
  const bandImageUrl = useSelector((state) => state.band.bandsImage[bandId]);
  const formLoading = useSelector((state) => state.band.formLoading);

  const { handleChangeImage, handleSubmitImage, imageUrl, imageErrors } =
    useFileForm(bandId, ["image/jpeg"], uploadBandImageStart);

  const { handleChange, handleSubmit, values, errors } = useForm(
    { id: bandId, name: "", genre: "" },
    validateEditBand,
    updateUserBandStart
  );

  useEffect(() => {
    if (!userBand) {
      dispatch(getUserBandStart(bandId));
    }
  }, [userBand, dispatch, bandId]);

  useEffect(() => {
    if (userBand && userBand?.keyImage && !bandImageUrl) {
      dispatch(getBandImageStart(userBand.id));
    }
  }, [dispatch, bandImageUrl, userBand]);

  return (
    <div className="user-band-page">
      {(bandLoading || userLoading || formLoading) && <Spinner />}
      {userBand && (
        <div className="container">
          <div className="details">
            <div className="img-container">
              {bandImageUrl && <img src={bandImageUrl} alt="Band" />}
            </div>
            <p>Name: {userBand.name}</p>
            <p>Genre: {userBand.genre}</p>
            <p>Created: {format(new Date(userBand.createdAt), "dd MMM y")} </p>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#bandModal"
            >
              Edit Band
            </button>
          </div>
          <div className="upload-form-container">
            <form className="upload-image" onSubmit={handleSubmitImage}>
              <div className="img-container">
                {imageUrl && <img src={imageUrl} alt="artist img" />}
              </div>
              <div className="button_container">
                <div className="select-image">
                  <CustomInputButton
                    onChange={handleChangeImage}
                    label="Select image"
                    name={bandId}
                    id={bandId}
                  />
                </div>
                <CustomButton type="submit" name="submit">
                  Upload Image
                </CustomButton>
              </div>
              {imageErrors && <div className="imageErrors">{imageErrors}</div>}
            </form>
          </div>
          <div className="members">
            <h4>Band members:</h4>
            {userBand.members.items.length > 0 &&
              userBand.members.items.map((member, i) => (
                <div key={i}>
                  <p>Name: {member.artist.name}</p>
                  <p>Role: {member.artist.role}</p>
                  <p>Genre: {member.artist.genre}</p>
                </div>
              ))}
          </div>
          <div className="invitation-container">
            <h3>Sent Invitations:</h3>
            {userBand?.invitations &&
              JSON.parse(userBand?.invitations).map((invitation, i) => (
                <div key={i}>
                  <div>
                    <p>Email: {invitation.email}</p>
                    <p>Status: {invitation.status}</p>
                  </div>
                </div>
              ))}
            <SendInvitation
              authorEmail={userBand.userName}
              senderTableElementID={userBand.id}
              senderTableElementName={userBand.name}
              senderTable="band"
              currentInvitations={userBand?.invitations || "[]"}
              callback={createInvitationStart}
              validate={validateInvite}
            />
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
      )}
    </div>
  );
};

export default UserBandPage;
