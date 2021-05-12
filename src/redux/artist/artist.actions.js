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

export const uploadArtistImageStart = (values, image) => {
  return {
    type: ArtistActionTypes.UPLOAD_ARTIST_IMAGE_START,
    payload: { values, image },
  };
};

export const uploadArttistImageSuccess = () => {
  return {
    type: ArtistActionTypes.UPLOAD_ARTIST_IMAGE_SUCCESS,
  };
};

export const uploadArtistImageFailure = () => {
  return {
    type: ArtistActionTypes.UPLOAD_ARTIST_IMAGE_FAILURE,
  };
};
