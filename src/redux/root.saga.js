import { all, call } from "redux-saga/effects";

import { userSagas } from "./user/user.sagas";
import { artistSagas } from "./artist/artist.sagas";
import { bandSagas } from "./band/band.sagas";
import { notificationSagas } from "./notification/notification.sagas";
import { invitationSagas } from "./invitation/invitation.sagas";
import { concertSagas } from "./concert/concert.sagas";
import { ticketSagas } from "./ticket/ticket.sagas";
import { orderSagas } from "./order/order.sagas";

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(artistSagas),
    call(bandSagas),
    call(notificationSagas),
    call(invitationSagas),
    call(concertSagas),
    call(ticketSagas),
    call(orderSagas),
  ]);
}
