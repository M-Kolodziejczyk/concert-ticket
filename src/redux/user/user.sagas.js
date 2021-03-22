import { put, takeLatest, all, call } from "redux-saga/effects";
import { Auth } from "aws-amplify";

import UserActionTypes from "./user.types";

import { signUpSuccess, signUpFailure } from "./user.actions";

export function* signUp({ payload: { email, password } }) {
  try {
    yield Auth.signUp({
      username: email,
      password,
    });
    yield put(signUpSuccess());
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* userSagas() {
  yield all([call(onSignUpStart)]);
}
