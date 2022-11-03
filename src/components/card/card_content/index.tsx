import Link from "next/link";
import React from "react";
import { topHeadlinesType } from "../../../types";

const CardContent = (props: { topHeadlines: topHeadlinesType }) => {
  return (
    <>
      {props?.topHeadlines?.map((headline, index) => (
        <div
          className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
          key={index}
        >
          <article className="overflow-hidden rounded-lg shadow-lg">
            <img
              alt="Image not available"
              className="block h-52 w-full"
              src={headline?.urlToImage}
            />

            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 className="text-lg">
                <Link href={`/news/${headline?.title}`}>
                  <a
                    className="no-underline hover:underline text-black"
                    href="#"
                  >
                    {headline?.title?.slice(0, 60)} ...
                  </a>
                </Link>
              </h1>
            </header>

            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
              <p className="text-zinc-400">
                Published date: {headline?.publishedAt?.slice(0, 10)}
              </p>
            </footer>
          </article>
        </div>
      ))}
    </>
  );
};

export default CardContent;
