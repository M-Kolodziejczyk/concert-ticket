import { put, takeLatest, all, call } from "redux-saga/effects";
import { Auth, API } from "aws-amplify";
import * as queries from "../../api/queries";
import * as mutations from "../../api/mutations";

import UserActionTypes from "./user.types";
import ArtistActionTypes from "../artist/artist.types";

import {
  signUpSuccess,
  signUpFailure,
  signUpConfirmSuccess,
  signUpConfirmFailure,
  signInSuccess,
  signInFailure,
  resendCodeSuccess,
  resendCodeFailure,
  forgotPasswordSuccess,
  forgotPasswordFailure,
  newPasswordSuccess,
  newPasswordFailure,
  signOutSuccess,
  signOutFailure,
  getUserSuccess,
  getUserFailure,
  changePasswordSuccess,
  changePasswordFailure,
  addArtistId,
  removeArtistId,
  deleteUserSuccess,
  deleteUserFailure,
  deleteUserRequirementsFailure,
} from "./user.actions";

export function* loadUser() {
  try {
    const user = yield Auth.currentAuthenticatedUser();
    yield put(signInSuccess(user.attributes));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onLoadUserStart() {
  yield takeLatest(UserActionTypes.LOAD_USER_START, loadUser);
}

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

export function* signUpConfirm({ payload: { email, code } }) {
  try {
    yield Auth.confirmSignUp(email, code);
    yield put(signUpConfirmSuccess());
  } catch (error) {
    yield put(signUpConfirmFailure(error));
  }
}

export function* onSignUpConfirmStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_CONFIRM_START, signUpConfirm);
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

export function* googleSignIn() {
  try {
    yield Auth.federatedSignIn({ provider: "Google" });
    const user = yield Auth.currentAuthenticatedUser();
    yield put(signInSuccess(user.attributes));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignIn() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

export function* resendCode({ payload: { email } }) {
  try {
    yield Auth.resendSignUp(email);
    yield put(resendCodeSuccess());
  } catch (error) {
    yield put(resendCodeFailure(error));
  }
}

export function* onResendCodeStart() {
  yield takeLatest(UserActionTypes.RESEND_CODE_START, resendCode);
}

export function* forgotPassword({ payload: { email } }) {
  try {
    yield Auth.forgotPassword(email);
    yield put(forgotPasswordSuccess());
  } catch (error) {
    yield put(forgotPasswordFailure(error));
  }
}

export function* onForgotPasswordStart() {
  yield takeLatest(UserActionTypes.FORGOT_PASSWORD_START, forgotPassword);
}

export function* newPassword({ payload: { email, code, newPassword } }) {
  try {
    yield Auth.forgotPasswordSubmit(email, code, newPassword);
    yield put(newPasswordSuccess());
  } catch (error) {
    yield put(newPasswordFailure(error));
  }
}

export function* onNewPasswordStart() {
  yield takeLatest(UserActionTypes.NEW_PASSWORD_START, newPassword);
}

export function* signOut() {
  try {
    yield Auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onSignOut() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* getUser() {
  try {
    const authUser = yield Auth.currentAuthenticatedUser();
    const user = yield API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: queries.getUser,
      variables: {
        email: authUser.attributes.email,
      },
    });

    if (user.data.getUser === null) {
      yield API.graphql({
        authMode: "AMAZON_COGNITO_USER_POOLS",
        query: mutations.createUser,
        variables: {
          input: {
            email: authUser.attributes.email,
          },
        },
      });
    }

    yield put(
      getUserSuccess(user.data.getUser || { email: authUser.attributes.email })
    );
  } catch (error) {
    yield put(getUserFailure(error));
  }
}

export function* onGetUser() {
  yield takeLatest(UserActionTypes.GET_USER_START, getUser);
}

export function* changePassword({ payload: { oldPassword, newPassword } }) {
  try {
    const user = yield Auth.currentAuthenticatedUser();
    const res = yield Auth.changePassword(user, oldPassword, newPassword);

    yield put(changePasswordSuccess(res));
  } catch (error) {
    yield put(changePasswordFailure(error));
  }
}

export function* onChangePasswordStart() {
  yield takeLatest(UserActionTypes.CHANGE_PASSWORD_START, changePassword);
}

export function* addArtistIdToUser({ payload }) {
  yield put(addArtistId(payload.id));
}

export function* onCreateArtistSuccess() {
  yield takeLatest(ArtistActionTypes.CREATE_ARTIST_SUCCESS, addArtistIdToUser);
}

export function* removeArtistIdFromUser() {
  yield put(removeArtistId(null));
}

export function* onDeleteArtistSuccess() {
  yield takeLatest(
    ArtistActionTypes.DELETE_USER_ARTIST_SUCCESS,
    removeArtistIdFromUser
  );
}

export function* deleteUser() {
  try {
    const authUser = yield Auth.currentAuthenticatedUser();
    const email = authUser.attributes.email;
    const userName = authUser.username;

    const res = yield API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: queries.getFullUser,
      variables: {
        email,
      },
    });

    const concerts = res.data.getUser.concerts.items;
    const bands = res.data.getUser.bands.items;
    const artistID = res.data.getUser.artistID;

    if (concerts.length > 0) {
      yield put(
        deleteUserRequirementsFailure({
          message: "You must delete all your concerts first!",
        })
      );
    } else if (bands.length > 0) {
      yield put(
        deleteUserRequirementsFailure({
          message: "You must delete all your bands first!",
        })
      );
    } else if (artistID !== null) {
      yield put(
        deleteUserRequirementsFailure({
          message: "You must delete your artist first!",
        })
      );
    } else {
      const res = yield API.graphql({
        query: mutations.delteAccount,
        variables: {
          userName: userName,
          email: email,
        },
      });

      yield Auth.signOut();
      yield put(deleteUserSuccess(JSON.parse(res.data.delteAccount)));
    }
  } catch (error) {
    yield put(deleteUserFailure(error));
  }
}

export function* onDeleteUserStart() {
  yield takeLatest(UserActionTypes.DELETE_USER_START, deleteUser);
}

export function* userSagas() {
  yield all([
    call(onSignUpStart),
    call(onEmailSignInstart),
    call(onGoogleSignIn),
    call(onSignUpConfirmStart),
    call(onResendCodeStart),
    call(onForgotPasswordStart),
    call(onNewPasswordStart),
    call(onLoadUserStart),
    call(onSignOut),
    call(onGetUser),
    call(onChangePasswordStart),
    call(onCreateArtistSuccess),
    call(onDeleteArtistSuccess),
    call(onDeleteUserStart),
  ]);
}
