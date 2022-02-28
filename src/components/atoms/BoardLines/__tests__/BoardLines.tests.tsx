import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import BoardLines from "../index";

describe("BoardLines", () => {
  afterEach(cleanup);

  it("renders", () => {
    const { asFragment } = render(<BoardLines />);
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByTestId("board-lines")).toBeInTheDocument();
  });
});
