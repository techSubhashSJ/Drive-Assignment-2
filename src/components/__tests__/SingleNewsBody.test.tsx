import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NewsBody from "../single-news/single-news-body";

describe("Single NewsBody Tests", () => {
  it("Renders a image with passed src", async () => {
    render(
      <NewsBody
        content="This is trial content"
        title="myTitle"
        image="/news-body"
        url="/read-more"
      />
    );

    const image = screen.getByTestId("image");
    image.getAttribute("src") === "/news-body";
  });

  it("Renders a title with passed title text", async () => {
    render(
      <NewsBody
        content="This is trial content"
        title="myTitle"
        image="/news-body"
        url="/read-more"
      />
    );

    expect(screen.getByTestId("paragraph1").textContent).toEqual("myTitle");
  });

  it("Renders sliced content of the news body with passed content", async () => {
    render(
      <NewsBody
        content="This is trial content"
        title="myTitle"
        image="/news-body"
        url="/read-more"
      />
    );

    expect(screen.getByTestId("paragraph2").textContent).toEqual("T...");
  });

  it("Renders a link with 'Read More' label and provided href", async () => {
    render(
      <NewsBody
        content="This is trial content"
        title="myTitle"
        image="/news-body"
        url="/read-more"
      />
    );

    const readMoreLink = screen.getByRole("link", { name: /Read More/i });
    expect(readMoreLink).toHaveAttribute("href", "/read-more");
  });
});
