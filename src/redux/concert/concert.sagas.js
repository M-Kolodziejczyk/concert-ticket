import { call, all, put, takeLatest, takeEvery } from "redux-saga/effects";
import { API, Auth, Storage } from "aws-amplify";
import * as mutations from "../../api/mutations";
import * as queries from "../../api/queries";

import ConcertActionTypes from "./concert.types";
import UserActionTypes from "../user/user.types";

import {
  createConcertSuccess,
  createConcertFailure,
  uploadConcertImageSuccess,
  uploadConcertImageFailure,
  getConcertImageSuccess,
  getConcertImageFailure,
  createConcertInvitationSuccess,
  createConcertInvitationFailure,
  listConcertsSuccess,
  listConcertsFailure,
  getConcertSuccess,
  getConcertFailure,
  getUserConcertsSuccess,
  getUserConcertsFailure,
  getUserConcertSuccess,
  getUserConcertFailure,
  updateUserConcertSuccess,
  updateUserConcertFailure,
  createConcertTicketSuccess,
  createConcertTicketFailure,
  deleteConcertTicketSuccess,
  deleteConcertTicketFailure,
  listConcertsWithLimitSuccess,
  listConcertsWithLimitFailure,
  addBandToConcertSuccess,
  addBandToConcertFailure,
  removeBandFromConcertSuccess,
  removeBandFromConcertFailure,
  removeConcertSuccess,
  removeConcertFailure,
  clearUser,
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

export function* createConcertInvitation({ payload: { values, invitations } }) {
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
      query: mutations.updateConcert,
      variables: {
        input: {
          id: values.senderTableElementID,
          invitations: invitations,
        },
      },
    });

    yield put(createConcertInvitationSuccess(res.data.updateConcert));
  } catch (error) {
    yield put(createConcertInvitationFailure(error));
  }
}

export function* onCreateConcertInvitationStart() {
  yield takeLatest(
    ConcertActionTypes.CREATE_CONCERT_INVITATION_START,
    createConcertInvitation
  );
}

export function* listConcerts() {
  try {
    const res = yield API.graphql({
      authMode: "API_KEY",
      query: queries.listConcerts,
    });
    yield put(listConcertsSuccess(res.data.listConcerts.items));
  } catch (error) {
    yield put(listConcertsFailure(error));
  }
}

export function* onListConcertsStart() {
  yield takeLatest(ConcertActionTypes.LIST_CONCERTS_START, listConcerts);
}

export function* getConcertStart({ payload }) {
  try {
    const concert = yield API.graphql({
      authMode: "API_KEY",
      query: queries.getConcert,
      variables: {
        id: payload,
      },
    });

    yield put(getConcertSuccess(concert.data.getConcert));
  } catch (error) {
    yield put(getConcertFailure({ id: payload, error }));
  }
}

export function* onGetConcertStart() {
  yield takeLatest(ConcertActionTypes.GET_CONCERT_START, getConcertStart);
}

export function* getUserConcerts({ payload }) {
  try {
    const res = yield API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: queries.concertsByUser,
      variables: {
        userName: payload,
      },
    });
    yield put(getUserConcertsSuccess(res.data.concertsByUser.items));
  } catch (error) {
    yield put(getUserConcertsFailure(error));
  }
}

export function* onGetUserConcertsStart() {
  yield takeLatest(ConcertActionTypes.GET_USER_CONCERTS_START, getUserConcerts);
}

export function* getUserConcert({ payload }) {
  try {
    const res = yield API.graphql({
      query: queries.getUserConcert,
      variables: {
        id: payload,
      },
    });
    yield put(getUserConcertSuccess(res.data.getConcert));
  } catch (error) {
    yield put(getUserConcertFailure(error));
  }
}

export function* onGetUserConcertStart() {
  yield takeEvery(ConcertActionTypes.GET_USER_CONCERT_START, getUserConcert);
}

export function* updateUserConcert({ payload }) {
  try {
    const res = yield API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: mutations.updateConcert,
      variables: {
        input: {
          ...payload,
        },
      },
    });
    yield put(updateUserConcertSuccess(res.data.updateConcert));
  } catch (error) {
    yield put(updateUserConcertFailure(error));
  }
}

export function* onUpdateUserConcertStart() {
  yield takeLatest(
    ConcertActionTypes.UPDATE_USER_CONCERT_START,
    updateUserConcert
  );
}

export function* createConcertTicket({ payload: data }) {
  try {
    const res = yield API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: mutations.createTicket,
      variables: {
        input: {
          ...data,
        },
      },
    });
    yield put(createConcertTicketSuccess(res.data.createTicket));
  } catch (error) {
    yield put(createConcertTicketFailure(error));
  }
}

