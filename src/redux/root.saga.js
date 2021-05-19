import { all, call } from "redux-saga/effects";

import { userSagas } from "./user/user.sagas";
import { artistSagas } from "./artist/artist.sagas";
import { bandSagas } from "./band/band.sagas";
import { notificationSagas } from "./notification/notification.sagas";

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(artistSagas),
    call(bandSagas),
    call(notificationSagas),
  ]);
}
