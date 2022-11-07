import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../button";

describe("Button", () => {
  it("Props passed to Button component should work as expected", async () => {
    render(<Button label="Click Me" classes="myClass" onclick={() => {}} />);

    const clickMeButton = screen.getByRole("button", { name: "Click Me" });

    expect(clickMeButton).toBeInTheDocument();

    //Checking class
    expect(clickMeButton).toHaveClass("myClass");

    //Checking onClick
    clickMeButton.getAttribute("onClick") === "() => {}";
  });
});
