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

export const acceptBandInvitationStart = (data) => ({
  type: InvitationActionTypes.ACCEPT_BAND_INVITATION_START,
  payload: data,
});

export const acceptBandInvitationSuccess = (res) => ({
  type: InvitationActionTypes.ACCEPT_BAND_INVITATION_SUCCESS,
  payload: res,
});

export const acceptBandInvitationFailure = (error) => ({
  type: InvitationActionTypes.LIST_USER_INVITATIONS_FAILURE,
  payload: error,
});
