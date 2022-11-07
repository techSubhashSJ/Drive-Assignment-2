import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NewsCard from "../news-cards/news-card";

const newsData = [
  {
    source: {},
    author: "Subhash",
    description: "Unit testing trial news 1",
    url: "www.unit-testing-trial1.com",
    urlToImage: "/no-image.com",
    publishedAt: "07-11-2022",
    content: "Hello there",
    title: "myTitle1",
  },
  {
    source: {},
    author: "Subhash SJ",
    description: "Unit testing trial news 2",
    url: "www.unit-testing-trial2.com",
    urlToImage: "/no-image.com",
    publishedAt: "07-11-2022",
    content: "Hello there",
    title: "myTitle2",
  },
];

describe("Button", () => {
  it("Props passed to Button component should work as expected", async () => {
    render(<NewsCard news={newsData[0]} />);
  });
});
