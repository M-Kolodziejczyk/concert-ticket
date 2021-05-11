import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import artistReducer from "./artist/artist.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  artist: artistReducer,
});

export default rootReducer;
