import React from "react";
import { actions, useSelector, useDispatch } from "../../../state/store";

import * as language from "../../../localization/languageKeys";
import GameModal from "../../molecules/GameModal";

const EndGame = () => {
  const dispatch = useDispatch();
  const winner = useSelector((state) => state.game.winner);

  const title = winner === false ? language.DRAW_TITLE : language.VICTORY_TITLE;
  const description =
    winner === false
      ? language.DRAW_DESCRIPTION
      : language.VICTORY_DESCRIPTION(typeof winner === "string" ? winner : "");

  const restartGame = () => {
    dispatch(actions.game.restart());
  };
  return (
    <GameModal
      open={!!winner || winner === false}
      title={title}
      description={description}
      handleClose={() => null}
      buttonAction={restartGame}
    />
  );
};

export default EndGame;
