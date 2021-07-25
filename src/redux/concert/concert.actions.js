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

export const getUserConcertsStart = (userName) => ({
  type: ConcertActionTypes.GET_USER_CONCERTS_START,
  payload: userName,
});

export const getUserConcertsSuccess = (res) => ({
  type: ConcertActionTypes.GET_USER_CONCERTS_SUCCESS,
  payload: res,
});

export const getUserConcertsFailure = (error) => ({
  type: ConcertActionTypes.GET_USER_CONCERTS_FAILURE,
  payload: error,
});

export const getUserConcertStart = (id) => ({
  type: ConcertActionTypes.GET_USER_CONCERT_START,
  payload: id,
});

export const getUserConcertSuccess = (res) => ({
  type: ConcertActionTypes.GET_USER_CONCERT_SUCCESS,
  payload: res,
});

export const getUserConcertFailure = (error) => ({
  type: ConcertActionTypes.GET_USER_CONCERT_FAILURE,
  payload: error,
});

export const updateUserConcertStart = (formData) => {
  return {
    type: ConcertActionTypes.UPDATE_USER_CONCERT_START,
    payload: formData,
  };
};

export const updateUserConcertSuccess = (updatedConcert) => ({
  type: ConcertActionTypes.UPDATE_USER_CONCERT_SUCCESS,
  payload: updatedConcert,
});

export const updateUserConcertFailure = (error) => ({
  type: ConcertActionTypes.UPDATE_USER_CONCERT_FAILURE,
  payload: error,
});

export const createConcertTicketStart = (formData) => ({
  type: ConcertActionTypes.CREATE_CONCERT_TICKET_START,
  payload: formData,
});

export const createConcertTicketSuccess = (res) => ({
  type: ConcertActionTypes.CREATE_CONCERT_TICKET_SUCCESS,
  payload: res,
});

export const createConcertTicketFailure = (error) => ({
  type: ConcertActionTypes.CREATE_CONCERT_TICKET_FAILURE,
  payload: error,
});

export const deleteConcertTicketStart = (id) => ({
  type: ConcertActionTypes.DELETE_CONCERT_TICKET_START,
  payload: id,
});

export const deleteConcertTicketSuccess = (res) => ({
  type: ConcertActionTypes.DELETE_CONCERT_TICKET_SUCCESS,
  payload: res,
});

export const deleteConcertTicketFailure = (error) => ({
  type: ConcertActionTypes.DELETE_CONCERT_TICKET_FAILURE,
  payload: error,
});

export const listConcertsWithLimitStart = (limit) => ({
  type: ConcertActionTypes.LIST_CONCERTS_WITH_LIMIT_START,
  payload: limit,
});

export const listConcertsWithLimitSuccess = (res) => ({
  type: ConcertActionTypes.LIST_CONCERTS_WITH_LIMIT_SUCCESS,
  payload: res,
});

export const listConcertsWithLimitFailure = (error) => ({
  type: ConcertActionTypes.LIST_CONCERTS_WITH_LIMIT_FAILURE,
  payload: error,
});

export const addBandToConcertStart = (data) => ({
  type: ConcertActionTypes.ADD_BAND_TO_CONCERT_START,
  payload: data,
});

export const addBandToConcertSuccess = (res) => ({
  type: ConcertActionTypes.ADD_BAND_TO_CONCERT_SUCCESS,
  payload: res,
});

export const addBandToConcertFailure = (error) => ({
  type: ConcertActionTypes.ADD_BAND_TO_CONCERT_FAILURE,
  payload: error,
});

export const removeBandFromConcertStart = (id) => ({
  type: ConcertActionTypes.RMOVE_BAND_FROM_CONCERT_START,
  payload: id,
});

export const removeBandFromConcertSuccess = (res) => ({
  type: ConcertActionTypes.RMOVE_BAND_FROM_CONCERT_SUCCESS,
  payload: res,
});

export const removeBandFromConcertFailure = (error) => ({
  type: ConcertActionTypes.RMOVE_BAND_FROM_CONCERT_FAILURE,
  payload: error,
});

export const removeConcertStart = (id) => ({
  type: ConcertActionTypes.REMOVE_CONCERT_START,
  payload: id,
});

export const removeConcertSuccess = (res) => ({
  type: ConcertActionTypes.REMOVE_CONCERT_SUCCESS,
  payload: res,
});

export const removeConcertFailure = (error) => ({
  type: ConcertActionTypes.REMOVE_CONCERT_FAILURE,
  payload: error,
});
