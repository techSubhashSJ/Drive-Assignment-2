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

describe("NewsCard", () => {
  it("Props passed to NewsCard component should work as expected", async () => {
    render(<NewsCard news={newsData} />);

    //image testing
    const image = screen.getByTestId("image");
    image.getAttribute("src") === "/no-image.com";

    //title testing
    const title = screen.getByTestId("news-title");
    expect(title.textContent).toEqual("myTitle1...");

    //Published date testing
    expect(screen.getByTestId("paragraph").textContent).toEqual(
      "Published date: 07-11-2022"
    );
  });
});
