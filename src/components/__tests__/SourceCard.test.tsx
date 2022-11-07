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

describe("SourceCard", () => {
  it("Props passed to SourceCard component should work as expected", async () => {
    render(<SourceCard source={sourceData} />);

    const sourceName = screen.getByRole("heading", { name: "The Hindu" });
    expect(sourceName).toBeInTheDocument();

    expect(screen.getByTestId("paragraph").textContent).toEqual(
      "Unit testing with The Hindu..."
    );

    const readMoreLink = screen.getByRole("link", { name: /Read More/i });
    expect(readMoreLink).toHaveAttribute("href", "/the-hindu");
  });
});
