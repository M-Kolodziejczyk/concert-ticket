import InvitationActionTypes from "./invitation.type";

const INITIAL_STATE = {
  errorMessage: {},
  successMessage: {},
  bandInvitations: [],
  concertInvitations: [],
  loadingInvitations: false,
  loadingFormInvitations: false,
  isListInvitationComplete: false,
};

const invitationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case InvitationActionTypes.LIST_USER_INVITATIONS_START:
      return {
        ...state,
        loadingInvitations: true,
      };
    case InvitationActionTypes.LIST_USER_INVITATIONS_SUCCESS:
      return {
        ...state,
        loadingInvitations: false,
        isListInvitationComplete: true,
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
        loadingInvitations: false,
        isListInvitationComplete: true,
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
    case InvitationActionTypes.REJECT_CONCERT_INVITATION_SUCCESS:
      return {
        ...state,
        errorMessage: {},
        successMessage: {
          rejectConcertInvitation: "Reject concert invitation success",
        },
      };
    case InvitationActionTypes.REJECT_CONCERT_INVITATION_FAILURE:
      return {
        ...state,
        successMessage: {},
        errorMessage: {
          rejectConcertInvitation: "Reject concert invitaion failure",
        },
      };
    default:
      return state;
  }
};

export default invitationReducer;
