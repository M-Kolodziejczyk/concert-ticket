import BandActionTypes from "./band.types";

const INITIAL_STATE = {
  band: {},
  successMessage: {},
  errorMessage: {},
};

const bandReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BandActionTypes.CREATE_BAND_START:
      return {
        ...state,
      };
    case BandActionTypes.CREATE_INVITATION_SUCCESS:
      return {
        ...state,
        successMessage: {
          createInvitation: "Invitation send successfully",
        },
        errorMessage: {},
      };
    case BandActionTypes.CREATE_INVITATION_FAILURE:
      return {
        ...state,
        errorMessage: {
          createInvitation: "Failed to send invitation",
        },
        successMessage: {},
      };
    default:
      return state;
  }
};

export default bandReducer;
