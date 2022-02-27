import React from 'react';
import { actions, useDispatch, useSelector } from '../../../../../state/store';
import BoardSquare from '../../../../molecules/BoardSquare';


type propsType = {
  id: number;
}

const BoardSquareWrapper = ({ id }: propsType) => {
  const dispatch = useDispatch();
  const gameStatus = useSelector(state => state.game);
  const status = gameStatus.squares[id];
  const onClick = () => {
    dispatch(actions.game.setSquare(id));
  };

  return (<BoardSquare value={status} onClick={onClick} />)
}

export default BoardSquareWrapper;
