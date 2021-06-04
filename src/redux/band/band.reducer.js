import BandActionTypes from "./band.types";

const INITIAL_STATE = {
  band: {},
  bandsImage: {},
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
    case BandActionTypes.UPLOAD_BAND_IMAGE_SUCCESS:
      return {
        ...state,
        bandsImage: {
          ...state.bandsImage,
          [action.payload.id]: action.payload.url,
        },
        errorMessage: {},
      };
    case BandActionTypes.UPLOAD_BAND_IMAGE_FAILURE:
      return {
        ...state,
        errorMessage: {
          uploadBandImage: "Failed to upload Image",
        },
      };
    case BandActionTypes.GET_BAND_IMAGE_SUCCESS:
      return {
        ...state,
        bandsImage: {
          ...state.bandsImage,
          [action.payload.id]: action.payload.url,
        },
      };
    case BandActionTypes.GET_BAND_IMAGE_FAILURE:
      return {
        ...state,
        errorMessage: {
          getBandImage: "Get band image failure",
        },
      };
    default:
      return state;
  }
};

export default bandReducer;
