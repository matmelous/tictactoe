import { MoveEnum } from "./enums";

export type MoveType = MoveEnum.cross | MoveEnum.circle;

export type SquaresType = {
  [key: number]: null | MoveType;
};
