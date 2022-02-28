import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./constants";
import { UpdateGameType } from "./types";

export const slice = createSlice({
  name: "game",
  initialState,
  reducers: {
    restart: () => {
      return initialState;
    },
    setPlayerOne: (state, action: PayloadAction<string>) => {
      const playerName = action.payload;
      state.playerOne = playerName;
    },
    setPlayerTwo: (state, action: PayloadAction<string>) => {
      const playerName = action.payload;
      state.playerTwo = playerName;
    },
    updateGame: (state, action: PayloadAction<UpdateGameType>) => {
      const { squares, currentMove, winner } = action.payload;
      state.squares = squares;
      state.currentMove = currentMove;
      state.winner = winner;
    },
  },
});

export const actions = slice.actions;

export const reducer = slice.reducer;
