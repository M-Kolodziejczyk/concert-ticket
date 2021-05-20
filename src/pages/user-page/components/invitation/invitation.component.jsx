import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { listUserInvitationsStart } from "../../../../redux/invitation/invitation.actions";

import "./invitation.styles.scss";

const Invitation = ({ email }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (email) {
      dispatch(listUserInvitationsStart(email));
    }
  }, [dispatch, email]);

  return (
    <div>
      <h1>Invitation Tab</h1>
    </div>
  );
};

export default Invitation;
