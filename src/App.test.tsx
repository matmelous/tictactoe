import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders next title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Next move:/i);
  expect(linkElement).toBeInTheDocument();
});
