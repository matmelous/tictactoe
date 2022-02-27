import React from "react";
import { render, cleanup } from "@testing-library/react";
import Circle from "../index";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<Circle />);
  expect(asFragment()).toMatchSnapshot();
});