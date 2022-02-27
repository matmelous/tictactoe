import React from 'react';
import { useDispatch, useSelector } from '../../state/store';
import Board from '../../components/organisms/Board';
import GameStatus from '../../components/organisms/GameStatus';
import { Wrapper } from './styles';

function Game() {
  return (
    <Wrapper>
      <GameStatus />
      <Board />
    </Wrapper>
  );
}

export default Game;
