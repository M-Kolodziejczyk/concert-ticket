import { put, takeLatest, all, call } from "redux-saga/effects";
import { API, Auth } from "aws-amplify";
import * as mutations from "../../api/mutations";

import BandActionTypes from "./band.types";

import {
  createBandSuccess,
  createBandFailure,
  createInvitationSuccess,
  createInvitationFailure,
} from "./band.actions";

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

export function* createInvitation({ payload: { values, invitations } }) {
  try {
    yield API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: mutations.createInvitation,
      variables: {
        input: {
          ...values,
        },
      },
    });

    const res = yield API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: mutations.updateBand,
      variables: {
        input: {
          id: values.senderTableElementID,
          invitations: invitations,
        },
      },
    });
    yield put(createInvitationSuccess(res.data));
  } catch (error) {
    yield put(createInvitationFailure);
  }
}

export function* onCreateInvitationStart() {
  yield takeLatest(BandActionTypes.CREATE_INVITATION_START, createInvitation);
}

export function* bandSagas() {
  yield all([call(onCreateBandStart), call(onCreateInvitationStart)]);
}
