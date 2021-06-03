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
