import TicketActionTypes from "./ticket.types";

const INITIAL_STATE = {
  tickets: [],
  concertTickets: {},
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
    case TicketActionTypes.GET_TICKETS_BY_CONCERTID_SUCCESS:
      return {
        ...state,
        concertTickets: {
          ...state.concertTickets,
          [action.payload.concertID]: action.payload.tickets,
        },
        successMessage: {
          getTicketsByConcertId: "GET tickets success",
        },
        errrorMessage: {},
      };
    case TicketActionTypes.GET_TICKETS_BY_CONCERTID_FAILURE:
      return {
        ...state,
        successMessage: {},
        errrorMessage: {
          getTicketsByConcertId: "GET tickets failure",
        },
      };

    default:
      return state;
  }
};

export default ticketReducer;
