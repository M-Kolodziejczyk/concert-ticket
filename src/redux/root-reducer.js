import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import artistReducer from "./artist/artist.reducer";
import bandReducer from "./band/band.reducer";
import notificationReducer from "./notification/notification.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  artist: artistReducer,
  band: bandReducer,
  notification: notificationReducer,
});

export default rootReducer;
