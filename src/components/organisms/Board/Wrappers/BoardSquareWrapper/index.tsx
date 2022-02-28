import React from "react";
import { UpdateGameType } from "../../../../../state/game/types";
import { actions, useDispatch, useSelector } from "../../../../../state/store";
import BoardSquare from "../../../../molecules/BoardSquare";
import { updateGame } from "./pureFunctions";
import { PropsType } from "./types";

const BoardSquareWrapper = ({ id }: PropsType) => {
  const dispatch = useDispatch();
  const squares = useSelector((state) => state.game.squares);
  const currentMove = useSelector((state) => state.game.currentMove);
  const playerOne = useSelector((state) => state.game.playerOne);
  const playerTwo = useSelector((state) => state.game.playerTwo);
  const squareValue = squares[id];
  const stateDispatcherFunction = (payload: UpdateGameType) => {
    dispatch(actions.game.updateGame(payload));
  };
  const handleClick = () => {
    updateGame({
      id,
      squares,
      currentMove,
      stateDispatcherFunction,
      playerOne,
      playerTwo,
    });
  };

  return (
    <BoardSquare
      disabled={!!squareValue}
      value={squareValue}
      onClick={handleClick}
    />
  );
};

export default BoardSquareWrapper;
