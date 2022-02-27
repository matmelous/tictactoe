import React, { useEffect, useState, useCallback } from 'react';
import { player } from '../../../types/enums';
import Circle from '../../atoms/Circle';
import Cross from '../../atoms/Cross';
import { BoardSquareStyled } from './styles';

type propsType = {
  value: string | null,
  onClick?: () => void
}

const BoardSquare = ({ value, onClick }: propsType) => {
  const [children, setChildren] = useState<null | React.ReactNode>(null);
  const checkValue = useCallback((value: string | null) => {
    switch (value) {
      case null:
        return null;
      case player.cross:
        return <Cross />
      case player.circle:
        return <Circle />
      default:
        return null;
    }
  }, []);

  useEffect(() => {
    setChildren(checkValue(value));
  }, [value, checkValue]);

  return (
    <BoardSquareStyled onClick={onClick}>
      {children}
    </BoardSquareStyled>
  );
}

export default BoardSquare;
