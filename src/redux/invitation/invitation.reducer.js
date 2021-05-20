import InvitationActionTypes from "./invitation.type";

const INITIAL_STATE = {
  invitations: [],
  errorMessage: {},
  bandInvitations: [],
  concertInvitations: [],
};

const invitationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case InvitationActionTypes.LIST_USER_INVITATIONS_SUCCESS:
      return {
        ...state,
        invitations: action.payload,
        bandInvitations: action.payload.filter(
          (item) => item.invitationTable === "band"
        ),
        concertInvitations: action.payload.filter(
          (item) => item.invitationTable === "concert"
        ),
        errorMessage: {},
      };
    case InvitationActionTypes.LIST_USER_INVITATIONS_FAILURE:
      return {
        ...state,
        error: action.payload,
        errorMessage: {
          listUserInvitations: "List User invittions failure",
        },
      };
    default:
      return state;
  }
};

export default invitationReducer;
