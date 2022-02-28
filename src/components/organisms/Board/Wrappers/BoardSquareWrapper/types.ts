import { UpdateGameType } from "../../../../../state/game/types";
import { MoveType, SquaresType } from "../../../../../types/types";

export type PropsType = {
  id: number;
};

export type OnClickType = {
  id: number;
  squares: SquaresType;
  currentMove: MoveType;
  stateDispatcherFunction: (payload: UpdateGameType) => void;
  playerOne: string;
  playerTwo: string;
};
