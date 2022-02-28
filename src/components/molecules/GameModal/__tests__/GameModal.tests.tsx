import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import GameModal from "../index";

describe("GameModal", () => {
  afterEach(cleanup);

  it("renders open modal", () => {
    const { asFragment } = render(
      <GameModal
        open={true}
        title="test title"
        description="test description"
        buttonAction={() => null}
        handleClose={() => null}
      />
    );
    expect(asFragment()).toMatchSnapshot();
    expect(screen.queryByTestId("game-modal")).toBeInTheDocument();
    expect(screen.queryByText("test title")).toBeInTheDocument();
    expect(screen.queryByText("test description")).toBeInTheDocument();
  });

  it("renders closed modal", () => {
    render(
      <GameModal
        open={false}
        title="test title"
        description="test description"
        buttonAction={() => null}
        handleClose={() => null}
      />
    );
    expect(screen.queryByTestId("game-modal")).not.toBeTruthy();
    expect(screen.queryByText("test title")).not.toBeInTheDocument();
    expect(screen.queryByText("test description")).not.toBeInTheDocument();
  });

  it("renders disabled button", () => {
    render(
      <GameModal
        open={true}
        title="test title"
        description="test description"
        buttonAction={() => null}
        handleClose={() => null}
        buttonDisabled={true}
        buttonText="start"
      />
    );
    expect(screen.queryByRole("button")).toBeDisabled();
    expect(screen.queryByText("start")).toBeInTheDocument();
    expect(screen.queryByText("test title")).toBeInTheDocument();
    expect(screen.queryByText("test description")).toBeInTheDocument();
  });

  it("renders enabled button and clicks", () => {
    const buttonAction = jest.fn();

    render(
      <GameModal
        open={true}
        title="test title"
        description="test description"
        buttonAction={buttonAction}
        handleClose={() => null}
        buttonDisabled={false}
        buttonText="start"
      />
    );
    expect(screen.queryByRole("button")).not.toBeDisabled();
    expect(screen.queryByText("start")).toBeInTheDocument();
    expect(screen.queryByText("test title")).toBeInTheDocument();
    expect(screen.queryByText("test description")).toBeInTheDocument();
    screen.getByRole("button").click();
    expect(buttonAction).toHaveBeenCalledTimes(1);
  });
});
