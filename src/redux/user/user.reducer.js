import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  pushRoute: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        pushRoute: "/",
      };
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export default userReducer;
