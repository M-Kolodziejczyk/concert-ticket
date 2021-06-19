import BandActionTypes from "./band.types";

const INITIAL_STATE = {
  bands: [],
  userBands: {},
  band: {},
  bandsImage: {},
  successMessage: {},
  errorMessage: {},
  isUserBandsEmpty: false,
  formLoading: false,
  loading: false,
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
    case BandActionTypes.LIST_BANDS_SUCCESS:
      return {
        ...state,
        bands: action.payload,
        successMessage: {
          listBands: "List bands success",
        },
        errorMessage: {},
      };
    case BandActionTypes.LIST_BANDS_FAILURE:
      return {
        ...state,
        bands: [],
        successMessage: {},
        errorMessage: {
          listBands: "List bands failure",
        },
      };
    case BandActionTypes.UPDATE_BAND:
      return {
        ...state,
        band: action.payload,
      };
    case BandActionTypes.GET_BAND_SUCCESS:
      return {
        ...state,
        band: action.payload,
        successMessage: {
          getBand: "Get band success",
        },
        errorMessage: {},
      };
    case BandActionTypes.GET_BAND_FAILURE:
      return {
        ...state,
        successMessage: {},
        errorMessage: {
          getBand: "Get band failure",
        },
      };
    case BandActionTypes.GET_USER_BANDS_START:
      return {
        ...state,
        loading: true,
      };
    case BandActionTypes.GET_USER_BANDS_SUCCESS:
      return {
        ...state,
        userBands: action.payload.reduce((obj, item) => {
          return {
            ...obj,
            [item.id]: item,
          };
        }, {}),
        isUserBandsEmpty: action.payload.length === 0 ? true : false,
        loading: false,
      };
    case BandActionTypes.GET_USER_BANDS_FAILURE:
      return {
        ...state,
        userBands: {},
        loading: false,
      };
    default:
      return state;
  }
};

export default bandReducer;
