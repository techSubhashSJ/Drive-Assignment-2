/**
 * @author Subhash Jadhav
 * @description This component is used to display news content on the card
 * @params {array} array of news object
 */

import Link from "next/link";
import React from "react";
import { newsType } from "../../../types";

const Cards = (props: { news: newsType }) => {
  return (
    <>
      {props?.news?.map((oneNews, index) => (
        <div
          className="my-1 px-1 mt-4 w-full  md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
          key={index}
        >
          <article className="overflow-hidden rounded-lg shadow-lg">
            <img
              alt="Image not available"
              className="block h-52 w-full"
              src={oneNews?.urlToImage}
            />

            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 className="text-lg">
                <Link href={`/news/${oneNews?.title}`}>
                  <a className="no-underline hover:underline text-black font-mono">
                    {oneNews?.title?.slice(0, 50)}...
                  </a>
                </Link>
              </h1>
            </header>

            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
              <p className="text-zinc-400">
                Published date: {oneNews?.publishedAt?.slice(0, 10)}
              </p>
            </footer>
          </article>
        </div>
      ))}
    </>
  );
};

export default Cards;
