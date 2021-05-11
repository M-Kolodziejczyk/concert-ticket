import { put, takeLatest, all, call } from "redux-saga/effects";

import ArtistActionTypes from "./artist.types";

import { createArtistSuccess, createArtistFailure } from "./artist.actions";

export function* createArtist(artist) {
  try {
    yield put(createArtistSuccess());
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
