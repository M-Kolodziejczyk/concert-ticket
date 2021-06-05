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

export const rejectBandInvitationStart = (data) => ({
  type: InvitationActionTypes.REJECT_BAND_INVITATION_START,
  payload: data,
});

export const rejectBandInvitationSuccess = (res) => ({
  type: InvitationActionTypes.REJECT_BAND_INVITATION_SUCCESS,
  payload: res,
});

export const rejectBandInvitationFailure = (error) => ({
  type: InvitationActionTypes.REJECT_BAND_INVITATION_FAILURE,
  payload: error,
});

export const acceptConcertInvitationStart = (data) => ({
  type: InvitationActionTypes.ACCEPT_CONCERT_INVITATION_START,
  payload: data,
});

export const acceptConcertInvitationSuccess = (res) => ({
  type: InvitationActionTypes.ACCEPT_CONCERT_INVITATION_SUCCESS,
  payload: res,
});

export const acceptConcertInvitationFailure = (error) => ({
  type: InvitationActionTypes.ACCEPT_CONCERT_INVITATION_FAILURE,
  payload: error,
});
