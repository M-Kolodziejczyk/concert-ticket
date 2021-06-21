import ConcertActionTypes from "./concert.types";

const INITIAL_STATE = {
  concerts: [],
  concert: {},
  concertsImage: {},
  successMessage: {},
  errorMessage: {},
  userConcerts: {},
  isUserConcertsEmpty: false,
  loading: false,
  loadingForm: false,
};

const concertReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ConcertActionTypes.CREATE_CONCERT_SUCCESS:
      return {
        ...state,
        successMessage: {
          createConcert: "Create concert success",
        },
      };
    case ConcertActionTypes.CREATE_CONCERT_FAILURE:
      return {
        ...state,
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
    case ConcertActionTypes.GET_CONCERT_IMAGE_SUCCESS:
      return {
        ...state,
        errorMessage: {},
        concertsImage: {
          ...state.concertsImage,
          [action.payload.id]: action.payload.url,
        },
      };
    case ConcertActionTypes.GET_CONCERT_IMAGE_FAILURE:
      return {
        ...state,
        errorMessage: {
          getConcertImage: "Get concert image failure",
        },
      };
    case ConcertActionTypes.CREATE_CONCERT_INVITATION_SUCCESS:
      return {
        ...state,
        successMessage: {
          createInvitation: "Invitation send successfully",
        },
        errorMessage: {},
      };
    case ConcertActionTypes.CREATE_CONCERT_INVITATION_FAILURE:
      return {
        ...state,
        successMessage: {},
        errorMessage: {
          createInvitation: "Failed to send invitation",
        },
      };
    case ConcertActionTypes.LIST_CONCERTS_SUCCESS:
      return {
        ...state,
        concerts: action.payload,
        successMessage: { listConcerts: "List concerts success" },
        errorMessage: {},
      };
    case ConcertActionTypes.LIST_CONCERTS_FAILURE:
      return {
        ...state,
        concerts: [],
        successMessage: {},
        errorMessage: {
          listConcerts: "List concerts failure",
        },
      };
    case ConcertActionTypes.GET_CONCERT_SUCCESS:
      return {
        ...state,
        concert: action.payload,
        successMessage: { listConcerts: "Get concert success" },
        errorMessage: {},
      };
    case ConcertActionTypes.GET_CONCERT_FAILURE:
      return {
        ...state,
        concert: {},
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
        userConcerts: action.payload.reduce((obj, item) => {
          return {
            ...obj,
            [item.id]: item,
          };
        }, {}),
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
        successMessage: {},
      };
    case ConcertActionTypes.UPDATE_USER_CONCERT_SUCCESS:
      return {
        ...state,
        loadingForm: false,
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
        errorMessage: {
          updateConcert: "Concert updated failure",
        },
        successMessage: {},
      };
    default:
      return state;
  }
};

export default concertReducer;
