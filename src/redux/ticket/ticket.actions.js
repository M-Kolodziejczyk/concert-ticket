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
