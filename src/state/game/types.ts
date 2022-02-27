import { playerType } from "../../types/types";

export type gameSlice = {
  player: playerType;
  squares: {
    [key: number]: null | playerType;
  };
};
