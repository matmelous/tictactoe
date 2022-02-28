import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import Cross from "../index";

describe("Cross", () => {
  afterEach(cleanup);

  it("renders", () => {
    const { asFragment } = render(<Cross />);
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByTestId("cross")).toBeInTheDocument();
  });
});
