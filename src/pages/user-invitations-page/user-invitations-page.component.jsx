import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listUserInvitationsStart,
  acceptBandInvitationStart,
  rejectBandInvitationStart,
  acceptConcertInvitationStart,
  rejectConcertInvitationStart,
} from "../../redux/invitation/invitation.actions";
import { getUserBandsStart } from "../../redux/band/band.actions";

import Spinner from "../../components/spinner/spinner.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./user-invitations-page.styles.scss";

const UserInvitationsPage = () => {
  const dispatch = useDispatch();
  const [formBandId, setFormBandId] = useState("");
  const [formBandError, setFormBandError] = useState("");
  const userEmail = useSelector((state) => state.user.currentUser.email);
  const artistID = useSelector((state) => state.user.user.artistID);
  const userListBands = useSelector((state) => state.band.userListBands);
  const isUserBandsEmpty = useSelector((state) => state.band.isUserBandsEmpty);
  const successMessage = useSelector(
    (state) => state.invitation.successMessage
  );
  const errorMessage = useSelector((state) => state.invitation.errorMessage);

  const bandInvitations = useSelector(
    (state) => state.invitation.bandInvitations
  );
  const concertInvitations = useSelector(
    (state) => state.invitation.concertInvitations
  );
  const loadingInvitations = useSelector(
    (state) => state.invitation.loadingInvitations
  );
  const loadingFormInvitations = useSelector(
    (state) => state.invitation.loadingFormInvitations
  );
  const isListInvitationComplete = useSelector(
    (state) => state.invitation.isListInvitationComplete
  );

  useEffect(() => {
    if (userEmail && !isListInvitationComplete) {
      dispatch(listUserInvitationsStart(userEmail));
    }
  }, [dispatch, userEmail, isListInvitationComplete]);

  useEffect(() => {
    if (userEmail && userListBands.length === 0 && !isUserBandsEmpty) {
      dispatch(getUserBandsStart(userEmail));
    }
  }, [userEmail, userListBands, dispatch, isUserBandsEmpty]);

  const acceptBandInvitation = (invitation) => {
    dispatch(
      acceptBandInvitationStart({
        artistID,
        bandID: invitation.senderTableElementID,
        invitationEmail: invitation.email,
        invitationCreatedAt: invitation.createdAt,
      })
    );
  };

  const rejectBandInvitation = (invitation) => {
    dispatch(
      rejectBandInvitationStart({
        bandID: invitation.senderTableElementID,
        invitationEmail: invitation.email,
        invitationCreatedAt: invitation.createdAt,
      })
    );
  };

  const handleChangeConcertInvitation = (e) => {
    setFormBandId(e.target.value);
    if (e.target.value !== "selected") {
      setFormBandError("");
    }
  };

  const handleAcceptConcertInvitation = (e, invitation) => {
    e.preventDefault();
    if (!formBandId || formBandId === "selected") {
      setFormBandError("You need to choose band!");
    } else {
      dispatch(
        acceptConcertInvitationStart({
          concertID: invitation.senderTableElementID,
          bandID: formBandId,
          invitationEmail: invitation.email,
          invitationCreatedAt: invitation.createdAt,
        })
      );
    }
  };

  const handleRejectConcertInvitation = (invitation) => {
    dispatch(
      rejectConcertInvitationStart({
        concertID: invitation.senderTableElementID,
        invitationEmail: invitation.email,
        invitationCreatedAt: invitation.createdAt,
      })
    );
  };

  return (
    <div className="user-invitations-page">
      {(loadingInvitations || loadingFormInvitations) && <Spinner />}
      <div className="band-invitations">
        <span className="title">Band invitations:</span>
        {bandInvitations.length > 0 &&
          bandInvitations.map((invitation, id) => (
            <div key={id} className="band">
              <div className="band-container">
                <div className="details">
                  <p className="author">
                    <strong>Sent by: </strong>
                    {invitation.authorEmail}
                  </p>
                  <p className="band-author">
                    <strong>Band: </strong>
                    {invitation.senderTableElementName}
                  </p>
                  <p className="message">
                    <strong>Message: </strong>
                    {invitation.message}
                  </p>
                </div>
                <div className="buttons">
                  <div className="accept">
                    <CustomButton
                      onClick={() => acceptBandInvitation(invitation)}
                    >
                      Accept
                    </CustomButton>
                  </div>
                  <div className="reject">
                    <CustomButton
                      onClick={() => rejectBandInvitation(invitation)}
                    >
                      Reject
                    </CustomButton>
                  </div>
                </div>
              </div>
              <div className="messages">
                {successMessage.bandInvitation && (
                  <p className="success">{successMessage.bandInvitation}</p>
                )}
                {errorMessage.bandInvitation && (
                  <p className="error">{errorMessage.bandInvitation}</p>
                )}
              </div>
            </div>
          ))}
      </div>
      <div className="concert-invitations">
        <p className="title">Concert invitations:</p>
        {concertInvitations.length > 0 &&
          concertInvitations.map((concertInvitation, id) => (
            <div className="concert" key={id}>
              <div className="concert-container">
                <div className="details">
                  <p className="author">
                    <strong>Sent By: </strong>
                    {concertInvitation.authorEmail}
                  </p>
                  <p className="concert-name">
                    <strong>Concert: </strong>
                    {concertInvitation.senderTableElementName}
                  </p>
                  <p className="message">
                    <strong>Message: </strong>
                    amet consectetur adipisicing elit. Id architecto dolor
                    minima inventore eveniet sed fuga pariatur praesentium velit
                    quisquam et recusandae suscipit laborum perferendis
                    voluptate, cupiditate illum ipsum fugit.
                    {concertInvitation.message}
                  </p>
                </div>
                <div className="form">
                  <form
                    onSubmit={(e) =>
                      handleAcceptConcertInvitation(e, concertInvitation)
                    }
                  >
                    <select
                      className="form-select"
                      aria-label="Default select band"
                      value={formBandId}
                      onChange={handleChangeConcertInvitation}
                    >
                      <option value="selected">Select band</option>
                      {userListBands.length > 0 &&
                        userListBands.map((band) => (
                          <option key={band.id} value={band.id}>
                            {band.name}
                          </option>
                        ))}
                    </select>
                    <div className="btn-container">
                      <div className="accept">
                        <CustomButton type="submit">Accept</CustomButton>
                      </div>
                      <div className="reject">
                        <CustomButton
                          onClick={() =>
                            handleRejectConcertInvitation(concertInvitation)
                          }
                        >
                          Reject
                        </CustomButton>
                      </div>
                    </div>
                    {formBandError && (
                      <p className="form-error">{formBandError}</p>
                    )}
                  </form>
                </div>
              </div>
              <div className="messages">
                {successMessage.concertInvitation && (
                  <p className="success">{successMessage.concertInvitation}</p>
                )}
                {errorMessage.concertInvitation && (
                  <p className="error">{errorMessage.concertInvitation}</p>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserInvitationsPage;
