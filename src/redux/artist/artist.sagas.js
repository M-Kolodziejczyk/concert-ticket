import { put, takeLatest, all, call } from "redux-saga/effects";
import { Auth, API, Storage } from "aws-amplify";
import * as mutations from "../../api/mutations";

import ArtistActionTypes from "./artist.types";

import {
  createArtistSuccess,
  createArtistFailure,
  uploadArttistImageSuccess,
  uploadArtistImageFailure,
} from "./artist.actions";

export function* createArtist({ payload: artist }) {
  try {
    // const userCredentials = yield Auth.currentUserCredentials();
    const user = yield Auth.currentAuthenticatedUser();
    const res = yield API.graphql({
      query: mutations.createArtist,
      variables: { input: { ...artist, owner: user.username } },
    });
    console.log("RES", res);
    yield put(createArtistSuccess(res.data.createArtist));
  } catch (error) {
    console.log("ERROR: ", error);
    yield put(createArtistFailure(error));
  }
}

export function* onCreateArtistStart() {
  yield takeLatest(ArtistActionTypes.CREATE_ARTIST_START, createArtist);
}

export function* uploadArtistImage({ payload: { values, image } }) {
  try {
    const user = yield Auth.currentUserCredentials();
    console.log(user);
    console.log(image);
    console.log(values);
    const res = yield Storage.put(
      "69c5f8cb-c485-4293-906d-59b2ca733c60-artist-image",
      image,
      {
        level: "protected",
        contentType: image.type,
      }
    );
    console.log(res);
    yield put(uploadArttistImageSuccess("success"));
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

export function* artistSagas() {
  yield all([call(onCreateArtistStart), call(onUploadArtistImageStart)]);
}
