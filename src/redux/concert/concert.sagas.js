import { call, all, put, takeLatest } from "redux-saga/effects";
import { API, Auth, Storage } from "aws-amplify";
import * as mutations from "../../api/mutations";

import ConcertActionTypes from "./concert.types";

import {
  createConcertSuccess,
  createConcertFailure,
  uploadConcertImageSuccess,
  uploadConcertImageFailure,
} from "./concert.actions";

export function* createConcert({ payload: concert }) {
  try {
    const authUser = yield Auth.currentAuthenticatedUser();
    const res = yield API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: mutations.createConcert,
      variables: {
        input: {
          ...concert,
          userName: authUser.attributes.email,
        },
      },
    });
    yield put(createConcertSuccess(res.data.createConcert));
  } catch (error) {
    yield put(createConcertFailure(error));
  }
}

export function* onCreateConcertStart() {
  yield takeLatest(ConcertActionTypes.CREATE_CONCERT_START, createConcert);
}

export function* uploadConcertImage({ payload: { id, image } }) {
  try {
    const res = yield Storage.put(`${id}/concert-image`, image, {
      level: "public",
      contentType: image.type,
    });
    yield put(uploadConcertImageSuccess(res));
  } catch (error) {
    yield put(uploadConcertImageFailure(error));
  }
}

export function* onUploadConcertImageStart() {
  yield takeLatest(
    ConcertActionTypes.UPLOAD_CONCERT_IMAGE_START,
    uploadConcertImage
  );
}

export function* concertSagas() {
  yield all([call(onCreateConcertStart), call(onUploadConcertImageStart)]);
}
