import { put, takeLatest, all, call } from "redux-saga/effects";
import { Auth, API, Storage } from "aws-amplify";
import * as mutations from "../../api/mutations";
import * as queries from "../../api/queries";

import ArtistActionTypes from "./artist.types";

import {
  createArtistSuccess,
  createArtistFailure,
  getArtistSuccess,
  getArtistFailure,
  updateArtistSuccess,
  updateArtistFailure,
  uploadArttistImageSuccess,
  uploadArtistImageFailure,
  getArtistImageSuccess,
  getArtistImageFailure,
} from "./artist.actions";

export function* createArtist({ payload: artist }) {
  try {
    const authUser = yield Auth.currentAuthenticatedUser();
    const res = yield API.graphql({
      query: mutations.createArtist,
      variables: { input: { ...artist } },
    });
    yield API.graphql({
      query: mutations.updateUser,
      variables: {
        input: {
          id: authUser.attributes.sub,
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
      query: queries.getArtist,
      variables: {
        id: payload,
      },
    });

    if (!artist.data.getArtist) {
      yield put(getArtistSuccess({}));
    } else {
      yield put(getArtistSuccess(artist.data.getArtist));
    }
  } catch (error) {
    yield put(getArtistFailure(error));
  }
}

export function* onGetArtistStart() {
  yield takeLatest(ArtistActionTypes.GET_ARTIST_START, getArtist);
}

export function* updateArtist({ payload: artist }) {
  try {
    const res = yield API.graphql({
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

export function* uploadArtistImage({ payload: { id, image } }) {
  try {
    const user = yield Auth.currentUserCredentials();
    yield Storage.put("artist-image", image, {
      level: "protected",
      contentType: image.type,
    });
    yield API.graphql({
      query: mutations.updateArtist,
      variables: {
        input: {
          id,
          identityId: user.identityId,
        },
      },
    });
    yield put(uploadArttistImageSuccess(user.identityId));
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

export function* getArtistImage({ payload }) {
  try {
    const url = yield Storage.get("artist-image", {
      level: "protected",
      identityId: payload,
    });
    yield put(getArtistImageSuccess(url));
  } catch (error) {
    yield put(getArtistImageFailure(error));
  }
}

export function* onGetArtistImageStart() {
  yield takeLatest(ArtistActionTypes.GET_ARTIST_IMAGE_START, getArtistImage);
}

export function* artistSagas() {
  yield all([
    call(onCreateArtistStart),
    call(onGetArtistStart),
    call(onUploadArtistImageStart),
    call(onGetArtistImageStart),
  ]);
}
