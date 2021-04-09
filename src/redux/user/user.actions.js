import UserActionTypes from "./user.types";

export const signUpStart = (userCredentials) => {
  return {
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredentials,
  };
};

export const signUpSuccess = () => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
});

export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});

export const signUpConfirmStart = (userData) => ({
  type: UserActionTypes.SIGN_UP_CONFIRM_START,
  payload: userData,
});

export const signUpConfirmSuccess = () => ({
  type: UserActionTypes.SIGN_UP_CONFIRM_SUCCESS,
});

export const signUpConfirmFailure = (error) => ({
  type: UserActionTypes.SIGN_UP_CONFIRM_FAILURE,
  payload: error,
});

export const emailSignInStart = (userCredentials) => {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: userCredentials,
  };
};

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const resendCodeStart = (email) => ({
  type: UserActionTypes.RESEND_CODE_START,
  payload: email,
});

export const resendCodeSuccess = () => ({
  type: UserActionTypes.RESEND_CODE_SUCCESS,
});

export const resendCodeFailure = (error) => ({
  type: UserActionTypes.RESEND_CODE_FAILURE,
  payload: error,
});
