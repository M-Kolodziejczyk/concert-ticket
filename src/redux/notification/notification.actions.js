import NotificationActionTypes from "./notification.types";

export const createInviteNotificationStart = (data) => ({
  type: NotificationActionTypes.CREATE_INVITE_NOTIFICATION_START,
  payload: data,
});

export const createInviteNotificationSucces = (data) => ({
  type: NotificationActionTypes.CREATE_INVITE_NOTIFICATION_SUCCESS,
  payload: data,
});
