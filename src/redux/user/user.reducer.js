import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: {},
  successMessage: {},
  pushRoute: "",
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
      };
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        errorMessage: { signin: action.payload.message },
      };
    default:
      return state;
  }
};

export default userReducer;
