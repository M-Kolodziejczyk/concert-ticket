import OrderActionTypes from "./order.types";

export const createOrderStart = (data) => ({
  type: OrderActionTypes.CREATE_ORDER_START,
  payload: data,
});

export const createOrderSuccess = (res) => ({
  type: OrderActionTypes.CREATE_ORDER_SUCCESS,
  payload: res,
});

export const createOrderFailure = (error) => ({
  type: OrderActionTypes.CREATE_ORDER_FAILURE,
  payload: error,
});

export const getOrderStart = (id) => ({
  type: OrderActionTypes.GET_ORDER_START,
  payload: id,
});

export const getOrderSuccess = (res) => ({
  type: OrderActionTypes.GET_ORDER_SUCCESS,
  payload: res,
});

export const getOrderFailure = (error) => ({
  type: OrderActionTypes.GET_ORDER_FAILURE,
  payload: error,
});

export const clearOrder = () => ({
  type: OrderActionTypes.CLEAR_ORDER,
});

export const processPaymentStart = (data) => ({
  type: OrderActionTypes.PROCESS_PAYMENT_START,
  payload: data,
});

export const processPaymentSuccess = (res) => ({
  type: OrderActionTypes.PROCESS_PAYMENT_SUCCESS,
  payload: res,
});

export const processPaymentFailure = (error) => ({
  type: OrderActionTypes.PROCESS_PAYMENT_FAILURE,
  payload: error,
});

export const clearOrderResponse = () => ({
  type: OrderActionTypes.CLEAR_ORDER_RESPONSE,
});

export const listUserOrdersByDateStart = (id) => ({
  type: OrderActionTypes.LIST_USER_ORDERS_BY_DATE_START,
  payload: id,
});

export const listUserOrdersByDateSuccess = (res) => ({
  type: OrderActionTypes.LIST_USER_ORDERS_BY_DATE_SUCCESS,
  payload: res,
});

export const listUserOrdersByDateFailure = (error) => ({
  type: OrderActionTypes.LIST_USER_ORDERS_BY_DATE_FAILURE,
  payload: error,
});

export const clearUser = () => ({
  type: OrderActionTypes.CLEAR_USER,
});
