import { put, takeLatest, all, call, takeEvery } from "redux-saga/effects";
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
  getBandImageSuccess,
  getBandImageFailure,
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
    const res = yield Storage.put(`band-image/${id}-image`, image, {
      level: "public",
      contentType: image.type,
    });

    yield API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: mutations.updateBand,
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

    yield put(uploadBandImageSuccess({ url, id }));
  } catch (error) {
    yield put(uploadBandImageFailure(error));
  }
}

export function* onUploadBandImageStart() {
  yield takeLatest(BandActionTypes.UPLOAD_BAND_IMAGE_START, uploadBandImage);
}

export function* getBandImage({ payload }) {
  try {
    const url = yield Storage.get(`band-image/${payload}-image`, {
      level: "public",
    });

    yield put(getBandImageSuccess({ url, id: payload }));
  } catch (error) {
    yield put(getBandImageFailure(error));
  }
}

export function* onGetBandImageStart() {
  yield takeEvery(BandActionTypes.GET_BAND_IMAGE_START, getBandImage);
}

export function* bandSagas() {
  yield all([
    call(onCreateBandStart),
    call(onCreateInvitationStart),
    call(onUploadBandImageStart),
    call(onGetBandImageStart),
  ]);
}
