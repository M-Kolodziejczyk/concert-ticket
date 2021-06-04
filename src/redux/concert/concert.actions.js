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
