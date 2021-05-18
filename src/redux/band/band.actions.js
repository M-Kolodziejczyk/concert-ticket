import BandActionTypes from "./band.types";

export const createBandStart = (band) => ({
  type: BandActionTypes.CREATE_BAND_START,
  payload: band,
});

export const createBandSuccess = (band) => ({
  type: BandActionTypes.CREATE_BAND_SUCCESS,
  payload: band,
});

export const createBandFailure = (error) => ({
  type: BandActionTypes.CREATE_BAND_FAILURE,
  payload: error,
});

export const createInvitationStart = (data) => ({
  type: BandActionTypes.CREATE_INVITATION_START,
  payload: data,
});

export const createInvitationSuccess = (data) => ({
  type: BandActionTypes.CREATE_INVITATION_SUCCESS,
  payload: data,
});

export const createInvitationFailure = (error) => ({
  type: BandActionTypes.CREATE_INVITATION_FAILURE,
  payload: error,
});
