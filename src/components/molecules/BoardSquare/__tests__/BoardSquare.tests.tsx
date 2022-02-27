import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import BoardSquare from "../index";
import { player } from "../../../../types/enums";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<BoardSquare value={null} disabled={false} />);
  expect(asFragment()).toMatchSnapshot();
  expect(screen.getByRole('button')).not.toBeDisabled();
});

it("renders with circle disabled", () => {
  render(<BoardSquare value={player.circle} disabled={true} />);
  expect(screen.getByRole('button')).toBeDisabled();
  expect(screen.getByRole('circle')).toBeInTheDocument();
});

it("renders with cross disabled", () => {
  render(<BoardSquare value={player.cross} disabled={true} />);
  expect(screen.getByRole('button')).toBeDisabled();
  expect(screen.getByRole('cross')).toBeInTheDocument();
});
