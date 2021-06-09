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

export const createInvitationStart = (values, invitations) => ({
  type: BandActionTypes.CREATE_INVITATION_START,
  payload: { values, invitations },
});

export const createInvitationSuccess = (data) => ({
  type: BandActionTypes.CREATE_INVITATION_SUCCESS,
  payload: data,
});

export const createInvitationFailure = (error) => ({
  type: BandActionTypes.CREATE_INVITATION_FAILURE,
  payload: error,
});

export const uploadBandImageStart = (id, image) => ({
  type: BandActionTypes.UPLOAD_BAND_IMAGE_START,
  payload: { id, image },
});

export const uploadBandImageSuccess = (res) => ({
  type: BandActionTypes.UPLOAD_BAND_IMAGE_SUCCESS,
  payload: res,
});

export const uploadBandImageFailure = (error) => ({
  type: BandActionTypes.UPLOAD_BAND_IMAGE_FAILURE,
  payload: error,
});

export const getBandImageStart = (id) => ({
  type: BandActionTypes.GET_BAND_IMAGE_START,
  payload: id,
});

export const getBandImageSuccess = (url) => ({
  type: BandActionTypes.GET_BAND_IMAGE_SUCCESS,
  payload: url,
});

export const getBandImageFailure = (error) => ({
  type: BandActionTypes.GET_BAND_IMAGE_FAILURE,
  payload: error,
});

export const listBandsStart = () => ({
  type: BandActionTypes.LIST_BANDS_START,
});

export const listBandsSuccess = (res) => ({
  type: BandActionTypes.LIST_BANDS_SUCCESS,
  payload: res,
});

export const listBandsFailure = (error) => ({
  type: BandActionTypes.LIST_BANDS_FAILURE,
  payload: error,
});

export const updateBand = (band) => ({
  type: BandActionTypes.UPDATE_BAND,
  payload: band,
});

export const getBandStart = (id) => ({
  type: BandActionTypes.GET_BAND_START,
  payload: id,
});

export const getBandSuccess = (res) => ({
  type: BandActionTypes.GET_BAND_SUCCESS,
  payload: res,
});

export const getBandFailure = (error) => ({
  type: BandActionTypes.GET_BAND_FAILURE,
  payload: error,
});
