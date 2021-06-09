import ConcertActionTypes from "./concert.types";

export const createConcertStart = (data) => ({
  type: ConcertActionTypes.CREATE_CONCERT_START,
  payload: data,
});

export const createConcertSuccess = (res) => ({
  type: ConcertActionTypes.CREATE_CONCERT_SUCCESS,
  payload: res,
});

export const createConcertFailure = (error) => ({
  type: ConcertActionTypes.CREATE_CONCERT_FAILURE,
  payload: error,
});

export const uploadConcertImageStart = (id, image) => ({
  type: ConcertActionTypes.UPLOAD_CONCERT_IMAGE_START,
  payload: { id, image },
});

export const uploadConcertImageSuccess = (res) => ({
  type: ConcertActionTypes.UPLOAD_CONCERT_IMAGE_SUCCESS,
  payload: res,
});

export const uploadConcertImageFailure = (error) => ({
  type: ConcertActionTypes.UPLOAD_CONCERT_IMAGE_FAILURE,
  payload: error,
});

export const getConcertImageStart = (id) => ({
  type: ConcertActionTypes.GET_CONCERT_IMAGE_START,
  payload: id,
});

export const getConcertImageSuccess = (res) => ({
  type: ConcertActionTypes.GET_CONCERT_IMAGE_SUCCESS,
  payload: res,
});

export const getConcertImageFailure = (error) => ({
  type: ConcertActionTypes.GET_CONCERT_IMAGE_FAILURE,
  payload: error,
});

export const createConcertInvitationStart = (values, invitations) => ({
  type: ConcertActionTypes.CREATE_CONCERT_INVITATION_START,
  payload: { values, invitations },
});

export const createConcertInvitationSuccess = (res) => ({
  type: ConcertActionTypes.CREATE_CONCERT_INVITATION_SUCCESS,
  payload: res,
});

export const createConcertInvitationFailure = (error) => ({
  type: ConcertActionTypes.CREATE_CONCERT_INVITATION_FAILURE,
  payload: error,
});

export const listConcertsStart = () => ({
  type: ConcertActionTypes.LIST_CONCERTS_START,
});

export const listConcertsSuccess = (res) => ({
  type: ConcertActionTypes.LIST_CONCERTS_SUCCESS,
  payload: res,
});

export const listConcertsFailure = (error) => ({
  type: ConcertActionTypes.LIST_CONCERTS_FAILURE,
  payload: error,
});

export const getConcertStart = (id) => ({
  type: ConcertActionTypes.GET_CONCERT_START,
  payload: id,
});

export const getConcertSuccess = (res) => ({
  type: ConcertActionTypes.GET_CONCERT_SUCCESS,
  payload: res,
});

export const getConcertFailure = (error) => ({
  type: ConcertActionTypes.GET_CONCERT_FAILURE,
  payload: error,
});

export const updateConcert = (concert) => ({
  type: ConcertActionTypes.UPDATE_CONCERT,
  payload: concert,
});
