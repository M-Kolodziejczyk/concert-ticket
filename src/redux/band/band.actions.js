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

export const getUserBandsStart = (userName) => ({
  type: BandActionTypes.GET_USER_BANDS_START,
  payload: userName,
});

export const getUserBandsSuccess = (res) => ({
  type: BandActionTypes.GET_USER_BANDS_SUCCESS,
  payload: res,
});

export const getUserBandsFailure = (error) => ({
  type: BandActionTypes.GET_USER_BANDS_FAILURE,
  payload: error,
});

export const updateUserBandStart = (data) => ({
  type: BandActionTypes.UPDATE_USER_BAND_START,
  payload: data,
});

export const updateUserBandSuccess = (res) => ({
  type: BandActionTypes.UPDATE_USER_BAND_SUCCESS,
  payload: res,
});

export const updateUserBandFailure = (error) => ({
  type: BandActionTypes.UPDATE_USER_BAND_FAILURE,
  payload: error,
});

export const getUserBandStart = (id) => ({
  type: BandActionTypes.GET_USER_BAND_START,
  payload: id,
});

export const getUserBandSuccess = (res) => ({
  type: BandActionTypes.GET_USER_BAND_SUCCESS,
  payload: res,
});

export const getuserBandFailure = (error) => ({
  type: BandActionTypes.GET_USER_BAND_FAILURE,
  payload: error,
});

export const addArtistToBandStart = (data) => ({
  type: BandActionTypes.ADD_ARTIST_TO_BAND_START,
  payload: data,
});

export const addArtistToBandSuccess = (res) => ({
  type: BandActionTypes.ADD_ARTIST_TO_BAND_SUCCESS,
  payload: res,
});

export const addArtistToBandFailure = (error) => ({
  type: BandActionTypes.ADD_ARTIST_TO_BAND_FAILURE,
  payload: error,
});

export const removeArtistFromBandStart = (id) => ({
  type: BandActionTypes.REMOVE_ARTIST_FROM_BAND_START,
  payload: id,
});

export const removeArtistFromBandSuccess = (res) => ({
  type: BandActionTypes.REMOVE_ARTIST_FROM_BAND_SUCCESS,
  payload: res,
});

export const removeArtistFromBandFailure = (error) => ({
  type: BandActionTypes.REMOVE_ARTIST_FROM_BAND_FAILURE,
  payload: error,
});

export const removeBandStart = (id) => ({
  type: BandActionTypes.REMOVE_BAND_START,
  payload: id,
});

export const removeBandSuccess = (res) => ({
  type: BandActionTypes.REMOVE_BAND_SUCCESS,
  payload: res,
});

export const removeBandFailure = (error) => ({
  type: BandActionTypes.REMOVE_BAND_FAILURE,
  payload: error,
});
