import TicketActionTypes from "./ticket.types";

const INITIAL_STATE = {
  ticket: {},
  tickets: [],
  successMessage: {},
  errrorMessage: {},
};

const ticketReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TicketActionTypes.CREATE_TICKET_SUCCESS:
      return {
        ...state,
        successMessage: {
          createTicket: "Create ticket success",
        },
      };
    case TicketActionTypes.CREATE_TICKET_FAILURE:
      return {
        ...state,
        successMessage: {},
        errrorMessage: {
          createTicket: "Create ticket failure",
        },
      };
    default:
      return state;
  }
};

export default ticketReducer;
