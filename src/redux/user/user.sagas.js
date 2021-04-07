import { put, takeLatest, all, call } from "redux-saga/effects";
import { Auth } from "aws-amplify";

import UserActionTypes from "./user.types";

import {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
} from "./user.actions";

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

export function* emailSignIn({ payload: { email, password } }) {
  try {
    const user = yield Auth.signIn({
      username: email,
      password,
    });
    yield put(signInSuccess(user.attributes));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onEmailSignInstart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* userSagas() {
  yield all([call(onSignUpStart), call(onEmailSignInstart)]);
}