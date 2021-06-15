import { call, all, put, takeLatest } from "@redux-saga/core/effects";
import { API } from "aws-amplify";
import * as mutations from "../../api/mutations";
import * as queries from "../../api/queries";

import OrderActionTypes from "./order.types";

import {
  createOrderSuccess,
  createOrderFailure,
  getOrderSuccess,
  getOrderFailure,
} from "./order.actions";

export function* createOrder({ payload: { userName, fullName, tickets } }) {
  try {
    const res = yield API.graphql({
      query: mutations.processOrder,
      variables: {
        input: {
          userName,
          fullName,
          tickets,
        },
      },
    });

    yield put(createOrderSuccess(JSON.parse(res.data.processOrder)));
  } catch (error) {
    yield put(createOrderFailure(error));
  }
}

export function* onCreateOrderStart() {
  yield takeLatest(OrderActionTypes.CREATE_ORDER_START, createOrder);
}

export function* getOrder({ payload }) {
  try {
    const res = yield API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: queries.getOrder,
      variables: {
        id: payload,
      },
    });

    yield put(getOrderSuccess(res.data.getOrder));
  } catch (error) {
    yield put(getOrderFailure(error));
  }
}

export function* onGetOrderStart() {
  yield takeLatest(OrderActionTypes.GET_ORDER_START, getOrder);
}

export function* orderSagas() {
  yield all([call(onCreateOrderStart), call(onGetOrderStart)]);
}
