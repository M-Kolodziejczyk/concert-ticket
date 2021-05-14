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
