import { put, takeEvery, all, call } from "redux-saga/effects";

import { createInviteNotificationSucces } from "./notification.actions";

import NotificationActionTypes from "./notification.types";

export function* createInviteNotification({ payload: data }) {
  yield put(createInviteNotificationSucces(data));
}

export function* onCreateInviteNotificationStart() {
  yield takeEvery(
    NotificationActionTypes.CREATE_INVITE_NOTIFICATION_START,
    createInviteNotification
  );
}

export function* notificationSagas() {
  yield all([call(onCreateInviteNotificationStart)]);
}
