import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

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

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home news={newsData} />);

    const heading = screen.getByRole("heading", {
      name: /India's Top Headlines/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
