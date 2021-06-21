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

  return (
    <div className="user-concert-invitation">
      <SendInvitation
        authorEmail={userConcert.userName}
        senderTableElementID={userConcert.id}
        senderTableElementName={userConcert.name}
        senderTable="band"
        currentInvitations={userConcert?.invitations || "[]"}
        callback={createConcertInvitationStart}
        validate={validateInvite}
      />
    </div>
  );
};

export default UserConcertInvitation;