export function* onCreatConcertTicketStart() {
  yield takeLatest(
    ConcertActionTypes.CREATE_CONCERT_TICKET_START,
    createConcertTicket
  );
}

export function* deleteConcertTicket({ payload }) {
  try {
    const res = yield API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: mutations.deleteTicket,
      variables: {
        input: {
          id: payload,
        },
      },
    });

    yield put(deleteConcertTicketSuccess(res.data.deleteTicket));
  } catch (error) {
    yield put(deleteConcertTicketFailure(error));
  }
}

export function* onDeleteConcertTicketStart() {
  yield takeLatest(
    ConcertActionTypes.DELETE_CONCERT_TICKET_START,
    deleteConcertTicket
  );
}

export function* listConcertsWithLimit({ payload }) {
  try {
    const res = yield API.graphql({
      authMode: "API_KEY",
      query: queries.listConcerts,
      variables: {
        limit: payload,
      },
    });
    yield put(listConcertsWithLimitSuccess(res.data.listConcerts.items));
  } catch (error) {
    yield put(listConcertsWithLimitFailure(error));
  }
}

export function* onListConcertsWithLimitStart() {
  yield takeLatest(
    ConcertActionTypes.LIST_CONCERTS_WITH_LIMIT_START,
    listConcertsWithLimit
  );
}

export function* addBandToConcert({ payload: { bandId, concertId } }) {
  try {
    const res = yield API.graphql({
      query: mutations.createConcertBandJoin,
      variables: {
        input: {
          concertID: concertId,
          bandID: bandId,
        },
      },
    });

    yield put(addBandToConcertSuccess(res.data.createConcertBandJoin));
  } catch (error) {
    yield put(addBandToConcertFailure(error));
  }
}

export function* onAddBandToConcertStart() {
  yield takeLatest(
    ConcertActionTypes.ADD_BAND_TO_CONCERT_START,
    addBandToConcert
  );
}

export function* removeBandFromConcert({ payload }) {
  try {
    const res = yield API.graphql({
      query: mutations.deleteConcertBandJoin,
      variables: {
        input: {
          id: payload,
        },
      },
    });

    yield put(removeBandFromConcertSuccess(res.data.deleteConcertBandJoin));
  } catch (error) {
    yield put(removeBandFromConcertFailure(error));
  }
}

export function* onRemoveBandFromConcertStart() {
  yield takeLatest(
    ConcertActionTypes.RMOVE_BAND_FROM_CONCERT_START,
    removeBandFromConcert
  );
}

export function* removeConcert({ payload }) {
  try {
    const res = yield API.graphql({
      query: mutations.deleteConcert,
      variables: {
        input: {
          id: payload,
        },
      },
    });

    const bands = res.data.deleteConcert.bands.items;
    if (bands.length > 0) {
      for (let band of bands) {
        yield API.graphql({
          authMode: "AMAZON_COGNITO_USER_POOLS",
          query: mutations.deleteConcertBandJoin,
          variables: {
            input: {
              id: band.id,
            },
          },
        });
      }
    }

    const tickets = res.data.deleteConcert.tickets.items;
    if (tickets.length > 0) {
      for (let ticket of tickets) {
        yield API.graphql({
          authMode: "AMAZON_COGNITO_USER_POOLS",
          query: mutations.deleteTicket,
          variables: {
            input: {
              id: ticket.id,
            },
          },
        });
      }
    }

    yield put(removeConcertSuccess(res.data.deleteConcert));
  } catch (error) {
    yield put(removeConcertFailure(error));
  }
}

export function* onRemoveConcertStart() {
  yield takeLatest(ConcertActionTypes.REMOVE_CONCERT_START, removeConcert);
}

export function* clearUserData() {
  yield put(clearUser());
}

export function* onDeleteUserSuccess() {
  yield takeLatest(UserActionTypes.DELETE_USER_SUCCESS, clearUserData);
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearUserData);
}

export function* concertSagas() {
  yield all([
    call(onCreateConcertStart),
    call(onUploadConcertImageStart),
    call(onGetConcertImageStart),
    call(onCreateConcertInvitationStart),
    call(onListConcertsStart),
    call(onGetConcertStart),
    call(onGetUserConcertsStart),
    call(onGetUserConcertStart),
    call(onUpdateUserConcertStart),
    call(onCreatConcertTicketStart),
    call(onDeleteConcertTicketStart),
    call(onListConcertsWithLimitStart),
    call(onAddBandToConcertStart),
    call(onRemoveBandFromConcertStart),
    call(onRemoveConcertStart),
    call(onDeleteUserSuccess),
    call(onSignOutSuccess),
  ]);
}
