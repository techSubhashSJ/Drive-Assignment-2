import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../button";

describe("Button Tests", () => {
  it("Renders a button with passed label", async () => {
    render(<Button label="Click Me" classes="myClass" onclick={() => {}} />);

    const clickMeButton = screen.getByRole("button", { name: "Click Me" });
    expect(clickMeButton).toBeInTheDocument();
  });

  it("Renders a button with passed classes", async () => {
    render(<Button label="Click Me" classes="myClass" onclick={() => {}} />);

    const clickMeButton = screen.getByRole("button", { name: "Click Me" });
    expect(clickMeButton).toHaveClass("myClass");
  });

  it("Renders a button with passed onClick function", async () => {
    render(<Button label="Click Me" classes="myClass" onclick={() => {}} />);

    const clickMeButton = screen.getByRole("button", { name: "Click Me" });
    clickMeButton.getAttribute("onClick") === "() => {}";
  });
});
