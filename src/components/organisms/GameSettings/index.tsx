import React, { useState, useCallback, useEffect } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField, Grid } from "@mui/material";
import { useDispatch, useSelector } from "../../../state/store";
import { actions } from "../../../state";

export const GameSettings = () => {
  const dispatch = useDispatch();
  const gameStatus = useSelector((state) => state.game);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (gameStatus.player1Name === "" || gameStatus.player2Name === "") {
      setOpen(true);
    }
  }, [gameStatus.player1Name, gameStatus.player2Name]);


  const onClose = useCallback(() => {
    setOpen(false);
  }, []);



  const handleChangePlayer1Name = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(actions.game.setPlayer1Name(event.target.value));
  };

  const handleChangePlayer2Name = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(actions.game.setPlayer2Name(event.target.value));
  };

  const canSubmit = () => {
    return gameStatus.player1Name !== "" && gameStatus.player2Name !== "";
  };

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
  const handleClose = () => {
    canSubmit() && onClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Welcome to Tic Tac Toe
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Please set the player names below:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="player1"
              onChange={handleChangePlayer1Name}
              label="Player 1 Name"
              variant="standard"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="player2"
              onChange={handleChangePlayer2Name}
              label="Player 2 Name"
              variant="standard"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              disabled={!canSubmit()}
              onClick={handleClose}
            >
              Start
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};
