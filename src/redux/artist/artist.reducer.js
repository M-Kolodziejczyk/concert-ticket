import ArtistActionTypes from "./artist.types";

const INITIAL_STATE = {
  artist: {},
  artists: [],
  userArtist: {},
  formLoading: false,
  loading: false,
  userArtistImageUrl: "",
  successMessage: {},
  errorMessage: {},
};

const artistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ArtistActionTypes.CREATE_ARTIST_START:
      return {
        ...state,
        formLoading: true,
      };
    case ArtistActionTypes.CREATE_ARTIST_SUCCESS:
      return {
        ...state,
        formLoading: false,
        userArtist: action.payload,
        errorMessage: {},
        successMessage: { createArtist: "Artist created successfully" },
      };
    case ArtistActionTypes.CREATE_ARTIST_FAILURE:
      return {
        ...state,
        formLoading: false,
        userArtist: {},
        successMessage: {},
        errorMessage: { createArtist: "Create artist failure" },
      };
    case ArtistActionTypes.GET_ARTIST_SUCCESS:
      return {
        ...state,
        artist: action.payload,
        errorMessage: {},
      };
    case ArtistActionTypes.GET_ARTIST_FAILURE:
      return {
        ...state,
        artist: {},
        errorMessage: { getArtist: "Get artist failure" },
      };
    case ArtistActionTypes.GET_USER_ARTIST_START:
      return {
        ...state,
        loading: true,
      };
    case ArtistActionTypes.GET_USER_ARTIST_SUCCESS:
      return {
        ...state,
        loading: false,
        userArtist: action.payload,
        errorMessage: {},
      };
    case ArtistActionTypes.GET_USER_ARTIST_FAILURE:
      return {
        ...state,
        loading: false,
        userArtist: null,
        errorMessage: { getUserArtist: "Get artist failure" },
      };
    case ArtistActionTypes.UPDATE_ARTIST_START:
      return {
        ...state,
        formLoading: true,
      };
    case ArtistActionTypes.UPDATE_ARTIST_SUCCESS:
      return {
        ...state,
        formLoading: false,
        userArtist: action.payload,
        successMessage: { updateArtist: "Artist upated successfully" },
        errorMessage: {},
      };
    case ArtistActionTypes.UPDATE_ARTIST_FAILURE:
      return {
        ...state,
        formLoading: false,
        userArtist: {},
        successMessage: {},
        errorMessage: { updateArtist: "Update artist failure" },
      };
    case ArtistActionTypes.UPLOAD_ARTIST_IMAGE_START:
      return {
        ...state,
        formLoading: true,
      };
    case ArtistActionTypes.UPLOAD_ARTIST_IMAGE_SUCCESS:
      return {
        ...state,
        formLoading: false,
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
        formLoading: false,
        userArtistImageUrl: "",
        successMessage: {},
        errorMessage: { uploadArtistImage: "Upload failure" },
      };
    case ArtistActionTypes.GET_ARTIST_IMAGE_SUCCESS:
      state.artists[action.payload.index].url = action.payload.url;
      return {
        ...state,
        artists: state.artists,
        errorMessage: {},
      };
    case ArtistActionTypes.GET_ARTIST_IMAGE_FAILURE:
      return {
        ...state,
        userArtistImageUrl: "",
        errorMessage: { getArtistImage: "Get artist Image failure" },
      };
    case ArtistActionTypes.GET_USER_ARTIST_IMAGE_SUCCESS:
      return {
        ...state,
        userArtistImageUrl: action.payload,
        errorMessage: {},
      };
    case ArtistActionTypes.GET_USER_ARTIST_IMAGE_FAILURE:
      return {
        ...state,
        userArtistImageUrl: "",
        errorMessage: { getUserArtistImage: "Get user artist Image failure" },
      };
    case ArtistActionTypes.LIST_ARTISTS_SUCCESS:
      return {
        ...state,
        artists: action.payload,
        errorMessage: {},
      };
    case ArtistActionTypes.LIST_ARTISTS_FAILURE:
      return {
        ...state,
        artists: [],
        successMessage: {},
        errorMessage: {
          artists: "List artists failure",
        },
      };
    default:
      return state;
  }
};

export default artistReducer;
