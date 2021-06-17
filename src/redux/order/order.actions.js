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
