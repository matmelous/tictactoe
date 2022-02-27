import React from "react";
import Board from "../../components/organisms/Board";
import GameStatus from "../../components/organisms/GameStatus";
import { Wrapper } from "./styles";
import { GameSettings } from "../../components/organisms/GameSettings";
import Victory from "../../components/organisms/Victory";
import Draw from "../../components/organisms/Draw";

function Game() {

  return (
    <Wrapper>
      <GameStatus />
      <Board />
      <GameSettings />
      <Victory />
      <Draw />
    </Wrapper>
  );
}

export default Game;
