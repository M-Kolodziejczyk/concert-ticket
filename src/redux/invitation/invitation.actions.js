import InvitationActionTypes from "./invitation.type";

export const listUserInvitationsStart = (email) => ({
  type: InvitationActionTypes.LIST_USER_INVITATIONS_START,
  payload: email,
});

export const listUserInvitationsSuccess = (res) => ({
  type: InvitationActionTypes.LIST_USER_INVITATIONS_SUCCESS,
  payload: res,
});

export const listUserInvitationsFailure = (error) => ({
  type: InvitationActionTypes.LIST_USER_INVITATIONS_FAILURE,
  payload: error,
});
