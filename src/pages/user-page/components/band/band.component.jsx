import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  uploadBandImageStart,
  createInvitationStart,
  getBandImageStart,
} from "../../../../redux/band/band.actions";

import useFileForm from "../../../../hooks/useFileForm";
import validateInvite from "../../../../validators/send-invite";

import CustomInputButton from "../../../../components/custom-input-button/custom-input-button.component";
import CustomButton from "../../../../components/custom-button/custom-button.component";
import SendInvitation from "../../../../components/send-invitation/send-invitation.component";
import "./band.styles.scss";

const Band = ({ band }) => {
  const dispatch = useDispatch();
  const bandsImage = useSelector((state) => state.band.bandsImage);
  const { handleChangeImage, handleSubmitImage, imageUrl, imageErrors } =
    useFileForm(band.id, ["image/jpeg"], uploadBandImageStart);

  useEffect(() => {
    if (!bandsImage[band.id]) {
      dispatch(getBandImageStart(band.id));
      // debugger;
    }

    // eslint-disable-next-line
  }, [dispatch, band.id]);

  return (
    <div className="band">
      <button onClick={() => dispatch(getBandImageStart(band.id))}>GET</button>
      <div className="details">
        <p>Name: {band.name}</p>
        <p>Genre: {band.genre}</p>
        <div className="img-container">
          {bandsImage[band.id] && <img src={bandsImage[band.id]} alt="Band" />}
        </div>
      </div>
      <SendInvitation
        authorEmail={band.userName}
        senderTableElementID={band.id}
        senderTableElementName={band.name}
        senderTable="band"
        currentInvitations={band?.invitations || "[]"}
        callback={createInvitationStart}
        validate={validateInvite}
      />
      <div className="invitation-container">
        <p>Sent Invitations:</p>
        {band?.invitations &&
          JSON.parse(band?.invitations).map((invitation, i) => (
            <div key={i}>
              <div>
                <p>Email: {invitation.email}</p>
                <p>Status: {invitation.status}</p>
              </div>
            </div>
          ))}
      </div>
      <form className="upload-image" onSubmit={handleSubmitImage}>
        <CustomInputButton
          onChange={handleChangeImage}
          label="Select image"
          name={band.id}
          id={band.id}
        />
        {imageUrl && <img src={imageUrl} alt="artist img" />}
        <div className="form__button">
          <CustomButton type="submit" name="submit">
            Upload Image
          </CustomButton>
          {imageErrors && <div className="imageErrors">{imageErrors}</div>}
        </div>
      </form>
    </div>
  );
};

export default Band;
