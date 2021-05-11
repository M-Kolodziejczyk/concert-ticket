import ArtistActionTypes from "./artist.types";

export const createArtistStart = (artist) => {
  return {
    type: ArtistActionTypes.CREATE_ARTIST_START,
    payload: artist,
  };
};

export const createArtistSuccess = () => {
  return {
    type: ArtistActionTypes.CREATE_ARTIST_SUCCESS,
  };
};

export const createArtistFailure = () => {
  return {
    type: ArtistActionTypes.CREATE_ARTIST_FAILURE,
  };
};
