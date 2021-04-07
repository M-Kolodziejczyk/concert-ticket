import UserActionTypes from "./user.types";

export const signUpSuccess = () => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
});

export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});

export const signUpStart = (userCredentials) => {
  return {
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredentials,
  };
};

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
