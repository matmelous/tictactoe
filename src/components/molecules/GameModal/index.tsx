import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { modalBoxStyle } from "./styles";
import * as language from "../../../localization/languageKeys";

type PropsType = {
  open: boolean;
  title: string;
  description: string | React.ReactNode;
  body?: React.ReactNode;
  buttonAction: () => void;
  handleClose: () => void;
  buttonDisabled?: boolean;
  buttonText?: string;
};

const GameModal = ({
  open,
  title,
  description,
  buttonAction,
  body,
  handleClose,
  buttonDisabled,
  buttonText,
}: PropsType) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      data-testid="game-modal"
    >
      <Box sx={modalBoxStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }} variant="h4">
          {description}
        </Typography>
        {body}
        <Button
          style={{ marginTop: 35 }}
          variant="contained"
          color="primary"
          onClick={buttonAction}
          disabled={buttonDisabled}
        >
          {buttonText}
        </Button>
      </Box>
    </Modal>
  );
};

GameModal.defaultProps = {
  body: null,
  buttonDisabled: false,
  buttonText: language.PLAY_AGAIN,
};

export default GameModal;
