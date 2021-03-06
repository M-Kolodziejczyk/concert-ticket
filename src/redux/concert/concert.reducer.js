import ConcertActionTypes from "./concert.types";

const INITIAL_STATE = {
  listConcerts: [],
  listConcertsLimit: [],
  concerts: {},
  concert: {},
  concertsImage: {},
  successMessage: {},
  errorMessage: {},
  userConcerts: {},
  userListConcerts: [],
  isUserConcertsEmpty: false,
  loading: false,
  loadingImg: false,
  loadingForm: false,
  isFormSuccess: false,
};

const concertReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ConcertActionTypes.CREATE_CONCERT_START:
      return {
        ...state,
        loadingForm: true,
      };
    case ConcertActionTypes.CREATE_CONCERT_SUCCESS:
      return {
        ...state,
        loadingForm: false,
        userListConcerts: [...state.userListConcerts, action.payload],
        successMessage: {
          createConcert: "Concert created successfully",
        },
        errorMessage: {},
      };
    case ConcertActionTypes.CREATE_CONCERT_FAILURE:
      return {
        ...state,
        loadingForm: false,
        successMessage: {},
        errorMessage: {
          createConcert: "Create concert failure",
        },
      };
    case ConcertActionTypes.UPLOAD_CONCERT_IMAGE_START:
      return {
        ...state,
        loadingForm: true,
      };
    case ConcertActionTypes.UPLOAD_CONCERT_IMAGE_SUCCESS:
      return {
        ...state,
        loadingForm: false,
        concertsImage: {
          ...state.concertsImage,
          [action.payload.id]: action.payload.url,
        },
        successMessage: {
          uploadImage: "Upload image success",
        },
        errorMessage: {},
      };
    case ConcertActionTypes.UPLOAD_CONCERT_IMAGE_FAILURE:
      return {
        ...state,
        loadingForm: false,
        successMessage: {},
        errorMessage: {
          uploadImage: "Upload image failure",
        },
      };
    case ConcertActionTypes.GET_CONCERT_IMAGE_START:
      return {
        ...state,
        loadingImg: true,
      };
    case ConcertActionTypes.GET_CONCERT_IMAGE_SUCCESS:
      return {
        ...state,
        loadingImg: false,
        concertsImage: {
          ...state.concertsImage,
          [action.payload.id]: action.payload.url,
        },
        errorMessage: {},
      };
    case ConcertActionTypes.GET_CONCERT_IMAGE_FAILURE:
      return {
        ...state,
        loadingImg: false,
        errorMessage: {
          getConcertImage: "Get concert image failure",
        },
      };
    case ConcertActionTypes.CREATE_CONCERT_INVITATION_START:
      return {
        ...state,
        loadingForm: true,
      };
    case ConcertActionTypes.CREATE_CONCERT_INVITATION_SUCCESS:
      return {
        ...state,
        loadingForm: false,
        userConcerts: {
          ...state.userConcerts,
          [action.payload.id]: action.payload,
        },
        successMessage: {
          createInvitation: "Invitation sent successfully",
        },
        errorMessage: {},
      };
    case ConcertActionTypes.CREATE_CONCERT_INVITATION_FAILURE:
      return {
        ...state,
        loadingForm: false,
        successMessage: {},
        errorMessage: {
          createInvitation: "Failed to sent invitation",
        },
      };
    case ConcertActionTypes.LIST_CONCERTS_START:
      return {
        ...state,
        loading: true,
      };
    case ConcertActionTypes.LIST_CONCERTS_SUCCESS:
      return {
        ...state,
        loading: false,
        listConcerts: action.payload,
        successMessage: { listConcerts: "List concerts success" },
        errorMessage: {},
      };
    case ConcertActionTypes.LIST_CONCERTS_FAILURE:
      return {
        ...state,
        loading: false,
        listConcerts: null,
        successMessage: {},
        errorMessage: {
          listConcerts: "List concerts failure",
        },
      };
    case ConcertActionTypes.GET_CONCERT_START:
      return {
        ...state,
        loading: true,
      };
    case ConcertActionTypes.GET_CONCERT_SUCCESS:
      return {
        ...state,
        loading: false,
        concerts: {
          ...state.concerts,
          [action.payload.id]: action.payload,
        },
        successMessage: { getConcert: "Get concert success" },
        errorMessage: {},
      };
    case ConcertActionTypes.GET_CONCERT_FAILURE:
      return {
        ...state,
        loading: false,
        concerts: {
          [action.payload.id]: null,
        },
        successMessage: {},
        errorMessage: {
          listConcerts: "Get concert failure",
        },
      };
    case ConcertActionTypes.UPDATE_CONCERT:
      return {
        ...state,
        concert: action.payload,
      };
    case ConcertActionTypes.GET_USER_CONCERTS_START:
      return {
        ...state,
        loading: true,
      };
    case ConcertActionTypes.GET_USER_CONCERTS_SUCCESS:
      return {
        ...state,
        loading: false,
        userListConcerts: action.payload,
        isUserConcertsEmpty: action.payload.length === 0 ? true : false,
      };
    case ConcertActionTypes.GET_USER_CONCERTS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case ConcertActionTypes.GET_USER_CONCERT_START:
      return {
        ...state,
        loading: true,
      };
    case ConcertActionTypes.GET_USER_CONCERT_SUCCESS:
      return {
        ...state,
        loading: false,
        userConcerts: {
          ...state.userConcerts,
          [action.payload.id]: action.payload,
        },
      };
    case ConcertActionTypes.GET_USER_CONCERT_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case ConcertActionTypes.UPDATE_USER_CONCERT_START:
      return {
        ...state,
        loadingForm: true,
        isFormSuccess: false,
        successMessage: {},
      };
    case ConcertActionTypes.UPDATE_USER_CONCERT_SUCCESS:
      return {
        ...state,
        loadingForm: false,
        isFormSuccess: true,
        userConcerts: {
          ...state.userConcerts,
          [action.payload.id]: action.payload,
        },
        successMessage: {
          updateConcert: "Concert updated successfully",
        },
        errorMessage: {},
      };
    case ConcertActionTypes.UPDATE_USER_CONCERT_FAILURE:
      return {
        ...state,
        loadingForm: false,
        isFormSuccess: false,
        successMessage: {},
        errorMessage: {
          updateConcert: "Concert updated failure",
        },
      };
    case ConcertActionTypes.CREATE_CONCERT_TICKET_START:
      return {
        ...state,
        loadingForm: true,
      };
    case ConcertActionTypes.CREATE_CONCERT_TICKET_SUCCESS:
      return {
        ...state,
        loadingForm: false,
        userConcerts: {
          ...state.userConcerts,
          [action.payload.concertID]: {
            ...state.userConcerts[action.payload.concertID],
            tickets: {
              items: [
                ...state.userConcerts[action.payload.concertID].tickets.items,
                action.payload,
              ],
            },
          },
        },
        successMessage: {
          createTicket: "Ticket created successfully",
        },
        errorMessage: {},
      };
    case ConcertActionTypes.CREATE_CONCERT_TICKET_FAILURE:
      return {
        ...state,
        loadingForm: false,
        successMessage: {},
        errorMessage: {
          createTicket: "ticket create failure",
        },
      };
    case ConcertActionTypes.DELETE_CONCERT_TICKET_START:
      return {
        ...state,
        loadingForm: true,
      };
    case ConcertActionTypes.DELETE_CONCERT_TICKET_SUCCESS:
      const updatedTickets = state.userConcerts[
        action.payload.concertID
      ].tickets.items.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        loadingForm: false,
        userConcerts: {
          ...state.userConcerts,
          [action.payload.concertID]: {
            ...state.userConcerts[action.payload.concertID],
            tickets: {
              items: updatedTickets,
            },
          },
        },
        successMessage: {
          deleteTicket: "Ticket has been deleted successfully",
        },
        errorMessage: {},
      };
    case ConcertActionTypes.DELETE_CONCERT_TICKET_FAILURE:
      return {
        ...state,
        loadingForm: false,
        successMessage: {},
        errorMessage: {
          deleteTicket: "ticket delete failure",
        },
      };
    case ConcertActionTypes.LIST_CONCERTS_WITH_LIMIT_START:
      return {
        ...state,
        loading: true,
      };
    case ConcertActionTypes.LIST_CONCERTS_WITH_LIMIT_SUCCESS:
      return {
        ...state,
        loading: false,
        listConcertsLimit: action.payload,
        successMessage: { listConcertsLimit: "List concerts success" },
        errorMessage: {},
      };
    case ConcertActionTypes.LIST_CONCERTS_WITH_LIMIT_FAILURE:
      return {
        ...state,
        loading: false,
        listConcertsLimit: null,
        successMessage: {},
        errorMessage: {
          listConcertsLimit: "List concerts failure",
        },
      };
    case ConcertActionTypes.ADD_BAND_TO_CONCERT_START:
      return {
        ...state,
        loadingForm: true,
      };
    case ConcertActionTypes.ADD_BAND_TO_CONCERT_SUCCESS:
      return {
        ...state,
        loadingForm: false,
        userConcerts: {
          ...state.userConcerts,
          [action.payload.concertID]: {
            ...state.userConcerts[action.payload.concertID],
            bands: {
              items: [
                ...state.userConcerts[action.payload.concertID]?.bands?.items,
                action.payload,
              ],
            },
          },
        },
        successMessage: {
          addBandToConcert: "Band added to concert successfully",
        },
        errorMessage: {},
      };
    case ConcertActionTypes.ADD_BAND_TO_CONCERT_FAILURE:
      return {
        ...state,
        loadingForm: false,
        successMessage: {},
        errorMessage: {
          addBandToConcert: "Failed to add Band to Concert",
        },
      };
    case ConcertActionTypes.RMOVE_BAND_FROM_CONCERT_START:
      return {
        ...state,
        loadingForm: true,
      };
    case ConcertActionTypes.RMOVE_BAND_FROM_CONCERT_SUCCESS:
      const updatedBands = state.userConcerts[
        action.payload.concertID
      ].bands.items.filter((band) => band.id !== action.payload.id);
      return {
        ...state,
        loadingForm: false,
        userConcerts: {
          ...state.userConcerts,
          [action.payload.concertID]: {
            ...state.userConcerts[action.payload.concertID],
            bands: {
              items: updatedBands,
            },
          },
        },
        successMessage: {
          removeBand: "Band has been removed from concert",
        },
        errorMessage: {},
      };
    case ConcertActionTypes.RMOVE_BAND_FROM_CONCERT_FAILURE:
      return {
        ...state,
        loadingForm: false,
        successMessage: {},
        errorMessage: {
          removeBand: "Failed to remove band from Concert",
        },
      };
    case ConcertActionTypes.REMOVE_CONCERT_START:
      return {
        ...state,
        loadingForm: true,
      };
    case ConcertActionTypes.REMOVE_CONCERT_SUCCESS:
      return {
        ...state,
        loadingForm: false,
        userConcerts: {
          ...state.userConcerts,
          [action.payload.id]: {
            isDeleted: true,
          },
        },
        userListConcerts: state.userListConcerts.filter(
          (concert) => concert.id !== action.payload.id
        ),
        successMessage: {
          removeConcert: "Concert has been removed",
        },
        errorMessage: {},
      };
    case ConcertActionTypes.REMOVE_CONCERT_FAILURE:
      return {
        ...state,
        loadingForm: false,
        successMessage: {},
        errorMessage: {
          removeConcert: "Failed to remove concert",
        },
      };
    case ConcertActionTypes.CLEAR_USER:
      return {
        ...state,
        successMessage: {},
        errorMessage: {},
        userConcerts: {},
        userListConcerts: [],
        isUserConcertsEmpty: false,
        loading: false,
        loadingImg: false,
        loadingForm: false,
        isFormSuccess: false,
      };
    default:
      return state;
  }
};

export default concertReducer;
