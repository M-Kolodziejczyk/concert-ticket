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
