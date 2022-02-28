import { getUpdateGamePayload } from "../../../../../util";
import { OnClickType } from "./types";

export const updateGame = ({
  id,
  squares,
  currentMove,
  stateDispatcherFunction,
  playerOne,
  playerTwo,
}: OnClickType) => {
  const payload = getUpdateGamePayload(
    id,
    squares,
    currentMove,
    playerOne,
    playerTwo
  );
  stateDispatcherFunction(payload);
};
