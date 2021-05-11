import ArtistActionTypes from "./artist.types";

const INITIAL_STATE = {
  userArtist: {},
  successMessage: {},
  errorMessage: {},
};

const artistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ArtistActionTypes.CREATE_ARTIST_SUCCESS:
      return {
        userArtist: action.payload,
        errorMessage: {},
        successMessage: { createArtist: "Artist created successfully" },
      };
    case ArtistActionTypes.CREATE_ARTIST_FAILURE:
      return {
        userArtist: {},
        successMessage: {},
        errorMessage: { createArtist: "Create artist failure" },
      };
    default:
      return state;
  }
};

export default artistReducer;
