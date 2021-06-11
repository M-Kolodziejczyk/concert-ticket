import { put, takeLatest, all, call } from "redux-saga/effects";
import { API } from "aws-amplify";
import * as mutations from "../../api/mutations";
import * as queries from "../../api/queries";

import TicketActionTypes from "./ticket.types";

import {
  createTicketSuccess,
  createTicketFailure,
  getTicketsByConcertIdSuccess,
  getTicketsByConcertIdFailure,
} from "./ticket.actions";

export function* createTicket({ payload: data }) {
  try {
    const res = yield API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: mutations.createTicket,
      variables: {
        input: {
          ...data,
        },
      },
    });
    yield put(createTicketSuccess(res.data.createTicket));
  } catch (error) {
    yield put(createTicketFailure(error));
  }
}

export function* onCreatTicketStart() {
  yield takeLatest(TicketActionTypes.CREATE_TICKET_START, createTicket);
}

export function* getTicketsByConcertId({ payload }) {
  try {
    const res = yield API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: queries.ticketsByConcertID,
      variables: {
        concertID: payload,
      },
    });
    yield put(
      getTicketsByConcertIdSuccess({
        concertID: payload,
        tickets: res.data.ticketsByConcertID.items,
      })
    );
  } catch (error) {
    yield put(getTicketsByConcertIdFailure(error));
  }
}

export function* onGetTicketByConcertIdStart() {
  yield takeLatest(
    TicketActionTypes.GET_TICKETS_BY_CONCERTID_START,
    getTicketsByConcertId
  );
}

export function* ticketSagas() {
  yield all([call(onCreatTicketStart), call(onGetTicketByConcertIdStart)]);
}
