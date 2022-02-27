import { player } from "./enums";

export type playerType = player.cross | player.circle;

export type squaresType = {
  [key: number]: null | playerType;
};
