import React from "react";
import { render, cleanup } from "@testing-library/react";
import BoardLines from "../index";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<BoardLines />);
  expect(asFragment()).toMatchSnapshot();
});