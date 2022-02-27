import React, { useEffect, useState } from "react";
import { useSelector } from "../../../state/store";
import { player } from "../../../types/enums";
import { Wrapper } from "./styles";

const GameStatus = () => {
  const gameStatus = useSelector((state) => state.game);
  const [currentPlayer, setCurrentPlayer] = useState<string>(
    gameStatus.player1Name
  );
  useEffect(() => {
    setCurrentPlayer(
      gameStatus.player === player.cross
        ? gameStatus.player1Name
        : gameStatus.player2Name
    );
  }, [gameStatus.player, gameStatus.player1Name, gameStatus.player2Name]);

  return (
    <Wrapper>
      Next move:
      <span style={{ textTransform: "capitalize", marginLeft: 5 }}>
        {currentPlayer}
      </span>
    </Wrapper>
  );
};

export default GameStatus;
