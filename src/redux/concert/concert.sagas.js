import { call, all, put, takeLatest } from "redux-saga/effects";
import { API, Auth } from "aws-amplify";
import * as mutations from "../../api/mutations";

import ConcertActionTypes from "./concert.types";

import { createConcertSuccess, createConcertFailure } from "./concert.actions";

export function* createConcert({ payload: concert }) {
  try {
    console.log("CONCert", concert);
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
    console.log("RES", res);
    yield put(createConcertSuccess(res.data.createConcert));
  } catch (error) {
    console.log("Error", error);
    yield put(createConcertFailure(error));
  }
}

export function* onCreateConcertStart() {
  yield takeLatest(ConcertActionTypes.CREATE_CONCERT_START, createConcert);
}

export function* concertSagas() {
  yield all([call(onCreateConcertStart)]);
}
