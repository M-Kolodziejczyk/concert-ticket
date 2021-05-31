import { put, takeLatest, all, call } from "redux-saga/effects";
import { API } from "aws-amplify";
import * as queries from "../../api/queries";
import * as mutations from "../../api/mutations";

import InvitationActionTypes from "./invitation.type";

import {
  listUserInvitationsSuccess,
  listUserInvitationsFailure,
  acceptBandInvitationSuccess,
  acceptBandInvitationFailure,
} from "./invitation.actions";

export function* listUserInvitation({ payload: email }) {
  try {
    const res = yield API.graphql({
      query: queries.listInvitations,
      variables: {
        email,
        sortDirection: "DESC",
      },
    });

    yield put(listUserInvitationsSuccess(res.data.listInvitations.items));
  } catch (error) {
    yield put(listUserInvitationsFailure(error));
  }
}

export function* onListUserInvitationsStart() {
  yield takeLatest(
    InvitationActionTypes.LIST_USER_INVITATIONS_START,
    listUserInvitation
  );
}

export function* acceptBandInvitation({
  payload: { artistID, bandID, invitationCreatedAt, invitationEmail },
}) {
  try {
    const res = yield API.graphql({
      query: mutations.acceptInvitation,
      variables: {
        bandID,
        artistID,
        invitationEmail,
        invitationCreatedAt,
      },
    });
    yield put(acceptBandInvitationSuccess(res));
  } catch (error) {
    yield put(acceptBandInvitationFailure(error));
  }
}

export function* onAcceptBandInvitation() {
  yield takeLatest(
    InvitationActionTypes.ACCEPT_BAND_INVITATION_START,
    acceptBandInvitation
  );
}

export function* invitationSagas() {
  yield all([call(onListUserInvitationsStart), call(onAcceptBandInvitation)]);
}
