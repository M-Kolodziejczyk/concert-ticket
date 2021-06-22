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

import "./user-invitations-page.styles.scss";

const UserInvitationsPage = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.user.currentUser.email);
  const artistId = useSelector((state) => state.user.artistID);
  const userBands = useSelector((state) => state.band.userBands);
  const isUserBandsEmpty = useSelector((state) => state.band.isUserBandsEmpty);
  const [formBandId, setFormBandId] = useState("");
  const [formBandError, setFormBandError] = useState("");

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
    if (userEmail && Object.keys(userBands).length === 0 && !isUserBandsEmpty) {
      dispatch(getUserBandsStart(userEmail));
    }
  }, [userEmail, userBands, dispatch, isUserBandsEmpty]);

  const acceptBandInvitation = (invitation) => {
    dispatch(
      acceptBandInvitationStart({
        artistId,
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
              <div className="details">
                <span className="author">
                  Sent by: {invitation.authorEmail}
                </span>
                <span className="band">
                  Band: {invitation.senderTableElementName}
                </span>
              </div>
              <span className="message">Message: {invitation.message}</span>
              <div className="buttons">
                <button onClick={() => acceptBandInvitation(invitation)}>
                  Accept
                </button>
                <button onClick={() => rejectBandInvitation(invitation)}>
                  Discard
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="concert-invitations">
        <span className="title">Concert invitations:</span>
        {concertInvitations.length > 0 &&
          concertInvitations.map((concertInvitation, id) => (
            <div className="concert" key={id}>
              <div className="details">
                <span className="author">
                  Sent By: {concertInvitation.authorEmail}
                </span>
                <span className="concert">
                  Concert: {concertInvitation.senderTableElementName}
                </span>
              </div>
              <span className="message">
                Message: {concertInvitation.message}
              </span>
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
                    {userBands &&
                      Object.keys(userBands).map((id) => (
                        <option key={userBands[id].id} value={userBands[id].id}>
                          {userBands[id].name}
                        </option>
                      ))}
                  </select>
                  <button type="submit">Accept</button>
                  {formBandError && <p>{formBandError}</p>}
                </form>
                <button
                  onClick={() =>
                    handleRejectConcertInvitation(concertInvitation)
                  }
                >
                  Discard
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserInvitationsPage;
