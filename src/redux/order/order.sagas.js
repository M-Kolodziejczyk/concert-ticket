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
  processPaymentSuccess,
  processPaymentFailure,
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

export function* processPayment({
  payload: { orderID, clientSecret, card, stripe },
}) {
  try {
    const stripePayload = yield stripe(clientSecret, {
      payment_method: {
        card: card,
      },
    });

    if (stripePayload.error?.payment_intent?.status === "succeeded") {
      yield put(processPaymentSuccess({ status: "paid" }));
    } else if (stripePayload.error) {
      yield put(processPaymentFailure(stripePayload.error.message));
    } else if (stripePayload?.paymentIntent?.status === "succeeded") {
      const res = yield API.graphql({
        query: mutations.processPayment,
        variables: {
          input: {
            paymentIntentID: stripePayload.paymentIntent.id,
            orderID,
          },
        },
      });
      yield put(processPaymentSuccess(JSON.parse(res.data.processPayment)));
    }
  } catch (error) {
    yield put(processPaymentFailure(error));
  }
}

export function* onProcessPaymentStart() {
  yield takeLatest(OrderActionTypes.PROCESS_PAYMENT_START, processPayment);
}

export function* orderSagas() {
  yield all([
    call(onCreateOrderStart),
    call(onGetOrderStart),
    call(onProcessPaymentStart),
  ]);
}
