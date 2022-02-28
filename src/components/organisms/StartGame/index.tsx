import React, { useState, useCallback, useEffect } from "react";

import { TextField, Grid } from "@mui/material";
import { actions, useDispatch, useSelector } from "../../../state/store";
import * as language from "../../../localization/languageKeys";
import GameModal from "../../molecules/GameModal";

export const StartGame = () => {
  const dispatch = useDispatch();
  const playerOne = useSelector((state) => state.game.playerOne);
  const playerTwo = useSelector((state) => state.game.playerTwo);
  const [open, setOpen] = useState(false);
  const needToFillPlayerNames = playerOne === "" || playerTwo === "";

  useEffect(() => {
    if (needToFillPlayerNames) setOpen(true);
  }, [needToFillPlayerNames]);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleChangePlayerOne = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(actions.game.setPlayerOne(event.target.value));
  };

  const handleChangePlayerTwo = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(actions.game.setPlayerTwo(event.target.value));
  };

  const handleClose = () => {
    if (!needToFillPlayerNames) onClose();
  };
  const title = language.WELCOME_TITLE;
  const description = language.WELCOME_DESCRIPTION;
  const renderBody = () => {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="player1"
            onChange={handleChangePlayerOne}
            label="Player 1 Name"
            variant="standard"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="player2"
            onChange={handleChangePlayerTwo}
            label="Player 2 Name"
            variant="standard"
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    );
  };
  return (
    <GameModal
      open={open}
      title={title}
      description={description}
      handleClose={handleClose}
      buttonAction={handleClose}
      buttonDisabled={needToFillPlayerNames}
      buttonText={language.WELCOME_BUTTON}
      body={renderBody()}
    />
  );
};
