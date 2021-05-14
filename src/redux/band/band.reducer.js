import BandActionTypes from "./band.types";

const INITIAL_STATE = {
  band: {},
};

const bandReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BandActionTypes.CREATE_BAND_START:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default bandReducer;
