import ArtistActionTypes from "./artist.types";

const INITIAL_STATE = {
  userArtist: {},
  userArtistImageUrl: "",
  successMessage: {},
  errorMessage: {},
};

const artistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ArtistActionTypes.CREATE_ARTIST_SUCCESS:
      return {
        ...state,
        userArtist: action.payload,
        errorMessage: {},
        successMessage: { createArtist: "Artist created successfully" },
      };
    case ArtistActionTypes.CREATE_ARTIST_FAILURE:
      return {
        ...state,
        userArtist: {},
        successMessage: {},
        errorMessage: { createArtist: "Create artist failure" },
      };
    case ArtistActionTypes.GET_ARTIST_SUCCESS:
      return {
        ...state,
        userArtist: action.payload,
        errorMessage: {},
      };
    case ArtistActionTypes.GET_ARTIST_FAILURE:
      return {
        ...state,
        userArtist: {},
        errorMessage: { getArtist: "Get artist failure" },
      };
    case ArtistActionTypes.UPDATE_ARTIST_SUCCESS:
      return {
        ...state,
        userArtist: action.payload,
        errorMessage: {},
        successMessage: { updateArtist: "Artist upated successfully" },
      };
    case ArtistActionTypes.UPDATE_ARTIST_FAILURE:
      return {
        ...state,
        userArtist: {},
        successMessage: {},
        errorMessage: { updateArtist: "Update artist failure" },
      };

    case ArtistActionTypes.UPLOAD_ARTIST_IMAGE_SUCCESS:
      return {
        ...state,
        userArtist: {
          ...state.userArtist,
          identityId: action.payload,
        },
        errorMessage: {},
        successMessage: { uploadArtistImage: "Upload complete" },
      };
    case ArtistActionTypes.UPLOAD_ARTIST_IMAGE_FAILURE:
      return {
        ...state,
        userArtistImageUrl: "",
        successMessage: {},
        errorMessage: { uploadArtistImage: "Upload failure" },
      };
    case ArtistActionTypes.GET_ARTIST_IMAGE_SUCCESS:
      return {
        ...state,
        userArtistImageUrl: action.payload,
        errorMessage: {},
      };
    case ArtistActionTypes.GET_ARTIST_IMAGE_FAILURE:
      return {
        ...state,
        userArtistImageUrl: "",
        errorMessage: { getArtistImage: "Get artist Image failure" },
      };
    default:
      return state;
  }
};

export default artistReducer;
