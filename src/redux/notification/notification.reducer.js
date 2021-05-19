import NotificationActionTypes from "./notification.types";

const INITIAL_STATE = {
  newInvitation: {},
};

const notificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NotificationActionTypes.CREATE_INVITE_NOTIFICATION_SUCCESS:
      return {
        ...state,
        newInvitation: {
          band: "NEW BAND",
        },
      };
    default:
      return state;
  }
};

export default notificationReducer;
