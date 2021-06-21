import TicketActionTypes from "./ticket.types";

const INITIAL_STATE = {
  tickets: [],
  concertTickets: {},
  successMessage: {},
  errorMessage: {},
  formLoading: false,
};

const ticketReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TicketActionTypes.CREATE_TICKET_START:
      return {
        ...state,
        formLoading: true,
      };
    case TicketActionTypes.CREATE_TICKET_SUCCESS:
      console.log("reduce", action.payload);
      return {
        ...state,
        formLoading: false,
        successMessage: {
          createTicket: "Create ticket success",
        },
        errorMessage: {},
        concertTickets: {
          ...state.concertTickets,
          [action.payload.concertID]: [
            ...state.concertTickets[action.payload.concertID],
            action.payload,
          ],
        },
      };
    case TicketActionTypes.CREATE_TICKET_FAILURE:
      return {
        ...state,
        formLoading: false,
        successMessage: {},
        errorMessage: {
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
