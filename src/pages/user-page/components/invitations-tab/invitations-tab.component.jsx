import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  listUserInvitationsStart,
  acceptBandInvitationStart,
  rejectBandInvitationStart,
  acceptConcertInvitationStart,
  rejectConcertInvitationStart,
} from "../../../../redux/invitation/invitation.actions";

import "./invitations-tab.styles.scss";

const Invitation = ({ email, artistID, bands }) => {
  const dispatch = useDispatch();
  const [band, setBand] = useState(""); // value in concert invitations form
  const [errors, setErrors] = useState("");
  const invitation = useSelector((state) => state.invitation);

  useEffect(() => {
    if (email) {
      dispatch(listUserInvitationsStart(email));
    }
  }, [dispatch, email]);

  const handleAcceptInvitation = (invitation) => {
    dispatch(
      acceptBandInvitationStart({
        artistID,
        bandID: invitation.senderTableElementID,
        invitationEmail: invitation.email,
        invitationCreatedAt: invitation.createdAt,
      })
    );
  };

  const handleRejectInvitation = (invitation) => {
    dispatch(
      rejectBandInvitationStart({
        bandID: invitation.senderTableElementID,
        invitationEmail: invitation.email,
        invitationCreatedAt: invitation.createdAt,
      })
    );
  };

  const handleChangeConcertInvitation = (e) => {
    setBand(e.target.value);
    if (e.target.value !== "selected") {
      setErrors("");
    }
  };

  const handleAcceptConcertInvitation = (e, invitation) => {
    e.preventDefault();
    if (!band || band === "selected") {
      setErrors("You need to choose band!");
    } else {
      dispatch(
        acceptConcertInvitationStart({
          concertID: invitation.senderTableElementID,
          bandID: band,
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
    <div className="invitations-tab">
      <div className="invitations-band">
        <h4>Band Invittions</h4>
        <div className="band-container">
          {invitation.bandInvitations.length > 0 &&
            invitation.bandInvitations.map((invitation, id) => (
              <div key={id}>
                <p>Sent By {invitation.authorEmail}</p>
                <p>Band: {invitation.senderTableElementName}</p>
                <p>Message: {invitation.message}</p>
                <button onClick={() => handleAcceptInvitation(invitation)}>
                  Accept
                </button>
                <button onClick={() => handleRejectInvitation(invitation)}>
                  Discard
                </button>
              </div>
            ))}
        </div>
      </div>
      <div className="invitations-concert">
        <h4>Concert Invitations</h4>
        <div className="concert-container">
          {invitation.concertInvitations.length > 0 &&
            invitation.concertInvitations.map((invitation, id) => (
              <div key={id}>
                <p>Sent By {invitation.authorEmail}</p>
                <p>Concert: {invitation.senderTableElementName}</p>
                <p>Message: {invitation.message}</p>
                <form
                  onSubmit={(e) => handleAcceptConcertInvitation(e, invitation)}
                >
                  <select
                    className="form-select"
                    aria-label="Default select band"
                    value={band}
                    onChange={handleChangeConcertInvitation}
                  >
                    <option value="selected">Select band</option>
                    {bands?.items &&
                      bands.items.map((band) => (
                        <option key={band.id} value={band.id}>
                          {band.name}
                        </option>
                      ))}
                  </select>
                  <button type="submit">Accept</button>
                  {errors && <p>{errors}</p>}
                </form>

                <button
                  onClick={() => handleRejectConcertInvitation(invitation)}
                >
                  Discard
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Invitation;
