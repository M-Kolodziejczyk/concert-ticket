import { call, all, put, takeLatest } from "@redux-saga/core/effects";
import { API } from "aws-amplify";
import * as mutations from "../../api/mutations";

import OrderActionTypes from "./order.types";

import { createOrderSuccess, createOrderFailure } from "./order.actions";

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

    yield put(createOrderSuccess(res));
  } catch (error) {
    yield put(createOrderFailure(error));
  }
}

export function* onCreateOrderStart() {
  yield takeLatest(OrderActionTypes.CREATE_ORDER_START, createOrder);
}

export function* orderSagas() {
  yield all([call(onCreateOrderStart)]);
}
