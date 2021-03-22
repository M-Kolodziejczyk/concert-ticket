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
