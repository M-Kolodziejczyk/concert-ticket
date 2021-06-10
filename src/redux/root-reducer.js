import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import artistReducer from "./artist/artist.reducer";
import bandReducer from "./band/band.reducer";
import notificationReducer from "./notification/notification.reducer";
import invitationReducer from "./invitation/invitation.reducer";
import concertReducer from "./concert/concert.reducer";
import ticketReducer from "./ticket/ticket.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  artist: artistReducer,
  band: bandReducer,
  notification: notificationReducer,
  invitation: invitationReducer,
  concert: concertReducer,
  ticket: ticketReducer,
});

export default rootReducer;
