import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import BoardSquare from "../index";
import { MoveEnum } from "../../../../types/enums";

describe("BoardSquare", () => {
  afterEach(cleanup);

  it("renders", () => {
    const { asFragment } = render(
      <BoardSquare value={null} disabled={false} />
    );
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByRole("button")).not.toBeDisabled();
    expect(screen.getByTestId("board-square")).toBeInTheDocument();
  });

  it("renders with circle disabled", () => {
    render(<BoardSquare value={MoveEnum.circle} disabled={true} />);
    expect(screen.getByRole("button")).toBeDisabled();
    expect(screen.getByTestId("circle")).toBeInTheDocument();
  });

  it("renders with cross disabled", () => {
    render(<BoardSquare value={MoveEnum.cross} disabled={true} />);
    expect(screen.getByRole("button")).toBeDisabled();
    expect(screen.getByTestId("cross")).toBeInTheDocument();
  });
});
