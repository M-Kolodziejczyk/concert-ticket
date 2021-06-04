import { call, all, put, takeLatest, takeEvery } from "redux-saga/effects";
import { API, Auth, Storage } from "aws-amplify";
import * as mutations from "../../api/mutations";

import ConcertActionTypes from "./concert.types";

import {
  createConcertSuccess,
  createConcertFailure,
  uploadConcertImageSuccess,
  uploadConcertImageFailure,
  getConcertImageSuccess,
  getConcertImageFailure,
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
    const res = yield Storage.put(`concert-image/${id}-image`, image, {
      level: "public",
      contentType: image.type,
    });

    yield API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: mutations.updateConcert,
      variables: {
        input: {
          id: id,
          keyImage: `concert-image/${id}-image`,
        },
      },
    });

    const url = yield Storage.get(res.key, {
      level: "public",
    });

    yield put(uploadConcertImageSuccess({ url, id }));
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

export function* getConcertImage({ payload }) {
  try {
    const url = yield Storage.get(`concert-image/${payload}-image`, {
      level: "public",
    });

    yield put(getConcertImageSuccess({ url, id: payload }));
  } catch (error) {
    yield put(getConcertImageFailure(error));
  }
}

export function* onGetConcertImageStart() {
  yield takeEvery(ConcertActionTypes.GET_CONCERT_IMAGE_START, getConcertImage);
}

export function* concertSagas() {
  yield all([
    call(onCreateConcertStart),
    call(onUploadConcertImageStart),
    call(onGetConcertImageStart),
  ]);
}
