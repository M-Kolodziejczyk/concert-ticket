import InvitationActionTypes from "./invitation.type";

const INITIAL_STATE = {
  invitations: [],
  errorMessage: {},
  successMessage: {},
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
          (item) => item.senderTable === "band"
        ),
        concertInvitations: action.payload.filter(
          (item) => item.senderTable === "concert"
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
    case InvitationActionTypes.ACCEPT_BAND_INVITATION_SUCCESS:
      return {
        ...state,
        errorMessage: {},
        successMessage: {
          acceptBandInvitation: "You accepted band invitation",
        },
      };
    case InvitationActionTypes.ACCEPT_BAND_INVITATION_FAILURE:
      return {
        ...state,
        successMessage: {},
        errorMessage: {
          acceptBandInvitation: "Accept invitation failure",
        },
      };
    case InvitationActionTypes.REJECT_BAND_INVITATION_SUCCESS:
      return {
        ...state,
        successMessage: {
          rejectBandInvitation: "Band invitation rejected",
        },
        errorMessage: {},
      };
    case InvitationActionTypes.REJECT_BAND_INVITATION_FAILURE:
      return {
        ...state,
        errorMessage: {
          rejectBandInvitation: "Band invitation reject failure",
        },
        successMessage: {},
      };
    case InvitationActionTypes.ACCEPT_CONCERT_INVITATION_SUCCESS:
      return {
        ...state,
        errorMessage: {},
        successMessage: {
          acceptConcertInvitation: "You accepted concert invitation",
        },
      };
    case InvitationActionTypes.ACCEPT_CONCERT_INVITATION_FAILURE:
      return {
        ...state,
        successMessage: {},
        errorMessage: {
          acceptConcertInvitation: "Accept concert invitation failure",
        },
      };
    default:
      return state;
  }
};

export default invitationReducer;
