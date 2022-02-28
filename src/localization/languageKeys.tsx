import React from "react";

export const VICTORY_TITLE = "We have a winner !!!";
export const VICTORY_DESCRIPTION = (name: string) => (
  <>
    Congratulations <span style={{ textTransform: "capitalize" }}>{name}</span>
  </>
);
export const PLAY_AGAIN = "Play again";
export const DRAW_TITLE = "We have a Draw !!!";
export const DRAW_DESCRIPTION = "No one wins...";
export const NEXT_MOVE = (name: string) => (
  <>
    Next move:
    <span style={{ textTransform: "capitalize", marginLeft: 5 }}>{name}</span>
  </>
);
export const WELCOME_TITLE = "Welcome to Tic Tac Toe";
export const WELCOME_DESCRIPTION = "Please enter player names below:";
export const WELCOME_BUTTON = "Start Game";
