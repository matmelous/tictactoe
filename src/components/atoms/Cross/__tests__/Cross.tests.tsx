import React from "react";
import { render, cleanup } from "@testing-library/react";
import Cross from "../index";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<Cross />);
  expect(asFragment()).toMatchSnapshot();
});