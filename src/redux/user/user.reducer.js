import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  userLoading: true,
  getUserLoading: false,
  isLogged: false,
  errorMessage: {},
  successMessage: {},
  user: {},
  userConcerts: {},
  pushRoute: "",
  formLoading: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        pushRoute: "/",
        errorMessage: {},
        successMessage: { signup: "You have signed up successfully" },
      };
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        errorMessage: { signup: action.payload.message },
      };
    case UserActionTypes.SIGN_UP_CONFIRM_SUCCESS:
      return {
        ...state,
        successMessage: { confirmSignup: "Your registration is complete" },
        errorMessage: {},
      };
    case UserActionTypes.SIGN_UP_CONFIRM_FAILURE:
      return {
        ...state,
        errorMessage: { confirmSignup: action.payload.message },
        successMessage: {},
      };
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        pushRoute: "/",
        currentUser: action.payload,
        errorMessage: {},
        successMessage: { signin: "You have signed in successfully" },
        isLogged: true,
        userLoading: false,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        errorMessage: { signin: action.payload.message },
        isLogged: false,
        userLoading: false,
      };
    case UserActionTypes.RESEND_CODE_SUCCESS:
      return {
        ...state,
        successMessage: { resendCode: action.payload },
        errorMessage: {},
      };
    case UserActionTypes.RESEND_CODE_FAILURE:
      return {
        ...state,
        errorMessage: { resendCode: action.payload.message },
        successMessage: {},
      };
    case UserActionTypes.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        successMessage: {
          forgotPassword: "We've sent a reset code to your email.",
        },
        errorMessage: {},
      };
    case UserActionTypes.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        errorMessage: {
          forgotPassword: action.payload.message,
        },
        successMessage: {},
      };
    case UserActionTypes.NEW_PASSWORD_SUCCESS:
      return {
        ...state,
        successMessage: {
          newPassword: "Your password has been successfully changed.",
        },
        errorMessage: {},
      };
    case UserActionTypes.NEW_PASSWORD_FAILURE:
      return {
        ...state,
        errorMessage: {
          newPassword: action.payload.message,
        },
        successMessage: {},
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        errorMessage: {},
        successMessage: { signout: "Successfully signed out" },
        isLogged: false,
        userLoading: false,
      };
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        errorMessage: { signout: action.payload.message },
        successMessage: {},
      };
    case UserActionTypes.GET_USER_START:
      return {
        ...state,
        getUserLoading: true,
      };
    case UserActionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        getUserLoading: false,
        user: action.payload,
        userConcerts: action.payload?.concerts?.items.reduce(
          (obj, item) => ({ ...obj, [item.id]: item }),
          {}
        ),
        errorMessage: {},
      };
    case UserActionTypes.GET_USER_FAILURE:
      return {
        ...state,
        getUserLoading: false,
        user: {},
        errorMessage: { getUser: "Get user failure" },
      };
    case UserActionTypes.CHANGE_PASSWORD_START:
      return {
        ...state,
        formLoading: true,
      };
    case UserActionTypes.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        formLoading: false,
        successMessage: {
          changePassword: "Your password has been successfully changed.",
        },
        errorMessage: {},
      };
    case UserActionTypes.CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        formLoading: false,
        successMessage: {},
        errorMessage: {
          changePassword: "Unable to change password",
        },
      };
    default:
      return state;
  }
};

export default userReducer;
