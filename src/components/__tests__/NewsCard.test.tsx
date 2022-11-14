import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NewsCard from "../news-cards/news-card";

const newsData = {
  source: {},
  author: "Subhash",
  description: "Unit testing trial news 1",
  url: "www.unit-testing-trial1.com",
  urlToImage: "/no-image.com",
  publishedAt: "07-11-2022",
  content: "Hello there",
  title: "myTitle1",
};

describe("NewsCard Tests", () => {
  it("Renders a image in the card with passed source", async () => {
    render(<NewsCard news={newsData} />);

    const image = screen.getByTestId("image");
    image.getAttribute("src") === "/no-image.com";
  });

  it("Renders a title in the card", async () => {
    render(<NewsCard news={newsData} />);

    const title = screen.getByTestId("news-title");
    expect(title.textContent).toEqual("myTitle1...");
  });

  it("Renders 'published at' date", async () => {
    render(<NewsCard news={newsData} />);

    expect(screen.getByTestId("paragraph").textContent).toEqual(
      "Published date: 07-11-2022"
    );
  });
});
