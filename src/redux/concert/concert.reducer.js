import ConcertActionTypes from "./concert.types";

const INITIAL_STATE = {
  concerts: {},
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

    default:
      return state;
  }
};

export default concertReducer;
