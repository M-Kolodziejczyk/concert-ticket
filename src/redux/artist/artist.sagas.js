import { put, takeLatest, takeEvery, all, call } from "redux-saga/effects";
import { Auth, API, Storage } from "aws-amplify";
import * as mutations from "../../api/mutations";
import * as queries from "../../api/queries";

import ArtistActionTypes from "./artist.types";

import {
  createArtistSuccess,
  createArtistFailure,
  getArtistSuccess,
  getArtistFailure,
  getUserArtistSuccess,
  getUserArtistFailure,
  updateArtistSuccess,
  updateArtistFailure,
  uploadArttistImageSuccess,
  uploadArtistImageFailure,
  getArtistImageSuccess,
  getArtistImageFailure,
  getUserArtistImageStart,
  getUserArtistImageSuccess,
  getUserArtistImageFailure,
  listArtistsSuccess,
  listArtistsFailure,
  deleteUserArtistSuccess,
  deleteUserArtistFailure,
} from "./artist.actions";

export function* createArtist({ payload: artist }) {
  try {
    const authUser = yield Auth.currentAuthenticatedUser();
    const res = yield API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: mutations.createArtist,
      variables: { input: { ...artist } },
    });

    yield API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: mutations.updateUser,
      variables: {
        input: {
          email: authUser.attributes.email,
          artistID: res.data.createArtist.id,
        },
      },
    });
    yield put(createArtistSuccess(res.data.createArtist));
  } catch (error) {
    yield put(createArtistFailure(error));
  }
}

export function* onCreateArtistStart() {
  yield takeLatest(ArtistActionTypes.CREATE_ARTIST_START, createArtist);
}

export function* getArtist({ payload }) {
  try {
    const artist = yield API.graphql({
      authMode: "API_KEY",
      query: queries.getArtist,
      variables: {
        id: payload,
      },
    });

    yield put(getArtistSuccess(artist.data.getArtist));
  } catch (error) {
    yield put(getArtistFailure({ error, id: payload }));
  }
}

export function* onGetArtistStart() {
  yield takeLatest(ArtistActionTypes.GET_ARTIST_START, getArtist);
}

export function* getUserArtist({ payload }) {
  try {
    const artist = yield API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: queries.getArtist,
      variables: {
        id: payload,
      },
    });

    yield put(getUserArtistSuccess(artist.data.getArtist));
  } catch (error) {
    yield put(getUserArtistFailure(error));
  }
}

export function* onGetUserArtistStart() {
  yield takeLatest(ArtistActionTypes.GET_USER_ARTIST_START, getUserArtist);
}

export function* updateArtist({ payload: artist }) {
  try {
    const res = yield API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: mutations.updateArtist,
      variables: {
        input: {
          ...artist,
        },
      },
    });
    yield put(updateArtistSuccess(res.data.updateArtist));
  } catch (error) {
    yield put(updateArtistFailure(error));
  }
}

export function* onUpdateArtistStart() {
  yield takeLatest(ArtistActionTypes.UPDATE_ARTIST_START, updateArtist);
}

export function* uploadArtistImage({ payload: { id, image } }) {
  try {
    const user = yield Auth.currentUserCredentials();
    yield Storage.put("artist-image", image, {
      level: "protected",
      contentType: image.type,
    });
    yield API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: mutations.updateArtist,
      variables: {
        input: {
          id,
          identityId: user.identityId,
        },
      },
    });
    yield put(uploadArttistImageSuccess(user.identityId));
    yield put(getUserArtistImageStart(user.identityId));
  } catch (error) {
    yield put(uploadArtistImageFailure(error));
  }
}

export function* onUploadArtistImageStart() {
  yield takeLatest(
    ArtistActionTypes.UPLOAD_ARTIST_IMAGE_START,
    uploadArtistImage
  );
}

export function* getArtistImage({ payload: { identityId, id } }) {
  try {
    const url = yield Storage.get("artist-image", {
      level: "protected",
      identityId: identityId,
    });

    yield put(getArtistImageSuccess({ url, id }));
  } catch (error) {
    yield put(getArtistImageFailure(error));
  }
}

export function* onGetArtistImageStart() {
  yield takeEvery(ArtistActionTypes.GET_ARTIST_IMAGE_START, getArtistImage);
}

export function* getUserArtistImage({ payload }) {
  try {
    const url = yield Storage.get("artist-image", {
      level: "protected",
      identityId: payload,
    });
    yield put(getUserArtistImageSuccess(url));
  } catch (error) {
    yield put(getUserArtistImageFailure(error));
  }
}

export function* onGetUserArtistImageStart() {
  yield takeLatest(
    ArtistActionTypes.GET_USER_ARTIST_IMAGE_START,
    getUserArtistImage
  );
}

export function* listArtists() {
  try {
    const res = yield API.graphql({
      authMode: "API_KEY",
      query: queries.listArtists,
    });

    yield put(listArtistsSuccess(res.data.listArtists.items));
  } catch (error) {
    yield put(listArtistsFailure(error));
  }
}

export function* onListArtistsStart() {
  yield takeLatest(ArtistActionTypes.LIST_ARTISTS_START, listArtists);
}

export function* deleteUserArtist({ payload }) {
  try {
    const authUser = yield Auth.currentAuthenticatedUser();

    yield Storage.remove("artist-image", {
      level: "protected",
    });

    const res = yield API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: mutations.deleteArtist,
      variables: {
        input: {
          id: payload,
        },
      },
    });

    const bands = res.data.deleteArtist.bands.items;
    if (bands.length > 0) {
      for (let band of bands) {
        console.log("BAND: ", band);
        yield API.graphql({
          authMode: "AMAZON_COGNITO_USER_POOLS",
          query: mutations.deleteArtistBandJoin,
          variables: {
            input: {
              id: band.id,
            },
          },
        });
      }
    }

    yield API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: mutations.updateUser,
      variables: {
        input: {
          email: authUser.attributes.email,
          artistID: null,
        },
      },
    });

    yield put(deleteUserArtistSuccess(res));
  } catch (error) {
    yield put(deleteUserArtistFailure(error));
  }
}

export function* onDeleteArtistStart() {
  yield takeLatest(
    ArtistActionTypes.DELETE_USER_ARTIST_START,
    deleteUserArtist
  );
}

export function* artistSagas() {
  yield all([
    call(onCreateArtistStart),
    call(onGetArtistStart),
    call(onGetUserArtistStart),
    call(onUpdateArtistStart),
    call(onUploadArtistImageStart),
    call(onGetArtistImageStart),
    call(onGetUserArtistImageStart),
    call(onListArtistsStart),
    call(onDeleteArtistStart),
  ]);
}
