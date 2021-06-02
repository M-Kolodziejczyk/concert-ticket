import { put, takeLatest, all, call } from "redux-saga/effects";
import { API, Auth, Storage } from "aws-amplify";
import * as mutations from "../../api/mutations";

import BandActionTypes from "./band.types";

import {
  createBandSuccess,
  createBandFailure,
  createInvitationSuccess,
  createInvitationFailure,
  uploadBandImageSuccess,
  uploadBandImageFailure,
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

export function* uploadBandImage({ payload: { id, image } }) {
  try {
    const res = yield Storage.put(`${id}/band-image`, image, {
      level: "public",
      contentType: image.type,
    });
    console.log("RESS", res);
    yield put(uploadBandImageSuccess(res));
  } catch (error) {
    yield put(uploadBandImageFailure(error));
  }
}

export function* onUploadBandImageStart() {
  console.log("1");
  yield takeLatest(BandActionTypes.UPLOAD_BAND_IMAGE_START, uploadBandImage);
}

export function* bandSagas() {
  yield all([
    call(onCreateBandStart),
    call(onCreateInvitationStart),
    call(onUploadBandImageStart),
  ]);
}
