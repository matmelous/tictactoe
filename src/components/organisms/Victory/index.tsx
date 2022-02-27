import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "../../../state/store";
import { player } from "../../../types/enums";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { actions } from "../../../state";


const Victory = () => {
  const dispatch = useDispatch();
  const gameStatus = useSelector((state) => state.game);
  const [winner, setWinner] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (gameStatus.winner === player.cross) {
      setWinner(gameStatus.player1Name);
    } else if (gameStatus.winner === player.circle) {
      setWinner(gameStatus.player2Name);
    }
    setOpen(!!gameStatus.winner)
  }, [gameStatus.winner, gameStatus.player1Name, gameStatus.player2Name]);


  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={() => null}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          We have a winner !!!
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }} variant="h4">
          Congratulations <span style={{ textTransform: "capitalize" }}>{winner}</span>
        </Typography>
        <Button
          style={{ marginTop: 35 }}
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch(actions.game.restart());
          }}
        >
          Play again
        </Button>

      </Box>
    </Modal>
  );

};

export default Victory;
