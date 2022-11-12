import React from "react";

const NewsHeader = (props: {
  author: string | null;
  description: string;
  publishedAt: string | null;
}) => {
  return (
    <div className="flex flex-col">
      <h1
        className="font-serif font-bold text-2xl"
        dangerouslySetInnerHTML={{ __html: props?.description }}
      ></h1>
      <p className="my-3 text-zinc-400" data-testid="paragraph">
        Updated At: Today, {props?.publishedAt}
      </p>
    </div>
  );
};

export default NewsHeader;
