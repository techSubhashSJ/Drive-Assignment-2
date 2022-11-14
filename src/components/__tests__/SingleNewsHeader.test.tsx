import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NewsHeader from "../single-news/single-news-header";

describe("Single NewsHeader Tests", () => {
  it("Renders description of the news with passed description", async () => {
    render(
      <NewsHeader
        author="Subhash SJ"
        description="Testing NewsHeader Component"
        publishedAt="07-11-2022"
      />
    );

    const heading = screen.getByRole("heading", {
      name: /Testing NewsHeader Component/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("Renders news published at date with passed publishAt date", async () => {
    render(
      <NewsHeader
        author="Subhash SJ"
        description="Testing NewsHeader Component"
        publishedAt="07-11-2022"
      />
    );

    expect(screen.getByTestId("paragraph").textContent).toEqual(
      "Updated At: Today, 07-11-2022"
    );
  });
});
