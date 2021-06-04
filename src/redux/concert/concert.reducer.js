import ConcertActionTypes from "./concert.types";

const INITIAL_STATE = {
  concerts: {},
  concertsImage: {},
  successMessage: {},
  errorMessage: {},
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
    case ConcertActionTypes.UPLOAD_CONCERT_IMAGE_SUCCESS:
      return {
        ...state,
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

    default:
      return state;
  }
};

export default concertReducer;
