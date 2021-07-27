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
    case InvitationActionTypes.ACCEPT_BAND_INVITATION_START:
      return {
        ...state,
        loadingFormInvitations: true,
      };
    case InvitationActionTypes.ACCEPT_BAND_INVITATION_SUCCESS:
      return {
        ...state,
        loadingFormInvitations: false,
        bandInvitations: state.bandInvitations.filter(
          (item) =>
            item.email !== action.payload.email ||
            item.createdAt !== action.payload.createdAt
        ),
        successMessage: {
          bandInvitation: "You accepted band invitation",
        },
        errorMessage: {},
      };
    case InvitationActionTypes.ACCEPT_BAND_INVITATION_FAILURE:
      return {
        ...state,
        loadingFormInvitations: false,
        successMessage: {},
        errorMessage: {
          bandInvitation: "Accept invitation failure",
        },
      };
    case InvitationActionTypes.REJECT_BAND_INVITATION_START:
      return {
        ...state,
        loadingFormInvitations: true,
      };
    case InvitationActionTypes.REJECT_BAND_INVITATION_SUCCESS:
      return {
        ...state,
        loadingFormInvitations: false,
        bandInvitations: state.bandInvitations.filter(
          (item) =>
            item.email !== action.payload.email ||
            item.createdAt !== action.payload.createdAt
        ),
        successMessage: {
          bandInvitation: "Band invitation rejected",
        },
        errorMessage: {},
      };
    case InvitationActionTypes.REJECT_BAND_INVITATION_FAILURE:
      return {
        ...state,
        loadingFormInvitations: false,
        errorMessage: {
          bandInvitation: "Band invitation reject failure",
        },
        successMessage: {},
      };
    case InvitationActionTypes.ACCEPT_CONCERT_INVITATION_START:
      return {
        ...state,
        loadingFormInvitations: true,
      };
    case InvitationActionTypes.ACCEPT_CONCERT_INVITATION_SUCCESS:
      return {
        ...state,
        loadingFormInvitations: false,
        concertInvitations: state.concertInvitations.filter(
          (item) =>
            item.email !== action.payload.email ||
            item.createdAt !== action.payload.createdAt
        ),
        successMessage: {
          concertInvitation: "You accepted concert invitation",
        },
        errorMessage: {},
      };
    case InvitationActionTypes.ACCEPT_CONCERT_INVITATION_FAILURE:
      return {
        ...state,
        loadingFormInvitations: false,
        successMessage: {},
        errorMessage: {
          concertInvitation: "Accept concert invitation failure",
        },
      };
    case InvitationActionTypes.REJECT_CONCERT_INVITATION_START:
      return {
        ...state,
        loadingFormInvitations: true,
      };
    case InvitationActionTypes.REJECT_CONCERT_INVITATION_SUCCESS:
      return {
        ...state,
        loadingFormInvitations: false,
        concertInvitations: state.concertInvitations.filter(
          (item) =>
            item.email !== action.payload.email ||
            item.createdAt !== action.payload.createdAt
        ),
        successMessage: {
          concertInvitation: "Reject concert invitation success",
        },
        errorMessage: {},
      };
    case InvitationActionTypes.REJECT_CONCERT_INVITATION_FAILURE:
      return {
        ...state,
        loadingFormInvitations: false,
        successMessage: {},
        errorMessage: {
          concertInvitation: "Reject concert invitaion failure",
        },
      };
    case InvitationActionTypes.CLEAR_USER:
      return {
        ...state,
        errorMessage: {},
        successMessage: {},
        bandInvitations: [],
        concertInvitations: [],
        loadingInvitations: false,
        loadingFormInvitations: false,
        isListInvitationComplete: false,
      };
    default:
      return state;
  }
};

export default invitationReducer;
