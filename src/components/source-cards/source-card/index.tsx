import React from "react";
import { singleSource } from "../../../types/top-sources";

const SourceCard = (props: { source: singleSource }) => {
  const { source } = props;

  return (
    <>
      <div className="my-4 px-1 w-full  md:w-1/2 md:my-4 md:px-4 xl:w-1/3">
        <article className="overflow-hidden rounded-lg shadow-lg m-1">
          <header className="flex items-center leading-tight p-4">
            <h1 className="text-2xl font-bold font-serif">{source?.name}</h1>
          </header>

          <footer className="flex flex-col justify-between py-2 px-4">
            <p className="text-zinc-500" data-testid="paragraph">
              {source?.description.slice(0, 100)}...
            </p>

            <a
              href={source?.url}
              target="_blank"
              rel="noreferrer"
              className="text-center w-28 py-1 px-4 my-4 bg-blue-700 text-white mt-8 rounded-full"
            >
              Read More
            </a>
          </footer>
        </article>
      </div>
    </>
  );
};

export default SourceCard;
