import { MoveEnum } from "../types/enums";
import { MoveType, SquaresType } from "../types/types";

const checkIfThereIsAWinner = (squares: SquaresType) => {
  const victoryPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < victoryPositions.length; i++) {
    const [positionOne, positionTwo, positionThree] = victoryPositions[i];
    if (
      squares[positionOne] &&
      squares[positionOne] === squares[positionTwo] &&
      squares[positionOne] === squares[positionThree]
    ) {
      return squares[positionOne];
    }
  }

  return null;
};

const checkIfThereIsADraw = (squares: SquaresType) => {
  return Object.values(squares).filter((value) => !!value).length === 9;
};

const getNextMove = (currentMove: MoveEnum) => {
  return currentMove === MoveEnum.cross ? MoveEnum.circle : MoveEnum.cross;
};
const getWinnerName = (
  winnerMove: MoveEnum | null,
  playerOne: string,
  playerTwo: string
) => {
  if (winnerMove === null) return winnerMove;

  return winnerMove === MoveEnum.cross ? playerOne : playerTwo;
};

export const getUpdateGamePayload = (
  id: number,
  actualSquares: SquaresType,
  currentMove: MoveType,
  playerOne: string,
  playerTwo: string
) => {
  const squares = { ...actualSquares };
  squares[id] = currentMove;
  const winnerMove = checkIfThereIsAWinner(squares);
  const nextMove = getNextMove(currentMove);
  const winner =
    getWinnerName(winnerMove, playerOne, playerTwo) ||
    (checkIfThereIsADraw(squares) ? false : null);
  const payload = {
    squares,
    currentMove: nextMove,
    winner,
  };
  return payload;
};
