import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { player } from "../../types/enums";
import { squaresType } from "../../types/types";
import { initialState } from "./constants";

function calculateWinner(squares: squaresType) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let filled = 0;
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[i] !== null) {
      filled++;
    }

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export const slice = createSlice({
  name: "game",
  initialState,
  reducers: {
    restart: () => {
      return initialState;
    },
    setPlayer1Name: (state, action: PayloadAction<string>) => {
      const playerName = action.payload;
      state.player1Name = playerName;
    },
    setPlayer2Name: (state, action: PayloadAction<string>) => {
      const playerName = action.payload;
      state.player2Name = playerName;
    },
    setSquare: (state, action: PayloadAction<number>) => {
      const square = action.payload;
      const lastSquares = { ...state.squares };
      lastSquares[square] = state.player;
      state.squares = lastSquares;
      state.player =
        state.player === player.cross ? player.circle : player.cross;
      state.winner = calculateWinner(lastSquares);
    },
  },
});

export const actions = slice.actions;

export const reducer = slice.reducer;
