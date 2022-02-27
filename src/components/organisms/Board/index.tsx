import React from 'react';
import BoardLines from '../../atoms/BoardLines';
import BoardSquare from '../../molecules/BoardSquare';
import { BoardStyled } from './styles';
import BoardSquareWrapper from './Wrappers/BoardSquareWrapper';

const Board = () => {
  const squares = Array.from(Array(9).keys());

  return (

    <BoardStyled>
      <BoardLines />
      {squares.map(id => <BoardSquareWrapper id={id} key={id} />)}
    </BoardStyled>

  );
}

export default Board;
