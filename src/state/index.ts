import { combineReducers } from "redux";

import * as game from "./game";

export const reducer = combineReducers({
  game: game.reducer,
});

export const actions = Object.freeze({
  game: game.actions,
});
