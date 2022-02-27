import { playerType, squaresType } from "../../types/types";

export type gameSlice = {
  player: playerType;
  player1Name: string;
  player2Name: string;
  winner: null | playerType | boolean;
  squares: squaresType;
  history: {
    player1: number;
    player2: number;
  };
};
