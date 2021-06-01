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
  rejectBandInvitationSuccess,
  rejectBandInvitationFailure,
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

export function* onAcceptBandInvitationStart() {
  yield takeLatest(
    InvitationActionTypes.ACCEPT_BAND_INVITATION_START,
    acceptBandInvitation
  );
}

export function* rejectBandInvitation({
  payload: { bandID, invitationCreatedAt, invitationEmail },
}) {
  try {
    const res = yield API.graphql({
      query: mutations.rejectInvitation,
      variables: {
        bandID,
        invitationEmail,
        invitationCreatedAt,
      },
    });
    yield put(rejectBandInvitationSuccess(res));
  } catch (error) {
    yield put(rejectBandInvitationFailure(error));
  }
}

export function* onrejectBandInvitationStart() {
  yield takeLatest(
    InvitationActionTypes.REJECT_BAND_INVITATION_START,
    rejectBandInvitation
  );
}

export function* invitationSagas() {
  yield all([
    call(onListUserInvitationsStart),
    call(onAcceptBandInvitationStart),
    call(onrejectBandInvitationStart),
  ]);
}
