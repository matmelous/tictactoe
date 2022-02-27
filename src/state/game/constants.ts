import { player } from "../../types/enums";
import { gameSlice } from "./types";

export const initialState: gameSlice = {
  player: player.cross,
  squares: {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
  },
};
