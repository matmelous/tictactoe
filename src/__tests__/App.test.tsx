import React from "react";
import {
  render,
  cleanup,
  screen,
  fireEvent,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import * as language from "../localization/languageKeys";

describe("StartGame", () => {
  afterEach(cleanup);

  it("Game Starts with open modal", () => {
    render(<App />);
    expect(screen.queryByTestId("game-modal")).toBeInTheDocument();
    expect(screen.getByText(language.WELCOME_TITLE)).toBeInTheDocument();
    expect(screen.queryByRole("button")).toBeDisabled();
  });

  it("Fill both player names and start button is enabled, after clicking it the modal closes and the player one name is displayed ", () => {
    render(<App />);
    expect(screen.queryByTestId("game-modal")).toBeInTheDocument();
    const playerOne = screen
      .getByTestId("player-one-name-input")
      .querySelector("input");
    const playerTwo = screen
      .getByTestId("player-two-name-input")
      .querySelector("input");
    expect(playerOne).toBeInTheDocument();
    expect(playerTwo).toBeInTheDocument();
    if (playerOne && playerTwo) {
      fireEvent.change(playerOne, { target: { value: "Ben" } });
      fireEvent.change(playerTwo, { target: { value: "Tom" } });
    }
    expect(playerOne).toHaveValue("Ben");
    expect(playerTwo).toHaveValue("Tom");
    expect(
      within(screen.getByTestId("game-modal")).queryByRole("button")
    ).not.toBeDisabled();
    const startButton = within(screen.getByTestId("game-modal")).queryByRole(
      "button"
    );
    if (startButton) {
      fireEvent.click(startButton);
    }
    expect(screen.queryByTestId("game-modal")).not.toBeInTheDocument();
    expect(screen.getByText("Ben")).toBeInTheDocument();
  });
});

describe("Board", () => {
  afterEach(cleanup);

  it("Have 9 board squares", () => {
    render(<App />);
    expect(screen.queryAllByTestId("board-square").length).toEqual(9);
  });
});

describe("Game Status", () => {
  afterEach(cleanup);

  it("Changes current Player after each move, and after clicking restart, requests player names again ", () => {
    render(<App />);
    const squares = screen.queryAllByTestId("board-square");
    expect(screen.getByText("Ben")).toBeInTheDocument();

    fireEvent.click(squares[0]);
    expect(screen.getByText("Tom")).toBeInTheDocument();
    fireEvent.click(squares[1]);
    expect(screen.getByText("Ben")).toBeInTheDocument();
  });

  it("Show a victory for player one ", () => {
    render(<App />);
    const squares = screen.queryAllByTestId("board-square");
    fireEvent.click(squares[3]);
    fireEvent.click(squares[4]);
    fireEvent.click(squares[6]);
    const victoryText = language.VICTORY_TITLE;

    expect(screen.getByText(victoryText)).toBeInTheDocument();
    expect(screen.getByText("Ben")).toBeInTheDocument();
    const restartButton = within(screen.getByTestId("game-modal")).queryByRole(
      "button"
    );
    if (restartButton) {
      fireEvent.click(restartButton);
    }

    expect(screen.queryByTestId("game-modal")).toBeInTheDocument();
    expect(screen.getByText(language.WELCOME_TITLE)).toBeInTheDocument();
  });

  it("Show a Draw message,  ", () => {
    render(<App />);
    const squares = screen.queryAllByTestId("board-square");
    fireEvent.click(squares[0]);
    fireEvent.click(squares[1]);
    fireEvent.click(squares[2]);
    fireEvent.click(squares[3]);
    fireEvent.click(squares[4]);
    fireEvent.click(squares[5]);
    fireEvent.click(squares[7]);
    fireEvent.click(squares[8]);
    fireEvent.click(squares[6]);

    const victoryText = language.DRAW_TITLE;

    expect(screen.getByText(victoryText)).toBeInTheDocument();
  });
});
