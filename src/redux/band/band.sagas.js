import { put, takeLatest, all, call, takeEvery } from "redux-saga/effects";
import { API, Auth, Storage } from "aws-amplify";
import * as mutations from "../../api/mutations";
import * as queries from "../../api/queries";

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
  listBandsSuccess,
  listBandsFailure,
  getBandSuccess,
  getBandFailure,
  getUserBandsSuccess,
  getUserBandsFailure,
  updateUserBandSuccess,
  updateUserBandFailure,
  getUserBandSuccess,
  getuserBandFailure,
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

    yield put(createInvitationSuccess(res.data.updateBand));
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
          keyImage: `band-image/${id}-image`,
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

export function* listBandsStart() {
  try {
    const res = yield API.graphql({
      authMode: "API_KEY",
      query: queries.listBands,
    });

    yield put(listBandsSuccess(res.data.listBands.items));
  } catch (error) {
    yield put(listBandsFailure(error));
  }
}

export function* onListBandsStart() {
  yield takeLatest(BandActionTypes.LIST_BANDS_START, listBandsStart);
}

export function* getBandStart({ payload }) {
  try {
    const band = yield API.graphql({
      query: queries.getBand,
      variables: {
        id: payload,
      },
    });

    yield put(getBandSuccess(band.data.getBand));
  } catch (error) {
    yield put(getBandFailure({ id: payload, error }));
  }
}

export function* onGetBandStart() {
  yield takeLatest(BandActionTypes.GET_BAND_START, getBandStart);
}

export function* getUserBands({ payload }) {
  try {
    const res = yield API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: queries.bandsByUser,
      variables: {
        userName: payload,
      },
    });
    yield put(getUserBandsSuccess(res.data.bandsByUser.items));
  } catch (error) {
    yield put(getUserBandsFailure(error));
  }
}

export function* onGetUserBandsStart() {
  yield takeLatest(BandActionTypes.GET_USER_BANDS_START, getUserBands);
}

export function* updateUserBand({ payload: band }) {
  try {
    const res = yield API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: mutations.updateBand,
      variables: {
        input: {
          ...band,
        },
      },
    });
    yield put(updateUserBandSuccess(res.data.updateBand));
  } catch (error) {
    yield put(updateUserBandFailure(error));
  }
}

export function* onUpdateUserBandStart() {
  yield takeLatest(BandActionTypes.UPDATE_USER_BAND_START, updateUserBand);
}

export function* getUserBand({ payload }) {
  try {
    const band = yield API.graphql({
      query: queries.getBand,
      variables: {
        id: payload,
      },
    });

    yield put(getUserBandSuccess(band.data.getBand));
  } catch (error) {
    yield put(getuserBandFailure(error));
  }
}

export function* onGetUserBandStart() {
  yield takeLatest(BandActionTypes.GET_USER_BAND_START, getUserBand);
}

export function* bandSagas() {
  yield all([
    call(onCreateBandStart),
    call(onCreateInvitationStart),
    call(onUploadBandImageStart),
    call(onGetBandImageStart),
    call(onListBandsStart),
    call(onGetBandStart),
    call(onGetUserBandsStart),
    call(onUpdateUserBandStart),
    call(onGetUserBandStart),
  ]);
}
