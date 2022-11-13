import React from "react";
import { source } from "../../types/top-sources";
import SourceCard from "./source-card";

const SourceCards = (props: { sources: source }) => {
  return (
    <div className="flex justify-center">
      <div className="my-8 mx-[5%] px-4 max-w-screen-xl md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {props.sources?.length === 0 ? (
            <h1 className="text-2xl">No Result Found</h1>
          ) : (
            props?.sources.map((source, index) => (
              <SourceCard source={source} key={index} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SourceCards;
