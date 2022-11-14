import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SourceCard from "../source-cards/source-card";

const sourceData = {
  id: "1",
  name: "The Hindu",
  description: "Unit testing with The Hindu",
  url: "/the-hindu",
  category: "general",
  language: "English",
  country: "India",
};

describe("SourceCard Tests", () => {
  it("Renders name of the source with passed name", async () => {
    render(<SourceCard source={sourceData} />);

    const sourceName = screen.getByRole("heading", { name: "The Hindu" });
    expect(sourceName).toBeInTheDocument();
  });

  it("Renders description of the source with passed description", async () => {
    render(<SourceCard source={sourceData} />);

    expect(screen.getByTestId("paragraph").textContent).toEqual(
      "Unit testing with The Hindu..."
    );
  });

  it("Renders a link with 'Read More' label and passed href", async () => {
    render(<SourceCard source={sourceData} />);

    const readMoreLink = screen.getByRole("link", { name: /Read More/i });
    expect(readMoreLink).toHaveAttribute("href", "/the-hindu");
  });
});
