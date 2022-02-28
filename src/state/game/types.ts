import { MoveType, SquaresType } from "../../types/types";

type WinnerType = null | string | boolean;

export type GameSliceType = {
  currentMove: MoveType;
  playerOne: string;
  playerTwo: string;
  winner: WinnerType;
  squares: SquaresType;
};

export type UpdateGameType = {
  squares: SquaresType;
  currentMove: MoveType;
  winner: WinnerType;
};
