import { put, takeLatest, all, call } from "redux-saga/effects";
import { API, Auth } from "aws-amplify";
import * as mutations from "../../api/mutations";

import BandActionTypes from "./band.types";

import { createBandSuccess, createBandFailure } from "./band.actions";

export function* createBand({ payload: band }) {
  try {
    const authUser = yield Auth.currentAuthenticatedUser();
    const res = yield API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: mutations.createBand,
      variables: {
        input: {
          ...band,
          userName: authUser.attributes.email,
        },
      },
    });

    yield put(createBandSuccess(res.data.createBand));
  } catch (error) {
    yield put(createBandFailure(error));
  }
}

export function* onCreateBandStart() {
  yield takeLatest(BandActionTypes.CREATE_BAND_START, createBand);
}

export function* bandSagas() {
  yield all([call(onCreateBandStart)]);
}
