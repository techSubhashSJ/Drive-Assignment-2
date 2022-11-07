import React from "react";
import { newsType } from "../../types";
import NewsCard from "./news-card/index";

const NewsCards = (props: { news: newsType }) => {
  return (
    <div className="my-8 mx-[5%] px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {props?.news?.map((oneNews, index) => (
          <NewsCard news={oneNews} key={index} />
        ))}
      </div>
    </div>
  );
};

export default NewsCards;
