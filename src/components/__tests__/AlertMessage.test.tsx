import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AlertMessage from "../alert-message";

describe("Alert Messages", () => {
  it("Error should be rendered on the screen if any", async () => {
    render(<AlertMessage error="Internal Server Problem" warning={null} />);

    expect(screen.getByRole("heading").textContent).toEqual(
      "Internal Server Problem"
    );
  });

  it("Warning should be rendered on the screen if any", async () => {
    render(<AlertMessage error={null} warning="Please select a make" />);

    expect(screen.getByRole("heading").textContent).toEqual(
      "Please select a make"
    );
  });
});
