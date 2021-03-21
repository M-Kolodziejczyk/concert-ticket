import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.payload) {
    default:
      return state;
  }
};

export default userReducer;
