import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { player } from "../../types/enums";
import { playerType } from "../../types/types";
import { initialState } from "./constants";

export const slice = createSlice({
  name: "game",
  initialState,
  reducers: {
    clear: () => initialState,
    setPlayer: (state, action: PayloadAction<playerType>) => {
      const player = action.payload;
      state.player = player;
    },
    setSquare: (state, action: PayloadAction<number>) => {
      const square = action.payload;
      const lastSquares = { ...state.squares };
      lastSquares[square] = state.player;
      state.squares = lastSquares;
      state.player =
        state.player === player.cross ? player.circle : player.cross;
    },
  },
});

export const actions = slice.actions;

export const reducer = slice.reducer;
