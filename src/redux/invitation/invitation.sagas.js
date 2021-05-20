import { put, takeLatest, all, call } from "redux-saga/effects";
import { API } from "aws-amplify";
import * as queries from "../../api/queries";

import InvitationActionTypes from "./invitation.type";

import {
  listUserInvitationsSuccess,
  listUserInvitationsFailure,
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

    console.log("RES", res);
    yield put(listUserInvitationsSuccess(res.data.listInvitations.items));
  } catch (error) {
    console.log("Error", error);
    yield put(listUserInvitationsFailure(error));
  }
}

export function* onListUserInvitationsStart() {
  yield takeLatest(
    InvitationActionTypes.LIST_USER_INVITATIONS_START,
    listUserInvitation
  );
}

export function* invitationSagas() {
  yield all([call(onListUserInvitationsStart)]);
}
