import React from "react";
import { useSelector } from "../../../state/store";
import { MoveEnum } from "../../../types/enums";
import { Wrapper } from "./styles";
import * as language from "../../../localization/languageKeys";

const GameStatus = () => {
  const currentMove = useSelector((state) => state.game.currentMove);
  const playerOne = useSelector((state) => state.game.playerOne);
  const playerTwo = useSelector((state) => state.game.playerTwo);
  const currentPlayer = currentMove === MoveEnum.cross ? playerOne : playerTwo;

  return <Wrapper>{language.NEXT_MOVE(currentPlayer)}</Wrapper>;
};

export default GameStatus;
