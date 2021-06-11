import TicketActionTypes from "./ticket.types";

export const createTicketStart = (data) => ({
  type: TicketActionTypes.CREATE_TICKET_START,
  payload: data,
});

export const createTicketSuccess = (res) => ({
  type: TicketActionTypes.CREATE_TICKET_SUCCESS,
  payload: res,
});
export const createTicketFailure = (error) => ({
  type: TicketActionTypes.CREATE_TICKET_FAILURE,
  payload: error,
});

export const getTicketsByConcertIdStart = (concertID) => ({
  type: TicketActionTypes.GET_TICKETS_BY_CONCERTID_START,
  payload: concertID,
});

export const getTicketsByConcertIdSuccess = (res) => ({
  type: TicketActionTypes.GET_TICKETS_BY_CONCERTID_SUCCESS,
  payload: res,
});

export const getTicketsByConcertIdFailure = (error) => ({
  type: TicketActionTypes.GET_TICKETS_BY_CONCERTID_FAILURE,
  payload: error,
});
