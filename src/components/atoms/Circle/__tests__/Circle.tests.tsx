import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import Circle from "../index";

describe("Circle", () => {
  afterEach(cleanup);

  it("renders", () => {
    const { asFragment } = render(<Circle />);
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByTestId("circle")).toBeInTheDocument();
  });
});
