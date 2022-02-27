import React, { useEffect } from "react";
import { actions, useDispatch, useSelector } from "../../../../../state/store";
import BoardSquare from "../../../../molecules/BoardSquare";

type propsType = {
  id: number;
};

const BoardSquareWrapper = ({ id }: propsType) => {
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = React.useState(false);
  const gameStatus = useSelector((state) => state.game);
  const status = gameStatus.squares[id];
  useEffect(() => {
    setIsSelected(!!status);
  }, [status]);
  const onClick = () => {
    if (status === null) {
      dispatch(actions.game.setSquare(id));
    }
  };

  return <BoardSquare disabled={isSelected} value={status} onClick={onClick} />;
};

export default BoardSquareWrapper;
