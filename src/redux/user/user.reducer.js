import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  userLoading: true,
  getUserLoading: false,
  isLogged: false,
  errorMessage: {},
  successMessage: {},
  user: {},
  pushRoute: "",
  formLoading: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_UP_START:
      return {
        ...state,
        formLoading: true,
      };
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        formLoading: false,
        pushRoute: "/",
        errorMessage: {},
        successMessage: {
          signup:
            "You have signed up successfully, check your email and go to confirm page",
        },
      };
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        formLoading: false,
        errorMessage: { signup: action.payload.message },
      };
    case UserActionTypes.SIGN_UP_CONFIRM_START:
      return {
        ...state,
        formLoading: true,
      };
    case UserActionTypes.SIGN_UP_CONFIRM_SUCCESS:
      return {
        ...state,
        formLoading: false,
        successMessage: {
          confirmSignup:
            "Your registration has been successfully completed, you can now sign in",
        },
        errorMessage: {},
      };
    case UserActionTypes.SIGN_UP_CONFIRM_FAILURE:
      return {
        ...state,
        formLoading: false,
        errorMessage: { confirmSignup: action.payload.message },
        successMessage: {},
      };
    case UserActionTypes.GOOGLE_SIGN_IN_START:
    case UserActionTypes.EMAIL_SIGN_IN_START:
      return {
        ...state,
        formLoading: true,
      };
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        formLoading: false,
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
        formLoading: false,
        errorMessage: { signin: action.payload.message },
        isLogged: false,
        userLoading: false,
      };
    case UserActionTypes.RESEND_CODE_START:
      return {
        ...state,
        formLoading: true,
      };
    case UserActionTypes.RESEND_CODE_SUCCESS:
      return {
        ...state,
        formLoading: false,
        successMessage: {
          resendCode: "Confirm code sent successfuly, check your email.",
        },
        errorMessage: {},
      };
    case UserActionTypes.RESEND_CODE_FAILURE:
      return {
        ...state,
        formLoading: false,
        errorMessage: { resendCode: action.payload.message },
        successMessage: {},
      };
    case UserActionTypes.FORGOT_PASSWORD_START:
      return {
        ...state,
        formLoading: true,
      };
    case UserActionTypes.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        formLoading: false,
        successMessage: {
          forgotPassword: "We've sent a reset code to your email.",
        },
        errorMessage: {},
      };
    case UserActionTypes.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        formLoading: false,
        errorMessage: {
          forgotPassword: action.payload.message,
        },
        successMessage: {},
      };
    case UserActionTypes.NEW_PASSWORD_START:
      return {
        ...state,
        formLoading: true,
      };
    case UserActionTypes.NEW_PASSWORD_SUCCESS:
      return {
        ...state,
        formLoading: false,
        successMessage: {
          newPassword: "Your password has been successfully changed.",
        },
        errorMessage: {},
      };
    case UserActionTypes.NEW_PASSWORD_FAILURE:
      return {
        ...state,
        formLoading: false,
        errorMessage: {
          newPassword: action.payload.message,
        },
        successMessage: {},
      };
    case UserActionTypes.SIGN_OUT_START:
      return {
        ...state,
        formLoading: true,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        formLoading: false,
        currentUser: null,
        errorMessage: {},
        successMessage: { signout: "Successfully signed out" },
        isLogged: false,
        userLoading: false,
      };
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        formLoading: false,
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
    case UserActionTypes.ADD_ARTIST_ID:
      return {
        ...state,
        user: {
          ...state.user,
          artistID: action.payload,
        },
      };
    case UserActionTypes.REMOVE_ARTIST_ID:
      return {
        ...state,
        user: {
          ...state.user,
          artistID: null,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
