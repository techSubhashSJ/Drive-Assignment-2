import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NewsHeader from "../single-news/single-news-header";

describe("NewsHeader", () => {
  it("Props passed to NewsHeader component should work as expected", async () => {
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

    //Published date testing
    expect(screen.getByTestId("paragraph").textContent).toEqual(
      "Updated At: Today, 07-11-2022"
    );
  });
});
