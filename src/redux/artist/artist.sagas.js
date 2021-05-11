import { put, takeLatest, all, call } from "redux-saga/effects";
import { API } from "aws-amplify";
import { Auth } from "aws-amplify";
import * as mutations from "../../api/mutations";

import ArtistActionTypes from "./artist.types";

import { createArtistSuccess, createArtistFailure } from "./artist.actions";

export function* createArtist({ payload: artist }) {
  try {
    const user = yield Auth.currentAuthenticatedUser();
    const res = yield API.graphql({
      query: mutations.createArtist,
      variables: { input: { ...artist, owner: user.username } },
    });
    yield put(createArtistSuccess(res.data.createArtist));
  } catch (error) {
    yield put(createArtistFailure(error));
  }
}

export function* onCreateArtistStart() {
  yield takeLatest(ArtistActionTypes.CREATE_ARTIST_START, createArtist);
}

export function* artistSagas() {
  yield all([call(onCreateArtistStart)]);
}
