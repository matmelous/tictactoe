import React from "react";
import Board from "../../components/organisms/Board";
import GameStatus from "../../components/organisms/GameStatus";
import { Wrapper } from "./styles";
import { StartGame } from "../../components/organisms/StartGame";
import EndGame from "../../components/organisms/EndGame";

function Game() {

  return (
    <Wrapper>
      <GameStatus />
      <Board />
      <StartGame />
      <EndGame />
    </Wrapper>
  );
}

export default Game;
