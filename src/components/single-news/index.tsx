import React from "react";
import { topHeadlinesType } from "../../types";
import NewsBody from "./single-news-body";
import NewsHeader from "./single-news-header";

const SingleNews = (props: { news: topHeadlinesType }) => {
  return (
    <div className="mx-[10%] mt-5">
      {props?.news?.length === 0 ? (
        <>
          <div className="flex justify-center">
            <h1 className="text-4xl">No Result Found</h1>
          </div>
        </>
      ) : (
        <>
          <NewsHeader
            author={props?.news[0]?.author}
            description={props?.news[0]?.description}
            publishedAt={props?.news[0]?.publishedAt}
          />
          <NewsBody
            content={props?.news[0]?.content}
            title={props?.news[0]?.title}
            image={props?.news[0]?.urlToImage}
            url={props?.news[0]?.url}
          />
        </>
      )}
    </div>
  );
};

export default SingleNews;
