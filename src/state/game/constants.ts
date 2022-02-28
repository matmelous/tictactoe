import { MoveEnum } from "../../types/enums";
import { GameSliceType } from "./types";

export const initialState: GameSliceType = {
  currentMove: MoveEnum.cross,
  playerOne: "",
  playerTwo: "",
  winner: null,
  squares: Array(9).reduce((acc, key) => ({ ...acc, [key]: null }), {}),
};
