import React from "react";
import { useSelector } from "react-redux";
import { createConcertInvitationStart } from "../../../redux/concert/concert.actions";
import validateInvite from "../../../validators/send-invite";

import Spinner from "../../../components/spinner/spinner.component";
import SendInvitation from "../../../components/send-invitation/send-invitation.component";

import "./user-concert-invitation.styles.scss";

const UserConcertInvitation = ({ concertId }) => {
  const userConcert = useSelector(
    (state) => state.concert.userConcerts[concertId]
  );
  const loadingForm = useSelector((state) => state.concert.loadingForm);
  const successMessage = useSelector(
    (state) => state.concert.successMessage.createInvitation
  );
  const errorMessage = useSelector(
    (state) => state.concert.errorMessage.createInvitation
  );

  return (
    <div className="user-concert-invitation">
      {loadingForm && <Spinner />}
      <div className="form-container">
        <SendInvitation
          authorEmail={userConcert.userName}
          senderTableElementID={userConcert.id}
          senderTableElementName={userConcert.name}
          senderTable="concert"
          currentInvitations={userConcert?.invitations || "[]"}
          callback={createConcertInvitationStart}
          validate={validateInvite}
        />
        <div className="messages">
          {successMessage && <span className="success">{successMessage}</span>}
          {errorMessage && <span className="success">{errorMessage}</span>}
        </div>
      </div>
      <div className="invitations-container">
        <span className="title">Sent invitations:</span>
        {userConcert?.invitations &&
          JSON.parse(userConcert?.invitations).map((invitation, i) => (
            <div className="invitation" key={i}>
              <p className="email">Email: {invitation.email}</p>
              <p className="status">Status: {invitation.status}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserConcertInvitation;
