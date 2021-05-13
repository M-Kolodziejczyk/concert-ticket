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
    case ArtistActionTypes.UPLOAD_ARTIST_IMAGE_SUCCESS:
      return {
        ...state,
        userArtistImageUrl: "11",
        errorMessage: {},
        successMessage: { createArtist: "Upload complete" },
      };
    case ArtistActionTypes.UPLOAD_ARTIST_IMAGE_FAILURE:
      return {
        ...state,
        userArtistImageUrl: "",
        successMessage: {},
        errorMessage: { createArtist: "Upload failure" },
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
    default:
      return state;
  }
};

export default artistReducer;
