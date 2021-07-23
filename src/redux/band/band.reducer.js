import BandActionTypes from "./band.types";

const INITIAL_STATE = {
  listBands: [],
  bands: {},
  userListBands: [],
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
        formLoading: true,
      };
    case BandActionTypes.CREATE_BAND_SUCCESS:
      return {
        ...state,
        formLoading: false,
        userBands: {
          ...state.userBands,
          [action.payload.id]: action.payload,
        },
        userListBands: [...state.userListBands, action.payload],
        successMessage: {
          createBand: "Band created successfully",
        },
        errorMessage: {},
      };
    case BandActionTypes.CREATE_BAND_FAILURE:
      return {
        ...state,
        formLoading: false,
        successMessage: {},
        errorMessage: {
          createBand: "Band create failure",
        },
      };
    case BandActionTypes.CREATE_INVITATION_START:
      return {
        ...state,
        formLoading: true,
      };
    case BandActionTypes.CREATE_INVITATION_SUCCESS:
      return {
        ...state,
        formLoading: false,
        userBands: {
          ...state.userBands,
          [action.payload.id]: {
            ...state.userBands[action.payload.id],
            invitations: action.payload.invitations,
          },
        },
        successMessage: {
          createInvitation: "Invitation sent successfully",
        },
        errorMessage: {},
      };
    case BandActionTypes.CREATE_INVITATION_FAILURE:
      return {
        ...state,
        formLoading: false,
        errorMessage: {
          createInvitation: "Failed to send invitation",
        },
        successMessage: {},
      };
    case BandActionTypes.UPLOAD_BAND_IMAGE_START:
      return {
        ...state,
        formLoading: true,
      };
    case BandActionTypes.UPLOAD_BAND_IMAGE_SUCCESS:
      return {
        ...state,
        formLoading: false,
        bandsImage: {
          ...state.bandsImage,
          [action.payload.id]: action.payload.url,
        },
        errorMessage: {},
      };
    case BandActionTypes.UPLOAD_BAND_IMAGE_FAILURE:
      return {
        ...state,
        formLoading: false,
        errorMessage: {
          uploadBandImage: "Failed to upload Image",
        },
      };
    case BandActionTypes.GET_BAND_IMAGE_START:
      return {
        ...state,
        loading: true,
      };
    case BandActionTypes.GET_BAND_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        bandsImage: {
          ...state.bandsImage,
          [action.payload.id]: action.payload.url,
        },
      };
    case BandActionTypes.GET_BAND_IMAGE_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: {
          getBandImage: "Get band image failure",
        },
      };
    case BandActionTypes.LIST_BANDS_START:
      return {
        ...state,
        loading: true,
      };
    case BandActionTypes.LIST_BANDS_SUCCESS:
      return {
        ...state,
        loading: false,
        listBands: action.payload,
        successMessage: {
          listBands: "List bands success",
        },
        errorMessage: {},
      };
    case BandActionTypes.LIST_BANDS_FAILURE:
      return {
        ...state,
        loading: false,
        listBands: null,
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
    case BandActionTypes.GET_BAND_START:
      return {
        ...state,
        loading: true,
      };
    case BandActionTypes.GET_BAND_SUCCESS:
      return {
        ...state,
        loading: false,
        bands: {
          ...state.bands,
          [action.payload.id]: action.payload,
        },
        successMessage: {
          getBand: "Get band success",
        },
        errorMessage: {},
      };
    case BandActionTypes.GET_BAND_FAILURE:
      return {
        ...state,
        loading: false,
        bands: {
          ...state.bands,
          [action.payload.id]: null,
        },
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
        userListBands: action.payload,
        isUserBandsEmpty: action.payload.length === 0 ? true : false,
        loading: false,
      };
    case BandActionTypes.GET_USER_BANDS_FAILURE:
      return {
        ...state,
        userListBands: [],
        isUserBandsEmpty: true,
        loading: false,
      };
    case BandActionTypes.UPDATE_USER_BAND_START:
      return {
        ...state,
        formLoading: true,
      };
    case BandActionTypes.UPDATE_USER_BAND_SUCCESS:
      return {
        ...state,
        formLoading: false,
        userBands: {
          ...state.userBands,
          [action.payload.id]: {
            ...state.userBands[action.payload.id],
            name: action.payload.name,
            genre: action.payload.genre,
          },
        },
        successMessage: {
          updateBand: "Band updated successfully",
        },
        errorMessage: {},
      };
    case BandActionTypes.UPDATE_USER_BAND_FAILURE:
      return {
        ...state,
        formLoading: false,
        successMessage: {},
        errorMessage: {
          updateBand: "Band update failure",
        },
      };
    case BandActionTypes.GET_USER_BAND_START:
      return {
        ...state,
        bandLoading: true,
      };
    case BandActionTypes.GET_USER_BAND_SUCCESS:
      return {
        ...state,
        bandLoading: false,
        userBands: {
          ...state.userBands,
          [action.payload.id]: action.payload,
        },
      };
    case BandActionTypes.GET_USER_BAND_FAILURE:
      return {
        ...state,
        bandLoading: false,
      };
    case BandActionTypes.ADD_ARTIST_TO_BAND_START:
      return {
        ...state,
        formLoading: true,
      };
    case BandActionTypes.ADD_ARTIST_TO_BAND_SUCCESS:
      return {
        ...state,
        userBands: {
          ...state.userBands,
          [action.payload.bandID]: {
            ...state.userBands[action.payload.bandID],
            members: {
              items: [
                ...state.userBands[action.payload.bandID]?.members?.items,
                action.payload,
              ],
            },
          },
        },
        formLoading: false,
        successMessage: {
          addArtistToBand: "Artist added to band successfully",
        },
        errorMessage: {},
      };
    case BandActionTypes.ADD_ARTIST_TO_BAND_FAILURE:
      return {
        ...state,
        formLoading: false,
        successMessage: {},
        errorMessage: {
          addArtistToBand: "Failure to add artist to band",
        },
      };
    case BandActionTypes.REMOVE_ARTIST_FROM_BAND_START:
      return {
        ...state,
        formLoading: true,
      };
    case BandActionTypes.REMOVE_ARTIST_FROM_BAND_SUCCESS:
      const members = state.userBands[
        action.payload.bandID
      ].members.items.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        formLoading: false,
        userBands: {
          ...state.userBands,
          [action.payload.bandID]: {
            ...state.userBands[action.payload.bandID],
            members: {
              items: members,
            },
          },
        },
        successMessage: {
          removeArtist: "Artist has been remove from band successfully",
        },
        errorMessage: {},
      };
    case BandActionTypes.REMOVE_ARTIST_FROM_BAND_FAILURE:
      return {
        ...state,
        formLoading: false,
        successMessage: {},
        errorMessage: {
          removeArtist: "Failure to remove artist from band",
        },
      };
    case BandActionTypes.REMOVE_BAND_START:
      return {
        ...state,
        formLoading: true,
      };
    case BandActionTypes.REMOVE_BAND_SUCCESS:
      return {
        ...state,
        formLoading: false,
        userBands: {
          ...state.userBands,
          [action.payload.id]: {
            isDeleted: true,
          },
        },
        userListBands: state.userListBands.filter(
          (band) => band.id !== action.payload.id
        ),
        successMessage: {
          removeBand: "Band has been removed",
        },
        errorMessage: {},
      };
    case BandActionTypes.REMOVE_BAND_FAILURE:
      return {
        ...state,
        formLoading: false,
        successMessage: {},
        errorMessage: {
          removeBand: "Failure to remove band",
        },
      };
    default:
      return state;
  }
};

export default bandReducer;
