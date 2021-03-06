import ArtistActionTypes from "./artist.types";

export const createArtistStart = (artist) => {
  return {
    type: ArtistActionTypes.CREATE_ARTIST_START,
    payload: artist,
  };
};

export const createArtistSuccess = (artist) => {
  return {
    type: ArtistActionTypes.CREATE_ARTIST_SUCCESS,
    payload: artist,
  };
};

export const createArtistFailure = () => {
  return {
    type: ArtistActionTypes.CREATE_ARTIST_FAILURE,
  };
};

export const getArtistStart = (id) => {
  return {
    type: ArtistActionTypes.GET_ARTIST_START,
    payload: id,
  };
};

export const getArtistSuccess = (artist) => {
  return {
    type: ArtistActionTypes.GET_ARTIST_SUCCESS,
    payload: artist,
  };
};
export const getArtistFailure = (error) => {
  return {
    type: ArtistActionTypes.GET_ARTIST_FAILURE,
    payload: error,
  };
};

export const getUserArtistStart = (id) => {
  return {
    type: ArtistActionTypes.GET_USER_ARTIST_START,
    payload: id,
  };
};

export const getUserArtistSuccess = (artist) => {
  return {
    type: ArtistActionTypes.GET_USER_ARTIST_SUCCESS,
    payload: artist,
  };
};

export const getUserArtistFailure = (error) => {
  return {
    type: ArtistActionTypes.GET_USER_ARTIST_FAILURE,
    payload: error,
  };
};

export const updateArtistStart = (artist) => ({
  type: ArtistActionTypes.UPDATE_ARTIST_START,
  payload: artist,
});

export const updateArtistSuccess = (artist) => ({
  type: ArtistActionTypes.UPDATE_ARTIST_SUCCESS,
  payload: artist,
});

export const updateArtistFailure = () => ({
  type: ArtistActionTypes.UPDATE_ARTIST_FAILURE,
});

export const uploadArtistImageStart = (id, image) => {
  return {
    type: ArtistActionTypes.UPLOAD_ARTIST_IMAGE_START,
    payload: { id, image },
  };
};

export const uploadArttistImageSuccess = (identityId) => {
  return {
    type: ArtistActionTypes.UPLOAD_ARTIST_IMAGE_SUCCESS,
    payload: identityId,
  };
};

export const uploadArtistImageFailure = () => {
  return {
    type: ArtistActionTypes.UPLOAD_ARTIST_IMAGE_FAILURE,
  };
};

export const getArtistImageStart = ({ ...payload }) => ({
  type: ArtistActionTypes.GET_ARTIST_IMAGE_START,
  payload: payload,
});

export const getArtistImageSuccess = (url) => ({
  type: ArtistActionTypes.GET_ARTIST_IMAGE_SUCCESS,
  payload: url,
});

export const getArtistImageFailure = (error) => ({
  type: ArtistActionTypes.GET_ARTIST_IMAGE_FAILURE,
  payload: error,
});

export const getUserArtistImageStart = (identityId) => ({
  type: ArtistActionTypes.GET_USER_ARTIST_IMAGE_START,
  payload: identityId,
});

export const getUserArtistImageSuccess = (url) => ({
  type: ArtistActionTypes.GET_USER_ARTIST_IMAGE_SUCCESS,
  payload: url,
});

export const getUserArtistImageFailure = (error) => ({
  type: ArtistActionTypes.GET_USER_ARTIST_IMAGE_FAILURE,
  payload: error,
});

export const listArtistsStart = () => ({
  type: ArtistActionTypes.LIST_ARTISTS_START,
});

export const listArtistsSuccess = (res) => ({
  type: ArtistActionTypes.LIST_ARTISTS_SUCCESS,
  payload: res,
});

export const listArtistsFailure = (error) => ({
  type: ArtistActionTypes.LIST_ARTISTS_FAILURE,
  payload: error,
});

export const deleteUserArtistStart = (artistId) => ({
  type: ArtistActionTypes.DELETE_USER_ARTIST_START,
  payload: artistId,
});

export const deleteUserArtistSuccess = (res) => ({
  type: ArtistActionTypes.DELETE_USER_ARTIST_SUCCESS,
  payload: res,
});

export const deleteUserArtistFailure = (error) => ({
  type: ArtistActionTypes.DELETE_USER_ARTIST_FAILURE,
  payload: error,
});

export const clearUser = () => ({
  type: ArtistActionTypes.CLEAR_USER,
});
