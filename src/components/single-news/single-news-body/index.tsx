import React from "react";

const NewsBody = (props: {
  content: string | null;
  title: string | null;
  image: string;
  url: string;
}) => {
  return (
    <div className="flex flex-col">
      <img
        src={props?.image}
        alt="News image is not available"
        className="rounded"
        data-testid="image"
      />
      <p className=" mt-2" data-testid="paragraph1">{props?.title}</p>
      <p className="mt-7" data-testid="paragraph2">
        {props?.content?.slice(0, props?.content?.length - 20)}...
      </p>
      <a
        href={props?.url}
        target="_blank"
        rel="noreferrer"
        className="text-center w-32 py-2 px-4 bg-blue-700 text-white my-5 rounded-full"
      >
        Read More
      </a>
    </div>
  );
};

export default NewsBody;
