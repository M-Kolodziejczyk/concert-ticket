import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  listUserInvitationsStart,
  acceptBandInvitationStart,
} from "../../../../redux/invitation/invitation.actions";

import "./invitation.styles.scss";

const Invitation = ({ email, artistID }) => {
  const dispatch = useDispatch();
  const bandInvitations = useSelector(
    (state) => state.invitation.bandInvitations
  );

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

  return (
    <div>
      <div className="invitations-band">
        <h4>Band Invittions</h4>
        <div className="band-container">
          {bandInvitations.length > 0 &&
            bandInvitations.map((invitation, id) => (
              <div key={id}>
                <p>Sent By {invitation.authorEmail}</p>
                <p>Band: {invitation.senderTableElementName}</p>
                <p>Message: {invitation.message}</p>
                <button onClick={() => handleAcceptInvitation(invitation)}>
                  Accept
                </button>
                <button>Discard</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Invitation;
