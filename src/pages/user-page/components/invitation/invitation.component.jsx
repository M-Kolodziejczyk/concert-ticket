import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { listUserInvitationsStart } from "../../../../redux/invitation/invitation.actions";

import "./invitation.styles.scss";

const Invitation = ({ email }) => {
  const bandInvitations = useSelector(
    (state) => state.invitation.bandInvitations
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (email) {
      dispatch(listUserInvitationsStart(email));
    }
  }, [dispatch, email]);

  return (
    <div>
      <div className="invitations-band">
        <h4>Band Invittions</h4>
        <div className="band-container">
          {bandInvitations.length > 0 &&
            bandInvitations.map((band, id) => (
              <div key={id}>
                <p>Sent By {band.authorEmail}</p>
                <p></p>
                <p>Message: {band.message}</p>
                <button>Accept</button>
                <button>Discard</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Invitation;
