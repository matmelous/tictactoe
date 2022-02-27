import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "../../../state/store";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { actions } from "../../../state";


const Draw = () => {
  const dispatch = useDispatch();
  const gameStatus = useSelector((state) => state.game);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(gameStatus.winner === false);
  }, [gameStatus.winner]);


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
      onClose={() => false}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          We have a Draw !!!
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }} variant="h4">
          No one wins...
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

export default Draw;
