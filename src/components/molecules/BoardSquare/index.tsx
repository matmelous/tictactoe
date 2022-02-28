import React from "react";
import { MoveEnum } from "../../../types/enums";
import Circle from "../../atoms/Circle";
import Cross from "../../atoms/Cross";
import { BoardSquareStyled } from "./styles";

type PropsType = {
  value: string | null;
  onClick?: () => void;
  disabled: boolean;
};

const BoardSquare = ({ disabled, value, onClick }: PropsType) => {
  return (
    <BoardSquareStyled
      disabled={disabled}
      onClick={onClick}
      data-testid="board-square"
    >
      {value && (value === MoveEnum.cross ? <Cross /> : <Circle />)}
    </BoardSquareStyled>
  );
};

export default BoardSquare;
