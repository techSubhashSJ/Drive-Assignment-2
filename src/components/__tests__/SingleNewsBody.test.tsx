import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NewsBody from "../single-news/single-news-body";

describe("NewsBody", () => {
  it("Props passed to NewsBody component should work as expected", async () => {
    render(
      <NewsBody
        content="This is trial content"
        title="myTitle"
        image="/news-body"
        url="/read-more"
      />
    );

    //image testing
    const image = screen.getByTestId("image");
    image.getAttribute("src") === "/news-body";

    expect(screen.getByTestId("paragraph1").textContent).toEqual("myTitle");

    expect(screen.getByTestId("paragraph2").textContent).toEqual(
      "T..."
    );

    const readMoreLink = screen.getByRole("link", { name: /Read More/i });
    expect(readMoreLink).toHaveAttribute("href", "/read-more");
  });
});
